var validarEmail = function(ev)
{
  ev.preventDefault();
  document.querySelector('.alerta').classList.add('d-none');
  document.querySelector('input#inputEmail').classList.remove('alerta-servidor');
  var email = document.getElementById('inputEmail').value;
  var esEmailValido = (email.split('@').length > 1);
  if (!esEmailValido)
  {
    document.querySelector('.alerta').classList.remove('d-none');
    return false;
  }

  var imprimirEmail = function(ev)
  {
    var exito = document.querySelector('.alerta');
    exito.classList.remove('alert-danger');
    exito.classList.remove('alert-success');
    exito.classList.remove('d-none');
    var respuesta = JSON.parse(ajax.response);
    exito.innerHTML = respuesta.msg;
    if(respuesta.errorNo === -1){
      document.querySelector('input#inputEmail').classList.add('alerta-servidor');
      exito.classList.add('alert-danger');
    }else {
      exito.classList.add('alert-success');
    }
  }
  var ajax = new XMLHttpRequest();
  ajax.addEventListener('load', imprimirEmail);
  ajax.open('GET', 'includes/suscribirse.php?email='+email);
  ajax.send();
}
var formSuscripcion = document.querySelector('form[action="suscripcion.php"]');
formSuscripcion.addEventListener('submit', validarEmail);
