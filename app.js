/* ===== STATE ===== */
let state = {
  template: 'modern',
  photo: null,
  name: '', title: '', email: '', phone: '', location: '', website: '', linkedin: '', github: '',
  summary: '',
  declaration: '',
  experience: [],
  education: [],
  skills: [],
  languages: [],
  certifications: []
};
let zoomScale = 0.9;

/* ===== TEMPLATES META ===== */
const TEMPLATES = [
  { id: 'modern',    name: 'Modern Pro',    desc: 'Clean sidebar with accent colors', tag: 'Most Popular' },
  { id: 'classic',  name: 'Classic Serif',  desc: 'Timeless typographic elegance',   tag: 'Professional' },
  { id: 'minimal',  name: 'Minimal Zen',    desc: 'Ultra-clean whitespace design',   tag: 'Creative' },
  { id: 'bold',     name: 'Bold Impact',    desc: 'Strong header, high contrast',    tag: 'Executive' },
  { id: 'elegant',  name: 'Elegant Dark',   desc: 'Sophisticated dark header style', tag: 'Premium' },
  { id: 'simple',   name: 'Simple Classic', desc: 'Photo top-right, bullet lists, declaration section', tag: 'Nepal Style' }
];

/* ===== VIEW ROUTING ===== */
function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + id).classList.add('active');
  if (id === 'builder') {
    buildPills();
    render();
    if (window.innerWidth <= 768) {
      switchMobileTab('form');
    }
  }
  if (id === 'templates') buildTemplateGrid();
}

/* ===== TEMPLATE GRID ===== */
function buildTemplateGrid() {
  const grid = document.getElementById('templateGrid');
  grid.innerHTML = TEMPLATES.map(t => `
    <div class="tmpl-card ${state.template === t.id ? 'selected' : ''}" onclick="selectTemplate('${t.id}')">
      <div class="tmpl-thumb">${getThumbHTML(t.id)}</div>
      <div class="tmpl-info">
        <h4>${t.name}</h4>
        <p>${t.desc}</p>
        <span class="tmpl-badge">${t.tag}</span>
        <button class="use-btn" onclick="useTemplate(event,'${t.id}')">Use This Template</button>
      </div>
    </div>`).join('');
}

function selectTemplate(id) {
  state.template = id;
  buildTemplateGrid();
}

function useTemplate(e, id) {
  e.stopPropagation();
  state.template = id;
  showView('builder');
}

