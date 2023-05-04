function CalcularNumeros(){
    
    let arreglo = document.getElementById("num1").value
    arreglo=arreglo.split(",").map((numero)=>{
        return parseInt(numero)
     })
    console.log(arreglo)

    let numero = document.getElementById("num2").value
    console.log(numero)

    
    let resultado = encontrarParesMasCercanos(arreglo,numero)
    console.log(resultado)

    document.getElementById("resultado").innerHTML=JSON.stringify(resultado)
}

function ejercicio2(){
        
    let anagrama1 = document.getElementById("cadena1").value

    
    console.log(anagrama1)

    let anagrama2 = document.getElementById("cadena2").value
    console.log(anagrama2)

    
    let resultadoA = sonAnagramas(anagrama1,anagrama2)
    console.log(resultadoA)

    document.getElementById("resultadoA").innerHTML=JSON.stringify(resultadoA)


}

function ejercicio3(){

  let punto3 = document.getElementById("arreglo3").value
  console.log(punto3)

  let resultado3 = invertirArregloConCaracteresEspeciales(punto3)
    console.log(resultado3)

  document.getElementById("resultado3").innerHTML=JSON.stringify(resultado3)

}

function encontrarParesMasCercanos(arr, X) {
    
    arr.sort((a, b) => a - b);
  
    
    let indice1 = 0;
    let indice2 = arr.length - 1;
  
    
    let suma1 = arr[indice1] + arr[indice2];
    let suma2 = 0;
  
    
    for (let i = 0; i <= arr.length - 1; i++) {
      for (let j = i + 1; j <= arr.length; j++) {
        
        let sumaActual = arr[i] + arr[j];
  
        
        if (sumaActual >= X) {
          break;
        }
  
        
        if (X - sumaActual <= X - suma1) {
          indice1 = i;
          indice2 = j;
          suma1 = sumaActual;
        }
      }
  
     
      if (X - suma1 <= X - suma2) {
        suma2 = suma1;
      }
    }
  
    
    return {
      par1: [arr[indice1], arr[indice2]],
      par2: encontrarParesRestantes(arr, indice1, indice2)
    };
  }
  
  
  function encontrarParesRestantes(arr, indice1, indice2) {
    let resultado = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i !== indice1 && i !== indice2) {
        resultado.push(arr[i]);
      }
    }
  
    return [resultado[0], resultado[1]];
  }


  function sonAnagramas(str1, str2) {
    
    const arr1 = str1.split("");
    const arr2 = str2.split('');
  
    
    arr1.sort();
    arr2.sort();
  
    
    const strArr1 = arr1.join('');
    const strArr2 = arr2.join('');
    return strArr1 === strArr2;
  }

  function procesarTexto() {
    
    const texto = document.getElementById("texto").value.trim();
  
    
    const numPalabras = texto.split(" ").length;
  
    
    const primeraPalabra = texto.split(" ")[0];
  
    
    const ultimaPalabra = texto.split(" ")[numPalabras - 1];
  
    
    const oracionInvertida = texto.split(" ").reverse().join(" ");
  
    
    const resultadoDiv = document.getElementById("resultado3e");
    
     resultadoDiv.innerHTML = `Número de palabras: ${numPalabras}<br>
                             Primera palabra: ${primeraPalabra}<br>
                             Última palabra: ${ultimaPalabra}<br>
                              Oración invertida: ${oracionInvertida}`;
  }
  
  function invertirArregloConCaracteresEspeciales(arreglo) {
    
    let caracteresEspeciales = [];
    let caracteresNormales = [];
  
    
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i].match(/[^\w]/)) {
        caracteresEspeciales.push(arreglo[i]);
      } else {
        caracteresNormales.push(arreglo[i]);
      }
    }
  
    
    caracteresNormales.reverse();
  
    
    let nuevoArreglo = [];
    for (let i = 0, j = 0, k = 0; i < arreglo.length; i++) {
      if (arreglo[i].match(/[^\w]/)) {
        nuevoArreglo.push(caracteresEspeciales[j++]);
      } else {
        nuevoArreglo.push(caracteresNormales[k++]);
      }
    }
  
    return nuevoArreglo;
  }
  
  const formulario = document.querySelector('form');
  const nombreInput = document.getElementById('nombre');
  const correoInput = document.getElementById('correo');
  const contrasenaInput = document.getElementById('contrasena');
  
  const contrasenaValida = (contrasena) => {
      const patron = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}$/;
      return patron.test(contrasena);
  }
  
  const correoValido = (correo) => {
      const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return patron.test(correo);
  }
  
  const encriptarContrasena = (contrasena) => {
      let encriptada = "";
      for (let i = 0; i < contrasena.length; i++) {
          const codigoAscii = contrasena.charCodeAt(i);
          if (codigoAscii >= 65 && codigoAscii <= 90) { 
              encriptada += String.fromCharCode((codigoAscii - 65 + 3) % 26 + 65);
          } else if (codigoAscii >= 97 && codigoAscii <= 122) { 
              encriptada += String.fromCharCode((codigoAscii - 97 + 3) % 26 + 97);
          } else {
              encriptada += contrasena.charAt(i); 
          }
      }
      return encriptada;
  }
  
  formulario.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const nombre = nombreInput.value;
      const correo = correoInput.value;
      const contrasena = contrasenaInput.value;
  
      if (!contrasenaValida(contrasena)) {
          alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número.");
          return;
      }
  
      if (!correoValido(correo)) {
          alert("El correo electrónico no tiene un formato válido.");
          return;
      }
  
      const contrasenaEncriptada = encriptarContrasena(contrasena);
  
      alert(`Nombre: ${nombre}\nCorreo electrónico: ${correo}\nContraseña encriptada: ${contrasenaEncriptada}`);
  });
  