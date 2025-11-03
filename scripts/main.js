// Carga el navbar automáticamente
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  navbar.innerHTML = `
    <a href="#" class="nav-item">Inicio</a>
    <a href="#" class="nav-item">Colecciones</a>
    <a href="#" class="nav-item">Contacto</a>
  `;
});

// Animación de entrada suave
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 1.5s ease-in-out";
    document.body.style.opacity = "1";
  }, 100);
});
