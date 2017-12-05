<?php
	$alumnos = array();
	$alumnos[] = array( 'apellido' => "Alvarez" ,
						'nombre' => 'Natalia',
						'notas' => [6,7,8,6]
						);
	$alumnos[] = array( 'apellido' => "Lopez" ,
						'nombre' => 'Leandro',
						'notas' => [6,7,8,4]
						);
	$alumnos[] = array( 'apellido' => "Gomez" ,
						'nombre' => 'Juan',
						'notas' => [6,5,6,6]
						);
	echo json_encode(array('alumnos' => $alumnos));
?>
