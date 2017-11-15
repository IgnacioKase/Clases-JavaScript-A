var validarEmail = function(ev)
{
  ev.preventDefault();
  var email = document.getElementById('inputEmail').value;
  var esEmailValido = (email.split('@').length > 1);
  if (!esEmailValido)
  {
    document.querySelector('.alerta').classList.remove('d-none');
    return false;
  }

  var imprimirEmail = function(ev)
  {
    var exito = document.querySelector('.exito');
    exito.classList.remove('d-none');
    exito.innerHTML = ajax.responseText;
  }
  var ajax = new XMLHttpRequest();
  ajax.addEventListener('load', imprimirEmail);
  ajax.open('GET', 'includes/suscribirse.php?email='+email);
  ajax.send();
}
var formSuscripcion = document.querySelector('form[action="suscripcion.php"]');
formSuscripcion.addEventListener('submit', validarEmail);
