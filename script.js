// ═══════════════════════════════════════
//  DATA STORE
// ═══════════════════════════════════════
const DEFAULT_INMATES = [
  {id:'NCS-001',fname:'Chibuike',lname:'Nwachukwu',dob:'1985-03-12',gender:'Male',state:'Anambra',nation:'Nigerian',address:'12 Zik Ave, Awka',offense:'Armed robbery',status:'Convicted',security:'Maximum',cell:'Block D',admit:'2021-06-01',release:'2031-06-01',court:'HCL/44/2021',judge:'Hon. Justice Uba',desc:'Convicted of armed robbery with grievous bodily harm at First Bank, Onitsha branch. Multiple prior offenses on record.',kinName:'Mrs. Ngozi Nwachukwu',kinRel:'Spouse',kinPhone:'08023456789',kinAddr:'12 Zik Ave, Awka'},
  {id:'NCS-002',fname:'Amina',lname:'Suleiman',dob:'1995-09-22',gender:'Female',state:'Kano',nation:'Nigerian',address:'45 Kano Road, Kano',offense:'Drug trafficking',status:'Awaiting Trial',security:'Medium',cell:'Block C (Female)',admit:'2023-11-14',release:'',court:'FCT/HC/1102/2023',judge:'Hon. Justice Tanko',desc:'Arrested at Murtala Muhammed Airport with 2.3kg of heroin concealed in luggage. Case ongoing at Federal High Court.',kinName:'Yusuf Suleiman',kinRel:'Sibling',kinPhone:'07034567890',kinAddr:'45 Kano Road, Kano'},
  {id:'NCS-003',fname:'Taiwo',lname:'Adeyemo',dob:'1990-01-30',gender:'Male',state:'Oyo',nation:'Nigerian',address:'7 Agodi Way, Ibadan',offense:'Fraud / embezzlement',status:'Convicted',security:'Minimum',cell:'Block A',admit:'2022-03-20',release:'2025-03-20',court:'HCL/22/2022',judge:'Hon. Justice Falana',desc:'Convicted of a ₦45 million Ponzi scheme targeting market traders in Ibadan. Good conduct noted.',kinName:'Mrs. Abike Adeyemo',kinRel:'Spouse',kinPhone:'08145678901',kinAddr:'7 Agodi Way, Ibadan'},
  {id:'NCS-004',fname:'Emeka',lname:'Eze',dob:'1988-07-15',gender:'Male',state:'Enugu',nation:'Nigerian',address:'3 GRA, Enugu',offense:'Murder / homicide',status:'Awaiting Trial',security:'Maximum',cell:'Block D',admit:'2024-01-09',release:'',court:'HC/ENUGU/003/2024',judge:'Hon. Justice Obi',desc:'Alleged domestic homicide. Victim is spouse. Case referred to the High Court. Awaiting hearing on capital charge.',kinName:'Chukwuma Eze',kinRel:'Sibling',kinPhone:'09056789012',kinAddr:'3 GRA, Enugu'},
  {id:'NCS-005',fname:'Fatima',lname:'Bello',dob:'1999-12-01',gender:'Female',state:'Borno',nation:'Nigerian',address:'22 Maiduguri St, Maiduguri',offense:'Theft',status:'Awaiting Trial',security:'Minimum',cell:'Block C (Female)',admit:'2024-08-03',release:'',court:'MAG/BNO/110/2024',judge:'—',desc:'Alleged theft of market goods valued at ₦85,000. Bail denied due to lack of surety. First-time offender.',kinName:'Aisha Bello',kinRel:'Parent',kinPhone:'08167890123',kinAddr:'22 Maiduguri St, Maiduguri'},
  {id:'NCS-006',fname:'Segun',lname:'Akintola',dob:'1980-05-18',gender:'Male',state:'Ondo',nation:'Nigerian',address:'5 Akure Close, Akure',offense:'Kidnapping',status:'Convicted',security:'Maximum',cell:'Block D',admit:'2020-09-11',release:'2035-09-11',court:'HCL/89/2020',judge:'Hon. Justice Dada',desc:'Convicted of kidnap for ransom involving three victims. Sentence of 15 years without parole.',kinName:'Mrs. Funmi Akintola',kinRel:'Spouse',kinPhone:'07078901234',kinAddr:'5 Akure Close, Akure'},
  {id:'NCS-007',fname:'Bola',lname:'Ogundimu',dob:'1993-04-25',gender:'Male',state:'Ekiti',nation:'Nigerian',address:'18 Ado Ekiti Road, Ado-Ekiti',offense:'Assault',status:'Awaiting Trial',security:'Medium',cell:'Block B',admit:'2024-05-17',release:'',court:'MAG/EKT/55/2024',judge:'—',desc:'Grievous bodily harm following a land dispute. Victim hospitalised with multiple fractures.',kinName:'Mrs. Tayo Ogundimu',kinRel:'Spouse',kinPhone:'08189012345',kinAddr:'18 Ado Ekiti Road'},
  {id:'NCS-008',fname:'Halima',lname:'Ibrahim',dob:'1987-11-08',gender:'Female',state:'Sokoto',nation:'Nigerian',address:'9 Sultan Rd, Sokoto',offense:'Drug trafficking',status:'Convicted',security:'Medium',cell:'Block C (Female)',admit:'2022-07-30',release:'2027-07-30',court:'FCT/HC/770/2022',judge:'Hon. Justice Yusuf',desc:'Convicted of coordinating a heroin distribution ring across three northern states. Sentence of 5 years.',kinName:'Mallam Ibrahim',kinRel:'Parent',kinPhone:'09090123456',kinAddr:'9 Sultan Rd, Sokoto'},
  {id:'NCS-009',fname:'Chidi',lname:'Okoye',dob:'1975-02-14',gender:'Male',state:'Imo',nation:'Nigerian',address:'34 Owerri Rd, Owerri',offense:'Cybercrime',status:'Released',security:'Minimum',cell:'Block A',admit:'2021-01-10',release:'2024-01-10',court:'FHC/IM/12/2021',judge:'Hon. Justice Ndukwe',desc:'Convicted under EFCC for romance scam. Released upon completion of 3-year sentence. Good conduct.',kinName:'Mrs. Ada Okoye',kinRel:'Spouse',kinPhone:'08012345678',kinAddr:'34 Owerri Rd, Owerri'},
];

