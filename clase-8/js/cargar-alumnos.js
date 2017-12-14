$('a.cargar-alumnos').on('click', function(ev){
  ev.preventDefault();
  var cargarDatos = function(data){
    var alumnos = data.alumnos;
    var $table = $('table.tabla-alumnos tbody');
    $table.html("");
    console.log(alumnos.length);
    for (var i = 0; i < alumnos.length; i++) {
      var alumno = new Alumno(alumnos[i].nombre, alumnos[i].apellido, alumnos[i].notas);
      var $fila = $('<tr></tr>');
      $fila.append($('<td></td>').html(alumno.nombre));
      $fila.append($('<td></td>').html(alumno.apellido));
      for (var j = 0; j < alumno.getNota().length; j++) {
        $fila.append($('<td></td>').html(alumno.getNota()[j]));
      }
      $fila.append($('<td></td>').html(alumno.calcularPromedio()));
      $fila.append($('<td></td>').html(alumno.evaluarAlumno()));
      $table.append($fila);
    };
  };
  $.ajax({
    url:'includes/alumnos.php',
    dataType:'json'
  }).done(cargarDatos);
});
