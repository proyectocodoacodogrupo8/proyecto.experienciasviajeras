function validateForm() {
  // Obtenemos los valores ingresados por el usuario
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  // Validamos que el campo de nombre no esté vacío
  if (firstName == "") {
    alert("Por favor ingrese su nombre");
    return false;
  }

  // Validamos que el campo de apellido no esté vacío
  if (lastName == "") {
    alert("Por favor ingrese su apellido");
    return false;
  }

  // Validamos que el campo de correo electrónico tenga un formato válido
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor ingrese una dirección de correo electrónico válida");
    return false;
  }

  //validamos que en el campo telefono se ingresen solo valores numericos
  var phoneRegex = /^[0-9]+$/;
  if (!phoneRegex.test(phone)) {
    alert("Por favor ingrese solo números en el campo de teléfono.");
    return false;
  }

  // Validamos que el campo de teléfono tenga al menos 7 dígitos
  if (phone.length < 7) {
    alert("Por favor ingrese un número de teléfono válido");
    return false;
  }

  // Validamos que el campo de mensaje no esté vacío
  if (message == "") {
    alert("Por favor ingrese un mensaje");
    return false;
  }

  // Si todos los campos son válidos, retornamos true para enviar el formulario
  return true;
}



// Función para cargar una imagen aleatoria de Unsplash
function cargarImagenAleatoria() {
  const accessKey = 'SFi0eufFuEWsmQReN2bXxvfCh99nT3wT8zQ6Xov7hYI'; // clave de API de Unsplash

  fetch('https://api.unsplash.com/photos/random?client_id=' + accessKey + '&query=landscape+Argentina')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const imageUrl = data.urls.regular;
      const imageElement = document.getElementById('random-image');
      imageElement.src = imageUrl;
      imageElement.style.width = '2000px'; // Ajusta el ancho deseado
      imageElement.style.height = '530px'; // Ajusta el alto deseado

      const descriptionElement = document.getElementById('image-description');
      descriptionElement.textContent = data.description || 'No hay descripción disponible';

      let isSmall = false; // Variable de estado para verificar si la imagen está achicada

      imageElement.addEventListener('click', function() {
        if (isSmall) {
          imageElement.style.height = '530px'; // Restaura el alto original de la imagen
          isSmall = false;
        } else {
          imageElement.style.height = '100%'; // Achica el alto de la imagen al 100%
          isSmall = true;
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Llama a la función para cargar una imagen aleatoria cuando la página se cargue
window.onload = cargarImagenAleatoria;

// Cambiar la imagen y obtener información cada 5 minutos (300,000 milisegundos)
setInterval(cargarImagenAleatoria, 300000);

// Llama a la función para cargar una imagen aleatoria cuando la página se cargue
window.onload = cargarImagenAleatoria;

// Cambiar la imagen y obtener información cada 5 minutos (300,000 milisegundos)
setInterval(cargarImagenAleatoria, 300000);





//menu hamburguesa:

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');

menuToggle.addEventListener('click', function() {
  if (window.innerWidth <= 768) {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
      menu.style.maxHeight = menu.scrollHeight + 'px';
    } else {
      menu.style.maxHeight = 0;
    }
  }
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    menu.classList.remove('active');
    menu.style.maxHeight = 'none';
  }
});