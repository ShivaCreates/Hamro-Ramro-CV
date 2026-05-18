/* ===== TEMPLATE: MODERN (sidebar) ===== */
function tmplModern(s) {
  const expHTML = s.experience.map(x => `
    <div style="margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;align-items:baseline">
        <span style="font-weight:700;font-size:16px;color:#1a1a2e">${e(x.role)}</span>
        <span style="font-size:13px;color:#888">${e(x.start)}${x.start && x.end ? ' – ' : ''}${e(x.end)}</span>
      </div>
      <div style="font-size:14px;color:#6366f1;font-weight:600;margin-bottom:5px">${e(x.company)}</div>
      ${x.desc ? `<p style="font-size:14px;color:#555;line-height:1.7">${e(x.desc)}</p>` : ''}
    </div>`).join('');
  const eduHTML = s.education.map(x => `
    <div style="margin-bottom:14px">
      <div style="font-weight:700;font-size:15px;color:#1a1a2e">${e(x.school)}</div>
      <div style="font-size:14px;color:#555">${e(x.degree)}</div>
      <div style="font-size:13px;color:#888">${e(x.year)}${x.gpa ? ` · GPA: ${e(x.gpa)}` : ''}</div>
    </div>`).join('');
  const skillHTML = s.skills.map(sk => `<span style="display:inline-block;background:#ede9fe;color:#6366f1;border-radius:20px;padding:4px 14px;font-size:13px;margin:3px 3px 0 0;font-weight:600">${e(sk)}</span>`).join('');
  const certHTML = s.certifications.map(c => `<div style="margin-bottom:8px"><div style="font-size:14px;font-weight:600;color:#1a1a2e">${e(c.name)}</div><div style="font-size:13px;color:#888">${e(c.issuer)}${c.year ? ` · ${e(c.year)}` : ''}</div></div>`).join('');
  const langHTML = s.languages.map(l => `<div style="display:flex;justify-content:space-between;font-size:14px;margin-bottom:6px"><span style="color:#fff">${e(l.lang)}</span><span style="color:#a5b4fc">${e(l.level)}</span></div>`).join('');
  return `<div style="display:flex;min-height:297mm;font-family:'DM Sans',sans-serif">
    <div style="width:230px;min-width:230px;background:#1e1b4b;color:#fff;padding:30px 20px">
      ${s.photo ? `<div style="text-align:center;margin-bottom:20px">${photoImg(100,'border:3px solid rgba(255,255,255,.3)')}</div>` : ''}
      <div style="border-bottom:1px solid rgba(255,255,255,.2);padding-bottom:18px;margin-bottom:18px">
        <div style="font-size:11px;letter-spacing:2px;color:#a5b4fc;font-weight:700;margin-bottom:10px;text-transform:uppercase">Contact</div>
        ${s.email ? `<div style="font-size:13px;margin-bottom:7px;word-break:break-all">📧 ${e(s.email)}</div>` : ''}
        ${s.phone ? `<div style="font-size:13px;margin-bottom:7px">📞 ${e(s.phone)}</div>` : ''}
        ${s.location ? `<div style="font-size:13px;margin-bottom:7px">📍 ${e(s.location)}</div>` : ''}
        ${s.website ? `<div style="font-size:13px;margin-bottom:7px;word-break:break-all">🌐 ${e(s.website)}</div>` : ''}
        ${s.linkedin ? `<div style="font-size:13px;margin-bottom:7px;word-break:break-all">in ${e(s.linkedin)}</div>` : ''}
        ${s.github ? `<div style="font-size:13px;word-break:break-all">⌥ ${e(s.github)}</div>` : ''}
      </div>
      ${s.skills.length ? `<div style="margin-bottom:18px"><div style="font-size:11px;letter-spacing:2px;color:#a5b4fc;font-weight:700;margin-bottom:10px;text-transform:uppercase">Skills</div>${s.skills.map(sk=>`<div style="background:rgba(255,255,255,.1);border-radius:4px;padding:5px 10px;font-size:13px;margin-bottom:6px">${e(sk)}</div>`).join('')}</div>` : ''}
      ${s.languages.length ? `<div style="margin-bottom:18px"><div style="font-size:11px;letter-spacing:2px;color:#a5b4fc;font-weight:700;margin-bottom:10px;text-transform:uppercase">Languages</div>${langHTML}</div>` : ''}
      ${s.certifications.length ? `<div><div style="font-size:11px;letter-spacing:2px;color:#a5b4fc;font-weight:700;margin-bottom:10px;text-transform:uppercase">Certifications</div>${certHTML}</div>` : ''}
    </div>
    <div style="flex:1;padding:36px 32px;background:#fff">
      <div style="border-bottom:3px solid #6366f1;padding-bottom:16px;margin-bottom:24px">
        <div style="font-size:32px;font-weight:800;color:#1a1a2e;line-height:1">${e(s.name,'Your Name')}</div>
        <div style="font-size:16px;color:#6366f1;font-weight:600;margin-top:8px">${e(s.title,'Job Title')}</div>
      </div>
      ${s.summary ? `<div style="margin-bottom:24px"><div style="font-size:11px;letter-spacing:2px;font-weight:700;color:#6366f1;text-transform:uppercase;margin-bottom:10px">Profile</div><p style="font-size:14px;color:#444;line-height:1.75">${e(s.summary)}</p></div>` : ''}
      ${s.experience.length ? `<div style="margin-bottom:24px"><div style="font-size:11px;letter-spacing:2px;font-weight:700;color:#6366f1;text-transform:uppercase;margin-bottom:12px">Experience</div>${expHTML}</div>` : ''}
      ${s.education.length ? `<div><div style="font-size:11px;letter-spacing:2px;font-weight:700;color:#6366f1;text-transform:uppercase;margin-bottom:12px">Education</div>${eduHTML}</div>` : ''}
    </div>
  </div>`;
}

