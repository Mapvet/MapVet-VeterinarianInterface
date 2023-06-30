function redireccionar() {
    window.location.href = 'inicio.html'; // Reemplaza 'siguiente_pagina.html' con la URL de la página a la que deseas redirigir
  }

  // Función para iniciar el temporizador
  function iniciarTemporizador() {
    setTimeout(redireccionar, 5000); // 5000 representa 5 segundos; ajusta el valor según tus necesidades
  }