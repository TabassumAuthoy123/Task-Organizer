/* ═══════════════════════════════════════════════════════════════════════════════
 *  app.js — Rahat Career Hub Interactive Logic
 *  All localStorage, Kanban drag-drop, checklist, search/filter, rendering
 * ═══════════════════════════════════════════════════════════════════════════════ */

// ── Storage Keys ────────────────────────────────────────────────────────────
const STORAGE = {
  TRACKED_JOBS: 'rahat_tracked_jobs',
  LINKEDIN_STATE: 'rahat_linkedin_checklist',
  ACTION_PLAN_STATE: 'rahat_action_plan',
  ACTIVE_SECTION: 'rahat_active_section'
};

// ── State ───────────────────────────────────────────────────────────────────
let trackedJobs = JSON.parse(localStorage.getItem(STORAGE.TRACKED_JOBS) || '[]');
let linkedinState = JSON.parse(localStorage.getItem(STORAGE.LINKEDIN_STATE) || '{}');
let actionPlanState = JSON.parse(localStorage.getItem(STORAGE.ACTION_PLAN_STATE) || '{}');
let currentInterviewFilter = 'all';
let currentInterviewSearch = '';

// ═══════════════════════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSidebar();
  renderDashboard();
  renderKanban();
  renderLinks();
  renderLinkedInChecklist();
  renderInterviewQuestions();
  renderSalary();
  renderColdMessages();
  renderActionPlan();
  renderPhotoGuide();
  updateAllStats();

  // Restore last active section
  const lastSection = localStorage.getItem(STORAGE.ACTIVE_SECTION) || 'dashboard';
  navigateTo(lastSection);
});

// ═══════════════════════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════════
function initNavigation() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const section = item.dataset.section;
      navigateTo(section);
    });
  });
}

function navigateTo(section) {
  // Update nav
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navItem = document.querySelector(`.nav-item[data-section="${section}"]`);
  if (navItem) navItem.classList.add('active');

  // Update sections
  document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
  const sec = document.getElementById(`section-${section}`);
  if (sec) sec.classList.add('active');

  // Save
  localStorage.setItem(STORAGE.ACTIVE_SECTION, section);

  // Close mobile sidebar
  closeSidebar();

  // Scroll to top
  document.getElementById('mainContent').scrollTop = 0;
}

// ═══════════════════════════════════════════════════════════════════════════════
// SIDEBAR (Mobile)
// ═══════════════════════════════════════════════════════════════════════════════
function initSidebar() {
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('sidebarOverlay');
  
  hamburger.addEventListener('click', toggleSidebar);
  overlay.addEventListener('click', closeSidebar);
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('sidebarOverlay');
  
  sidebar.classList.toggle('open');
  hamburger.classList.toggle('active');
  overlay.classList.toggle('active');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('hamburger').classList.remove('active');
  document.getElementById('sidebarOverlay').classList.remove('active');
}

// ═══════════════════════════════════════════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════════════════════════════════════════
function renderDashboard() {
  // Hot jobs (top 6 matches)
  const hotJobs = LIVE_JOBS
    .filter(j => ['perfect', 'target', 'good'].includes(j.matchLevel))
    .slice(0, 6);
  
  const grid = document.getElementById('hotJobsGrid');
  grid.innerHTML = hotJobs.map(job => createJobCard(job, true)).join('');
}

function createJobCard(job, isPreview = false) {
  const matchConfig = typeof MATCH_LEVEL_CONFIG !== 'undefined' ? MATCH_LEVEL_CONFIG[job.matchLevel] : { label: job.matchLevel, color: '#94a3b8' };
  return `
    <div class="card job-card match-${job.matchLevel}">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
        <h4 style="flex: 1; margin-right: 8px;">${job.title}</h4>
        <span class="badge" style="background: ${matchConfig.bg || 'rgba(148,163,184,0.15)'}; color: ${matchConfig.color}; white-space: nowrap;">${matchConfig.label}</span>
      </div>
      <p style="color: var(--accent-purple); font-weight: 500; margin-bottom: 4px;">${job.company}</p>
      <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 4px;">📍 ${job.location} • ${job.experience}</p>
      <p style="color: var(--text-secondary); font-size: 0.8rem; margin-bottom: 12px;">📡 ${job.source}</p>
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <a href="${job.url}" target="_blank" class="btn btn-sm btn-primary">🔗 View Details</a>
        ${isPreview ? `<button class="btn btn-sm btn-secondary" onclick="quickSaveJob(${job.id})">💾 Save to Tracker</button>` : ''}
      </div>
    </div>
  `;
}

