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
  
        imageElement.addEventListener('click', function () {
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