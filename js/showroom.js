import * as THREE from './three.module.min.js';

const EMAIL = 'patti.babyroomdecor@gmail.com';
const lang = () => (document.body.classList.contains('pt') ? 'pt' : 'de');

const CAT = {
  berco:    { de: ['Bettset fürs Babybett', 'Handgenähtes Bettset mit Nestchen, Kissen und passenden Kuscheltieren – in Ihren Farben.'],
              pt: ['Kit de berço', 'Kit de berço costurado à mão, com protetor, almofadas e bichinhos combinando – nas suas cores.'] },
  guirlanda:{ de: ['Türkranz aus Tüll', 'Türkranz aus Tüll, auf Wunsch mit dem Namen des Babys.'],
              pt: ['Guirlanda de tule', 'Guirlanda de porta em tule, com o nome do bebê se você quiser.'] },
  pompom:   { de: ['Traumfänger & Mobiles', 'Aus Pompons, Filzblüten und Bändern – mit Namen und in den Farben des Kinderzimmers.'],
              pt: ['Filtros dos sonhos & móbiles', 'Com pompons, flores de feltro e fitas – com nome e nas cores do quarto.'] },
  quadros:  { de: ['Namensbild & Rahmen', 'Namensbild im Rahmen, klassisch oder modern, individuell gestaltet.'],
              pt: ['Quadro com nome & moldura', 'Quadro com nome, em moldura clássica ou moderna, feito sob medida.'] },
  feltro:   { de: ['Deko-Detail', 'Kleine Details, die das Zimmer vollenden – individuell angefertigt.'],
              pt: ['Detalhe decorativo', 'Pequenos detalhes que completam o quarto – feitos sob encomenda.'] },
};

// wall: n(orth, behind crib) e(ast) w(est) s(outh, door wall). u = horizontal position on the wall, y = height of centre, s = longest side in metres
const ROOMS = {
  rosa: {
    wall: 0xf4e1e2, wainscot: 0xfbf3f1, bedding: 0xf2b8bf, rug: 0xf7d9d6,
    items: [
      { img: 'berco-5', cat: 'berco', wall: 'n', u: 0, y: 1.75, s: 1.05 },
      { img: 'quadros-13', cat: 'quadros', wall: 'n', u: -1.45, y: 1.55, s: 0.62 },
      { img: 'quadros-60', cat: 'quadros', wall: 'n', u: 1.5, y: 1.55, s: 0.72, name: 'Olívia' },
      { img: 'pompom-83', cat: 'pompom', wall: 'e', u: -1.7, y: 1.5, s: 0.9, name: 'Leo' },
      { img: 'pompom-1', cat: 'pompom', wall: 'e', u: -0.45, y: 1.55, s: 0.75 },
      { img: 'pompom-81', cat: 'pompom', wall: 'e', u: 0.75, y: 1.55, s: 0.75 },
      { img: 'pompom-82', cat: 'pompom', wall: 'e', u: 1.95, y: 1.55, s: 0.6 },
      { img: 'quadros-4', cat: 'quadros', wall: 'w', u: -1.95, y: 1.6, s: 0.62, name: 'Luisa' },
      { img: 'quadros-14', cat: 'quadros', wall: 'w', u: -0.75, y: 1.6, s: 0.75 },
      { img: 'berco-6', cat: 'berco', wall: 'w', u: 0.75, y: 1.7, s: 0.95 },
      { img: 'quadros-91', cat: 'quadros', wall: 'w', u: 2.05, y: 1.55, s: 0.75, name: 'Emília' },
      { img: 'guirlanda-7', cat: 'guirlanda', wall: 's', u: -1.5, y: 1.35, s: 0.95, door: true },
      { img: 'pompom-77', cat: 'pompom', wall: 's', u: 0.6, y: 1.55, s: 0.7 },
    ],
  },
  azul: {
    wall: 0xdcebea, wainscot: 0xf6f8f5, bedding: 0x7fbfb6, rug: 0xd6e8e4,
    items: [
      { img: 'quadros-95', cat: 'quadros', wall: 'n', u: 0, y: 1.75, s: 0.95, name: 'Markus Vinícius' },
      { img: 'quadros-84', cat: 'quadros', wall: 'n', u: -1.5, y: 1.6, s: 0.72 },
      { img: 'quadros-93', cat: 'quadros', wall: 'n', u: 1.5, y: 1.6, s: 0.68, name: 'Markus Vinícius' },
      { img: 'feltro-37', cat: 'feltro', wall: 'e', u: -1.5, y: 1.65, s: 1.15 },
      { img: 'quadros-55', cat: 'quadros', wall: 'e', u: 0.15, y: 1.6, s: 0.8, name: 'João Pedro' },
      { img: 'quadros-23', cat: 'quadros', wall: 'e', u: 1.4, y: 1.6, s: 0.7 },
      { img: 'feltro-33', cat: 'feltro', wall: 'e', u: 2.4, y: 1.6, s: 0.55 },
      { img: 'pompom-3', cat: 'pompom', wall: 'w', u: -1.9, y: 1.5, s: 0.95, name: 'Sophia' },
      { img: 'quadros-21', cat: 'quadros', wall: 'w', u: -0.65, y: 1.6, s: 0.65 },
      { img: 'feltro-20', cat: 'feltro', wall: 'w', u: 0.45, y: 1.65, s: 0.6 },
      { img: 'feltro-29', cat: 'feltro', wall: 'w', u: 1.4, y: 1.65, s: 0.6 },
      { img: 'feltro-26', cat: 'feltro', wall: 's', u: -1.5, y: 1.3, s: 1.0, door: true, name: 'Lorenzzo' },
      { img: 'quadros-9', cat: 'quadros', wall: 's', u: 0.6, y: 1.55, s: 0.7, name: 'Augusto' },
    ],
  },
};
const W = 6, D = 6, H = 2.8;
const WALLS = {
  n: { pos: [0, 0, -D / 2], rot: 0 },
  e: { pos: [W / 2, 0, 0], rot: -Math.PI / 2 },
  w: { pos: [-W / 2, 0, 0], rot: Math.PI / 2 },
  s: { pos: [0, 0, D / 2], rot: Math.PI },
};