function getThumbHTML(id) {
  const thumbs = {
    modern: `<div style="display:flex;height:100%;background:#fff"><div style="width:35%;background:#6366f1;padding:10px"><div style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.3);margin:0 auto 8px"></div><div style="height:5px;background:rgba(255,255,255,.4);border-radius:3px;margin:4px 0"></div><div style="height:5px;background:rgba(255,255,255,.25);border-radius:3px;margin:4px 0;width:70%"></div><div style="height:5px;background:rgba(255,255,255,.25);border-radius:3px;margin:4px 0;width:55%"></div></div><div style="flex:1;padding:10px"><div style="height:7px;background:#111;border-radius:3px;margin-bottom:5px;width:70%"></div><div style="height:4px;background:#6366f1;border-radius:3px;margin-bottom:10px;width:50%"></div><div style="height:4px;background:#eee;border-radius:3px;margin:3px 0"></div><div style="height:4px;background:#eee;border-radius:3px;margin:3px 0;width:80%"></div></div></div>`,
    classic: `<div style="background:#fff;height:100%;padding:12px"><div style="border-bottom:2px solid #1a1a2e;padding-bottom:8px;margin-bottom:10px;text-align:center"><div style="height:8px;background:#1a1a2e;border-radius:2px;width:60%;margin:0 auto 5px"></div><div style="height:5px;background:#888;border-radius:2px;width:40%;margin:0 auto"></div></div><div style="height:4px;background:#ddd;border-radius:2px;margin:3px 0"></div><div style="height:4px;background:#ddd;border-radius:2px;margin:3px 0;width:80%"></div><div style="height:4px;background:#ddd;border-radius:2px;margin:3px 0;width:90%"></div><div style="margin-top:10px;height:5px;background:#1a1a2e;border-radius:2px;width:40%"></div><div style="height:4px;background:#ddd;border-radius:2px;margin:5px 0"></div></div>`,
    minimal: `<div style="background:#fafafa;height:100%;padding:14px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:12px"><div style="width:32px;height:32px;border-radius:50%;background:#e0e0e0"></div><div><div style="height:7px;background:#333;border-radius:2px;width:80px;margin-bottom:4px"></div><div style="height:4px;background:#aaa;border-radius:2px;width:55px"></div></div></div><div style="height:1px;background:#e0e0e0;margin-bottom:10px"></div><div style="height:4px;background:#e8e8e8;border-radius:2px;margin:4px 0"></div><div style="height:4px;background:#e8e8e8;border-radius:2px;margin:4px 0;width:75%"></div></div>`,
    bold: `<div style="background:#fff;height:100%"><div style="background:#111;padding:14px"><div style="height:8px;background:#fff;border-radius:2px;width:65%;margin-bottom:5px"></div><div style="height:5px;background:#6366f1;border-radius:2px;width:45%"></div><div style="margin-top:8px;display:flex;gap:6px"><div style="height:4px;background:rgba(255,255,255,.4);border-radius:2px;flex:1"></div><div style="height:4px;background:rgba(255,255,255,.4);border-radius:2px;flex:1"></div></div></div><div style="padding:10px"><div style="height:4px;background:#eee;border-radius:2px;margin:3px 0"></div><div style="height:4px;background:#eee;border-radius:2px;margin:3px 0;width:80%"></div><div style="height:4px;background:#6366f1;border-radius:2px;margin:8px 0 4px;width:35%"></div></div></div>`,
    elegant: `<div style="background:#fff;height:100%"><div style="background:linear-gradient(135deg,#1a1a2e,#16213e);padding:14px;text-align:center"><div style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.2);margin:0 auto 6px;border:2px solid rgba(255,255,255,.4)"></div><div style="height:6px;background:rgba(255,255,255,.8);border-radius:2px;width:60%;margin:0 auto 4px"></div><div style="height:4px;background:rgba(255,255,255,.4);border-radius:2px;width:40%;margin:0 auto"></div></div><div style="padding:10px"><div style="height:4px;background:#f0f0f0;border-radius:2px;margin:3px 0"></div><div style="height:4px;background:#f0f0f0;border-radius:2px;margin:3px 0;width:85%"></div></div></div>`,
    simple: `<div style="background:#fff;height:100%;padding:12px;font-family:Arial,sans-serif"><div style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:1px solid #ccc;padding-bottom:8px;margin-bottom:8px"><div><div style="height:8px;background:#111;border-radius:2px;width:90px;margin-bottom:5px"></div><div style="height:5px;background:#555;border-radius:2px;width:70px;margin-bottom:6px"></div><div style="height:4px;background:#ddd;border-radius:2px;width:60px;margin:3px 0"></div><div style="height:4px;background:#ddd;border-radius:2px;width:65px;margin:3px 0"></div></div><div style="width:38px;height:48px;background:#c8d0dc;border:1px solid #aaa;border-radius:2px;flex-shrink:0"></div></div><div style="height:5px;background:#333;border-radius:2px;width:50px;margin-bottom:5px"></div><div style="height:3px;background:#eee;border-radius:2px;margin:2px 0"></div><div style="height:3px;background:#eee;border-radius:2px;margin:2px 0;width:85%"></div><div style="margin-top:6px;height:4px;background:#333;border-radius:2px;width:40px"></div><div style="margin-top:4px;height:3px;background:#eee;border-radius:2px"></div><div style="height:3px;background:#eee;border-radius:2px;margin:2px 0;width:75%"></div></div>`
  };
  return thumbs[id] || '';
}

/* ===== PILLS ===== */
function buildPills() {
  const c = document.getElementById('tmplPills');
  c.innerHTML = TEMPLATES.map(t =>
    `<button class="pill ${state.template === t.id ? 'active' : ''}" onclick="switchTemplate('${t.id}')">${t.name}</button>`
  ).join('');
}

function switchTemplate(id) {
  state.template = id;
  buildPills();
  render();
}

/* ===== ZOOM ===== */
function zoom(delta) {
  zoomScale = Math.min(1.5, Math.max(0.4, zoomScale + delta));
  document.getElementById('cvPaper').style.transform = `scale(${zoomScale})`;
  document.getElementById('zoomLabel').textContent = Math.round(zoomScale * 100) + '%';
}

