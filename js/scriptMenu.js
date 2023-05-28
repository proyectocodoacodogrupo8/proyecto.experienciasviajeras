//menu hamburguesa:

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');
const logo = document.querySelector('.logo'); // Agregar esta línea

menuToggle.addEventListener('click', function () {
  if (window.innerWidth <= 768) {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
      menu.style.maxHeight = menu.scrollHeight + 'px';
      logo.style.display = 'none'; // Ocultar el logo cuando el menú está activo
    } else {
      menu.style.maxHeight = 0;
      logo.style.display = 'block'; // Mostrar el logo cuando el menú está inactivo
    }
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    menu.classList.remove('active');
    menu.style.maxHeight = 'none';
    logo.style.display = 'block'; // Asegurarse de mostrar el logo cuando el menú no está activo en pantallas más grandes
  }
});