function quickSaveJob(jobId) {
  const job = LIVE_JOBS.find(j => j.id === jobId);
  if (!job) return;
  
  // Check if already tracked
  if (trackedJobs.find(j => j.id === `live-${job.id}`)) {
    showToast('This job is already in your tracker!', 'info');
    return;
  }
  
  trackedJobs.push({
    id: `live-${job.id}`,
    title: job.title,
    company: job.company,
    location: job.location,
    salary: '',
    url: job.url,
    source: job.source,
    deadline: '',
    notes: `Match level: ${job.matchLevel}. Experience: ${job.experience}.`,
    stage: 'saved',
    createdAt: new Date().toISOString()
  });
  
  saveTrackedJobs();
  renderKanban();
  updateAllStats();
  showToast(`Saved "${job.title}" at ${job.company}!`, 'success');
}

// ═══════════════════════════════════════════════════════════════════════════════
// KANBAN JOB TRACKER
// ═══════════════════════════════════════════════════════════════════════════════
function renderKanban() {
  const stages = ['saved', 'applied', 'interview', 'offer', 'rejected'];
  
  stages.forEach(stage => {
    const container = document.getElementById(`cards-${stage}`);
    const jobs = trackedJobs.filter(j => j.stage === stage);
    const countBadge = document.getElementById(`count-${stage}`);
    
    if (countBadge) countBadge.textContent = jobs.length;
    
    container.innerHTML = jobs.length === 0 
      ? '<div class="empty-state"><p>Drop jobs here</p></div>'
      : jobs.map(job => createKanbanCard(job)).join('');
    
    // Setup drag-and-drop
    setupDropZone(container, stage);
  });
}

function createKanbanCard(job) {
  return `
    <div class="kanban-card" draggable="true" data-job-id="${job.id}" 
         ondragstart="handleDragStart(event)" ondragend="handleDragEnd(event)">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <h4 style="font-size: 0.9rem; flex: 1;">${job.title}</h4>
        <button class="btn-icon" onclick="deleteTrackedJob('${job.id}')" title="Remove">🗑️</button>
      </div>
      <p style="color: var(--accent-purple); font-size: 0.85rem; font-weight: 500;">${job.company}</p>
      ${job.location ? `<p style="color: var(--text-secondary); font-size: 0.8rem;">📍 ${job.location}</p>` : ''}
      ${job.salary ? `<p style="color: var(--accent-green); font-size: 0.8rem;">💰 ${job.salary}</p>` : ''}
      ${job.deadline ? `<p style="color: var(--accent-gold); font-size: 0.8rem;">⏰ ${job.deadline}</p>` : ''}
      ${job.url ? `<a href="${job.url}" target="_blank" style="font-size: 0.8rem; color: var(--accent-purple);">🔗 Link</a>` : ''}
      ${job.notes ? `<p style="color: var(--text-secondary); font-size: 0.75rem; margin-top: 4px; opacity: 0.7;">${job.notes.substring(0, 80)}${job.notes.length > 80 ? '...' : ''}</p>` : ''}
    </div>
  `;
}

// Drag and Drop
function handleDragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.dataset.jobId);
  e.target.classList.add('dragging');
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging');
  document.querySelectorAll('.kanban-column').forEach(col => col.classList.remove('drag-over'));
}

function setupDropZone(container, stage) {
  const column = container.parentElement;
  
  column.addEventListener('dragover', (e) => {
    e.preventDefault();
    column.classList.add('drag-over');
  });
  
  column.addEventListener('dragleave', (e) => {
    if (!column.contains(e.relatedTarget)) {
      column.classList.remove('drag-over');
    }
  });
  
  column.addEventListener('drop', (e) => {
    e.preventDefault();
    column.classList.remove('drag-over');
    const jobId = e.dataTransfer.getData('text/plain');
    moveJob(jobId, stage);
  });
}

function moveJob(jobId, newStage) {
  const job = trackedJobs.find(j => j.id === jobId);
  if (job && job.stage !== newStage) {
    job.stage = newStage;
    saveTrackedJobs();
    renderKanban();
    updateAllStats();
    showToast(`Moved to ${newStage.charAt(0).toUpperCase() + newStage.slice(1)}!`, 'success');
  }
}

function deleteTrackedJob(jobId) {
  trackedJobs = trackedJobs.filter(j => j.id !== jobId);
  saveTrackedJobs();
  renderKanban();
  updateAllStats();
  showToast('Job removed.', 'info');
}

function saveTrackedJobs() {
  localStorage.setItem(STORAGE.TRACKED_JOBS, JSON.stringify(trackedJobs));
}