/* ===== PHOTO ===== */
function handlePhoto(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    state.photo = ev.target.result;
    document.getElementById('photoPreview').src = state.photo;
    document.getElementById('photoPreview').style.display = 'block';
    document.getElementById('photoPlaceholder').style.display = 'none';
    document.getElementById('removePhotoBtn').style.display = 'block';
    render();
  };
  reader.readAsDataURL(file);
}

function removePhoto(e) {
  e.stopPropagation();
  state.photo = null;
  document.getElementById('photoPreview').style.display = 'none';
  document.getElementById('photoPlaceholder').style.display = 'block';
  document.getElementById('removePhotoBtn').style.display = 'none';
  document.getElementById('photoFile').value = '';
  render();
}

/* ===== DYNAMIC SECTIONS ===== */
function addExp() {
  const id = Date.now();
  state.experience.push({ id, company: '', role: '', start: '', end: '', desc: '' });
  renderForms();
}
function delExp(id) {
  state.experience = state.experience.filter(x => x.id !== id);
  renderForms(); render();
}
function addEdu() {
  const id = Date.now();
  state.education.push({ id, school: '', degree: '', year: '', gpa: '' });
  renderForms();
}
function delEdu(id) {
  state.education = state.education.filter(x => x.id !== id);
  renderForms(); render();
}
function addSkill() {
  const inp = document.getElementById('skillInput');
  const val = inp.value.trim();
  if (!val) return;
  val.split(',').forEach(s => { if (s.trim()) state.skills.push(s.trim()); });
  inp.value = '';
  renderForms(); render();
}
function delSkill(i) {
  state.skills.splice(i, 1);
  renderForms(); render();
}
function addLang() {
  const id = Date.now();
  state.languages.push({ id, lang: '', level: 'Fluent' });
  renderForms();
}
function delLang(id) {
  state.languages = state.languages.filter(x => x.id !== id);
  renderForms(); render();
}
function addCert() {
  const id = Date.now();
  state.certifications.push({ id, name: '', issuer: '', year: '' });
  renderForms();
}
function delCert(id) {
  state.certifications = state.certifications.filter(x => x.id !== id);
  renderForms(); render();
}

/* ===== RENDER FORMS ===== */
function renderForms() {
  // Experience
  document.getElementById('expList').innerHTML = state.experience.map(e => `
    <div class="item-card">
      <button class="del-btn" onclick="delExp(${e.id})">✕</button>
      <div class="item-grid">
        <div class="span2"><label>Company</label><input type="text" value="${e.company}" oninput="state.experience.find(x=>x.id===${e.id}).company=this.value;render()" /></div>
        <div class="span2"><label>Role / Position</label><input type="text" value="${e.role}" oninput="state.experience.find(x=>x.id===${e.id}).role=this.value;render()" /></div>
        <div><label>Start</label><input type="text" value="${e.start}" placeholder="Jan 2020" oninput="state.experience.find(x=>x.id===${e.id}).start=this.value;render()" /></div>
        <div><label>End</label><input type="text" value="${e.end}" placeholder="Present" oninput="state.experience.find(x=>x.id===${e.id}).end=this.value;render()" /></div>
        <div class="span2"><label>Description</label><textarea rows="2" oninput="state.experience.find(x=>x.id===${e.id}).desc=this.value;render()">${e.desc}</textarea></div>
      </div>
    </div>`).join('');

  // Education
  document.getElementById('eduList').innerHTML = state.education.map(e => `
    <div class="item-card">
      <button class="del-btn" onclick="delEdu(${e.id})">✕</button>
      <div class="item-grid">
        <div class="span2"><label>School / University</label><input type="text" value="${e.school}" oninput="state.education.find(x=>x.id===${e.id}).school=this.value;render()" /></div>
        <div class="span2"><label>Degree / Field</label><input type="text" value="${e.degree}" oninput="state.education.find(x=>x.id===${e.id}).degree=this.value;render()" /></div>
        <div><label>Year</label><input type="text" value="${e.year}" placeholder="2018 - 2022" oninput="state.education.find(x=>x.id===${e.id}).year=this.value;render()" /></div>
        <div><label>GPA</label><input type="text" value="${e.gpa}" placeholder="3.8/4.0" oninput="state.education.find(x=>x.id===${e.id}).gpa=this.value;render()" /></div>
      </div>
    </div>`).join('');

  // Skills
  document.getElementById('skillChips').innerHTML = state.skills.map((s, i) =>
    `<div class="chip">${s}<span onclick="delSkill(${i})">✕</span></div>`).join('');

  // Languages
  document.getElementById('langList').innerHTML = state.languages.map(l => `
    <div class="item-card">
      <button class="del-btn" onclick="delLang(${l.id})">✕</button>
      <div class="item-grid">
        <div><label>Language</label><input type="text" value="${l.lang}" oninput="state.languages.find(x=>x.id===${l.id}).lang=this.value;render()" /></div>
        <div><label>Level</label>
          <select onchange="state.languages.find(x=>x.id===${l.id}).level=this.value;render()">
            ${['Native','Fluent','Advanced','Intermediate','Beginner'].map(v => `<option ${l.level===v?'selected':''}>${v}</option>`).join('')}
          </select>
        </div>
      </div>
    </div>`).join('');

  // Certifications
  document.getElementById('certList').innerHTML = state.certifications.map(c => `
    <div class="item-card">
      <button class="del-btn" onclick="delCert(${c.id})">✕</button>
      <div class="item-grid">
        <div class="span2"><label>Certificate Name</label><input type="text" value="${c.name}" oninput="state.certifications.find(x=>x.id===${c.id}).name=this.value;render()" /></div>
        <div><label>Issuer</label><input type="text" value="${c.issuer}" oninput="state.certifications.find(x=>x.id===${c.id}).issuer=this.value;render()" /></div>
        <div><label>Year</label><input type="text" value="${c.year}" placeholder="2023" oninput="state.certifications.find(x=>x.id===${c.id}).year=this.value;render()" /></div>
      </div>
    </div>`).join('');
}

