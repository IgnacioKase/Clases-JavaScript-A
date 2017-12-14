$('a.cargar-productos').on('click', function(ev){
  ev.preventDefault();
  var cargarDatos = function(data){
    var productos = data.productos;
    var $table = $('table.tabla-productos tbody');
    $table.html("");
    for (var i = 0; i < productos.length; i++) {
      var producto = productos[i];
      var $fila = $('<tr></tr>');
      $fila.append($('<th></th>').attr('scope','row').html(producto.id));
      $fila.append($('<td></td>').html(producto.descripcion));
      $table.append($fila);
    };
  };
  $.ajax({
    url:'includes/productos.php',
    dataType:'json'
  }).done(cargarDatos);
});