/* ===== TEMPLATE: CLASSIC ===== */
function tmplClassic(s) {
  const sec = (title, html) => html ? `<div style="margin-bottom:24px"><div style="font-size:16px;font-weight:700;color:#1a1a2e;border-bottom:2px solid #1a1a2e;padding-bottom:5px;margin-bottom:14px;font-family:'Playfair Display',serif;letter-spacing:.5px">${title}</div>${html}</div>` : '';
  const expHTML = s.experience.map(x => `<div style="margin-bottom:14px"><div style="display:flex;justify-content:space-between"><span style="font-weight:700;font-size:15px">${e(x.role)} — <span style="font-style:italic;font-weight:400">${e(x.company)}</span></span><span style="font-size:13px;color:#666">${e(x.start)}${x.start&&x.end?' – ':''}${e(x.end)}</span></div>${x.desc?`<p style="font-size:14px;color:#555;margin-top:5px;line-height:1.7">${e(x.desc)}</p>`:''}</div>`).join('');
  const eduHTML = s.education.map(x => `<div style="margin-bottom:12px"><div style="font-weight:700;font-size:15px">${e(x.school)}</div><div style="font-size:14px;font-style:italic;color:#555">${e(x.degree)}</div><div style="font-size:13px;color:#888">${e(x.year)}${x.gpa?` · GPA ${e(x.gpa)}`:''}</div></div>`).join('');
  const infoRow = [s.email&&`📧 ${e(s.email)}`, s.phone&&`📞 ${e(s.phone)}`, s.location&&`📍 ${e(s.location)}`, s.website&&`🌐 ${e(s.website)}`].filter(Boolean).join('  &bull;  ');
  const skillHTML = s.skills.map(sk=>`<span style="background:#f1f5f9;padding:4px 12px;border-radius:4px;font-size:13px;margin:3px;display:inline-block">${e(sk)}</span>`).join('');
  const langHTML = s.languages.map(l=>`<span style="font-size:14px;color:#444"><strong>${e(l.lang)}</strong> (${e(l.level)})</span>`).join(' &nbsp;·&nbsp; ');
  const certHTML = s.certifications.map(c=>`<div style="font-size:14px;margin-bottom:6px"><strong>${e(c.name)}</strong> — ${e(c.issuer)} ${c.year?`(${e(c.year)})`:''}  </div>`).join('');
  return `<div style="background:#fff;padding:44px 52px;min-height:297mm;font-family:'Georgia',serif;color:#1a1a2e">
    <div style="text-align:center;margin-bottom:26px;border-bottom:2px solid #1a1a2e;padding-bottom:20px">
      ${s.photo ? `<div style="margin-bottom:14px">${photoImg(90,'margin:0 auto;display:block;border:2px solid #1a1a2e')}</div>` : ''}
      <div style="font-family:'Playfair Display',serif;font-size:36px;font-weight:700;letter-spacing:1px">${e(s.name,'Your Name')}</div>
      <div style="font-size:16px;color:#555;margin-top:8px;font-style:italic">${e(s.title,'Job Title')}</div>
      ${infoRow ? `<div style="font-size:13px;color:#777;margin-top:10px">${infoRow}</div>` : ''}
    </div>
    ${sec('Profile', s.summary ? `<p style="font-size:14px;color:#444;line-height:1.8;text-align:justify">${e(s.summary)}</p>` : '')}
    ${sec('Professional Experience', expHTML)}
    ${sec('Education', eduHTML)}
    ${sec('Skills', skillHTML)}
    ${sec('Languages', langHTML)}
    ${sec('Certifications', certHTML)}
  </div>`;
}