// Add Job Modal
function openAddJobModal() {
  document.getElementById('addJobModal').classList.add('active');
}

function closeAddJobModal() {
  document.getElementById('addJobModal').classList.remove('active');
  document.getElementById('addJobForm').reset();
}

function handleAddJob(e) {
  e.preventDefault();
  const job = {
    id: 'custom-' + Date.now(),
    title: document.getElementById('jobTitle').value,
    company: document.getElementById('jobCompany').value,
    location: document.getElementById('jobLocation').value,
    salary: document.getElementById('jobSalary').value,
    url: document.getElementById('jobUrl').value,
    source: document.getElementById('jobSource').value,
    deadline: document.getElementById('jobDeadline').value,
    notes: document.getElementById('jobNotes').value,
    stage: document.getElementById('jobStage').value,
    createdAt: new Date().toISOString()
  };
  
  trackedJobs.push(job);
  saveTrackedJobs();
  renderKanban();
  updateAllStats();
  closeAddJobModal();
  showToast(`Added "${job.title}" at ${job.company}!`, 'success');
}

function importLiveJobs() {
  let imported = 0;
  LIVE_JOBS.forEach(job => {
    if (['perfect', 'target', 'good'].includes(job.matchLevel)) {
      if (!trackedJobs.find(j => j.id === `live-${job.id}`)) {
        trackedJobs.push({
          id: `live-${job.id}`,
          title: job.title,
          company: job.company,
          location: job.location,
          salary: '',
          url: job.url,
          source: job.source,
          deadline: '',
          notes: `Match: ${job.matchLevel}. Exp: ${job.experience}.`,
          stage: 'saved',
          createdAt: new Date().toISOString()
        });
        imported++;
      }
    }
  });
  
  if (imported > 0) {
    saveTrackedJobs();
    renderKanban();
    updateAllStats();
    showToast(`Imported ${imported} matching jobs!`, 'success');
  } else {
    showToast('All matching jobs already imported.', 'info');
  }
}

