var Alumno = function (nombre, apellido, nota){
  this.nombre = nombre;
  this.apellido = apellido;
  this.nota = nota;

  var estaAprobado = false;

  //Getters
  this.getNombre = function(){
    return this.nombre;
  }

  this.getApellido = function(){
    return this.apellido;
  }

  this.getNota = function(){
    return this.nota;
  }
  //Setters
  this.setNombre = function(nombre){
    this.nombre = nombre;
    return null;
  }
  this.setApellido = function(apellido){
    this.apellido = apellido;
    return null;
  }
  this.setNota = function(nota){
    this.nota = nota;
    return null;
  }

  this.calcularPromedio = function(){
    var promedio = 0;
    for (var i = 0; i < this.nota.length; i++) {
      promedio += this.nota[i];
    }
    promedio /= nota.length;
    return promedio;
  }

  this.evaluarAlumno = function (){
    estaAprobado = true;
    resultado = "Desaprobado";
    for (var i = 0; i < this.nota.length; i++) {
      estaAprobado &= this.nota[i] >= 6;
    }
    estaAprobado &= this.calcularPromedio() >= 6;
    if(estaAprobado) resultado = "Aprobado";
    return resultado;
  }

  return null;
}
