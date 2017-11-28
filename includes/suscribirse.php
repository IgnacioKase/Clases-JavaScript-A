<?php
$email = $_REQUEST['email'];
$respuesta = array();
if($email === "a@a")
{
  $respuesta['errorNo'] = -1;
  $respuesta['msg'] = "El email $email ya esta registrado";
}else {
  $respuesta['errorNo'] =  1;
  $respuesta['msg'] = "Su email ha sido registrado con exito";
}

echo json_encode($respuesta);
?>
