function procesarFormulario() {
    const nombre = document.getElementById("name").value;
    const edad = document.getElementById("age").value;
  
    if (nombre && edad) {
      // Procesar los datos
    } else {
      alert("Por favor, ingrese un nombre y una edad");
    }
  }
  