const DEFAULT_GUARDS = [
  {name:'Warder Kehinde Fashola',rank:'Senior Warder',badge:'NCS-G-0011',block:'Block A',shift:'Morning (6am–2pm)',status:'On duty'},
  {name:'Warder Grace Okafor',rank:'Warder',badge:'NCS-G-0022',block:'Block C (Female)',shift:'Afternoon (2pm–10pm)',status:'On duty'},
  {name:'P.O. Ibrahim Musa',rank:'Assistant Superintendent',badge:'NCS-G-0033',block:'All blocks',shift:'Morning (6am–2pm)',status:'On duty'},
  {name:'Warder Sunny Dibia',rank:'Warder',badge:'NCS-G-0044',block:'Block D',shift:'Night (10pm–6am)',status:'Off duty'},
  {name:'Warder Chisom Eze',rank:'Chief Warder',badge:'NCS-G-0055',block:'Block B',shift:'Afternoon (2pm–10pm)',status:'On duty'},
];

const DEFAULT_VISITORS = [
  {name:'Mrs. Ngozi Nwachukwu',vid:'—',rel:'Spouse',inmate:'Chibuike Nwachukwu',inmateId:'NCS-001',purpose:'Personal visit',date:'2026-05-10',time:'10:00',items:'Food items'},
  {name:'Barrister Kunle Adesanya',vid:'NBA/2019/0042',rel:'Legal counsel',inmate:'Emeka Eze',inmateId:'NCS-004',purpose:'Legal consultation',date:'2026-05-12',time:'14:00',items:'Documents'},
  {name:'Yusuf Suleiman',vid:'—',rel:'Sibling',inmate:'Amina Suleiman',inmateId:'NCS-002',purpose:'Personal visit',date:'2026-05-14',time:'11:30',items:'Clothing'},
  {name:'Mrs. Abike Akintola',vid:'—',rel:'Parent',inmate:'Segun Akintola',inmateId:'NCS-006',purpose:'Personal visit',date:'2026-05-15',time:'09:00',items:'None'},
];

let inmates = JSON.parse(localStorage.getItem('pms_inmates') || 'null') || JSON.parse(JSON.stringify(DEFAULT_INMATES));
let guards  = JSON.parse(localStorage.getItem('pms_guards')  || 'null') || JSON.parse(JSON.stringify(DEFAULT_GUARDS));
let visitors= JSON.parse(localStorage.getItem('pms_visitors')|| 'null') || JSON.parse(JSON.stringify(DEFAULT_VISITORS));
let activity= JSON.parse(localStorage.getItem('pms_activity')|| 'null') || [
  {icon:'🔐',msg:'System initialised — PMS v1.0 loaded',time:now()},
  {icon:'👤',msg:'Admin signed in — Supt. Adaeze Obi',time:now()},
];
let adminCreds = JSON.parse(localStorage.getItem('pms_admin') || 'null') || {email:'admin@ncos.gov.ng',pw:'admin123',name:'Supt. Adaeze Obi'};
let settings = JSON.parse(localStorage.getItem('pms_settings') || 'null') || {name:'Kirikiri Medium Security Custodial Centre',loc:'Apapa, Lagos State, Nigeria',cap:180,co:'Supt. Adaeze Obi'};

function save() {
  localStorage.setItem('pms_inmates', JSON.stringify(inmates));
  localStorage.setItem('pms_guards',  JSON.stringify(guards));
  localStorage.setItem('pms_visitors',JSON.stringify(visitors));
  localStorage.setItem('pms_activity',JSON.stringify(activity.slice(0,50)));
  localStorage.setItem('pms_admin',   JSON.stringify(adminCreds));
  localStorage.setItem('pms_settings',JSON.stringify(settings));
}

function now() { return new Date().toLocaleString('en-NG',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}); }
function today() { return new Date().toISOString().split('T')[0]; }
function nextId() { const nums = inmates.map(i=>parseInt(i.id.replace('NCS-',''))||0); return 'NCS-'+String(Math.max(0,...nums)+1).padStart(3,'0'); }
function ini(f,l) { return ((f||'')[0]||'').toUpperCase() + ((l||'')[0]||'').toUpperCase(); }

function logActivity(icon,msg) { activity.unshift({icon,msg,time:now()}); save(); }

// ═══════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════
const PAGE_TITLES = {dashboard:'Dashboard',inmates:'Inmates',register:'Register New Inmate',cases:'Cases & Offenses',cells:'Cell Blocks',guards:'Guard Management',visitors:'Visitor Logs',reports:'Reports',settings:'Settings'};