/* ===== SYNC INPUTS → STATE ===== */
function render() {
  state.name        = document.getElementById('inName')?.value || '';
  state.title       = document.getElementById('inTitle')?.value || '';
  state.email       = document.getElementById('inEmail')?.value || '';
  state.phone       = document.getElementById('inPhone')?.value || '';
  state.location    = document.getElementById('inLocation')?.value || '';
  state.website     = document.getElementById('inWebsite')?.value || '';
  state.linkedin    = document.getElementById('inLinkedin')?.value || '';
  state.github      = document.getElementById('inGithub')?.value || '';
  state.summary     = document.getElementById('inSummary')?.value || '';
  state.declaration = document.getElementById('inDeclaration')?.value || '';
  renderCV();
}

/* ===== HELPERS ===== */
const e = (v, fb = '') => v ? v.replace(/</g,'&lt;').replace(/>/g,'&gt;') : fb;
const photoImg = (size = 90, style = '') => state.photo ? `<img src="${state.photo}" style="width:${size}px;height:${size}px;border-radius:50%;object-fit:cover;${style}" />` : '';

/* ===== CLEAR ALL DATA ===== */
function clearAllData() {
  if (confirm("Are you sure you want to clear all the sample data and start fresh?")) {
    state.photo = null;
    state.name = '';
    state.title = '';
    state.email = '';
    state.phone = '';
    state.location = '';
    state.website = '';
    state.linkedin = '';
    state.github = '';
    state.summary = '';
    state.declaration = '';
    state.experience = [];
    state.education = [];
    state.skills = [];
    state.languages = [];
    state.certifications = [];
    
    // Clear DOM input values
    const textInputs = ['inName', 'inTitle', 'inEmail', 'inPhone', 'inLocation', 'inWebsite', 'inLinkedin', 'inGithub', 'inSummary', 'inDeclaration'];
    textInputs.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    
    // Clear photo upload preview
    const photoPreview = document.getElementById('photoPreview');
    const photoPlaceholder = document.getElementById('photoPlaceholder');
    const removePhotoBtn = document.getElementById('removePhotoBtn');
    const photoFile = document.getElementById('photoFile');
    if (photoPreview) photoPreview.style.display = 'none';
    if (photoPlaceholder) photoPlaceholder.style.display = 'block';
    if (removePhotoBtn) removePhotoBtn.style.display = 'none';
    if (photoFile) photoFile.value = '';
    
    // Clear skill input
    const skillInput = document.getElementById('skillInput');
    if (skillInput) skillInput.value = '';
    
    // Re-render forms and CV
    renderForms();
    render();
    if (typeof showToast === 'function') {
      showToast('✨ All sample data cleared! Start entering your details.');
    }
  }
}
