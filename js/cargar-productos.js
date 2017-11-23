var cargarProductos = function(ev)
{
  ev.preventDefault();
  var cargarDatos = function(){
    var productos = JSON.parse(ajax.response).productos;

    var table = [];
    for (var i = 0; i < productos.length; i++) {
      var producto = productos[i];
      var fila = "<tr><th scope=\"row\">" + producto.id + "</th>";
      fila += "<td>" + producto.descripcion + "</td></tr>";
      table.push(fila);
    };

    document.querySelector('table.tabla-productos tbody').innerHTML = table.join("\n");
  }

  var ajax = new XMLHttpRequest();
  ajax.addEventListener('load', cargarDatos);
  ajax.open('GET', 'includes/productos.php');
  ajax.send();
}

var botonCargarProductos = document.querySelector('a.cargar-productos');
botonCargarProductos.addEventListener('click', cargarProductos);
