//1. Introducción a JavaScript
// Ejercicio 2
function ejercicio12() {
  let a = 5;
  let b = 10;
  let c = a + b;
  console.log("Ejercicio 2 - Resultado:", c); // Debería mostrar 15
}

// Ejercicio 3
function ejercicio13() {
  let nombre = prompt("Ingrese su nombre:");
  console.log("Ejercicio 3 - Saludo: Hola, " + nombre + "!");
}

//2. Operadores lógicos y condicionales
// Ejercicio 1
function ejercicio21() {
  let a=10;
  let b=20;
  let c=0;
  let mayor;
  if (a >= b && a >= c) {
      mayor = a; // a es mayor o igual que b y c
  } else if (b >= a && b >= c) {
      mayor = b; // b es mayor o igual que a y c
  } else {
      mayor = c; // c es mayor que a y b
  }
  console.log("El mayor es:", mayor);
}

// Ejercicio 2
function ejercicio22() {
  let numeroIngresado = parseInt(prompt("Ingrese un número:"));
  if (numeroIngresado % 2 === 0) {
      console.log("El número", numeroIngresado, "es par");
  } else {
      console.log("El número", numeroIngresado, "es impar");
  }
}

//3. Operadores de asignación y bucles
// Ejercicio 1
function ejercicio31() {
  let variable = 10;
  while (variable >= 0) {
      console.log("Ejercicio 1 - Valor de variable:", variable);
      variable--;
  }
}

// Ejercicio 2
function ejercicio32() {
  let numero;
  do {
      numero = parseInt(prompt("Ingrese un número mayor a 100:"));
  } while (numero <= 100);
  console.log("Ejercicio 2 - Número ingresado:", numero);
}
//4.Funciones Javascript
function esPar(numero) {
  return numero % 2 === 0;
}

function ejercicio41() {
  let numero = parseInt(prompt("Ingrese un número:"));
  console.log("El número " + numero + " es par: " + esPar(numero));
}


function convertirCelsiusAFahrenheit(celsius){
   let fahrenheit = celsius * 1.8 + 32; // Fórmula de conversión
    console.log(`${celsius}°C es igual a ${fahrenheit}°F`); 
}
function ejercicio42(){
let celsius = parseInt(prompt("Ingrese un valor en grados celsius"));
convertirCelsiusAFahrenheit(celsius);
}
let persona ={
  nombre:"Ana",
  apellido:"Martinez",
  edad :30,
  ciudad : "Barcelona" ,
    cambiarCiudad: function(nuevaCiudad) {
    this.ciudad = nuevaCiudad;
    }
}
//. Objetos en JavaScript
// Definición del objeto libro
let libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  año: 1605,

  // Método para determinar si el libro es antiguo
  esAntiguo: function() {
      let añoActual = new Date().getFullYear();
      return (añoActual - this.año) > 10;
  }
};
// Muestra en la consola si el libro es antiguo o reciente
function ejercicio52(){
  console.log(`El libro "${libro.titulo}" es antiguo: ${libro.esAntiguo()}`);
}
//6.Arrays 
// ejercicio1 
// Declara un array llamado numeros con los números del 1 al 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array para almacenar los resultados
let numerosMultiplicados = [];

// Bucle que multiplica cada número por 2 y almacena los resultados en el nuevo array
for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados[i] = numeros[i] * 2; // Multiplica el número por 2 y lo almacena
}

// Muestra el array original y el nuevo array en la consola
function ejercicio61(){
  console.log("Array original:", numeros);
  console.log("Array multiplicado por 2:", numerosMultiplicados);
}
// ejercicio2
// Crea un array vacío llamado pares
let pares = [];

// Bucle for que itera hasta 20
for (let i = 0; i <= 20; i++) {
    if (pares.length < 10 && i % 2 === 0) { 
        pares.push(i); // Agrega el número par al array
    }
}

// Imprime el array pares en la consola
function ejercicio62(){ 
   console.log("Los primeros 10 números pares son:", pares);
}

// Selecciona todos los elementos con la clase 'parrafo'
const parrafos = document.querySelectorAll(".parrafo");
const btn = document.getElementById("cambiarColorBtn");

// Agrega un evento click al botón
btn.addEventListener("click", function() {
  // Cambia el color de cada párrafo a azul
  parrafos.forEach((parrafo) => {
    parrafo.style.color = "blue";
  });
});
 // Selecciona el campo de texto y el botón
 const campoTexto = document.getElementById("texto");
 const boton = document.getElementById("mostrarAlertaBtn");

 // Agrega un evento de clic al botón
 boton.addEventListener("click", function() {
   // Muestra el valor ingresado en una alerta
   alert("Valor ingresado: " + campoTexto.value);
 });
 // Selecciona todos los elementos li dentro de la lista ul
 const listaItems = document.querySelectorAll("#miLista li");

 // Agrega un evento click a cada elemento li
 listaItems.forEach((item) => {
   item.addEventListener("click", function() {
     console.log("Texto del elemento:", item.textContent);
   });
 });
 // Seleccionar el campo de texto y los botones
 const campotexto = document.getElementById("campoTexto");
 const btnDeshabilitar = document.getElementById("btnDeshabilitar");
 const btnHabilitar = document.getElementById("btnHabilitar");

 // Agregar evento para deshabilitar el campo de texto
 btnDeshabilitar.addEventListener("click", function() {
   campotexto.disabled = true;
 });

 // Agregar evento para habilitar el campo de texto
 btnHabilitar.addEventListener("click", function() {
   campotexto.disabled = false;
 });
 document.addEventListener("DOMContentLoaded", function () {
  const emailForm = document.getElementById("emailForm");
  const emailInput = document.getElementById("email");
  const emailDisplay = document.getElementById("emailDisplay");
  const deleteEmailBtn = document.getElementById("deleteEmailBtn");

  // Mostrar correo guardado si existe
  function displayStoredEmail() {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      emailDisplay.textContent = `Correo guardado: ${storedEmail}`;
      deleteEmailBtn.style.display = "inline"; // Mostrar botón de eliminar
    } else {
      emailDisplay.textContent = "";
      deleteEmailBtn.style.display = "none";
    }
  }

  // Guardar correo en localStorage y actualizar el DOM
  emailForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = emailInput.value;
    localStorage.setItem("email", email);
    displayStoredEmail();
    emailInput.value = ""; // Limpiar el campo de correo
  });

  // Eliminar correo de localStorage y actualizar el DOM
  deleteEmailBtn.addEventListener("click", function () {
    localStorage.removeItem("email");
    displayStoredEmail();
  });

  // Al cargar la página, mostrar el correo guardado si existe
  displayStoredEmail();
});
