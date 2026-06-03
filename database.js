const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bcrypt = require('bcryptjs');

const dbPath = path.join(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath);

function initDatabase() {
  db.serialize(() => {
    console.log('Initializing database schema...');

    // 1. Users Table
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      )
    `);

    // 2. Jobs Table
    db.run(`
      CREATE TABLE IF NOT EXISTS jobs (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        company TEXT NOT NULL,
        location TEXT,
        salary TEXT,
        url TEXT,
        source TEXT,
        deadline TEXT,
        notes TEXT,
        stage TEXT NOT NULL,
        user_id INTEGER,
        created_at TEXT,
        FOREIGN KEY(user_id) REFERENCES users(id)
      )
    `);

    // 3. LinkedIn Checklist Table
    db.run(`
      CREATE TABLE IF NOT EXISTS linkedin_checklist (
        item_id TEXT NOT NULL,
        user_id INTEGER NOT NULL,
        done INTEGER DEFAULT 0,
        PRIMARY KEY (item_id, user_id),
        FOREIGN KEY(user_id) REFERENCES users(id)
      )
    `);

    // 4. Action Plan Table
    db.run(`
      CREATE TABLE IF NOT EXISTS action_plan (
        task_key TEXT NOT NULL,
        user_id INTEGER NOT NULL,
        done INTEGER DEFAULT 0,
        PRIMARY KEY (task_key, user_id),
        FOREIGN KEY(user_id) REFERENCES users(id)
      )
    `);

    console.log('Database tables verified/created successfully.');

    // Seed default user
    const defaultUser = 'rahat';
    const defaultPassword = 'careerhub2026';

    db.get('SELECT * FROM users WHERE username = ?', [defaultUser], (err, user) => {
      if (err) {
        console.error('Error checking users:', err);
        return;
      }

      if (!user) {
        const hash = bcrypt.hashSync(defaultPassword, 10);
        db.run('INSERT INTO users (username, password) VALUES (?, ?)', [defaultUser, hash], function(err) {
          if (err) {
            console.error('Error seeding default user:', err);
          } else {
            console.log(`Seeded default user '${defaultUser}' with ID ${this.lastID}`);
            seedInitialData(this.lastID);
          }
        });
      } else {
        console.log(`Default user '${defaultUser}' already exists.`);
      }
    });
  });
}

function seedInitialData(userId) {
  // Pre-seed some default jobs to make the DB look realistic on launch
  const initialJobs = [
    {
      id: 'seed-1',
      title: 'Assistant Merchandiser/Merchandiser (NEXT, OTCF, C&A, GUESS)',
      company: 'NextJobz Listing',
      location: 'Narayanganj',
      salary: '',
      url: 'https://dhakacareers.com/jobs/assistant-merchandiser-merchandiser-nextotcfcaguess-narayanganj-nextjobz/',
      source: 'DhakaCareers',
      deadline: '2026-06-30',
      notes: 'Match level: perfect. Experience: Entry.',
      stage: 'applied',
      user_id: userId,
      created_at: new Date().toISOString()
    },
    {
      id: 'seed-2',
      title: 'Merchandiser/Senior Merchandiser',
      company: 'DEKKO Legacy Group',
      location: 'Dhaka',
      salary: '65,000 - 80,000 BDT',
      url: 'https://dhakacareers.com/jobs/merchandisersenior-merchandiser-dhaka-dekko-legacy-group/',
      source: 'DhakaCareers',
      deadline: '2026-07-05',
      notes: 'Match level: target. FlexPLM required.',
      stage: 'saved',
      user_id: userId,
      created_at: new Date().toISOString()
    }
  ];

  const stmt = db.prepare(`
    INSERT INTO jobs (id, title, company, location, salary, url, source, deadline, notes, stage, user_id, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  initialJobs.forEach(job => {
    stmt.run([
      job.id, job.title, job.company, job.location, job.salary,
      job.url, job.source, job.deadline, job.notes, job.stage, job.user_id, job.created_at
    ], (err) => {
      if (err) console.error('Error seeding job:', err);
    });
  });

  stmt.finalize();
  console.log('Seeded initial job tracking data.');
}

if (require.main === module) {
  initDatabase();
}

module.exports = {
  db,
  initDatabase
};