/* ===== TEMPLATE: MINIMAL ===== */
function tmplMinimal(s) {
  const sec = (title, html) => html ? `<div style="margin-bottom:26px"><div style="font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#999;margin-bottom:12px;font-weight:600">${title}</div><div style="border-top:1px solid #e8e8e8;padding-top:14px">${html}</div></div>` : '';
  const expHTML = s.experience.map(x=>`<div style="margin-bottom:18px;display:flex;gap:18px"><div style="width:66px;text-align:right;font-size:12px;color:#bbb;flex-shrink:0;padding-top:3px">${e(x.start)}<br/>${x.end?'→':''}<br/>${e(x.end)}</div><div><div style="font-weight:600;font-size:15px;color:#111">${e(x.role)}</div><div style="font-size:14px;color:#888;margin-bottom:5px">${e(x.company)}</div>${x.desc?`<p style="font-size:14px;color:#666;line-height:1.7">${e(x.desc)}</p>`:''}</div></div>`).join('');
  const eduHTML = s.education.map(x=>`<div style="margin-bottom:14px"><div style="font-weight:600;font-size:15px">${e(x.school)}</div><div style="font-size:14px;color:#888">${e(x.degree)} ${x.year?`· ${e(x.year)}`:''}</div></div>`).join('');
  const skillHTML = s.skills.map(sk=>`<span style="border:1px solid #ddd;padding:5px 16px;border-radius:30px;font-size:13px;color:#444;margin:4px;display:inline-block">${e(sk)}</span>`).join('');
  const langHTML = s.languages.map(l=>`<div style="font-size:14px;margin-bottom:5px"><strong>${e(l.lang)}</strong> — ${e(l.level)}</div>`).join('');
  const certHTML = s.certifications.map(c=>`<div style="font-size:14px;margin-bottom:7px">${e(c.name)} ${c.issuer?`<span style="color:#999">· ${e(c.issuer)}</span>`:''} ${c.year?`<span style="color:#bbb">${e(c.year)}</span>`:''}</div>`).join('');
  return `<div style="background:#fff;padding:52px 56px;min-height:297mm;font-family:'Inter',sans-serif;color:#111">
    <div style="display:flex;align-items:center;gap:22px;margin-bottom:40px">
      ${s.photo ? photoImg(80,'border:1px solid #e0e0e0') : ''}
      <div>
        <div style="font-size:32px;font-weight:300;letter-spacing:-1px;color:#111">${e(s.name,'Your Name')}</div>
        <div style="font-size:15px;color:#888;margin-top:5px;font-weight:400">${e(s.title,'Job Title')}</div>
        <div style="display:flex;flex-wrap:wrap;gap:14px;margin-top:10px">
          ${s.email?`<span style="font-size:13px;color:#aaa">${e(s.email)}</span>`:''}
          ${s.phone?`<span style="font-size:13px;color:#aaa">${e(s.phone)}</span>`:''}
          ${s.location?`<span style="font-size:13px;color:#aaa">${e(s.location)}</span>`:''}
        </div>
      </div>
    </div>
    ${sec('About', s.summary ? `<p style="font-size:14px;color:#555;line-height:1.85">${e(s.summary)}</p>` : '')}
    ${sec('Experience', expHTML)}
    ${sec('Education', eduHTML)}
    ${sec('Skills', skillHTML)}
    ${sec('Languages', langHTML)}
    ${sec('Certifications', certHTML)}
  </div>`;
}