const stage = document.getElementById('stage');
const loading = document.getElementById('loading');
const hint = document.getElementById('hint');
const lbl = document.getElementById('lbl');

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ antialias: true });
} catch (e) {
  loading.remove();
  document.getElementById('nogl').style.display = 'block';
  document.querySelector('.nav').remove();
  hint.remove();
  throw e;
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
stage.prepend(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf3ece6);
const camera = new THREE.PerspectiveCamera(62, 1, 0.05, 50);
const EYE = new THREE.Vector3(0, 1.5, 2.1);
const baseFov = () => THREE.MathUtils.clamp(THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(38)) / Math.min(camera.aspect, 1.6))), 50, 74);
camera.position.copy(EYE);

scene.add(new THREE.HemisphereLight(0xfff8f0, 0xd9c7b8, 1.6));
const lamp = new THREE.PointLight(0xfff1dd, 14, 12, 1.6);
lamp.position.set(0, 2.5, 0);
scene.add(lamp);
const fill = new THREE.DirectionalLight(0xffffff, 0.9);
fill.position.set(1.5, 2.5, 2);
scene.add(fill);

const maxAniso = renderer.capabilities.getMaxAnisotropy();
const texCache = {};
const manager = new THREE.LoadingManager();
manager.onLoad = () => { loading.style.opacity = 0; setTimeout(() => (loading.style.display = 'none'), 500); };
const loader = new THREE.TextureLoader(manager);
function tex(name, cb) {
  let e = texCache[name];
  if (!e) {
    e = texCache[name] = { ready: false, cbs: [] };
    e.t = loader.load(`img/${name}.jpg`, () => { e.ready = true; e.cbs.splice(0).forEach(f => f(e.t)); });
    e.t.colorSpace = THREE.SRGBColorSpace;
    e.t.anisotropy = maxAniso;
  }
  if (e.ready) cb(e.t); else e.cbs.push(cb);
}

function woodTexture() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 512;
  const g = c.getContext('2d');
  const tones = ['#d9bf9f', '#d3b896', '#ddc5a6', '#cfb28f', '#d7bc9b'];
  for (let i = 0; i < 8; i++) {
    g.fillStyle = tones[i % tones.length];
    g.fillRect(0, i * 64, 512, 64);
    g.fillStyle = '#b89874';
    g.fillRect(0, i * 64, 512, 2);
    g.fillRect(((i * 197) % 400) + 40, i * 64, 2, 64);
    g.globalAlpha = 0.08;
    for (let k = 0; k < 14; k++) { g.fillStyle = '#7a5a3a'; g.fillRect(0, i * 64 + 6 + k * 4, 512, 1); }
    g.globalAlpha = 1;
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(3, 3);
  t.anisotropy = maxAniso;
  return t;
}
const floorTex = woodTexture();