function nav(page) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const el = document.getElementById('page-'+page);
  if (el) el.classList.add('active');
  document.getElementById('page-title').textContent = PAGE_TITLES[page] || page;
  document.querySelectorAll('.nav-item').forEach(n=>{ if((n.getAttribute('onclick')||'').includes("'"+page+"'")) n.classList.add('active'); });
  const renders = {dashboard:renderDashboard,inmates:renderInmateTable,cases:renderCasePage,cells:renderCells,guards:renderGuardTable,visitors:renderVisitorTable,reports:()=>document.getElementById('report-output').style.display='none',settings:loadSettings};
  if (renders[page]) renders[page]();
}

// ═══════════════════════════════════════
//  AUTH
// ═══════════════════════════════════════
function doLogin() {
  const em = document.getElementById('l-email').value.trim();
  const pw = document.getElementById('l-pw').value;
  if (em === adminCreds.email && pw === adminCreds.pw) {
    document.getElementById('login-screen').style.display='none';
    document.getElementById('app').style.display='flex';
    document.getElementById('sb-name').textContent = adminCreds.name;
    document.getElementById('sb-avatar').textContent = ini(adminCreds.name.split(' ')[0], adminCreds.name.split(' ').slice(-1)[0]);
    document.getElementById('topbar-date').textContent = new Date().toLocaleDateString('en-NG',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
    logActivity('🔐','Admin signed in — '+adminCreds.name);
    nav('dashboard');
  } else {
    document.getElementById('login-alert').classList.add('show');
    setTimeout(()=>document.getElementById('login-alert').classList.remove('show'),3000);
  }
}
function doLogout() {
  if (!confirm('Sign out of the system?')) return;
  document.getElementById('login-screen').style.display='flex';
  document.getElementById('app').style.display='none';
}
document.getElementById('l-pw').addEventListener('keydown',e=>{ if(e.key==='Enter') doLogin(); });

// ═══════════════════════════════════════
//  BADGES
// ═══════════════════════════════════════
function statusBadge(s) {
  const map = {'Convicted':'b-danger','Awaiting Trial':'b-warning','Released':'b-success'};
  return `<span class="badge ${map[s]||'b-gray'}">${s}</span>`;
}
function secBadge(s) {
  const map = {'Maximum':'b-danger','Medium':'b-warning','Minimum':'b-info'};
  return `<span class="badge ${map[s]||'b-gray'}">${s}</span>`;
}
function dutyBadge(s) {
  const map = {'On duty':'b-success','Off duty':'b-gray','On leave':'b-warning'};
  return `<span class="badge ${map[s]||'b-gray'}">${s}</span>`;
}

// ═══════════════════════════════════════
//  ALERTS
// ═══════════════════════════════════════
function showAlert(id, type, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.className = 'alert alert-' + type + ' show';
  el.textContent = msg;
  setTimeout(()=>el.classList.remove('show'), 4000);
}

// ═══════════════════════════════════════
//  MODALS
// ═══════════════════════════════════════
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-backdrop').forEach(m=>m.addEventListener('click',function(e){ if(e.target===this) this.classList.remove('open'); }));

// ═══════════════════════════════════════
//  DASHBOARD
// ═══════════════════════════════════════
function renderDashboard() {
  const total = inmates.length;
  const awaiting = inmates.filter(i=>i.status==='Awaiting Trial').length;
  const convicted = inmates.filter(i=>i.status==='Convicted').length;
  const released = inmates.filter(i=>i.status==='Released').length;
  document.getElementById('s-total').textContent = total;
  document.getElementById('s-awaiting').textContent = awaiting;
  document.getElementById('s-awaiting-pct').textContent = total ? Math.round(awaiting/total*100)+'% of population' : '—';
  document.getElementById('s-convicted').textContent = convicted;
  document.getElementById('s-released').textContent = released;

  const cap = settings.cap || 180;
  const sec = {Minimum:0,Medium:0,Maximum:0};
  inmates.filter(i=>i.status!=='Released').forEach(i=>{ if(sec[i.security]!==undefined) sec[i.security]++; });
  const secTotal = Object.values(sec).reduce((a,b)=>a+b,0)||1;
  document.getElementById('dash-security').innerHTML = Object.entries(sec).map(([k,v])=>{
    const pct = Math.round(v/secTotal*100);
    const col = k==='Maximum'?'var(--danger)':k==='Medium'?'var(--warning)':'var(--accent)';
    return `<div style="margin-bottom:14px;"><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;"><span style="font-weight:500;">${k}</span><span style="color:var(--muted);">${v} inmates</span></div><div class="progress"><div class="progress-fill" style="width:${pct}%;background:${col};"></div></div></div>`;
  }).join('');

  document.getElementById('dash-activity').innerHTML = activity.slice(0,5).map(a=>
    `<div class="activity-item"><div class="activity-icon" style="background:var(--surface2);font-size:14px;">${a.icon}</div><div><div>${a.msg}</div><div class="activity-time">${a.time}</div></div></div>`
  ).join('') || '<div style="padding:16px;color:var(--muted);font-size:13px;">No activity yet.</div>';

  const recent = [...inmates].slice(-5).reverse();
  document.getElementById('dash-tbody').innerHTML = recent.map(i=>
    `<tr><td style="color:var(--muted);font-size:12px;">${i.id}</td>
     <td><div style="display:flex;align-items:center;gap:10px;"><div class="avatar">${ini(i.fname,i.lname)}</div><span style="font-weight:500;">${i.fname} ${i.lname}</span></div></td>
     <td style="font-size:12px;">${i.offense}</td><td>${statusBadge(i.status)}</td><td>${secBadge(i.security)}</td><td style="font-size:12px;">${i.cell}</td></tr>`
  ).join('') || '<tr><td colspan="6" style="text-align:center;padding:24px;color:var(--muted);">No inmates registered yet.</td></tr>';
}

// ═══════════════════════════════════════
//  INMATES
// ═══════════════════════════════════════
function renderInmateTable() {
  const q   = (document.getElementById('si-q')||{value:''}).value.toLowerCase();
  const st  = (document.getElementById('si-status')||{value:''}).value;
  const sec = (document.getElementById('si-sec')||{value:''}).value;
  const gen = (document.getElementById('si-gender')||{value:''}).value;
  const filtered = inmates.filter(i=>{
    const search = (i.id+' '+i.fname+' '+i.lname+' '+i.offense+' '+i.cell).toLowerCase();
    return (!q||search.includes(q)) && (!st||i.status===st) && (!sec||i.security===sec) && (!gen||i.gender===gen);
  });
  const tbody = document.getElementById('inmate-tbody');
  if (!tbody) return;
  tbody.innerHTML = filtered.map(i=>
    `<tr>
      <td style="color:var(--muted);font-size:12px;white-space:nowrap;">${i.id}</td>
      <td><div style="display:flex;align-items:center;gap:10px;"><div class="avatar">${ini(i.fname,i.lname)}</div><div><div style="font-weight:500;">${i.fname} ${i.lname}</div><div style="font-size:11px;color:var(--muted);">${i.state} State</div></div></div></td>
      <td style="font-size:12px;">${i.gender}</td>
      <td style="font-size:12px;">${i.offense}</td>
      <td>${statusBadge(i.status)}</td>
      <td>${secBadge(i.security)}</td>
      <td style="font-size:12px;">${i.cell}</td>
      <td style="font-size:12px;white-space:nowrap;">${i.admit||'—'}</td>
      <td><div style="display:flex;gap:6px;"><button class="btn btn-sm btn-icon" title="View details" onclick="viewInmate('${i.id}')">👁️</button><button class="btn btn-sm btn-icon btn-danger" title="Delete" onclick="deleteInmate('${i.id}')">🗑️</button></div></td>
    </tr>`
  ).join('') || '<tr><td colspan="9" style="text-align:center;padding:32px;color:var(--muted);">No records match your search.</td></tr>';
  const cnt = document.getElementById('inmate-count');
  if (cnt) cnt.textContent = `Showing ${filtered.length} of ${inmates.length} records`;
}

function viewInmate(id) {
  const i = inmates.find(x=>x.id===id);
  if (!i) return;
  document.getElementById('im-title').textContent = i.fname + ' ' + i.lname + ' — ' + i.id;
  document.getElementById('im-body').innerHTML = `
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;padding-bottom:18px;border-bottom:1px solid var(--border);">
      <div style="width:56px;height:56px;border-radius:50%;background:var(--accent-light);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;color:var(--accent);">${ini(i.fname,i.lname)}</div>
      <div><div style="font-size:18px;font-weight:600;">${i.fname} ${i.lname}</div><div style="font-size:13px;color:var(--muted);margin-top:2px;">${i.id} · ${i.gender} · ${i.state} State</div><div style="margin-top:6px;display:flex;gap:6px;">${statusBadge(i.status)} ${secBadge(i.security)}</div></div>
    </div>
    <div class="two-col" style="gap:20px;">
      <div class="detail-section">
        <h4>Personal</h4>
        <div class="detail-row"><span class="detail-label">Date of birth</span><span class="detail-val">${i.dob||'—'}</span></div>
        <div class="detail-row"><span class="detail-label">Nationality</span><span class="detail-val">${i.nation||'—'}</span></div>
        <div class="detail-row"><span class="detail-label">Home address</span><span class="detail-val" style="max-width:180px;text-align:right;">${i.address||'—'}</span></div>
      </div>
      <div class="detail-section">
        <h4>Case</h4>
        <div class="detail-row"><span class="detail-label">Offense</span><span class="detail-val">${i.offense}</span></div>
        <div class="detail-row"><span class="detail-label">Court number</span><span class="detail-val">${i.court||'—'}</span></div>
        <div class="detail-row"><span class="detail-label">Presiding judge</span><span class="detail-val">${i.judge||'—'}</span></div>
      </div>
    </div>
    <div class="detail-section">
      <h4>Custody</h4>
      <div class="two-col">
        <div>
          <div class="detail-row"><span class="detail-label">Cell block</span><span class="detail-val">${i.cell}</span></div>
          <div class="detail-row"><span class="detail-label">Admission date</span><span class="detail-val">${i.admit||'—'}</span></div>
          <div class="detail-row"><span class="detail-label">Expected release</span><span class="detail-val">${i.release||'Pending / TBD'}</span></div>
        </div>
      </div>
    </div>
    <div class="detail-section">
      <h4>Case description</h4>
      <p style="font-size:13px;line-height:1.6;color:var(--text);">${i.desc||'No description provided.'}</p>
    </div>
    <div class="detail-section" style="margin-bottom:0;">
      <h4>Next of kin</h4>
      <div class="detail-row"><span class="detail-label">Name</span><span class="detail-val">${i.kinName||'—'}</span></div>
      <div class="detail-row"><span class="detail-label">Relationship</span><span class="detail-val">${i.kinRel||'—'}</span></div>
      <div class="detail-row"><span class="detail-label">Phone</span><span class="detail-val">${i.kinPhone||'—'}</span></div>
      <div class="detail-row"><span class="detail-label">Address</span><span class="detail-val">${i.kinAddr||'—'}</span></div>
    </div>`;
  document.getElementById('im-delete-btn').onclick = ()=>{ closeModal('inmate-modal'); deleteInmate(id); };
  document.getElementById('im-edit-btn').onclick = ()=>{ closeModal('inmate-modal'); editInmate(id); };
  openModal('inmate-modal');
}

function deleteInmate(id) {
  const i = inmates.find(x=>x.id===id);
  if (!i || !confirm(`Delete record for ${i.fname} ${i.lname} (${i.id})? This cannot be undone.`)) return;
  inmates = inmates.filter(x=>x.id!==id);
  logActivity('🗑️',`Inmate record deleted — ${i.fname} ${i.lname} (${i.id})`);
  save();
  renderInmateTable();
  renderDashboard();
  showAlert('inmate-alert','success',`Record for ${i.fname} ${i.lname} has been deleted.`);
}

function editInmate(id) {
  const i = inmates.find(x=>x.id===id);
  if (!i) return;
  nav('register');
  setTimeout(()=>{
    document.getElementById('r-fname').value = i.fname;
    document.getElementById('r-lname').value = i.lname;
    document.getElementById('r-dob').value = i.dob||'';
    document.getElementById('r-gender').value = i.gender;
    document.getElementById('r-state').value = i.state||'';
    document.getElementById('r-nation').value = i.nation||'Nigerian';
    document.getElementById('r-address').value = i.address||'';
    document.getElementById('r-offense').value = i.offense;
    document.getElementById('r-status').value = i.status;
    document.getElementById('r-sec').value = i.security;
    document.getElementById('r-cell').value = i.cell;
    document.getElementById('r-admit').value = i.admit||'';
    document.getElementById('r-release').value = i.release||'';
    document.getElementById('r-court').value = i.court||'';
    document.getElementById('r-judge').value = i.judge||'';
    document.getElementById('r-desc').value = i.desc||'';
    document.getElementById('r-kin-name').value = i.kinName||'';
    document.getElementById('r-kin-rel').value = i.kinRel||'Spouse';
    document.getElementById('r-kin-phone').value = i.kinPhone||'';
    document.getElementById('r-kin-addr').value = i.kinAddr||'';
    inmates = inmates.filter(x=>x.id!==id);
    showAlert('reg-alert','success','Editing record for '+i.fname+' '+i.lname+'. Update and re-register to save changes.');
  },100);
}

// ═══════════════════════════════════════
//  REGISTER
// ═══════════════════════════════════════
function registerInmate() {
  const f = document.getElementById('r-fname').value.trim();
  const l = document.getElementById('r-lname').value.trim();
  if (!f) { showAlert('reg-alert','error','First name is required.'); return; }
  if (!l) { showAlert('reg-alert','error','Last name is required.'); return; }
  const newId = nextId();
  const inmate = {
    id: newId, fname: f, lname: l,
    dob: document.getElementById('r-dob').value,
    gender: document.getElementById('r-gender').value,
    state: document.getElementById('r-state').value.trim(),
    nation: document.getElementById('r-nation').value.trim(),
    address: document.getElementById('r-address').value.trim(),
    offense: document.getElementById('r-offense').value,
    status: document.getElementById('r-status').value,
    security: document.getElementById('r-sec').value,
    cell: document.getElementById('r-cell').value,
    admit: document.getElementById('r-admit').value,
    release: document.getElementById('r-release').value,
    court: document.getElementById('r-court').value.trim(),
    judge: document.getElementById('r-judge').value.trim(),
    desc: document.getElementById('r-desc').value.trim(),
    kinName: document.getElementById('r-kin-name').value.trim(),
    kinRel: document.getElementById('r-kin-rel').value,
    kinPhone: document.getElementById('r-kin-phone').value.trim(),
    kinAddr: document.getElementById('r-kin-addr').value.trim(),
  };
  inmates.push(inmate);
  logActivity('👤',`New inmate registered — ${f} ${l} (${newId})`);
  save();
  clearRegForm();
  showAlert('reg-alert','success',`✅ ${f} ${l} registered as ${newId}. Record saved.`);
}

function clearRegForm() {
  ['r-fname','r-lname','r-dob','r-state','r-address','r-admit','r-release','r-court','r-judge','r-desc','r-kin-name','r-kin-phone','r-kin-addr'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.value='';
  });
  document.getElementById('r-nation').value='Nigerian';
  document.getElementById('r-admit').value = today();
}

