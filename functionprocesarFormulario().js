function procesarFormulario() {
    const nombre = document.getElementById("name").value;
    const edad = document.getElementById("age").value;
  
    if (nombre && edad) {
      const resultado = "Nombre: " + nombre + ", Edad: " + edad;
      mostrarResultado(resultado);
    } else {
      alert("Por favor, ingrese un nombre y una edad");
    }
  }
  