const std = (color, rough = 0.85) => new THREE.MeshStandardMaterial({ color, roughness: rough });
const box = (w, h, d, mat) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);

let room, pickables = [], order = [], idx = -1;

function buildRoom(key) {
  if (room) {
    scene.remove(room);
    room.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material && !o.material.map) o.material.dispose(); });
  }
  const R = ROOMS[key];
  room = new THREE.Group();
  pickables = [];

  const floor = new THREE.Mesh(new THREE.PlaneGeometry(W, D), new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.7 }));
  floor.rotation.x = -Math.PI / 2;
  room.add(floor);
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(W, D), new THREE.MeshStandardMaterial({ color: 0xfffcf8, emissive: 0xfff6ee, emissiveIntensity: 0.55, roughness: 1 }));
  ceil.rotation.x = Math.PI / 2; ceil.position.y = H;
  room.add(ceil);

  const wallMat = std(R.wall, 0.95), lowMat = std(R.wainscot, 0.9), trim = std(0xffffff, 0.6);
  for (const k of Object.keys(WALLS)) {
    const g = new THREE.Group();
    g.position.set(...WALLS[k].pos); g.rotation.y = WALLS[k].rot;
    const len = W;
    const up = new THREE.Mesh(new THREE.PlaneGeometry(len, H - 1.0), wallMat); up.position.y = 1.0 + (H - 1.0) / 2; g.add(up);
    const lo = new THREE.Mesh(new THREE.PlaneGeometry(len, 1.0), lowMat); lo.position.y = 0.5; g.add(lo);
    const rail = box(len, 0.05, 0.03, trim); rail.position.set(0, 1.0, 0.015); g.add(rail);
    const skirt = box(len, 0.1, 0.02, trim); skirt.position.set(0, 0.05, 0.01); g.add(skirt);
    room.add(g);
    WALLS[k].group = g;
  }

  // crib against the north wall
  const crib = new THREE.Group();
  const white = std(0xffffff, 0.55);
  const cw = 1.3, cd = 0.68, ch = 0.95;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const p = box(0.06, ch, 0.06, white); p.position.set(sx * cw / 2, ch / 2, sz * cd / 2); crib.add(p); }
  for (const sz of [-1, 1]) {
    for (const yy of [0.32, ch - 0.03]) { const r = box(cw, 0.05, 0.05, white); r.position.set(0, yy, sz * cd / 2); crib.add(r); }
    for (let i = 1; i < 12; i++) { const s = box(0.025, ch - 0.35, 0.025, white); s.position.set(-cw / 2 + i * cw / 12, 0.32 + (ch - 0.35) / 2, sz * cd / 2); crib.add(s); }
  }
  for (const sx of [-1, 1]) { const head = box(0.04, ch - 0.35, cd, white); head.position.set(sx * cw / 2, 0.32 + (ch - 0.35) / 2, 0); crib.add(head); }
  const matt = box(cw - 0.06, 0.14, cd - 0.06, std(R.bedding, 0.95)); matt.position.y = 0.41; crib.add(matt);
  const pillow = box(0.38, 0.1, 0.26, std(0xffffff, 1)); pillow.position.set(-0.4, 0.53, 0); crib.add(pillow);
  crib.position.set(0, 0, -D / 2 + cd / 2 + 0.06);
  room.add(crib);

  // dresser on the west wall, under the pieces
  const dresser = new THREE.Group();
  const dBody = box(1.1, 0.85, 0.48, std(0xfffaf3, 0.6)); dBody.position.y = 0.425; dresser.add(dBody);
  for (let i = 0; i < 3; i++) {
    const fr = box(1.02, 0.24, 0.01, std(0xf7efe5, 0.6)); fr.position.set(0, 0.16 + i * 0.27, 0.245); dresser.add(fr);
    const kn = new THREE.Mesh(new THREE.SphereGeometry(0.022, 12, 12), std(0xc9a77c, 0.4)); kn.position.set(0, 0.16 + i * 0.27, 0.26); dresser.add(kn);
  }
  dresser.position.set(-W / 2 + 0.25, 0, -0.1); dresser.rotation.y = Math.PI / 2;
  room.add(dresser);

  // armchair-ish pouf + rug
  const rug = new THREE.Mesh(new THREE.CircleGeometry(1.0, 48), std(R.rug, 1)); rug.rotation.x = -Math.PI / 2; rug.position.set(0, 0.005, -1.0); room.add(rug);
  const pouf = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.3, 0.38, 32), std(R.bedding, 1)); pouf.position.set(1.9, 0.19, -1.6); room.add(pouf);

  // door on the south wall
  const door = new THREE.Group();
  const leaf = box(0.95, 2.1, 0.05, std(0xe9ddd0, 0.55)); leaf.position.y = 1.05; door.add(leaf);
  const frame = box(1.07, 2.16, 0.03, trim); frame.position.set(0, 1.08, -0.015); door.add(frame);
  const handle = box(0.12, 0.025, 0.04, std(0xb9b2aa, 0.3)); handle.position.set(0.36, 1.0, 0.045); door.add(handle);
  WALLS.s.group.add(door); door.position.set(-1.5, 0, 0.03);

  // ceiling lamp
  const shade = new THREE.Mesh(new THREE.SphereGeometry(0.22, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff4e6, emissiveIntensity: 1.6, side: THREE.DoubleSide }));
  shade.rotation.x = Math.PI; shade.position.set(0, 2.55, 0); room.add(shade);

  // the pieces
  for (const it of R.items) {
    const g = WALLS[it.wall].group;
    const holder = new THREE.Group();
    const myRoom = room;
    tex(it.img, t => {
      if (myRoom !== room) return;
      const ar = t.image.width / t.image.height;
      const w = ar >= 1 ? it.s : it.s * ar, h = ar >= 1 ? it.s / ar : it.s;
      const b = 0.045;
      const fr = box(w + 2 * b, h + 2 * b, 0.035, std(0xffffff, 0.5)); fr.position.z = 0.0175; holder.add(fr);
      const pic = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: t, roughness: 0.75 }));
      pic.position.z = 0.037; pic.userData.item = it; holder.add(pic); pickables.push(pic);
      it._size = Math.max(w, h * 1.15);
    });
    holder.position.set(it.u, it.y, it.door ? 0.06 : 0.01);
    g.add(holder);
    it._holder = holder;
  }
  scene.add(room);
  order = R.items;
  idx = -1;
  look.yaw = 0; look.pitch = -0.02; target = null; camera.fov = baseFov(); camera.updateProjectionMatrix();
  updateLabel();
}

