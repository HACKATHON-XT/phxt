"use strict";

/* =====================================================================
   CampusHub — c.js  (vanilla JS, sin librerías)
   ---------------------------------------------------------------------
   ⚠️ ZONA EDITABLE PARA HUMANOS: todo el contenido del demo vive en
   SEED (justo aquí abajo). Cambien textos, cursos, lecciones, videos,
   enlaces, posts... sin tocar NADA por debajo de la línea marcada.
   Si rompen algo: Settings → "Reiniciar demo".
   ===================================================================== */

const SEED = {

  users: [
    { id:"u1", name:"Ana Torres",  role:"Estudiante", color:"blue",   initials:"AT" },
    { id:"u2", name:"Leo Márquez", role:"Estudiante", color:"green",  initials:"LM" },
    { id:"u3", name:"Caro Rivas",  role:"Profesora",  color:"purple", initials:"CR" },
    { id:"u4", name:"Sam Ortega",  role:"Estudiante", color:"orange", initials:"SO" }
  ],

  events: [
    { day:"VIE 14", tone:"red",    title:"Cierre del quiz · Paper 1",    sub:"Top Science G10 · 23:59" },
    { day:"LUN 17", tone:"blue",   title:"Sesión en vivo: Integrales",   sub:"Matemáticas AA HL · 18:00" },
    { day:"MIÉ 19", tone:"orange", title:"Entrega del laboratorio",      sub:"Top Science G10 · 12:00" },
    { day:"VIE 21", tone:"green",  title:"Reto semanal de la comunidad", sub:"Comunidad · Todo el día" }
  ],

  communityPosts: [
    {
      id:"p1", userId:"u3", time:"Hoy · 09:41",
      text:"¡Bienvenidos al nuevo semestre! 🎉 Esta semana publiqué el calendario de Paper 1 en Top Science G10. Revisen la checklist de la lección antes del viernes.",
      reactions:{ "👍":["u1","u2","u4"], "🔥":["u2"] },
      comments:[ { userId:"u1", text:"¡Gracias profe! Ahí voy 🙌", time:"Hoy · 10:02" } ]
    },
    {
      id:"p2", userId:"u1", time:"Hoy · 08:15",
      text:"¿Alguien tiene apuntes de la lección de integrales? Los cambio por mi resumen de cinemática 📝",
      reactions:{ "💡":["u4"] },
      comments:[]
    },
    {
      id:"p3", userId:"u2", time:"Ayer · 19:03",
      text:"Terminé la checklist de Paper 1 ✅ El video de la lección 2 está buenísimo, móchenlo.",
      reactions:{ "👍":["u1","u3"], "❤️":["u4"] },
      comments:[ { userId:"u3", text:"¡Excelente Leo! Mañana revisamos tus dudas en clase.", time:"Ayer · 20:10" } ]
    },
    {
      id:"p4", userId:"u4", time:"Ayer · 12:40",
      text:"Recordatorio: el viernes cierra el quiz 🚨 No se les olvide.",
      reactions:{ "🔥":["u2"] },
      comments:[]
    }
  ],

  courses: [
    {
      id:"c1", emoji:"🔬", color:"green", instructor:"u3",
      title:"Top Science G10",
      desc:"Física y Química de G10: laboratorios, preparación del Paper 1 y resolución de problemas semana a semana.",
      members:["u1","u2","u4"],
      modules:[
        {
          id:"m1", title:"Módulo 1 · Cinemática",
          pages:[
            {
              id:"m1p1", icon:"📄", title:"Visión general",
              blocks:[
                { type:"text", content:"En esta unidad estudiamos movimiento: velocidad, aceleración y gráficas de posición. Es la base de todo el Paper 1 de física." },
                { type:"callout", tone:"blue", emoji:"💡", content:"Idea clave: la velocidad es la pendiente de la gráfica posición–tiempo. Si la gráfica es una recta, la velocidad es constante." },
                { type:"quote", content:"La física es nuestro mejor intento de describir el universo con matemáticas." },
                { type:"divider" }
              ]
            },
            {
              id:"m1p2", icon:"🎬", title:"Paper 1 · Direct QA",
              blocks:[
                { type:"text", content:"Video de la lección y banco de preguntas resueltas. Marca tu avance en la checklist — tu progreso se guarda en este navegador." },
                { type:"video", title:"Cinemática explicada paso a paso", url:"https://www.youtube.com/watch?v=aircAruvnKk" },
                { type:"checklist", title:"Antes del viernes", items:[
                  { id:"m1p2i1", label:"Ver el video completo" },
                  { id:"m1p2i2", label:"Resolver las 10 preguntas de QA" },
                  { id:"m1p2i3", label:"Publicar dudas en la comunidad" }
                ]},
                { type:"callout", tone:"yellow", emoji:"⚠️", content:"El quiz cierra el viernes a las 23:59. No hay extensión." }
              ]
            },
            {
              id:"m1p3", icon:"📝", title:"Resumen de fórmulas",
              blocks:[
                { type:"callout", tone:"brown", emoji:"📌", content:"v = v₀ + a·t    ·    x = x₀ + v₀·t + ½·a·t²    ·    v² = v₀² + 2·a·Δx" },
                { type:"text", content:"Estas tres ecuaciones resuelven el 80% de las preguntas de cinemática del Paper 1. Identifica siempre qué variables conoces y cuál te piden." },
                { type:"link", title:"Notion · Banco de fórmulas y ejemplos", url:"https://www.notion.so" }
              ]
            }
          ]
        },
        {
          id:"m2", title:"Módulo 2 · Laboratorio",
          pages:[
            {
              id:"m2p1", icon:"🧪", title:"Práctica: densidad",
              blocks:[
                { type:"text", content:"Guía de la práctica de densidad: materiales, procedimiento y cómo reportar resultados con incertidumbre." },
                { type:"checklist", title:"Entregables de la práctica", items:[
                  { id:"m2p1i1", label:"Tabla de datos con 5 mediciones" },
                  { id:"m2p1i2", label:"Gráfica masa vs. volumen" },
                  { id:"m2p1i3", label:"Conclusión de 5 líneas" }
                ]},
                { type:"callout", tone:"green", emoji:"✅", content:"Entrega en clase, miércoles 19. Trabajo en parejas permitido." }
              ]
            }
          ]
        }
      ]
    },
    {
      id:"c2", emoji:"➗", color:"blue", instructor:"u3",
      title:"Matemáticas AA HL",
      desc:"Cálculo, integrales y preparación del Paper 2. Nivel Analysis & Approaches Higher Level.",
      members:["u2"],
      modules:[
        {
          id:"c2m1", title:"Módulo 1 · Cálculo",
          pages:[
            {
              id:"c2m1p1", icon:"📄", title:"Bienvenida al curso",
              blocks:[
                { type:"text", content:"En este módulo construimos la intuición del cálculo: derivadas como tasas de cambio e integrales como acumulación." },
                { type:"callout", tone:"purple", emoji:"🧠", content:"Consejo: antes de calcular, dibuja. La mitad de los errores del Paper 2 son de interpretación, no de álgebra." },
                { type:"checklist", title:"Rampa de inicio", items:[
                  { id:"c2m1p1i1", label:"Repasar derivadas básicas" },
                  { id:"c2m1p1i2", label:"Hacer el diagnóstico inicial" }
                ]}
              ]
            },
            {
              id:"c2m1p2", icon:"🎬", title:"Integrales paso a paso",
              blocks:[
                { type:"text", content:"Sesión grabada: integrales definidas, área bajo la curva y el teorema fundamental del cálculo." },
                { type:"video", title:"Essence of calculus · capítulo 1", url:"https://www.youtube.com/watch?v=WUvTyaaNkzM" },
                { type:"link", title:"Notion · Ejercicios resueltos", url:"https://www.notion.so" }
              ]
            }
          ]
        }
      ]
    },
    {
      id:"c3", emoji:"🚀", color:"orange", instructor:"u3",
      title:"Productividad Avanzada",
      desc:"Métodos de estudio, gestión del tiempo y hábitos: estudia menos horas y aprende más.",
      members:[],
      modules:[
        {
          id:"c3m1", title:"Módulo 1 · Fundamentos",
          pages:[
            {
              id:"c3m1p1", icon:"📄", title:"Método de estudio en 5 pasos",
              blocks:[
                { type:"text", content:"El ciclo: leer activamente → resumir con tus palabras → autoexaminarte → espaciar repasos → enseñar a alguien. Enseñar es la prueba final del aprendizaje." },
                { type:"callout", tone:"orange", emoji:"🔥", content:"Regla 25/5: 25 minutos de foco total, 5 de descanso. Cuatro ciclos y descanso largo." },
                { type:"checklist", title:"Arma tu sistema", items:[
                  { id:"c3m1p1i1", label:"Definir mi horario de foco" },
                  { id:"c3m1p1i2", label:"Elegir mi método de resumen" },
                  { id:"c3m1p1i3", label:"Programar el primer repaso espaciado" }
                ]}
              ]
            },
            {
              id:"c3m1p2", icon:"🔗", title:"Recursos y plantillas",
              blocks:[
                { type:"link", title:"Notion · Plantilla de planificador semanal", url:"https://www.notion.so" },
                { type:"link", title:"Pomodoro en línea", url:"https://pomofocus.io" },
                { type:"quote", content:"No se trata de tener más tiempo, sino de proteger el que ya tienes." }
              ]
            }
          ]
        }
      ]
    },
    {
      id:"c4", emoji:"📖", color:"purple", instructor:"u3",
      title:"Literatura & Análisis",
      desc:"Análisis de textos, escritura de ensayos y discusión de las lecturas del semestre.",
      members:["u1"],
      modules:[
        {
          id:"c4m1", title:"Módulo 1 · El ensayo",
          pages:[
            {
              id:"c4m1p1", icon:"📄", title:"Cómo estructurar un ensayo",
              blocks:[
                { type:"text", content:"Tesis clara, tres argumentos con evidencia y un cierre que responda '¿y qué?'. La tesis es una oración discutible, no un resumen." },
                { type:"callout", tone:"pink", emoji:"✍️", content:"Plantilla de tesis: 'Aunque X parece Y, en realidad Z, porque E.'" },
                { type:"checklist", title:"Antes de entregar", items:[
                  { id:"c4m1p1i1", label:"¿Mi tesis es discutible?" },
                  { id:"c4m1p1i2", label:"¿Cada párrafo cita evidencia?" },
                  { id:"c4m1p1i3", label:"Leerlo en voz alta una vez" }
                ]}
              ]
            }
          ]
        }
      ]
    }
  ]
};