function exportTrackerCSV() {
  if (trackedJobs.length === 0) {
    showToast('No jobs to export.', 'info');
    return;
  }
  
  const headers = ['Title', 'Company', 'Location', 'Salary', 'Stage', 'Source', 'Deadline', 'URL', 'Notes', 'Date Added'];
  const rows = trackedJobs.map(j => [
    j.title, j.company, j.location, j.salary, j.stage, j.source, j.deadline, j.url, j.notes, j.createdAt
  ]);
  
  const csv = [headers, ...rows].map(row => row.map(cell => `"${(cell || '').replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `rahat_job_tracker_${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('CSV exported!', 'success');
}

// ═══════════════════════════════════════════════════════════════════════════════
// DIRECT LINKS HUB
// ═══════════════════════════════════════════════════════════════════════════════
function renderLinks() {
  // Job Portals
  document.getElementById('portalsGrid').innerHTML = JOB_PORTAL_LINKS.portals.map(link => `
    <a href="${link.url}" target="_blank" class="card link-card" data-search="${link.label.toLowerCase()} ${link.description.toLowerCase()}">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
        <span style="font-size: 1.8rem;">${link.icon}</span>
        <div>
          <h4>${link.label}</h4>
          <span class="badge badge-${link.priority}">${link.priority}</span>
        </div>
      </div>
      <p style="color: var(--text-secondary); font-size: 0.85rem;">${link.description}</p>
    </a>
  `).join('');

  // FB Groups
  document.getElementById('fbGroupsGrid').innerHTML = JOB_PORTAL_LINKS.facebookGroups.map(group => `
    <a href="${group.url}" target="_blank" class="card link-card" data-search="${group.label.toLowerCase()} ${group.description.toLowerCase()}">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
        <span style="font-size: 1.8rem;">${group.icon}</span>
        <div>
          <h4>${group.label}</h4>
          <span class="badge badge-purple">${group.members} members</span>
        </div>
      </div>
      <p style="color: var(--text-secondary); font-size: 0.85rem;">${group.description}</p>
    </a>
  `).join('');

  // Recruiter Search
  document.getElementById('recruiterGrid').innerHTML = JOB_PORTAL_LINKS.recruiterSearch.map(r => `
    <a href="${r.url}" target="_blank" class="card link-card" data-search="${r.label.toLowerCase()} ${r.tip.toLowerCase()}">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
        <span style="font-size: 1.8rem;">${r.icon}</span>
        <h4>${r.label}</h4>
      </div>
      <p style="color: var(--text-secondary); font-size: 0.85rem;">💡 ${r.tip}</p>
    </a>
  `).join('');

  // Company Career Pages
  document.getElementById('companyGrid').innerHTML = JOB_PORTAL_LINKS.companyCareerPages.map(c => `
    <a href="${c.url}" target="_blank" class="card link-card" data-search="${c.company.toLowerCase()} ${c.region.toLowerCase()}">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h4>${c.company}</h4>
        <span class="badge badge-blue">${c.region}</span>
      </div>
    </a>
  `).join('');
}

function filterLinks(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('#section-links .link-card').forEach(card => {
    const searchText = card.dataset.search || '';
    card.style.display = q === '' || searchText.includes(q) ? '' : 'none';
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// LINKEDIN CHECKLIST
// ═══════════════════════════════════════════════════════════════════════════════
function renderLinkedInChecklist() {
  const container = document.getElementById('linkedinChecklist');
  
  container.innerHTML = LINKEDIN_CHECKLIST.map(item => {
    const isDone = linkedinState[item.id] || false;
    const priorityConf = typeof PRIORITY_CONFIG !== 'undefined' ? PRIORITY_CONFIG[item.priority] : { label: item.priority, color: '#94a3b8', bg: 'rgba(148,163,184,0.15)' };
    
    return `
      <div class="checklist-item ${isDone ? 'done' : ''}" id="li-${item.id}">
        <div class="checklist-row" onclick="toggleLinkedInItem('${item.id}')">
          <div class="custom-checkbox ${isDone ? 'checked' : ''}">
            ${isDone ? '✓' : ''}
          </div>
          <div class="checklist-content">
            <h4 class="${isDone ? 'line-through' : ''}">${item.label}</h4>
            <span class="badge" style="background: ${priorityConf.bg}; color: ${priorityConf.color}; font-size: 0.7rem;">${priorityConf.label}</span>
          </div>
          <button class="btn-icon expand-btn" onclick="event.stopPropagation(); toggleExpand('li-${item.id}')">▼</button>
        </div>
        <div class="checklist-description">
          <p>${item.description}</p>
        </div>
      </div>
    `;
  }).join('');
  
  updateLinkedInProgress();
}

function toggleLinkedInItem(itemId) {
  linkedinState[itemId] = !linkedinState[itemId];
  localStorage.setItem(STORAGE.LINKEDIN_STATE, JSON.stringify(linkedinState));
  renderLinkedInChecklist();
  updateAllStats();
}

function toggleExpand(elementId) {
  const el = document.getElementById(elementId);
  el.classList.toggle('expanded');
}

function updateLinkedInProgress() {
  const total = LINKEDIN_CHECKLIST.length;
  const done = Object.values(linkedinState).filter(Boolean).length;
  const pct = Math.round((done / total) * 100);
  
  document.getElementById('linkedinProgress').style.width = pct + '%';
  document.getElementById('linkedinProgressText').textContent = `${done}/${total} Complete`;
}

// ═══════════════════════════════════════════════════════════════════════════════
// INTERVIEW PREP
// ═══════════════════════════════════════════════════════════════════════════════
function renderInterviewQuestions() {
  renderFilteredQuestions();
}

function filterQuestions(category) {
  currentInterviewFilter = category;
  
  // Update tab active states
  document.querySelectorAll('#interviewTabs .tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.category === category);
  });
  
  renderFilteredQuestions();
}

function searchQuestions(query) {
  currentInterviewSearch = query.toLowerCase().trim();
  renderFilteredQuestions();
}

function renderFilteredQuestions() {
  const container = document.getElementById('qaSection');
  
  let questions = INTERVIEW_QUESTIONS;
  
  // Filter by category
  if (currentInterviewFilter !== 'all') {
    questions = questions.filter(q => q.category === currentInterviewFilter);
  }
  
  // Filter by search
  if (currentInterviewSearch) {
    questions = questions.filter(q => 
      q.question.toLowerCase().includes(currentInterviewSearch) || 
      q.answer.toLowerCase().includes(currentInterviewSearch) ||
      q.category.toLowerCase().includes(currentInterviewSearch)
    );
  }
  
  if (questions.length === 0) {
    container.innerHTML = '<div class="empty-state"><p>No questions match your filter.</p></div>';
    return;
  }
  
  container.innerHTML = questions.map((q, idx) => `
    <div class="qa-card card" id="qa-${q.id}">
      <div class="qa-header" onclick="toggleQA('qa-${q.id}')">
        <div style="display: flex; align-items: flex-start; gap: 12px; flex: 1;">
          <span class="qa-number">${idx + 1}</span>
          <div>
            <h4 class="qa-question">${q.question}</h4>
            <span class="badge badge-purple" style="font-size: 0.7rem; margin-top: 4px;">${q.category}</span>
          </div>
        </div>
        <span class="qa-toggle">▼</span>
      </div>
      <div class="qa-body">
        <div class="qa-answer">
          ${q.answer.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        </div>
        ${q.tips && q.tips.length > 0 ? `
          <div class="qa-tips">
            <h5>💡 Tips:</h5>
            <ul>${q.tips.map(t => `<li>${t}</li>`).join('')}</ul>
          </div>
        ` : ''}
      </div>
    </div>
  `).join('');
}

function toggleQA(elementId) {
  const el = document.getElementById(elementId);
  el.classList.toggle('expanded');
}

// ═══════════════════════════════════════════════════════════════════════════════
// SALARY GUIDE
// ═══════════════════════════════════════════════════════════════════════════════
function renderSalary() {
  // Benchmark bars
  const maxSalary = Math.max(...SALARY_DATA.benchmarks.map(b => b.max));
  
  document.getElementById('salaryBenchmarks').innerHTML = SALARY_DATA.benchmarks.map(b => {
    const minPct = (b.min / maxSalary) * 100;
    const maxPct = (b.max / maxSalary) * 100;
    const avgPct = (b.avg / maxSalary) * 100;
    const isTarget = b.level === 'target';
    const levelColors = { current: '#94a3b8', target: '#10b981', stretch: '#f59e0b', future: '#7c3aed' };
    const color = levelColors[b.level] || '#94a3b8';
    
    return `
      <div class="salary-bar-row ${isTarget ? 'salary-target' : ''}">
        <div class="salary-label">
          <span style="font-weight: 600;">${b.role}</span>
          <span style="color: var(--text-secondary); font-size: 0.8rem;">${b.level === 'current' ? '(Current)' : b.level === 'target' ? '★ TARGET' : b.level === 'stretch' ? '(Stretch)' : '(Future)'}</span>
        </div>
        <div class="salary-bar-container">
          <div class="salary-bar-bg">
            <div class="salary-bar-fill" style="left: ${minPct}%; width: ${maxPct - minPct}%; background: linear-gradient(90deg, ${color}80, ${color});"></div>
            <div class="salary-avg-marker" style="left: ${avgPct}%;" title="Average: ৳${b.avg.toLocaleString()}"></div>
          </div>
        </div>
        <div class="salary-values">
          <span>৳${b.min.toLocaleString()}</span>
          <span style="font-weight: 600; color: ${color};">avg ৳${b.avg.toLocaleString()}</span>
          <span>৳${b.max.toLocaleString()}</span>
        </div>
      </div>
    `;
  }).join('');

  // Tips
  document.getElementById('salaryTips').innerHTML = SALARY_DATA.tips.map((tip, i) => `
    <div class="card" style="border-left: 3px solid var(--accent-gold);">
      <p style="font-size: 0.9rem;"><span style="font-weight: 600; color: var(--accent-gold);">💡 Tip ${i + 1}:</span> ${tip}</p>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════════════════════════════════
// COLD MESSAGES
// ═══════════════════════════════════════════════════════════════════════════════
function renderColdMessages() {
  const container = document.getElementById('messagesContainer');
  
  container.innerHTML = COLD_MESSAGES.map((msg, i) => `
    <div class="card template-card" style="margin-bottom: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
        <div>
          <span style="font-size: 1.5rem;">${msg.icon || '📩'}</span>
          <h3 style="display: inline; margin-left: 8px;">${msg.title}</h3>
        </div>
        <button class="btn btn-sm btn-copy" onclick="copyMessage(${i})">📋 Copy</button>
      </div>
      ${msg.subject ? `<div style="margin-bottom: 8px;"><span style="color: var(--text-secondary); font-size: 0.85rem;">Subject:</span> <span style="font-weight: 500;">${msg.subject}</span></div>` : ''}
      <div class="message-body" id="msg-body-${i}">
        <pre style="white-space: pre-wrap; font-family: 'Inter', sans-serif; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">${highlightPlaceholders(msg.body)}</pre>
      </div>
      ${msg.tip ? `<div class="qa-tips" style="margin-top: 12px;"><p style="font-size: 0.85rem;">💡 ${msg.tip}</p></div>` : ''}
    </div>
  `).join('');
}

function highlightPlaceholders(text) {
  return text.replace(/\[([^\]]+)\]/g, '<span style="background: rgba(245, 158, 11, 0.2); color: var(--accent-gold); padding: 1px 4px; border-radius: 3px;">[$1]</span>');
}

function copyMessage(index) {
  const msg = COLD_MESSAGES[index];
  const text = (msg.subject ? `Subject: ${msg.subject}\n\n` : '') + msg.body;
  navigator.clipboard.writeText(text).then(() => {
    showToast('Message copied to clipboard!', 'success');
  }).catch(() => {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('Message copied!', 'success');
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// 4-WEEK ACTION PLAN
// ═══════════════════════════════════════════════════════════════════════════════
function renderActionPlan() {
  const container = document.getElementById('actionPlanTimeline');
  
  container.innerHTML = ACTION_PLAN_WEEKS.map((week, wIdx) => {
    const weekTasks = [];
    week.days.forEach((day, dIdx) => {
      day.tasks.forEach((task, tIdx) => {
        weekTasks.push({ task, weekIdx: wIdx, dayIdx: dIdx, taskIdx: tIdx, dayLabel: day.day });
      });
    });
    
    const doneTasks = weekTasks.filter(t => {
      const key = `w${t.weekIdx}-d${t.dayIdx}-t${t.taskIdx}`;
      return actionPlanState[key];
    }).length;
    
    const totalTasks = weekTasks.length;
    const pct = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;
    
    return `
      <div class="timeline-week card" style="margin-bottom: 16px;">
        <div class="timeline-week-header" onclick="toggleWeek('week-${wIdx}')">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div class="progress-ring" style="--progress: ${pct}%;">
              <span>${pct}%</span>
            </div>
            <div>
              <h3>${week.title}</h3>
              <p style="color: var(--text-secondary); font-size: 0.85rem;">${week.theme} • ${doneTasks}/${totalTasks} done</p>
            </div>
          </div>
          <span class="qa-toggle">▼</span>
        </div>
        <div class="timeline-week-body" id="week-${wIdx}">
          ${week.days.map((day, dIdx) => `
            <div class="timeline-day">
              <h4 style="color: var(--accent-purple); margin-bottom: 8px; font-size: 0.9rem;">${day.day}</h4>
              ${day.tasks.map((task, tIdx) => {
                const key = `w${wIdx}-d${dIdx}-t${tIdx}`;
                const isDone = actionPlanState[key] || false;
                return `
                  <div class="checklist-item ${isDone ? 'done' : ''}" style="margin-bottom: 4px;">
                    <div class="checklist-row" onclick="toggleActionTask('${key}')">
                      <div class="custom-checkbox ${isDone ? 'checked' : ''}">${isDone ? '✓' : ''}</div>
                      <span class="${isDone ? 'line-through' : ''}" style="font-size: 0.85rem;">${task}</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
  
  updateActionPlanProgress();
}

function toggleActionTask(key) {
  actionPlanState[key] = !actionPlanState[key];
  localStorage.setItem(STORAGE.ACTION_PLAN_STATE, JSON.stringify(actionPlanState));
  renderActionPlan();
  updateAllStats();
}

function toggleWeek(weekId) {
  const el = document.getElementById(weekId);
  el.classList.toggle('expanded');
}

function updateActionPlanProgress() {
  let total = 0;
  let done = 0;
  
  ACTION_PLAN_WEEKS.forEach((week, wIdx) => {
    week.days.forEach((day, dIdx) => {
      day.tasks.forEach((task, tIdx) => {
        total++;
        const key = `w${wIdx}-d${dIdx}-t${tIdx}`;
        if (actionPlanState[key]) done++;
      });
    });
  });
  
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  document.getElementById('actionPlanProgress').style.width = pct + '%';
  document.getElementById('actionPlanProgressText').textContent = `${done}/${total} Tasks Complete`;
}

// ═══════════════════════════════════════════════════════════════════════════════
// PROFILE PHOTO GUIDE
// ═══════════════════════════════════════════════════════════════════════════════
function renderPhotoGuide() {
  const container = document.getElementById('photoGuideContainer');
  
  if (typeof PROFILE_PHOTO_GUIDE === 'undefined') {
    container.innerHTML = '<div class="empty-state"><p>Photo guide data not loaded.</p></div>';
    return;
  }
  
  container.innerHTML = PROFILE_PHOTO_GUIDE.sections.map(section => `
    <div class="card" style="margin-bottom: 16px; border-left: 3px solid var(--accent-purple);">
      <h3 style="margin-bottom: 8px;">${section.icon || '📸'} ${section.title}</h3>
      <ul style="list-style: none; padding: 0;">
        ${section.tips.map(tip => `
          <li style="padding: 4px 0; padding-left: 16px; position: relative; font-size: 0.9rem; color: var(--text-secondary);">
            <span style="position: absolute; left: 0; color: var(--accent-green);">✓</span>
            ${tip}
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════════════════════════════════
// STATS UPDATE
// ═══════════════════════════════════════════════════════════════════════════════
function updateAllStats() {
  // Job tracker stats
  const stages = { saved: 0, applied: 0, interview: 0, offer: 0 };
  trackedJobs.forEach(j => { if (stages[j.stage] !== undefined) stages[j.stage]++; });
  
  document.getElementById('stat-saved').textContent = stages.saved;
  document.getElementById('stat-applied').textContent = stages.applied;
  document.getElementById('stat-interview').textContent = stages.interview;
  document.getElementById('stat-offers').textContent = stages.offer;
  
  // LinkedIn progress
  const liDone = Object.values(linkedinState).filter(Boolean).length;
  const liTotal = LINKEDIN_CHECKLIST.length;
  document.getElementById('stat-linkedin').textContent = Math.round((liDone / liTotal) * 100) + '%';
  
  // Action plan progress
  let apTotal = 0, apDone = 0;
  ACTION_PLAN_WEEKS.forEach((week, wIdx) => {
    week.days.forEach((day, dIdx) => {
      day.tasks.forEach((task, tIdx) => {
        apTotal++;
        if (actionPlanState[`w${wIdx}-d${dIdx}-t${tIdx}`]) apDone++;
      });
    });
  });
  document.getElementById('stat-plan').textContent = Math.round((apDone / apTotal) * 100) + '%';
}

// ═══════════════════════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════════════════════
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast toast-${type} show`;
  setTimeout(() => { toast.classList.remove('show'); }, 3000);
}

function printDocument(url) {
  const win = window.open(url, '_blank');
  win.addEventListener('load', () => {
    setTimeout(() => win.print(), 500);
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// CSS ADDITIONS (dynamic styles not in main CSS)
// ═══════════════════════════════════════════════════════════════════════════════
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
  .subsection-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--border-color);
  }

  .line-through { text-decoration: line-through; opacity: 0.6; }

  .checklist-item { margin-bottom: 8px; border-radius: 8px; overflow: hidden; }
  .checklist-item.done { opacity: 0.7; }
  .checklist-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    cursor: pointer;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    transition: all 0.2s;
  }
  .checklist-row:hover { border-color: var(--accent-purple); }
  .checklist-content { flex: 1; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }

  .custom-checkbox {
    width: 22px;
    height: 22px;
    border: 2px solid var(--border-color);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: white;
    transition: all 0.2s;
    flex-shrink: 0;
  }
  .custom-checkbox.checked {
    background: var(--accent-green);
    border-color: var(--accent-green);
  }

  .checklist-description {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    padding: 0 16px;
  }
  .checklist-item.expanded .checklist-description {
    max-height: 300px;
    padding: 12px 16px;
  }
  .checklist-description p {
    color: var(--text-secondary);
    font-size: 0.85rem;
    line-height: 1.6;
  }

  .expand-btn {
    transition: transform 0.3s;
    font-size: 0.8rem;
  }
  .checklist-item.expanded .expand-btn { transform: rotate(180deg); }

  .qa-card { margin-bottom: 8px; padding: 0; overflow: hidden; }
  .qa-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    cursor: pointer;
    transition: background 0.2s;
  }
  .qa-header:hover { background: rgba(124, 58, 237, 0.05); }
  .qa-number {
    width: 28px;
    height: 28px;
    background: linear-gradient(135deg, var(--accent-purple), var(--accent-green));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 700;
    color: white;
    flex-shrink: 0;
  }
  .qa-question { font-size: 0.95rem; font-weight: 600; }
  .qa-toggle { transition: transform 0.3s; color: var(--text-secondary); }
  .qa-card.expanded .qa-toggle { transform: rotate(180deg); }
  .qa-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease;
  }
  .qa-card.expanded .qa-body { max-height: 2000px; }
  .qa-answer {
    padding: 0 16px 16px 56px;
  }
  .qa-answer p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.7;
    margin-bottom: 10px;
  }
  .qa-tips {
    background: rgba(245, 158, 11, 0.08);
    border-left: 3px solid var(--accent-gold);
    padding: 12px 16px;
    margin: 0 16px 16px 56px;
    border-radius: 0 8px 8px 0;
  }
  .qa-tips h5 { color: var(--accent-gold); margin-bottom: 6px; }
  .qa-tips ul { padding-left: 18px; }
  .qa-tips li { font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 3px; }

  .salary-bar-row { margin-bottom: 20px; }
  .salary-bar-row.salary-target {
    background: rgba(16, 185, 129, 0.08);
    padding: 16px;
    border-radius: 12px;
    border: 1px solid rgba(16, 185, 129, 0.2);
  }
  .salary-label { display: flex; justify-content: space-between; margin-bottom: 6px; }
  .salary-bar-container { position: relative; margin-bottom: 4px; }
  .salary-bar-bg {
    height: 12px;
    background: rgba(148, 163, 184, 0.1);
    border-radius: 6px;
    position: relative;
    overflow: hidden;
  }
  .salary-bar-fill {
    position: absolute;
    height: 100%;
    border-radius: 6px;
    transition: width 0.5s ease;
  }
  .salary-avg-marker {
    position: absolute;
    top: -3px;
    width: 3px;
    height: 18px;
    background: white;
    border-radius: 2px;
    transform: translateX(-50%);
  }
  .salary-values {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    color: var(--text-secondary);
  }

  .progress-container {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }
  .progress-bar {
    flex: 1;
    height: 8px;
    background: rgba(148, 163, 184, 0.1);
    border-radius: 4px;
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--accent-purple), var(--accent-green));
    border-radius: 4px;
    transition: width 0.5s ease;
  }
  .progress-text {
    font-size: 0.85rem;
    color: var(--text-secondary);
    white-space: nowrap;
  }

  .progress-ring {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--accent-green);
    background: conic-gradient(var(--accent-green) var(--progress), rgba(148,163,184,0.1) 0%);
    position: relative;
    flex-shrink: 0;
  }
  .progress-ring::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--bg-primary);
  }
  .progress-ring span {
    position: relative;
    z-index: 1;
  }

  .timeline-week-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 8px 0;
  }
  .timeline-week-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease;
    padding-left: 62px;
  }
  .timeline-week-body.expanded { max-height: 5000px; }
  .timeline-day {
    border-left: 2px solid var(--border-color);
    padding-left: 16px;
    margin-bottom: 12px;
  }

  .template-card pre {
    background: rgba(15, 23, 42, 0.5);
    padding: 16px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
  }

  .badge-high { background: rgba(245, 158, 11, 0.15); color: var(--accent-gold); }
  .badge-medium { background: rgba(59, 130, 246, 0.15); color: #3b82f6; }
  .badge-low { background: rgba(148, 163, 184, 0.15); color: var(--text-secondary); }
  .badge-purple { background: rgba(124, 58, 237, 0.15); color: var(--accent-purple); }
  .badge-blue { background: rgba(59, 130, 246, 0.15); color: #3b82f6; }

  .btn-icon {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    font-size: 0.9rem;
    opacity: 0.5;
    transition: opacity 0.2s;
  }
  .btn-icon:hover { opacity: 1; }

  .quick-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .info-banner {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 16px 20px;
  }
  .info-banner h4 { margin-bottom: 8px; }
  .info-banner p { font-size: 0.9rem; color: var(--text-secondary); }
  .info-banner kbd {
    background: rgba(124, 58, 237, 0.2);
    color: var(--accent-purple);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.85rem;
  }
  .info-banner code {
    background: rgba(245, 158, 11, 0.15);
    color: var(--accent-gold);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.85rem;
  }

  .search-filter-bar { margin-bottom: 16px; }
  .search-input-wrap {
    position: relative;
    max-width: 400px;
  }
  .search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1rem;
  }
  .search-input {
    width: 100%;
    padding: 10px 12px 10px 40px;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 0.9rem;
    font-family: 'Inter', sans-serif;
    outline: none;
    transition: border-color 0.2s;
  }
  .search-input:focus { border-color: var(--accent-purple); }
  .search-input::placeholder { color: var(--text-secondary); }

  .tabs {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }
  .tab {
    padding: 6px 14px;
    border: 1px solid var(--border-color);
    background: transparent;
    color: var(--text-secondary);
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.85rem;
    font-family: 'Inter', sans-serif;
    transition: all 0.2s;
  }
  .tab:hover { border-color: var(--accent-purple); color: var(--text-primary); }
  .tab.active {
    background: var(--accent-purple);
    border-color: var(--accent-purple);
    color: white;
  }

  .message-body { position: relative; }

  @media (max-width: 768px) {
    .quick-actions { flex-direction: column; }
    .quick-actions .btn { width: 100%; }
    .salary-bar-row.salary-target { padding: 10px; }
    .qa-answer { padding-left: 16px; }
    .qa-tips { margin-left: 16px; }
    .timeline-week-body { padding-left: 24px; }
  }
`;
document.head.appendChild(dynamicStyles);