/* ===== TEMPLATE: BOLD ===== */
function tmplBold(s) {
  const sec = (title, html) => html ? `<div style="margin-bottom:24px"><div style="background:#111;color:#fff;padding:7px 18px;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px">${title}</div>${html}</div>` : '';
  const expHTML = s.experience.map(x=>`<div style="margin-bottom:16px;padding-left:14px;border-left:3px solid #6366f1"><div style="display:flex;justify-content:space-between"><span style="font-weight:700;font-size:15px">${e(x.role)}</span><span style="font-size:13px;color:#888">${e(x.start)}${x.start&&x.end?' – ':''}${e(x.end)}</span></div><div style="font-size:14px;color:#6366f1;font-weight:600">${e(x.company)}</div>${x.desc?`<p style="font-size:14px;color:#555;margin-top:5px;line-height:1.7">${e(x.desc)}</p>`:''}</div>`).join('');
  const eduHTML = s.education.map(x=>`<div style="margin-bottom:12px;padding-left:14px;border-left:3px solid #111"><div style="font-weight:700;font-size:15px">${e(x.school)}</div><div style="font-size:14px;color:#555">${e(x.degree)} ${x.year?`· ${e(x.year)}`:''}</div></div>`).join('');
  const skillHTML = s.skills.map(sk=>`<span style="background:#111;color:#fff;padding:5px 14px;border-radius:4px;font-size:13px;margin:3px;display:inline-block;font-weight:600">${e(sk)}</span>`).join('');
  const langHTML = s.languages.map(l=>`<div style="font-size:14px;margin-bottom:5px;font-weight:600">${e(l.lang)} <span style="font-weight:400;color:#666">${e(l.level)}</span></div>`).join('');
  return `<div style="background:#fff;min-height:297mm;font-family:'Inter',sans-serif">
    <div style="background:#111;color:#fff;padding:36px 40px 28px">
      <div style="display:flex;align-items:center;gap:22px">
        ${s.photo ? photoImg(90,'border:3px solid rgba(255,255,255,.3)') : ''}
        <div>
          <div style="font-size:34px;font-weight:900;letter-spacing:-1px;line-height:1">${e(s.name,'YOUR NAME')}</div>
          <div style="font-size:16px;color:#a5b4fc;font-weight:600;margin-top:8px">${e(s.title,'Job Title')}</div>
        </div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:18px;margin-top:20px;font-size:13px;color:#aaa">
        ${s.email?`<span>📧 ${e(s.email)}</span>`:''}
        ${s.phone?`<span>📞 ${e(s.phone)}</span>`:''}
        ${s.location?`<span>📍 ${e(s.location)}</span>`:''}
        ${s.website?`<span>🌐 ${e(s.website)}</span>`:''}
      </div>
    </div>
    <div style="padding:30px 40px">
      ${s.summary?`<div style="margin-bottom:24px;background:#f9f9f9;border-left:4px solid #6366f1;padding:16px 18px"><p style="font-size:14px;color:#444;line-height:1.75">${e(s.summary)}</p></div>`:''}
      ${sec('Experience', expHTML)}
      ${sec('Education', eduHTML)}
      ${sec('Skills', skillHTML)}
      ${sec('Languages', langHTML)}
    </div>
  </div>`;
}

