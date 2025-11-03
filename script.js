// Archivo principal de funciones JS del sitio DaryClothes

// Ejemplo: animación de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Ejemplo de mensaje en consola (puede eliminarse)
console.log("DaryClothes cargado correctamente ✅");
