console.log("Todo Funciona");

// Ejercicio JS2 //
const unirCadenas = (Nombre, Apellido) => {
  let mensaje = "";
  mensaje = Nombre + " - " + Apellido;
  console.log(mensaje.toLowerCase());
};

function myFunction(a, b) {
  return a * b;
}
document.getElementById("mensaje").innerHTML = myFunction(10, 2);

// Ejercicio JS3 //
const compararNumeros = () => {
  let num1 = parseInt(prompt("Introducir num1"));
  let num2 = parseInt(prompt("Introducir num2"));

  if (num1 === num2) {
    alert(`${num1} es igual a ${num2}`);
  } else if (num1 > num2) {
    alert(`${num1} es mayor que ${num2}`);
  }
};

// Ejercicio JS 4 //
const pasatiempos = () => {
  //Declarar el array con los pasatiempos
  const pasatiempos = ["deporte", "libros", "cine", "musica", "TV"];
  // Crear un fragmento para añadir los LI que hago
  const fragment = document.createDocumentFragment();
};
function myFunction() {
  pasatiempos.unshift("deporte", "libros", "cine", "musica", "TV");
}
