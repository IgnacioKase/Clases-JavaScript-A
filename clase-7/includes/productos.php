<?php
$productos = array();

$productos[] = array('id' => 1, 'descripcion' => "Pizza");
$productos[] = array('id' => 2, 'descripcion' => "Hamburguesa");
$productos[] = array('id' => 3, 'descripcion' => "Carne");
$productos[] = array('id' => 4, 'descripcion' => "Fideos");
$productos[] = array('id' => 5, 'descripcion' => "Lechuga");

echo json_encode(array('productos' => $productos));
 ?>