// ═══════════════════════════════════════
//  CASES
// ═══════════════════════════════════════
function renderCasePage() {
  const counts = {};
  inmates.forEach(i=>{ counts[i.offense]=(counts[i.offense]||0)+1; });
  const top3 = Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,3);
  document.getElementById('case-stats').innerHTML = top3.map(([k,v])=>
    `<div class="stat"><div class="stat-label">${k}</div><div class="stat-value" style="font-size:24px;">${v}</div><div class="stat-sub">inmates on record</div></div>`
  ).join('');
  renderCaseTable();
}
function renderCaseTable() {
  const q = (document.getElementById('sc-q')||{value:''}).value.toLowerCase();
  const st = (document.getElementById('sc-status')||{value:''}).value;
  const filtered = inmates.filter(i=>{
    const s = (i.id+' '+i.fname+' '+i.lname+' '+i.offense).toLowerCase();
    return (!q||s.includes(q)) && (!st||i.status===st);
  });
  document.getElementById('case-tbody').innerHTML = filtered.map(i=>
    `<tr>
      <td style="font-size:12px;color:var(--muted);">${i.id}</td>
      <td style="font-weight:500;">${i.fname} ${i.lname}</td>
      <td>${i.offense}</td>
      <td>${statusBadge(i.status)}</td>
      <td style="font-size:12px;">${i.court||'—'}</td>
      <td style="font-size:12px;">${i.admit||'—'}</td>
      <td style="font-size:12px;">${i.release||'Pending'}</td>
      <td><button class="btn btn-sm" onclick="viewInmate('${i.id}')">👁️ View</button></td>
    </tr>`
  ).join('') || '<tr><td colspan="8" style="text-align:center;padding:24px;color:var(--muted);">No records found.</td></tr>';
}

