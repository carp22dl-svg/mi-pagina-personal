document.addEventListener('DOMContentLoaded', () => {
  const subtitulosES = ["Guitarrista", "Productor", "Docente", "Compositor"];
  const subtitulosEN = ["Guitarist", "Producer", "Teacher", "Composer"];
  let index = 0;
  const subtitulo = document.getElementById("subtitulo");
  let currentLang = 'es';

  const rotarSubtitulo = () => {
    subtitulo.style.opacity = 0;
    setTimeout(() => {
      const subtitulos = currentLang === 'es' ? subtitulosES : subtitulosEN;
      subtitulo.textContent = subtitulos[index];
      subtitulo.style.opacity = 1;
      index = (index + 1) % subtitulos.length;
    }, 500);
  };

  window.updateSubtitulos = (lang) => {
    currentLang = lang;
    const subtitulos = lang === 'es' ? subtitulosES : subtitulosEN;
    subtitulo.textContent = subtitulos[index];
  };

  rotarSubtitulo(); // Mostrar primero
  setInterval(rotarSubtitulo, 3000); // Cambiar cada 3 segundos

  // Animar título “Sobre mí”
  const tituloSobreMi = document.getElementById('sobre-mi');
  setTimeout(() => tituloSobreMi.classList.add('visible'), 500);

  // Animar título "Mis lanzamientos"
  const tituloLanzamientos = document.getElementById('mis-lanzamientos');
  setTimeout(() => tituloLanzamientos.classList.add('visible'), 500);

  // Animar título "Partituras"
  const tituloPartituras = document.getElementById('partituras-titulo');
  setTimeout(() => tituloPartituras.classList.add('visible'), 500);

  // Eliminar clase 'bloqueado' al hacer click en cualquier link ancla
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => document.body.classList.remove('bloqueado'));
  });
});
