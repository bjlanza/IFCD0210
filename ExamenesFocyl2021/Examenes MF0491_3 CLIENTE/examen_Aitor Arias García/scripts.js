// Ejercicio nº1
console.log ("Todo Funciona");

// Ejercicio nº2

function unirCadenas(n1, n2) {
let mensaje = n1 + " - " + n2;
console.log(mensaje.toLowerCase());
}
unirCadenas ("Hello", "WORLD");

// Ejercicio nº3

function compararNumeros() {
  let num1 = parseInt(prompt("Introduce numero1"));
  let num2 = parseInt(prompt("Introduce numero2"));

  if (num1 == num2) {
    alert(`${num1} es igual a ${num2}`);
  } else if (num1 > num2) {
    alert(`${num1} es mayor que ${num2}`);
  } else {
    alert(`${num1} es menor que ${num2}`);
  }
};
compararNumeros()
  // Ejercicio 5
  
  const x = document.getElementById("boton");
  x.addEventListener("click", unirCadenas("Hola", "Adios"));