// ═══════════════════════════════════════
//  CELLS
// ═══════════════════════════════════════
function renderCells() {
  const blocks = ['Block A','Block B','Block C (Female)','Block D','Remand Wing'];
  const caps   = {'Block A':40,'Block B':50,'Block C (Female)':30,'Block D':60,'Remand Wing':20};
  document.getElementById('cell-grid').innerHTML = blocks.map(b=>{
    const cap = caps[b]||40;
    const occ = inmates.filter(i=>i.cell===b && i.status!=='Released').length;
    const pct = cap>0?Math.round(occ/cap*100):0;
    const col = pct>100?'var(--danger)':pct>85?'var(--warning)':'var(--success)';
    const label = pct>100?'Overcrowded':pct>85?'Near capacity':'Normal';
    const inmates_list = inmates.filter(i=>i.cell===b && i.status!=='Released');
    return `<div class="cell-card">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
        <div><div style="font-size:15px;font-weight:600;">${b}</div><div style="font-size:12px;color:var(--muted);margin-top:2px;">Capacity: ${cap}</div></div>
        <span class="badge" style="background:${pct>100?'var(--danger-light)':pct>85?'var(--warning-light)':'var(--success-light)'};color:${col};">${label}</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:24px;font-weight:600;margin-bottom:8px;">
        <span>${occ}</span><span style="font-size:13px;color:var(--muted);align-self:flex-end;">/ ${cap} (${pct}%)</span>
      </div>
      <div class="progress"><div class="progress-fill" style="width:${Math.min(pct,100)}%;background:${col};"></div></div>
      ${inmates_list.length ? `<div style="margin-top:12px;font-size:11px;color:var(--muted);">${inmates_list.slice(0,3).map(i=>`${i.fname} ${i.lname}`).join(', ')}${inmates_list.length>3?' + '+(inmates_list.length-3)+' more':''}</div>` : '<div style="margin-top:12px;font-size:12px;color:var(--muted);">No active inmates assigned</div>'}
    </div>`;
  }).join('');
}

