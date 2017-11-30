var validarEmail = function(ev)
{
  ev.preventDefault();
  $('#modal').modal('hide');
  $('.alerta').addClass('d-none');
  $('input#inputEmail').removeClass('alerta-servidor');
  var email = $('#inputEmail').val();
  var esEmailValido = (email.split('@').length > 1);
  if (!esEmailValido)
  {
    $('.alerta').removeClass('d-none');
    return false;
  }

  var imprimirEmail = function(respuesta)
  {
    var $exito = $('.alerta');
    $exito.removeClass('alert-danger');
    $exito.removeClass('alert-success');
    $exito.removeClass('d-none');
    $exito.html(respuesta.msg);
    console.log(respuesta);
    if(respuesta.errorNo === -1){
      $('#inputEmail').addClass('alerta-servidor');
      $exito.addClass('alert-danger');
    }else {
      $exito.addClass('alert-success');
    }
  }
  var parametros = {
    url : 'includes/suscribirse.php',
    dataType : 'json',
    data : {
      'email' : email
    },
    method : 'GET'
  }
  $.ajax(parametros).done(imprimirEmail);
}

//$('form[action="suscripcion.php"]').on('submit', validarEmail);

$('button.modalOk').on('click', validarEmail);