// ---------- look-around controls ----------
const look = { yaw: 0, pitch: 0.05 };
let target = null; // {yaw,pitch,fov}
const pointers = new Map();
let downAt = null, pinch0 = 0, fov0 = 62;
const el = renderer.domElement;
el.addEventListener('pointerdown', e => {
  el.setPointerCapture(e.pointerId);
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pointers.size === 1) downAt = { x: e.clientX, y: e.clientY, t: performance.now(), moved: false };
  if (pointers.size === 2) { const [a, b] = [...pointers.values()]; pinch0 = Math.hypot(a.x - b.x, a.y - b.y); fov0 = camera.fov; downAt = null; }
  hint.style.opacity = 0;
});
el.addEventListener('pointermove', e => {
  if (!pointers.has(e.pointerId)) return;
  const p = pointers.get(e.pointerId);
  const dx = e.clientX - p.x, dy = e.clientY - p.y;
  p.x = e.clientX; p.y = e.clientY;
  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()];
    const d = Math.hypot(a.x - b.x, a.y - b.y);
    camera.fov = THREE.MathUtils.clamp(fov0 * pinch0 / Math.max(d, 1), 22, 88); camera.updateProjectionMatrix();
    return;
  }
  if (downAt && Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y) > 6) downAt.moved = true;
  const k = (camera.fov / 62) * 0.0045;
  look.yaw -= dx * k; look.pitch = THREE.MathUtils.clamp(look.pitch - dy * k, -0.9, 0.9);
  target = null;
});
const up = e => {
  pointers.delete(e.pointerId);
  if (downAt && !downAt.moved && pointers.size === 0 && performance.now() - downAt.t < 500) pick(e.clientX, e.clientY);
  if (pointers.size === 0) downAt = null;
};
el.addEventListener('pointerup', up);
el.addEventListener('pointercancel', e => { pointers.delete(e.pointerId); downAt = null; });
el.addEventListener('wheel', e => { e.preventDefault(); camera.fov = THREE.MathUtils.clamp(camera.fov + e.deltaY * 0.03, 22, 88); camera.updateProjectionMatrix(); }, { passive: false });
window.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') go(1); else if (e.key === 'ArrowLeft') go(-1);
});

