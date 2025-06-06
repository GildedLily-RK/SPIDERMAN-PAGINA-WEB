function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Registro
document.getElementById('formRegistro').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  alert(`¡Gracias por registrarte, ${nombre}!`);
  localStorage.setItem('usuario', JSON.stringify({ nombre, correo }));
  this.reset();
});

// Encuesta + Valoración con un solo botón
document.getElementById('formEncuesta').addEventListener('submit', function(e) {
  e.preventDefault();

  const spiderman = document.getElementById('spidermanFav').value;
  const comentarioSpidey = document.getElementById('comentarioSpidey').value.trim();
  const comentarioGeneral = document.getElementById('comentarioGeneral').value.trim();
  const estrellas = document.querySelector('input[name="rating"]:checked');
  const rating = estrellas ? estrellas.value : null;

  if (!spiderman || !comentarioSpidey || !comentarioGeneral || !rating) {
    alert('Por favor, completa todos los campos y selecciona una cantidad de estrellas.');
    return;
  }

  // Crear estrellas visuales
  let estrellasHTML = '';
  for (let i = 1; i <= 5; i++) {
    estrellasHTML += i <= rating ? '★' : '☆';
  }

  // Mostrar resultado en la sección de comentarios
  const lista = document.getElementById('listaComentarios');
  const li = document.createElement('li');
  li.classList.add('comentario-item');
  li.innerHTML = `
    <strong>🕷️ Spider-Man favorito:</strong> ${spiderman}<br>
    <strong>🗣️ ¿Por qué?:</strong> ${comentarioSpidey}<br>
    <strong>💬 Comentario:</strong> ${comentarioGeneral}<br>
    <strong>⭐ Valoración:</strong> ${estrellasHTML}
  `;
  lista.appendChild(li);

  // Limpiar formulario
  this.reset();
  document.querySelectorAll('input[name="rating"]').forEach(r => r.checked = false);
});

// Alerta Spider-Man
function mostrarAlerta() {
  const div = document.getElementById('mensajeAlerta');
  div.innerHTML = '<strong>🕸️ Spider-Man avistado en Nueva York. ¡Permanece alerta!</strong>';
  setTimeout(() => div.innerHTML = '', 5000);
}