// ═══════════════════════════════════════
//  GUARDS
// ═══════════════════════════════════════
function renderGuardTable() {
  const q = (document.getElementById('sg-q')||{value:''}).value.toLowerCase();
  const sh = (document.getElementById('sg-shift')||{value:''}).value;
  const filtered = guards.filter(g=>{
    return (!q||(g.name+' '+g.rank+' '+g.badge+' '+g.block).toLowerCase().includes(q)) && (!sh||g.shift===sh);
  });
  document.getElementById('guard-tbody').innerHTML = filtered.map((g,idx)=>
    `<tr>
      <td><div style="display:flex;align-items:center;gap:10px;"><div class="avatar" style="background:#EAF3DE;color:#3B6D11;">${ini(g.name.split(' ')[1]||'G',g.name.split(' ')[2]||'')}</div><span style="font-weight:500;">${g.name}</span></div></td>
      <td style="font-size:12px;">${g.rank}</td>
      <td style="font-size:12px;color:var(--muted);">${g.badge}</td>
      <td style="font-size:12px;">${g.block}</td>
      <td style="font-size:12px;">${g.shift}</td>
      <td>${dutyBadge(g.status)}</td>
      <td><button class="btn btn-sm btn-danger btn-icon" onclick="deleteGuard(${idx})" title="Remove">🗑️</button></td>
    </tr>`
  ).join('') || '<tr><td colspan="7" style="text-align:center;padding:24px;color:var(--muted);">No guards found.</td></tr>';
}

function addGuard() {
  const n = document.getElementById('gm-name').value.trim();
  const b = document.getElementById('gm-badge').value.trim();
  if (!n) { alert('Name is required.'); return; }
  if (!b) { alert('Badge number is required.'); return; }
  guards.push({name:n,rank:document.getElementById('gm-rank').value,badge:b,block:document.getElementById('gm-block').value,shift:document.getElementById('gm-shift').value,status:document.getElementById('gm-status').value});
  logActivity('🛡️','Guard added — '+n);
  save();
  closeModal('guard-modal');
  document.getElementById('gm-name').value='';
  document.getElementById('gm-badge').value='';
  renderGuardTable();
  showAlert('guard-alert','success','Guard '+n+' added successfully.');
}

function deleteGuard(idx) {
  if (!confirm('Remove this guard record?')) return;
  const g = guards[idx];
  guards.splice(idx,1);
  logActivity('🗑️','Guard record removed — '+g.name);
  save();
  renderGuardTable();
}

// ═══════════════════════════════════════
//  VISITORS
// ═══════════════════════════════════════
function populateInmateSelect() {
  const sel = document.getElementById('vm-inmate');
  sel.innerHTML = inmates.filter(i=>i.status!=='Released').map(i=>`<option value="${i.id}">${i.fname} ${i.lname} (${i.id})</option>`).join('');
}