/* ===== TEMPLATE: ELEGANT ===== */
function tmplElegant(s) {
  const sec = (title, html) => html ? `<div style="margin-bottom:24px"><div style="font-size:11px;letter-spacing:3px;font-weight:700;text-transform:uppercase;color:#7c3aed;margin-bottom:12px;display:flex;align-items:center;gap:8px">${title}<div style="flex:1;height:1px;background:linear-gradient(90deg,#ede9fe,transparent)"></div></div>${html}</div>` : '';
  const expHTML = s.experience.map(x=>`<div style="margin-bottom:16px"><div style="display:flex;justify-content:space-between"><span style="font-weight:700;font-size:15px;color:#1a1a2e">${e(x.role)}</span><span style="font-size:13px;color:#999;background:#f3f0ff;padding:2px 10px;border-radius:10px">${e(x.start)}${x.start&&x.end?' – ':''}${e(x.end)}</span></div><div style="font-size:14px;color:#7c3aed;font-weight:600;margin-bottom:5px">${e(x.company)}</div>${x.desc?`<p style="font-size:14px;color:#555;line-height:1.7">${e(x.desc)}</p>`:''}</div>`).join('');
  const eduHTML = s.education.map(x=>`<div style="margin-bottom:12px"><div style="font-weight:700;font-size:15px">${e(x.school)}</div><div style="font-size:14px;color:#555">${e(x.degree)} ${x.year?`· ${e(x.year)}`:''}</div></div>`).join('');
  const skillHTML = s.skills.map(sk=>`<span style="background:linear-gradient(135deg,#ede9fe,#faf5ff);border:1px solid #ddd6fe;color:#7c3aed;border-radius:20px;padding:5px 16px;font-size:13px;margin:4px;display:inline-block;font-weight:600">${e(sk)}</span>`).join('');
  const langHTML = s.languages.map(l=>`<div style="display:flex;justify-content:space-between;font-size:14px;margin-bottom:7px"><span style="font-weight:600">${e(l.lang)}</span><span style="color:#7c3aed;background:#f3f0ff;padding:2px 10px;border-radius:10px;font-size:13px">${e(l.level)}</span></div>`).join('');
  const certHTML = s.certifications.map(c=>`<div style="margin-bottom:10px"><div style="font-size:14px;font-weight:700">${e(c.name)}</div><div style="font-size:13px;color:#888">${e(c.issuer)}${c.year?` · ${e(c.year)}`:''}</div></div>`).join('');
  return `<div style="background:#fff;min-height:297mm;font-family:'DM Sans',sans-serif;color:#1a1a2e">
    <div style="background:linear-gradient(135deg,#1e1b4b 0%,#312e81 60%,#4c1d95 100%);padding:40px;color:#fff;text-align:center">
      ${s.photo ? `<div style="margin-bottom:16px">${photoImg(92,'border:3px solid rgba(255,255,255,.4);margin:0 auto;display:block')}</div>` : ''}
      <div style="font-size:30px;font-weight:800;letter-spacing:.5px">${e(s.name,'Your Name')}</div>
      <div style="font-size:15px;color:#c4b5fd;margin-top:8px;font-weight:500">${e(s.title,'Job Title')}</div>
      <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:16px;margin-top:16px;font-size:13px;color:rgba(255,255,255,.75)">
        ${s.email?`<span>${e(s.email)}</span>`:''}
        ${s.phone?`<span>${e(s.phone)}</span>`:''}
        ${s.location?`<span>${e(s.location)}</span>`:''}
      </div>
    </div>
    <div style="padding:34px 40px">
      ${s.summary?`${sec('Profile',`<p style="font-size:14px;color:#555;line-height:1.8">${e(s.summary)}</p>`)}`:''}
      ${sec('Experience', expHTML)}
      ${sec('Education', eduHTML)}
      ${sec('Skills', skillHTML)}
      ${sec('Languages', langHTML)}
      ${sec('Certifications', certHTML)}
    </div>
  </div>`;
}

