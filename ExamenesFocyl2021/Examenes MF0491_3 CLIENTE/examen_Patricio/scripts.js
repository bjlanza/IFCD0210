// Ejercicio nº1
// Muestra mensaje por consola el mensaje Todo Funciona
const divJS = document.getElementById("javascript");
console.log("Todo Funciona");

// Ejercicio nº2
// Concatena dos cadenas separadas por un guión
const concatenarStrings = (cadena1, cadena2) => {
  let mensaje = "";
  mensaje = cadena1 + "-" + cadena2;
  console.log(mensaje.toLowerCase());
};
concatenarStrings("HOLA", "mundoCruel");

// Ejercicio nº3
// Se pide al usuario dos numeros y muestra cual de los dos es mayor
const compararNumeros = () => {
  let num1 = parseInt(prompt("Introduce numero1"));
  let num2 = parseInt(prompt("Introduce numero2"));

  if (num1 === num2) {
    alert(`${num1} es igual a ${num2}`);
  } else if (num1 > num2) {
    alert(`${num1} es mayor que ${num2}`);
  } else {
    alert(`${num1} es menor que ${num2}`);
  }
};
//compararNumeros();

// Ejercicio nº4
// Rellenar lista ordenadas de mis pasatiempos
const rellenarPasatiempos = () => {
  const pasatiempos = ["viajar", "lectura", "deporte", "series", "videojuegos"];
  pasatiempos.unshift("coches");
  pasatiempos.push("cine");
  pasatiempos.sort();
  const fragment = document.createDocumentFragment();
  const pasatiemposJS = document.getElementById("mispasatiempos");

  for (const pasatiempo of pasatiempos) {
    const itemList = document.createElement("LI");
    itemList.textContent = pasatiempo;
    fragment.appendChild(itemList);
  }
  pasatiemposJS.appendChild(fragment);
};
rellenarPasatiempos();

// Ejercicio nº5
// Crear un boton con manejador de eventos
const button = document.getElementById("button");
button.addEventListener("click", (e) => {
  compararNumeros();
});

// Ejercicio nº6
// Mi libro favorito
const divLibro = document.getElementById("idlibro");
const rellenarLibroFav = () => {
  const libroFav = {
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    year: 1943,
    pages: 111,
    img: "https://imagessl4.casadellibro.com/a/l/t7/94/9788478887194.jpg",
    isRead: true,
  };
  const parrafoLibro = document.createElement("P");
  parrafoLibro.innerHTML = `Mi libro favorito es <strong>${libroFav.title}</strong> cuyo autor es <em>${libroFav.author}
  </em> el número de paginas es ${libroFav.pages} y una caratula es: ${libroFav.img}`;
  divLibro.appendChild(parrafoLibro);
};
rellenarLibroFav();

// Ejercicio7
const divFigura = document.getElementById("ejerClases");
class Shape {
  constructor(altura, anchura, tipo) {
    this.tipo = tipo;
    this.altura = altura;
    this.anchura = anchura;
  }

  calcularArea() {
    return this.altura * this.anchura;
  }
  imprimir() {
    return `Soy un ${this.tipo} mi anchura es ${this.anchura} y mi altura es ${this.altura}.`;
  }
}
const rectangulo1 = new Shape(12, 48, "rectangulo");
const rectangulo2 = new Shape(6, 2, "rectangulo");
const rect = document.createElement("p");
rect.textContent = rectangulo1.imprimir();
rect.textContent += ` Mi area es ${rectangulo1.calcularArea()} y la suma de las dos areas es ${
  rectangulo1.calcularArea() + rectangulo2.calcularArea()
}.`;
divFigura.appendChild(rect);
