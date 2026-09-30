const CACHE_NAME = 'danza-app-v3';
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
}); function actualizarTextoAutorizacion() {
  const tutor = document.getElementById('nombreTutor').value.trim();
  const dni = document.getElementById('dniTutor').value.trim();
  const alumno = document.getElementById('nombreAlumno').value.trim();

  document.getElementById('outTutor').textContent = tutor !== '' ? tutor : '____________________';
  document.getElementById('outDni').textContent = dni !== '' ? dni : '____________________';
  document.getElementById('outAlumno').textContent = alumno !== '' ? alumno : '____________________';
}
function switchSchedule(type, btnElement) {
  // 1. Ocultar todos los contenedores y quitar la clase active de los botones
  document.querySelectorAll('.schedule-container').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

  // 2. Mostrar la tabla seleccionada
  const targetSchedule = document.getElementById('schedule-' + type);
  if (targetSchedule) {
    targetSchedule.classList.add('active');
  }

  // 3. Activar el botón pinchado
  if (btnElement) {
    btnElement.classList.add('active');
  }
}