/* ===== TEMPLATE: SIMPLE CLASSIC ===== */
function tmplSimple(s) {
  const HR = `<hr style="border:none;border-top:1px solid #ccc;margin:16px 0" />`;
  const secTitle = title =>
    `<h2 style="font-size:18px;font-weight:700;color:#111;margin:0 0 8px 0">${title}</h2>`;

  // Header: name left, photo top-right
  const photoBox = s.photo
    ? `<img src="${s.photo}" style="width:90px;height:110px;object-fit:cover;border:1px solid #ccc;border-radius:2px;flex-shrink:0" />`
    : '';

  const contactLines = [
    s.phone    && `<div style="font-size:14px;color:#222;margin-bottom:6px">📞 ${e(s.phone)}</div>`,
    s.email    && `<div style="font-size:14px;color:#222;margin-bottom:6px">✉ ${e(s.email)}</div>`,
    s.location && `<div style="font-size:14px;color:#222;margin-bottom:6px">🏠 ${e(s.location)}</div>`,
    s.website  && `<div style="font-size:14px;color:#222;margin-bottom:6px">🌐 ${e(s.website)}</div>`,
    s.linkedin && `<div style="font-size:14px;color:#222;margin-bottom:6px">in ${e(s.linkedin)}</div>`,
    s.github   && `<div style="font-size:14px;color:#222;margin-bottom:6px">⌥ ${e(s.github)}</div>`
  ].filter(Boolean).join('');

  const expHTML = s.experience.length ? (
    s.experience.map(x => `
      <div style="margin-bottom:14px">
        <div style="font-weight:700;font-size:15px">${e(x.role)}</div>
        <div style="font-style:italic;font-size:14px;color:#333">${e(x.company)}</div>
        ${x.start||x.end ? `<div style="font-size:13px;color:#666">${e(x.start)}${x.start&&x.end?' – ':''}${e(x.end)}</div>` : ''}
        ${x.desc ? `<p style="font-size:14px;color:#444;margin-top:5px;line-height:1.7">${e(x.desc)}</p>` : ''}
      </div>`).join('')
  ) : '';

  const eduHTML = s.education.length ? (
    s.education.map(x => `
      <div style="margin-bottom:14px">
        <div style="font-weight:700;font-size:15px">${e(x.degree)}</div>
        <div style="font-style:italic;font-size:14px;color:#333">${e(x.school)}</div>
        ${x.year ? `<div style="font-size:13px;color:#666">Completed Year: ${e(x.year)}</div>` : ''}
        ${x.gpa ? `<div style="font-size:13px;color:#666">GPA: ${e(x.gpa)}</div>` : ''}
      </div>`).join('')
  ) : '';

  const skillHTML = s.skills.length
    ? `<ul style="margin:0;padding-left:24px">${s.skills.map(sk=>`<li style="font-size:15px;color:#333;margin-bottom:7px">${e(sk)}</li>`).join('')}</ul>`
    : '';

  const langHTML = s.languages.length
    ? `<ul style="margin:0;padding-left:24px">${s.languages.map(l=>`<li style="font-size:15px;color:#333;margin-bottom:7px">${e(l.lang)} – ${e(l.level)}</li>`).join('')}</ul>`
    : '';

  const certHTML = s.certifications.length ? (
    s.certifications.map(c => `
      <div style="margin-bottom:10px">
        <div style="font-weight:700;font-size:15px">${e(c.name)}</div>
        <div style="font-size:14px;color:#555">${e(c.issuer)}${c.year ? ` · ${e(c.year)}` : ''}</div>
      </div>`).join('')
  ) : '';

  const declText = s.declaration || 'I hereby declare that the above details furnished by me are true to the best of my knowledge and belief.';

  return `<div style="background:#fff;padding:40px 48px;min-height:297mm;font-family:Arial,sans-serif;color:#111">

    <!-- HEADER -->
    <div style="display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:16px;border-bottom:1.5px solid #bbb;margin-bottom:20px">
      <div style="flex:1">
        <div style="font-size:30px;font-weight:700;color:#111;margin-bottom:5px">${e(s.name,'Your Name')}</div>
        <div style="font-size:16px;font-weight:700;color:#333;margin-bottom:12px">${e(s.title,'Job Title')}</div>
        ${contactLines}
      </div>
      ${photoBox}
    </div>

    ${s.summary ? `${secTitle('Professional Summary')}${HR}<p style="font-size:15px;color:#333;line-height:1.75;margin-bottom:20px">${e(s.summary)}</p>` : ''}

    ${expHTML ? `${secTitle('Work Experience')}${HR}<div style="margin-bottom:20px">${expHTML}</div>` : ''}

    ${eduHTML ? `${secTitle('Education')}${HR}<div style="margin-bottom:20px">${eduHTML}</div>` : ''}

    ${skillHTML ? `${secTitle('Skills')}${HR}<div style="margin-bottom:20px">${skillHTML}</div>` : ''}

    ${langHTML ? `${secTitle('Languages')}${HR}<div style="margin-bottom:20px">${langHTML}</div>` : ''}

    ${certHTML ? `${secTitle('Certifications')}${HR}<div style="margin-bottom:20px">${certHTML}</div>` : ''}

    <div style="margin-top:14px">
      <div style="font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#111;margin-bottom:8px">DECLARATION</div>
      <p style="font-size:14px;color:#444;line-height:1.75">${e(declText)}</p>
    </div>

  </div>`;
}