/* =====================================================================
   ⬇️ FIN DE LA ZONA EDITABLE — NO MODIFICAR DE AQUÍ HACIA ABAJO ⬇️
   ===================================================================== */

/* ---------- STORE (localStorage) ---------- */
const STORE_KEY = "campushub_demo_v1";
let db = null;

function loadDB(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(raw) db = JSON.parse(raw);
  }catch(e){ db = null; }
  if(!db || db.__v !== 1){
    db = JSON.parse(JSON.stringify(SEED));
    db.__v = 1;
    db.currentUserId = null;
    db.progress = {};
    saveDB();
  }
}
function saveDB(){ localStorage.setItem(STORE_KEY, JSON.stringify(db)); }
function resetDB(){
  if(confirm("¿Reiniciar todos los datos del demo?")){
    localStorage.removeItem(STORE_KEY);
    location.reload();
  }
}

/* ---------- HELPERS ---------- */
const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
function esc(s){
  return String(s).replace(/[&<>"']/g, c =>
    ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function userById(id){ return db.users.find(u => u.id === id); }
function courseById(id){ return db.courses.find(c => c.id === id); }
function me(){ return userById(db.currentUserId) || null; }
function nowLabel(){
  const d = new Date();
  return d.toLocaleDateString("es-ES",{day:"numeric",month:"short"}) +
         " · " + d.toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"});
}
function progressOf(uid){ return db.progress[uid] || (db.progress[uid] = {}); }
function allChecklistBlocks(course){
  return course.modules.flatMap(m => m.pages)
                       .flatMap(p => p.blocks)
                       .filter(b => b.type === "checklist");
}
function allChecklistItems(course){
  return allChecklistBlocks(course).flatMap(b => b.items);
}

const REACTIONS = ["👍","❤️","🔥","💡"];
const REACT_TONES = { "👍":"blue", "❤️":"red", "🔥":"orange", "💡":"yellow" };

let toastTimer = null;
function toast(msg){
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

/* ---------- ROUTER SPA ---------- */
let currentView = "community";
function show(name){
  currentView = name;
  $$(".view").forEach(v => v.classList.toggle("active", v.id === "view-" + name));
  $$("#main-tabs .tab").forEach(t => t.classList.toggle("active", t.dataset.view === name));
  window.scrollTo(0, 0);
}

/* ---------- LOGIN ---------- */
function renderLogin(){
  const el = $("#view-login");
  el.innerHTML = `
    <div class="login-wrap">
      <div class="login-card">
        <div class="login-emoji">🎓</div>
        <h1>Bienvenido a CampusHub</h1>
        <p class="muted">Demo: elige tu usuario para entrar. No hay contraseñas.</p>
        <div class="login-users">
          ${db.users.map(u => `
            <button class="login-user" data-user="${u.id}">
              <span class="avatar tone-${u.color}">${u.initials}</span>
              <span><strong>${esc(u.name)}</strong><small>${esc(u.role)}</small></span>
            </button>`).join("")}
        </div>
      </div>
    </div>`;
  el.querySelectorAll(".login-user").forEach(b => {
    b.addEventListener("click", () => {
      db.currentUserId = b.dataset.user;
      saveDB();
      renderAll();
      show("community");
      toast(`Hola, ${me().name.split(" ")[0]} 👋`);
    });
  });
}

function renderUserChip(){
  const chip = $("#user-chip");
  const u = me();
  if(u){ chip.textContent = u.initials; chip.className = "user-chip tone-" + u.color; }
  else { chip.textContent = "··"; chip.className = "user-chip tone-gray"; }
}

/* ---------- COMUNIDAD ---------- */
function postCard(p, openComments = false){
  const u = userById(p.userId) || { name:"Anónimo", color:"gray", initials:"??" };
  return `
  <article class="post card" data-post="${p.id}">
    <header class="post-head">
      <span class="avatar tone-${u.color}">${u.initials}</span>
      <div><strong>${esc(u.name)}</strong> <span class="muted small">· ${esc(p.time)}</span></div>
    </header>
    <p class="post-text">${esc(p.text)}</p>
    <div class="post-actions">
      <div class="reactions">
        ${REACTIONS.map(e => {
          const users = (p.reactions && p.reactions[e]) || [];
          const on = users.includes(db.currentUserId);
          return `<button class="react ${on ? "react-on react-" + REACT_TONES[e] : ""}" data-react="${e}">
                    ${e} ${users.length ? "<b>" + users.length + "</b>" : ""}
                  </button>`;
        }).join("")}
      </div>
      <button class="btn-ghost" data-comments>💬 ${(p.comments || []).length} comentarios</button>
    </div>
    <div class="comments" ${openComments ? "" : "hidden"}>
      <div class="comment-list">
        ${(p.comments || []).map(c => {
          const cu = userById(c.userId) || u;
          return `
          <div class="comment">
            <span class="avatar sm tone-${cu.color}">${cu.initials}</span>
            <div>
              <strong>${esc(cu.name)}</strong> <span class="muted small">${esc(c.time)}</span>
              <p>${esc(c.text)}</p>
            </div>
          </div>`;
        }).join("")}
      </div>
      <div class="comment-row">
        <input type="text" class="comment-input" placeholder="Escribe un comentario...">
        <button class="btn" data-send>Enviar</button>
      </div>
    </div>
  </article>`;
}

function refreshPostCard(postId){
  const card = document.querySelector(`.post[data-post="${postId}"]`);
  if(!card) return;
  const post = db.communityPosts.find(p => p.id === postId);
  const open = card.querySelector(".comments") && !card.querySelector(".comments").hidden;
  card.outerHTML = postCard(post, open);
}

function renderCommunity(){
  const el = $("#view-community");
  const u = me();
  el.innerHTML = `
    <div class="page">
      <div class="page-head">
        <h1>💬 Comunidad</h1>
        <p class="muted">El espacio común de todos los estudiantes.</p>
      </div>
      <div class="composer card">
        <div class="composer-row">
          <span class="avatar tone-${u.color}">${u.initials}</span>
          <textarea id="post-input" rows="2" placeholder="Comparte algo con la comunidad..."></textarea>
        </div>
        <div class="composer-actions">
          <span class="muted small">Publicando como ${esc(u.name)}</span>
          <button class="btn btn-primary" id="btn-post">Publicar</button>
        </div>
      </div>
      <div class="feed" id="feed">
        ${db.communityPosts.map(p => postCard(p)).join("")}
      </div>
    </div>`;

  const input = el.querySelector("#post-input");
  input.addEventListener("keydown", e => {
    if(e.key === "Enter" && !e.shiftKey){ e.preventDefault(); el.querySelector("#btn-post").click(); }
  });

  el.querySelector("#btn-post").addEventListener("click", () => {
    const text = input.value.trim();
    if(!text){ toast("Escribe algo primero 🙂"); return; }
    db.communityPosts.unshift({
      id:"p" + Date.now(), userId: db.currentUserId, text,
      time: nowLabel(), reactions:{}, comments:[]
    });
    saveDB();
    renderCommunity();
    toast("Publicado ✅");
  });

  const feed = el.querySelector("#feed");
  feed.addEventListener("click", e => {
    const card = e.target.closest(".post");
    if(!card) return;
    const post = db.communityPosts.find(p => p.id === card.dataset.post);
    if(!post) return;

    const reactBtn = e.target.closest("[data-react]");
    if(reactBtn){
      const emoji = reactBtn.dataset.react;
      const arr = post.reactions[emoji] || (post.reactions[emoji] = []);
      const i = arr.indexOf(db.currentUserId);
      if(i >= 0) arr.splice(i, 1); else arr.push(db.currentUserId);
      saveDB();
      refreshPostCard(post.id);
      return;
    }
    if(e.target.closest("[data-comments]")){
      const c = card.querySelector(".comments");
      c.hidden = !c.hidden;
      return;
    }
    if(e.target.closest("[data-send]")){
      const inp = card.querySelector(".comment-input");
      const text = inp.value.trim();
      if(!text) return;
      post.comments = post.comments || [];
      post.comments.push({ userId: db.currentUserId, text, time: nowLabel() });
      saveDB();
      refreshPostCard(post.id);
      const nc = document.querySelector(`.post[data-post="${post.id}"] .comments`);
      if(nc) nc.hidden = false;
    }
  });

  feed.addEventListener("keydown", e => {
    if(e.key === "Enter" && e.target.classList.contains("comment-input")){
      e.target.closest(".comment-row").querySelector("[data-send]").click();
    }
  });
}

/* ---------- MARKETPLACE DE CURSOS ---------- */
function renderCourses(){
  const el = $("#view-courses");
  const meId = db.currentUserId;
  el.innerHTML = `
    <div class="page">
      <div class="page-head">
        <h1>📚 Marketplace de Cursos</h1>
        <p class="muted">Únete a un grupo de trabajo y accede a su contenido.</p>
      </div>
      <div class="grid-courses">
        ${db.courses.map(c => {
          const joined = c.members.includes(meId);
          return `
          <article class="course-card card" data-course="${c.id}">
            <div class="ribbon rb-${c.color}"></div>
            <div class="course-body">
              <div class="course-emoji">${c.emoji}</div>
              <h3>${esc(c.title)}</h3>
              <p class="muted">${esc(c.desc)}</p>
              <div class="course-foot">
                <span class="muted small">${c.members.length} miembro${c.members.length === 1 ? "" : "s"}</span>
                <span class="badge ${joined ? "tone-green" : "tone-gray"}">${joined ? "✓ Inscrito" : "Disponible"}</span>
              </div>
            </div>
          </article>`;
        }).join("")}
      </div>
    </div>`;
  el.querySelectorAll(".course-card").forEach(card => {
    card.addEventListener("click", () => openCourse(card.dataset.course));
  });
}

/* ---------- CURSO (WORKSPACE) ---------- */
let currentCourseId = null;
const courseState = { pageId:null };

function openCourse(id){
  currentCourseId = id;
  courseState.pageId = null;
  renderCourse();
  show("course");
}

function findPage(course, pageId){
  for(const m of course.modules){
    const p = m.pages.find(x => x.id === pageId);
    if(p) return p;
  }
  return null;
}

function sidebarHTML(course){
  return course.modules.map(m => `
    <div class="sb-module">
      <div class="sb-module-title">${esc(m.title)}</div>
      ${m.pages.map(p => `
        <button class="sb-page ${p.id === courseState.pageId ? "active" : ""}" data-page="${p.id}">
          <span>${p.icon || "📄"}</span>
          <span class="sb-page-label">${esc(p.title)}</span>
        </button>`).join("")}
    </div>`).join("");
}

function videoBlock(b){
  const m = b.url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{6,})/);
  const embed = m
    ? `<div class="video-embed"><iframe src="https://www.youtube.com/embed/${m[1]}" title="${esc(b.title)}" allowfullscreen loading="lazy"></iframe></div>`
    : `<a class="link-card" href="${b.url}" target="_blank" rel="noopener"><span class="link-emoji">🔗</span><span><strong>Abrir video</strong><small class="muted">${esc(b.url)}</small></span></a>`;
  return `<div class="block-video"><h4 class="block-title">🎬 ${esc(b.title)}</h4>${embed}</div>`;
}

function checklistBlock(b){
  const pr = progressOf(db.currentUserId);
  const done = b.items.filter(i => pr[i.id]).length;
  const pct = b.items.length ? Math.round(done / b.items.length * 100) : 0;
  return `
  <div class="checklist">
    <div class="checklist-head">
      <h4 class="block-title">✅ ${esc(b.title)}</h4>
      <span class="muted small">${done}/${b.items.length}</span>
    </div>
    <span class="progress"><span class="progress-fill" style="width:${pct}%"></span></span>
    ${b.items.map(i => `
      <button class="check-item ${pr[i.id] ? "done" : ""}" data-item="${i.id}">
        <span class="checkbox">${pr[i.id] ? "✓" : ""}</span>
        <span class="check-label">${esc(i.label)}</span>
      </button>`).join("")}
  </div>`;
}

function blockHTML(b){
  switch(b.type){
    case "text":    return `<p class="block-text">${esc(b.content)}</p>`;
    case "callout": return `<div class="callout tone-${b.tone}"><span class="callout-emoji">${b.emoji || "💡"}</span><p>${esc(b.content)}</p></div>`;
    case "quote":   return `<blockquote class="block-quote">${esc(b.content)}</blockquote>`;
    case "divider": return `<hr class="block-divider">`;
    case "video":   return videoBlock(b);
    case "checklist": return checklistBlock(b);
    case "link":    return `
      <a class="link-card" href="${b.url}" target="_blank" rel="noopener">
        <span class="link-emoji">🔗</span>
        <span><strong>${esc(b.title)}</strong><small class="muted">${esc(b.url)}</small></span>
      </a>`;
    default: return "";
  }
}

function renderWikiPage(course){
  const page = findPage(course, courseState.pageId);
  if(!page) return;
  $("#wiki-content").innerHTML = `
    <h2 class="wiki-page-title"><span>${page.icon || "📄"}</span> ${esc(page.title)}</h2>
    ${page.blocks.map(b => blockHTML(b)).join("")}`;
}

function renderCourse(){
  const c = courseById(currentCourseId);
  if(!c) return;
  const joined = c.members.includes(db.currentUserId);
  const inst = userById(c.instructor);
  if(!courseState.pageId || !findPage(c, courseState.pageId)){
    courseState.pageId = c.modules[0].pages[0].id;
  }

  const el = $("#view-course");
  el.innerHTML = `
    <div class="page wide">
      <button class="btn-ghost back" id="btn-back">← Volver a cursos</button>
      <div class="course-hero ch-${c.color}">
        <span class="course-hero-emoji">${c.emoji}</span>
        <div>
          <h1>${esc(c.title)}</h1>
          <p class="muted">${esc(c.desc)}</p>
          <div class="course-meta">
            <span class="muted small">👨‍🏫 ${inst ? esc(inst.name) : "—"} · ${c.members.length} miembros</span>
            <button class="btn ${joined ? "btn-joined" : "btn-primary"}" id="btn-join">
              ${joined ? "✓ Miembro" : "Unirse"}
            </button>
          </div>
        </div>
      </div>
      <div class="workspace">
        <aside class="wiki-sidebar card" id="wiki-sidebar">${sidebarHTML(c)}</aside>
        <div class="wiki-content" id="wiki-content"></div>
      </div>
    </div>`;

  renderWikiPage(c);

  el.querySelector("#btn-back").addEventListener("click", () => {
    renderCourses();
    show("courses");
  });

  el.querySelector("#btn-join").addEventListener("click", () => {
    const i = c.members.indexOf(db.currentUserId);
    if(i >= 0){ c.members.splice(i, 1); saveDB(); renderCourse(); renderDrawer(); toast("Has salido del curso"); }
    else { c.members.push(db.currentUserId); saveDB(); renderCourse(); renderDrawer(); toast(`Te uniste a ${c.title} 🎉`); }
  });

  el.querySelector("#wiki-sidebar").addEventListener("click", e => {
    const btn = e.target.closest("[data-page]");
    if(!btn) return;
    courseState.pageId = btn.dataset.page;
    el.querySelector("#wiki-sidebar").innerHTML = sidebarHTML(c);
    renderWikiPage(c);
  });

  $("#wiki-content").addEventListener("click", e => {
    const item = e.target.closest("[data-item]");
    if(!item) return;
    const pr = progressOf(db.currentUserId);
    pr[item.dataset.item] = !pr[item.dataset.item];
    saveDB();
    renderWikiPage(c);
    const cl = allChecklistBlocks(c).find(b => b.items.some(i => i.id === item.dataset.item));
    if(cl && cl.items.every(i => pr[i.id])) toast("¡Checklist completada! 🎉");
  });
}

/* ---------- DRAWER ---------- */
function renderDrawer(){
  const u = me();
  if(!u) return;
  const myCourses = db.courses.filter(c => c.members.includes(u.id));
  $("#drawer-content").innerHTML = `
    <div class="drawer-user card">
      <span class="avatar lg tone-${u.color}">${u.initials}</span>
      <div>
        <strong>${esc(u.name)}</strong>
        <div class="muted small">${esc(u.role)} · CampusHub</div>
      </div>
    </div>
    <nav class="drawer-nav">
      <button class="drawer-item" data-goto="profile"><span>👤</span> Perfil</button>
      <button class="drawer-item" data-goto="calendar"><span>🗓️</span> Calendario</button>
      <button class="drawer-item" data-goto="settings"><span>⚙️</span> Settings</button>
    </nav>
    <div class="drawer-section">
      <h4>Mis cursos</h4>
      ${myCourses.map(c => `
        <button class="drawer-item" data-course="${c.id}">
          <span>${c.emoji}</span> <span class="sb-page-label">${esc(c.title)}</span>
        </button>`).join("") ||
        `<p class="muted small" style="padding:0 12px">Aún no te unes a ningún curso.</p>`}
    </div>
    <div class="drawer-foot muted small">CampusHub Demo · datos guardados en este navegador</div>`;
}

function openDrawer(){
  $("#drawer").classList.add("open");
  $("#backdrop").classList.add("show");
  $("#btn-menu").classList.add("open");
  $("#btn-menu").setAttribute("aria-expanded","true");
  $("#drawer").setAttribute("aria-hidden","false");
}
function closeDrawer(){
  $("#drawer").classList.remove("open");
  $("#backdrop").classList.remove("show");
  $("#btn-menu").classList.remove("open");
  $("#btn-menu").setAttribute("aria-expanded","false");
  $("#drawer").setAttribute("aria-hidden","true");
}

/* ---------- PERFIL ---------- */
function renderProfile(){
  const u = me();
  if(!u) return;
  const pr = progressOf(u.id);
  const joined = db.courses.filter(c => c.members.includes(u.id));
  const allItems = db.courses.flatMap(c => allChecklistItems(c));
  const doneCount = allItems.filter(i => pr[i.id]).length;
  const myPosts = db.communityPosts.filter(p => p.userId === u.id).length;
  const myComments = db.communityPosts.flatMap(p => p.comments || []).filter(c => c.userId === u.id).length;

  $("#view-profile").innerHTML = `
    <div class="page">
      <button class="btn-ghost back" id="profile-back">← Volver</button>
      <div class="profile-card card">
        <span class="avatar lg tone-${u.color}">${u.initials}</span>
        <div>
          <h1>${esc(u.name)}</h1>
          <p class="muted">${esc(u.role)}</p>
        </div>
      </div>
      <div class="stat-grid">
        <div class="stat tone-blue"><div class="num">${joined.length}</div><div class="lbl">Cursos</div></div>
        <div class="stat tone-green"><div class="num">${doneCount}<span class="muted small">/${allItems.length}</span></div><div class="lbl">Tareas completadas</div></div>
        <div class="stat tone-orange"><div class="num">${myPosts + myComments}</div><div class="lbl">Mensajes</div></div>
      </div>
      <h2 class="section-title">📚 Mis cursos y mi progreso</h2>
      <div class="my-courses">
        ${joined.map(c => {
          const items = allChecklistItems(c);
          const done = items.filter(i => pr[i.id]).length;
          const pct = items.length ? Math.round(done / items.length * 100) : 0;
          return `
          <button class="my-course card" data-course="${c.id}">
            <span class="course-emoji sm">${c.emoji}</span>
            <span class="my-course-info">
              <strong>${esc(c.title)}</strong>
              <span class="progress"><span class="progress-fill" style="width:${pct}%"></span></span>
            </span>
            <span class="muted small">${pct}%</span>
          </button>`;
        }).join("") || `<p class="muted">Aún no te has unido a ningún curso. Ve a 📚 Cursos.</p>`}
      </div>
    </div>`;

  $("#profile-back").addEventListener("click", () => show("community"));
  $$("#view-profile .my-course").forEach(b =>
    b.addEventListener("click", () => openCourse(b.dataset.course)));
}

/* ---------- CALENDARIO ---------- */
function renderCalendar(){
  const month = new Date().toLocaleDateString("es-ES", { month:"long", year:"numeric" });
  $("#view-calendar").innerHTML = `
    <div class="page page-narrow">
      <button class="btn-ghost back" id="cal-back">← Volver</button>
      <h1 class="page-title">🗓️ Calendario</h1>
      <p class="muted" style="text-transform:capitalize">${month}</p>
      <div class="mt2">
        ${SEED.events.map(ev => `
          <div class="event">
            <span class="event-day tone-${ev.tone}">${esc(ev.day)}</span>
            <div>
              <strong>${esc(ev.title)}</strong>
              <div class="muted small">${esc(ev.sub)}</div>
            </div>
          </div>`).join("")}
      </div>
      <div class="callout tone-yellow mt2">
        <span class="callout-emoji">🚧</span>
        <p>El calendario interactivo llegará en la siguiente versión de la demo.</p>
      </div>
    </div>`;
  $("#cal-back").addEventListener("click", () => show("community"));
}

/* ---------- SETTINGS ---------- */
function renderSettings(){
  $("#view-settings").innerHTML = `
    <div class="page page-narrow">
      <button class="btn-ghost back" id="set-back">← Volver</button>
      <h1 class="page-title">⚙️ Settings</h1>
      <div class="card settings-card">
        <div class="setting-row"><span>Notificaciones de la comunidad</span><button class="switch on" data-switch aria-label="alternar"></button></div>
        <div class="setting-row"><span>Recordatorios de tareas</span><button class="switch on" data-switch aria-label="alternar"></button></div>
        <div class="setting-row"><span>Modo enfoque</span><button class="switch" data-switch aria-label="alternar"></button></div>
      </div>
      <div class="callout tone-yellow mt2">
        <span class="callout-emoji">🚧</span>
        <p>Los ajustes son visuales en esta demo. Tus datos se guardan solo en este navegador.</p>
      </div>
      <h2 class="section-title">Zona de demo</h2>
      <div class="danger-zone tone-red">
        <p><strong>Reiniciar datos de demostración</strong></p>
        <p class="small mt1">Borra publicaciones, cursos unidos y progreso, y vuelve al estado inicial.</p>
        <div class="mt1">
          <button class="btn btn-danger" id="btn-reset">Reiniciar demo</button>
          <button class="btn" id="btn-logout">Cerrar sesión</button>
        </div>
      </div>
    </div>`;

  $("#set-back").addEventListener("click", () => show("community"));
  $$("#view-settings [data-switch]").forEach(s =>
    s.addEventListener("click", () => s.classList.toggle("on")));
  $("#btn-reset").addEventListener("click", resetDB);
  $("#btn-logout").addEventListener("click", () => {
    db.currentUserId = null;
    saveDB();
    renderUserChip();
    renderLogin();
    show("login");
    closeDrawer();
    toast("Sesión cerrada");
  });
}

/* ---------- ARRANQUE ---------- */
function renderAll(){
  renderUserChip();
  renderCommunity();
  renderCourses();
  renderDrawer();
}

function boot(){
  loadDB();

  $("#main-tabs").addEventListener("click", e => {
    const t = e.target.closest(".tab");
    if(!t) return;
    if(!me()){ renderLogin(); show("login"); toast("Primero elige tu usuario 🙂"); return; }
    const v = t.dataset.view;
    if(v === "community") renderCommunity();
    if(v === "courses") renderCourses();
    show(v);
  });

  $("#user-chip").addEventListener("click", () => {
    if(!me()) return;
    renderProfile();
    show("profile");
  });

  $("#btn-menu").addEventListener("click", () => {
    if(!me()){ toast("Primero elige tu usuario 🙂"); return; }
    renderDrawer();
    $("#drawer").classList.contains("open") ? closeDrawer() : openDrawer();
  });

  $("#backdrop").addEventListener("click", closeDrawer);
  document.addEventListener("keydown", e => { if(e.key === "Escape") closeDrawer(); });

  $("#drawer-content").addEventListener("click", e => {
    const goto = e.target.closest("[data-goto]");
    if(goto){
      closeDrawer();
      const v = goto.dataset.goto;
      if(v === "profile") renderProfile();
      if(v === "calendar") renderCalendar();
      if(v === "settings") renderSettings();
      show(v);
      return;
    }
    const courseBtn = e.target.closest("[data-course]");
    if(courseBtn){
      closeDrawer();
      openCourse(courseBtn.dataset.course);
    }
  });

  if(me()){ renderAll(); show("community"); }
  else { renderLogin(); show("login"); }
}

boot();
