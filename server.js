const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const path = require('path');
const { db, initDatabase } = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = 'rahat_secret_2026_career_launch_system';

// Ensure database is initialized
initDatabase();

app.use(cors());
app.use(express.json());

// Serve static frontend files (SPA)
app.use(express.static(path.join(__dirname)));

// ── AUTHENTICATION MIDDLEWARE ────────────────────────────────────────────────
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required.' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token.' });
    }
    req.user = user;
    next();
  });
}

// ── AUTH ENDPOINTS ───────────────────────────────────────────────────────────
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Database error.' });
    }

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '7d' });
    res.json({
      token,
      user: { id: user.id, username: user.username }
    });
  });
});

app.get('/api/auth/me', authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

// ── JOBS CRUD ENDPOINTS ───────────────────────────────────────────────────────
app.get('/api/jobs', authenticateToken, (req, res) => {
  db.all('SELECT * FROM jobs WHERE user_id = ? ORDER BY created_at DESC', [req.user.id], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error.' });
    }
    res.json(rows);
  });
});

app.post('/api/jobs', authenticateToken, (req, res) => {
  const { id, title, company, location, salary, url, source, deadline, notes, stage } = req.body;

  if (!id || !title || !company || !stage) {
    return res.status(400).json({ error: 'Missing required job fields.' });
  }

  const query = `
    INSERT INTO jobs (id, title, company, location, salary, url, source, deadline, notes, stage, user_id, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(query, [
    id, title, company, location || '', salary || '', url || '',
    source || '', deadline || '', notes || '', stage, req.user.id, new Date().toISOString()
  ], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Database error inserting job.' });
    }
    res.status(201).json({ message: 'Job saved successfully.', id });
  });
});

app.put('/api/jobs/:id', authenticateToken, (req, res) => {
  const { title, company, location, salary, url, source, deadline, notes, stage } = req.body;
  const jobId = req.params.id;

  const query = `
    UPDATE jobs
    SET title = COALESCE(?, title),
        company = COALESCE(?, company),
        location = COALESCE(?, location),
        salary = COALESCE(?, salary),
        url = COALESCE(?, url),
        source = COALESCE(?, source),
        deadline = COALESCE(?, deadline),
        notes = COALESCE(?, notes),
        stage = COALESCE(?, stage)
    WHERE id = ? AND user_id = ?
  `;

  db.run(query, [title, company, location, salary, url, source, deadline, notes, stage, jobId, req.user.id], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Database error updating job.' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Job not found or access denied.' });
    }
    res.json({ message: 'Job updated successfully.' });
  });
});

app.delete('/api/jobs/:id', authenticateToken, (req, res) => {
  const jobId = req.params.id;

  db.run('DELETE FROM jobs WHERE id = ? AND user_id = ?', [jobId, req.user.id], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Database error deleting job.' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Job not found or access denied.' });
    }
    res.json({ message: 'Job deleted successfully.' });
  });
});

// ── LINKEDIN CHECKLIST ENDPOINTS ─────────────────────────────────────────────
app.get('/api/linkedin', authenticateToken, (req, res) => {
  db.all('SELECT item_id, done FROM linkedin_checklist WHERE user_id = ?', [req.user.id], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error.' });
    }
    // Convert to a dictionary for simple front-end consumption
    const state = {};
    rows.forEach(row => {
      state[row.item_id] = row.done === 1;
    });
    res.json(state);
  });
});

app.post('/api/linkedin/toggle', authenticateToken, (req, res) => {
  const { itemId, done } = req.body;

  if (!itemId) {
    return res.status(400).json({ error: 'Item ID is required.' });
  }

  const doneVal = done ? 1 : 0;
  const query = `
    INSERT INTO linkedin_checklist (item_id, user_id, done)
    VALUES (?, ?, ?)
    ON CONFLICT(item_id, user_id) DO UPDATE SET done = excluded.done
  `;

  db.run(query, [itemId, req.user.id, doneVal], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Database error toggling checklist item.' });
    }
    res.json({ message: 'Checked state saved.', itemId, done: doneVal === 1 });
  });
});

// ── ACTION PLAN ENDPOINTS ─────────────────────────────────────────────────────
app.get('/api/actionplan', authenticateToken, (req, res) => {
  db.all('SELECT task_key, done FROM action_plan WHERE user_id = ?', [req.user.id], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error.' });
    }
    const state = {};
    rows.forEach(row => {
      state[row.task_key] = row.done === 1;
    });
    res.json(state);
  });
});

app.post('/api/actionplan/toggle', authenticateToken, (req, res) => {
  const { taskKey, done } = req.body;

  if (!taskKey) {
    return res.status(400).json({ error: 'Task Key is required.' });
  }

  const doneVal = done ? 1 : 0;
  const query = `
    INSERT INTO action_plan (task_key, user_id, done)
    VALUES (?, ?, ?)
    ON CONFLICT(task_key, user_id) DO UPDATE SET done = excluded.done
  `;

  db.run(query, [taskKey, req.user.id, doneVal], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Database error toggling action plan task.' });
    }
    res.json({ message: 'Action task state saved.', taskKey, done: doneVal === 1 });
  });
});

// ── DATABASE RESET ENDPOINT ──────────────────────────────────────────────────
app.post('/api/db/reset', authenticateToken, (req, res) => {
  db.serialize(() => {
    db.run('DROP TABLE IF EXISTS jobs');
    db.run('DROP TABLE IF EXISTS linkedin_checklist');
    db.run('DROP TABLE IF EXISTS action_plan');
    initDatabase();
    res.json({ success: true, message: 'Database schema reset and re-seeded successfully.' });
  });
});

// ── DATABASE CONSOLE SQL EXECUTOR ─────────────────────────────────────────────
app.post('/api/db/query', authenticateToken, (req, res) => {
  const { sql } = req.body;

  if (!sql) {
    return res.status(400).json({ error: 'SQL query text is required.' });
  }

  // Basic read-only or administrative safety check (optional, but good for demo output)
  const queryType = sql.trim().split(' ')[0].toUpperCase();

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.json({ error: err.message, success: false });
    }
    res.json({
      success: true,
      queryType,
      rowCount: rows.length,
      rows: rows
    });
  });
});

// Schema helper endpoint for Database Console visualization
app.get('/api/db/schema', authenticateToken, (req, res) => {
  const tables = ['users', 'jobs', 'linkedin_checklist', 'action_plan'];
  const schemaInfo = {};

  let completed = 0;
  tables.forEach(table => {
    db.all(`PRAGMA table_info(${table})`, [], (err, info) => {
      if (!err) {
        db.get(`SELECT COUNT(*) as count FROM ${table}`, [], (err2, countRow) => {
          schemaInfo[table] = {
            columns: info,
            count: countRow ? countRow.count : 0
          };
          completed++;
          if (completed === tables.length) {
            res.json(schemaInfo);
          }
        });
      } else {
        completed++;
        if (completed === tables.length) {
          res.json(schemaInfo);
        }
      }
    });
  });
});

// ── CATCH-ALL ROUTE ──────────────────────────────────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 Server running locally on http://localhost:${PORT}`);
  console.log(`🔐 Credentials: rahat / careerhub2026`);
  console.log(`=======================================================`);
});