/* ===== MAIN RENDER ===== */
function renderCV() {
  const paper = document.getElementById('cvPaper');
  if (!paper) return;
  const renderers = { modern: tmplModern, classic: tmplClassic, minimal: tmplMinimal, bold: tmplBold, elegant: tmplElegant, simple: tmplSimple };
  const fn = renderers[state.template] || tmplModern;
  paper.innerHTML = fn(state);
  paper.style.width = '210mm';
  paper.style.minHeight = '297mm';
  
  if (window.innerWidth <= 768) {
    autoZoomForMobile();
  } else {
    paper.style.transform = `scale(${zoomScale})`;
    const zoomLabel = document.getElementById('zoomLabel');
    if (zoomLabel) zoomLabel.textContent = Math.round(zoomScale * 100) + '%';
  }
}

/* ===== MOBILE RESPONSIVE TABS & SCALING ===== */
let activeMobileTab = 'form';

function switchMobileTab(tab) {
  activeMobileTab = tab;
  const formPanel = document.querySelector('.form-panel');
  const previewPanel = document.querySelector('.preview-panel');
  const tabFormBtn = document.getElementById('tab-form');
  const tabPreviewBtn = document.getElementById('tab-preview');
  
  if (tab === 'form') {
    if (formPanel) formPanel.style.display = 'flex';
    if (previewPanel) previewPanel.style.display = 'none';
    if (tabFormBtn) tabFormBtn.classList.add('active');
    if (tabPreviewBtn) tabPreviewBtn.classList.remove('active');
  } else {
    if (formPanel) formPanel.style.display = 'none';
    if (previewPanel) previewPanel.style.display = 'flex';
    if (tabFormBtn) tabFormBtn.classList.remove('active');
    if (tabPreviewBtn) tabPreviewBtn.classList.add('active');
    
    // Auto scale preview for mobile viewport
    setTimeout(autoZoomForMobile, 50);
  }
}

function autoZoomForMobile() {
  if (window.innerWidth <= 768) {
    const viewport = document.getElementById('cvViewport');
    const paper = document.getElementById('cvPaper');
    if (viewport && paper) {
      const pad = 16 * 2; // smaller padding on mobile
      const availableWidth = viewport.clientWidth - pad;
      const paperWidth = 794; // 210mm in pixels at 96 DPI
      const scale = Math.min(1.0, availableWidth / paperWidth);
      paper.style.transform = `scale(${scale})`;
      paper.style.transformOrigin = 'top center';
      const zoomLabel = document.getElementById('zoomLabel');
      if (zoomLabel) zoomLabel.textContent = Math.round(scale * 100) + '%';
    }
  } else {
    const paper = document.getElementById('cvPaper');
    if (paper) {
      paper.style.transform = `scale(${zoomScale})`;
      paper.style.transformOrigin = 'top center';
    }
    const zoomLabel = document.getElementById('zoomLabel');
    if (zoomLabel) zoomLabel.textContent = Math.round(zoomScale * 100) + '%';
  }
}