const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
function pick(x, y) {
  const r = el.getBoundingClientRect();
  ndc.set(((x - r.left) / r.width) * 2 - 1, -((y - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const hit = ray.intersectObjects(pickables)[0];
  if (hit) { idx = order.indexOf(hit.object.userData.item); focus(); openDialog(hit.object.userData.item); }
}

function focus() {
  const it = order[idx];
  const p = new THREE.Vector3(); it._holder.getWorldPosition(p);
  const d = p.clone().sub(camera.position);
  const dist = d.length();
  const yaw = Math.atan2(d.x, -d.z);
  const pitch = Math.asin(d.y / dist);
  const half = (it._size || 0.8) / (2 * dist * 0.7);
  const fov = THREE.MathUtils.clamp(THREE.MathUtils.radToDeg(2 * Math.atan(Math.max(half, half / camera.aspect))), 22, 80);
  // shortest way round
  let y0 = look.yaw; while (yaw - y0 > Math.PI) y0 += 2 * Math.PI; while (yaw - y0 < -Math.PI) y0 -= 2 * Math.PI; look.yaw = y0;
  target = { yaw, pitch, fov };
  updateLabel();
}
function go(step) { idx = (idx + step + order.length) % order.length; focus(); hint.style.opacity = 0; }
document.getElementById('next').onclick = () => go(1);
document.getElementById('prev').onclick = () => go(-1);
lbl.addEventListener('click', () => { if (idx >= 0) openDialog(order[idx]); });
lbl.style.cursor = 'pointer';

function title(it) { const c = CAT[it.cat][lang()][0]; return it.name ? `${c} „${it.name}“` : c; }
function updateLabel() { lbl.textContent = idx < 0 ? `${order.length} ${lang() === 'pt' ? 'peças' : 'Stücke'}` : `${idx + 1}/${order.length} · ${CAT[order[idx].cat][lang()][0]}`; }
window.addEventListener('langchange', updateLabel);

const dlg = document.getElementById('dlg');
function openDialog(it) {
  const l = lang();
  document.getElementById('dimg').src = `img/${it.img}.jpg`;
  document.getElementById('dimg').alt = title(it);
  document.getElementById('dtitle').textContent = title(it);
  document.getElementById('ddesc').textContent = CAT[it.cat][l][1];
  const subj = (l === 'pt' ? 'Pedido: ' : 'Anfrage: ') + title(it) + ` (${it.img})`;
  document.getElementById('dmail').href = `mailto:${EMAIL}?subject=${encodeURIComponent(subj)}`;
  if (typeof dlg.showModal === 'function') dlg.showModal();
}
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

document.querySelectorAll('.tab').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.tab').forEach(x => x.setAttribute('aria-pressed', x === b));
  buildRoom(b.dataset.room);
}));

function resize() {
  const w = stage.clientWidth, h = stage.clientHeight;
  renderer.setSize(w, h, false);
  const first = camera.aspect === 1;
  camera.aspect = w / h;
  if (first || !target) camera.fov = idx < 0 ? baseFov() : camera.fov;
  camera.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(stage);

const dir = new THREE.Vector3();
let t0 = performance.now(), idle = 0;
function frame(now) {
  const dt = Math.min((now - t0) / 1000, 0.05); t0 = now;
  if (target) {
    const a = 1 - Math.pow(0.0015, dt);
    look.yaw += (target.yaw - look.yaw) * a;
    look.pitch += (target.pitch - look.pitch) * a;
    camera.fov += (target.fov - camera.fov) * a; camera.updateProjectionMatrix();
    if (Math.abs(target.yaw - look.yaw) < 1e-3 && Math.abs(target.fov - camera.fov) < 0.05) target = null;
  }
  // gentle idle pan until the visitor touches the room
  if (hint.style.opacity !== '0' && !target) { idle += dt; look.yaw = Math.sin(idle * 0.18) * 0.55; }
  dir.set(Math.sin(look.yaw) * Math.cos(look.pitch), Math.sin(look.pitch), -Math.cos(look.yaw) * Math.cos(look.pitch));
  camera.lookAt(camera.position.clone().add(dir));
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

buildRoom('rosa');
resize();
requestAnimationFrame(frame);