function renderVisitorTable() {
  const q = (document.getElementById('sv-q')||{value:''}).value.toLowerCase();
  const d = (document.getElementById('sv-date')||{value:''}).value;
  const filtered = visitors.filter(v=>{
    const s = (v.name+' '+v.inmate+' '+v.inmateId).toLowerCase();
    return (!q||s.includes(q)) && (!d||v.date===d);
  });
  document.getElementById('visitor-tbody').innerHTML = filtered.map((v,idx)=>
    `<tr>
      <td style="font-weight:500;">${v.name}</td>
      <td style="font-size:12px;">${v.rel}</td>
      <td style="font-size:12px;">${v.inmate}<br><span style="color:var(--muted);font-size:11px;">${v.inmateId}</span></td>
      <td style="font-size:12px;">${v.purpose}</td>
      <td style="font-size:12px;">${v.date}</td>
      <td style="font-size:12px;">${v.time||'—'}</td>
      <td><button class="btn btn-sm btn-danger btn-icon" onclick="deleteVisitor(${idx})" title="Remove">🗑️</button></td>
    </tr>`
  ).join('') || '<tr><td colspan="7" style="text-align:center;padding:24px;color:var(--muted);">No visitor logs found.</td></tr>';
}

function addVisitor() {
  const n = document.getElementById('vm-name').value.trim();
  if (!n) { alert('Visitor name is required.'); return; }
  const sel = document.getElementById('vm-inmate');
  const inmateId = sel.value;
  const inmate = inmates.find(i=>i.id===inmateId);
  visitors.unshift({
    name:n, vid:document.getElementById('vm-id').value.trim(),
    rel:document.getElementById('vm-rel').value,
    inmate: inmate ? inmate.fname+' '+inmate.lname : '—',
    inmateId: inmateId||'—',
    purpose:document.getElementById('vm-purpose').value,
    date:document.getElementById('vm-date').value||today(),
    time:document.getElementById('vm-time').value,
    items:document.getElementById('vm-items').value.trim(),
  });
  logActivity('👤','Visitor logged — '+n+' visited '+(inmate?inmate.fname+' '+inmate.lname:'—'));
  save();
  closeModal('visitor-modal');
  ['vm-name','vm-id','vm-items','vm-time'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
  document.getElementById('vm-date').value=today();
  renderVisitorTable();
  showAlert('visitor-alert','success','Visitor '+n+' logged successfully.');
}

function deleteVisitor(idx) {
  if (!confirm('Remove this visitor log?')) return;
  visitors.splice(idx,1);
  save();
  renderVisitorTable();
}

document.getElementById('visitor-modal').addEventListener('click',function(e){
  if(e.target===this) { closeModal('visitor-modal'); }
});

// populate inmate select when visitor modal opens
const visitorModalTrigger = document.querySelector('[onclick="openModal(\'visitor-modal\')"]');
if (visitorModalTrigger) {
  const orig = visitorModalTrigger;
  orig.addEventListener('click', ()=>{ populateInmateSelect(); document.getElementById('vm-date').value=today(); });
}

// ═══════════════════════════════════════
//  REPORTS
// ═══════════════════════════════════════
function generateReport(type) {
  const box = document.getElementById('report-output');
  const title = document.getElementById('report-title');
  const body = document.getElementById('report-body');
  box.style.display='block';
  box.scrollIntoView({behavior:'smooth',block:'start'});

  if (type==='population') {
    title.textContent='Inmate Population Report — '+today();
    const rows = inmates.map(i=>`<tr><td>${i.id}</td><td>${i.fname} ${i.lname}</td><td>${i.gender}</td><td>${i.offense}</td><td>${statusBadge(i.status)}</td><td>${secBadge(i.security)}</td><td>${i.cell}</td><td>${i.admit||'—'}</td></tr>`).join('');
    body.innerHTML=`<table><thead><tr><th>ID</th><th>Name</th><th>Gender</th><th>Offense</th><th>Status</th><th>Security</th><th>Cell</th><th>Admission</th></tr></thead><tbody>${rows}</tbody></table>`;
  } else if (type==='awaiting') {
    title.textContent='Awaiting Trial Report — '+today();
    const at = inmates.filter(i=>i.status==='Awaiting Trial');
    body.innerHTML=`<p style="font-size:13px;margin-bottom:14px;"><strong>${at.length}</strong> inmates currently awaiting trial (${Math.round(at.length/inmates.length*100||0)}% of population).</p>`+
      `<table><thead><tr><th>ID</th><th>Name</th><th>Offense</th><th>Security</th><th>Admission</th><th>Court #</th></tr></thead><tbody>${at.map(i=>`<tr><td>${i.id}</td><td>${i.fname} ${i.lname}</td><td>${i.offense}</td><td>${secBadge(i.security)}</td><td>${i.admit||'—'}</td><td>${i.court||'—'}</td></tr>`).join('')||'<tr><td colspan="6" style="text-align:center;padding:16px;color:var(--muted);">No records.</td></tr>'}</tbody></table>`;
  } else if (type==='release') {
    title.textContent='Release Schedule — '+today();
    const rel = inmates.filter(i=>i.release).sort((a,b)=>a.release.localeCompare(b.release));
    body.innerHTML=`<table><thead><tr><th>ID</th><th>Name</th><th>Status</th><th>Cell</th><th>Release Date</th></tr></thead><tbody>${rel.map(i=>`<tr><td>${i.id}</td><td>${i.fname} ${i.lname}</td><td>${statusBadge(i.status)}</td><td>${i.cell}</td><td style="font-weight:600;">${i.release}</td></tr>`).join('')||'<tr><td colspan="5" style="text-align:center;padding:16px;color:var(--muted);">No release dates set.</td></tr>'}</tbody></table>`;
  } else if (type==='security') {
    title.textContent='Security Classification Report — '+today();
    ['Maximum','Medium','Minimum'].forEach(sec=>{
      const list=inmates.filter(i=>i.security===sec);
      body.innerHTML=(body.innerHTML||'')+`<h4 style="margin-bottom:8px;">${sec} Security — ${list.length} inmates</h4><table style="margin-bottom:20px;"><thead><tr><th>ID</th><th>Name</th><th>Offense</th><th>Status</th></tr></thead><tbody>${list.map(i=>`<tr><td>${i.id}</td><td>${i.fname} ${i.lname}</td><td>${i.offense}</td><td>${statusBadge(i.status)}</td></tr>`).join('')||'<tr><td colspan="4" style="text-align:center;padding:8px;color:var(--muted);">None</td></tr>'}</tbody></table>`;
    });
    body.innerHTML = '<div>'+body.innerHTML+'</div>';
  } else if (type==='offense') {
    title.textContent='Offense Breakdown — '+today();
    const counts={};
    inmates.forEach(i=>{ counts[i.offense]=(counts[i.offense]||0)+1; });
    const total=inmates.length||1;
    body.innerHTML=Object.entries(counts).sort((a,b)=>b[1]-a[1]).map(([k,v])=>{
      const pct=Math.round(v/total*100);
      return `<div style="margin-bottom:14px;"><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:5px;"><span style="font-weight:500;">${k}</span><span style="color:var(--muted);">${v} inmates (${pct}%)</span></div><div class="progress"><div class="progress-fill" style="width:${pct}%;background:var(--accent);"></div></div></div>`;
    }).join('');
  }
}

function printReport() {
  const title = document.getElementById('report-title').textContent;
  const body = document.getElementById('report-body').innerHTML;
  const win = window.open('','_blank');
  win.document.write(`<html><head><title>${title}</title><style>body{font-family:sans-serif;padding:24px;}table{width:100%;border-collapse:collapse;}th,td{border:1px solid #ccc;padding:8px;font-size:12px;text-align:left;}th{background:#f0f0f0;}.badge{padding:2px 8px;border-radius:10px;font-size:11px;}</style></head><body><h2>${title}</h2>${body}</body></html>`);
  win.document.close();
  win.print();
}

function exportCSV() {
  const headers = ['ID','First Name','Last Name','Date of Birth','Gender','State','Nationality','Offense','Status','Security','Cell','Admission','Release','Court Number','Description'];
  const rows = inmates.map(i=>[i.id,i.fname,i.lname,i.dob,i.gender,i.state,i.nation,i.offense,i.status,i.security,i.cell,i.admit,i.release,i.court,(i.desc||'').replace(/,/g,' ')]);
  const csv = [headers,...rows].map(r=>r.join(',')).join('\n');
  const a=document.createElement('a');
  a.href='data:text/csv;charset=utf-8,'+encodeURIComponent(csv);
  a.download='inmates_export_'+today()+'.csv';
  a.click();
}

// ═══════════════════════════════════════
//  SETTINGS
// ═══════════════════════════════════════
function loadSettings() {
  document.getElementById('cfg-name').value=settings.name||'';
  document.getElementById('cfg-loc').value=settings.loc||'';
  document.getElementById('cfg-cap').value=settings.cap||180;
  document.getElementById('cfg-co').value=settings.co||'';
  document.getElementById('cfg-admin-name').value=adminCreds.name||'';
  document.getElementById('cfg-admin-email').value=adminCreds.email||'';
}
function saveSettings() {
  settings.name=document.getElementById('cfg-name').value;
  settings.loc=document.getElementById('cfg-loc').value;
  settings.cap=parseInt(document.getElementById('cfg-cap').value)||180;
  settings.co=document.getElementById('cfg-co').value;
  save();
  showAlert('settings-alert','success','Facility settings saved.');
}
function updateAdmin() {
  const n=document.getElementById('cfg-admin-name').value.trim();
  const e=document.getElementById('cfg-admin-email').value.trim();
  const p1=document.getElementById('cfg-pw1').value;
  const p2=document.getElementById('cfg-pw2').value;
  if (p1 && p1!==p2) { showAlert('settings-alert','error','Passwords do not match.'); return; }
  adminCreds.name=n||adminCreds.name;
  adminCreds.email=e||adminCreds.email;
  if (p1) adminCreds.pw=p1;
  document.getElementById('sb-name').textContent=adminCreds.name;
  save();
  document.getElementById('cfg-pw1').value='';
  document.getElementById('cfg-pw2').value='';
  showAlert('settings-alert','success','Admin account updated.');
}
function resetData() {
  inmates=JSON.parse(JSON.stringify(DEFAULT_INMATES));
  guards=JSON.parse(JSON.stringify(DEFAULT_GUARDS));
  visitors=JSON.parse(JSON.stringify(DEFAULT_VISITORS));
  activity=[{icon:'🔄',msg:'Data reset to defaults',time:now()}];
  save();
  alert('Data has been reset to defaults.');
}

// ═══════════════════════════════════════
//  VISITOR MODAL SETUP
// ═══════════════════════════════════════
document.querySelector('[onclick="openModal(\'visitor-modal\')"]') && document.querySelector('[onclick="openModal(\'visitor-modal\')"]').removeAttribute('onclick');
document.querySelectorAll('[onclick]').forEach(el=>{
  if(el.getAttribute('onclick') && el.getAttribute('onclick').includes("visitor-modal")) {
    el.onclick = function(){ populateInmateSelect(); document.getElementById('vm-date').value=today(); openModal('visitor-modal'); };
  }
});

// ═══════════════════════════════════════
//  THEME
// ═══════════════════════════════════════
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('pms_theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}
// Load saved theme, default to dark
applyTheme(localStorage.getItem('pms_theme') || 'dark');

// Init
if (document.getElementById('r-admit')) {
  document.getElementById('r-admit').value = today();
}