// Set resize listener
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    // Restore default desktop side-by-side view
    const formPanel = document.querySelector('.form-panel');
    const previewPanel = document.querySelector('.preview-panel');
    if (formPanel) formPanel.style.display = 'flex';
    if (previewPanel) previewPanel.style.display = 'flex';
  } else {
    // Re-evaluate mobile view active tab
    switchMobileTab(activeMobileTab);
  }
  autoZoomForMobile();
});

/* ===== SAVE & DOWNLOAD MODAL CONTROL ===== */
function openDownloadModal() {
  document.getElementById('downloadModal').classList.add('show');
}

function closeDownloadModal() {
  document.getElementById('downloadModal').classList.remove('show');
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('downloadModal');
  if (event.target === modal) {
    closeDownloadModal();
  }
};

/* ===== PREMIUM PDF DOWNLOAD (via html2pdf) ===== */
function downloadPDF() {
  if (typeof html2pdf === 'undefined') {
    showToast('⚠️ PDF generator library not loaded. Using print fallback...');
    downloadCVPrint();
    return;
  }

  const element = document.getElementById('cvPaper');
  const originalTransform = element.style.transform;
  const originalTransformOrigin = element.style.transformOrigin;
  
  // Set scale to 1 for standard rendering size
  element.style.transform = 'none';
  element.style.transformOrigin = 'top left';

  const opt = {
    margin:       0,
    filename:     `${state.name || 'Resume'}_CV.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true, letterRendering: true },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  showToast('⏳ Generating high-quality PDF...');

  html2pdf().from(element).set(opt).save().then(() => {
    element.style.transform = originalTransform;
    element.style.transformOrigin = originalTransformOrigin;
    showToast('✅ PDF downloaded successfully!');
  }).catch(err => {
    element.style.transform = originalTransform;
    element.style.transformOrigin = originalTransformOrigin;
    console.error('PDF Generation Error:', err);
    showToast('⚠️ Direct PDF download failed. Opening system print...');
    downloadCVPrint();
  });
}

/* ===== PREMIUM IMAGE DOWNLOAD (via html2canvas for Gallery) ===== */
function downloadImage() {
  if (typeof html2canvas === 'undefined') {
    showToast('⚠️ Image generator library not loaded. Try PDF instead.');
    return;
  }

  const element = document.getElementById('cvPaper');
  const originalTransform = element.style.transform;
  const originalTransformOrigin = element.style.transformOrigin;

  // Set scale to 1 for standard rendering size
  element.style.transform = 'none';
  element.style.transformOrigin = 'top left';

  showToast('⏳ Generating image for gallery...');

  html2canvas(element, {
    scale: 2.5, // Ultra-sharp image
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#ffffff'
  }).then(canvas => {
    element.style.transform = originalTransform;
    element.style.transformOrigin = originalTransformOrigin;
    
    const link = document.createElement('a');
    link.download = `${state.name || 'Resume'}_CV.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('✅ Image saved to your gallery/downloads!');
  }).catch(err => {
    element.style.transform = originalTransform;
    element.style.transformOrigin = originalTransformOrigin;
    console.error('Image Generation Error:', err);
    showToast('❌ Failed to generate image. Try PDF instead.');
  });
}

/* ===== PRINT CV (SYSTEM PRINT DIALOG FALLBACK) ===== */
function downloadCVPrint() {
  const renderers = { modern: tmplModern, classic: tmplClassic, minimal: tmplMinimal, bold: tmplBold, elegant: tmplElegant, simple: tmplSimple };
  const fn = renderers[state.template] || tmplModern;
  const cvHTML = fn(state);
  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html><html><head>
    <meta charset="UTF-8"/>
    <title>${state.name || 'My CV'} - CV</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      @page { size: A4; margin: 0; }
      @media print { body { margin: 0; } }
    </style>
  </head><body>${cvHTML}</body></html>`);
  win.document.close();
  setTimeout(() => { win.print(); }, 600);
  showToast('📄 Print dialog opened!');
}

/* ===== TOAST ===== */
function showToast(msg) {
  const t = document.getElementById('toast');
  if (t) {
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
  }
}

/* ===== INIT ===== */
window.onload = () => {
  showView('hero');
  buildTemplateGrid();
  renderForms();
  render();
};
