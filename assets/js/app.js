// Darle una dirección base a la API
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// tomamos el elemento del HTML con la etiqueta 'name' y lo almacenamos en la variable $n
const $n = document.querySelector('name');
// tomamos el elemento del HTML con la etiqueta '#blog' y lo almacenamos en la variable $b
const $b = document.querySelector('#blog');
// tomamos el elemento del HTML con la etiqueta '.location' y lo almacenamos en la variable $1
const $l = document.querySelector('.location');

// Definir una función para la información de el usuario
function displayUser(username) {
  $n.textContent = 'cargando...';

   // Realizar una solicitud para obtener la información del usuario 
  const response = await fetch(`${usersEndpoint}/${username}`);

  console.log(data);
   // Actualizar el contenido de HTML con la información del usuario
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

  // Si arroja un error durante la solicitud, se mortrará un mensaje de "error" en la consola 
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

function displayUser('stolinski') {
  .catch(handleError);
}
