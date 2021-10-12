console.log("Todo Funciona");

// Ejercicio 2

const unirCadenas = (string1, string2) => {
  let mensaje = `${string1}-${string2}`.toLowerCase();
  console.log(mensaje);
};

unirCadenas("HOLA", "Mundo");

// Ejercicio 3

const compararNumeros = (num1, num2) => {
  num1 = prompt("Introduce el Primer numero");
  num2 = prompt("Introduce el segundo numero");

  if (num1 == num2) {
    alert("Los numeros son iguales");
  } else if (num1 > num2) {
    alert("EL primer numero es el mayor");
  } else {
    alert("El segundo numero es mayor");
  }
};

compararNumeros();

// Ejercicio 4

const pasatiempos = ["Leer", "Cocinar", "Senderismo", "Programar", "Dibujar"];

pasatiempos.unshift("Pintar");
pasatiempos.push("Dormir");
pasatiempos.sort();

console.log(pasatiempos);

const fragment = document.createDocumentFragment();

for (pasatiempo of pasatiempos) {
  const lista = document.createElement("li");
  lista.textContent = pasatiempo;
  fragment.appendChild(lista);
}

const añadirLista = document.getElementById("ejerciciojs4");
añadirLista.appendChild(fragment);

// Ejercicio 5

document.getElementById("btn").addEventListener("click", unirCadenas());

// Ejercicio 6

const libroFav = {
  title: "Origen",
  author: "Dan Brown",
  pages: 500,
  year: 2019,
  img: "https://www.planetadelibros.com/usuaris/libros/fotos/255/m_libros/portada_origen_dan-brown_201706271532.jpg",
  isRead: true,
};

const propiedades = `Mi libro favorito es<strong>${libroFav.title}</strong>, su autor es<em>${libroFav.author}, Tiene <span class="libro">${libroFav.pages}</span> páginas.<br> <img src="${libroFav.img}"class="caratula" style="width:200px;"</em>`;

const parrafo = document.createElement("p");
parrafo.textContent = propiedades;

document.getElementById("javascript").innerHTML = propiedades;

// Ejercicio 7

class Shape {
  constructor(altura, anchura, tipo) {
    this.altura = altura;
    this.anchura = anchura;
    this.tipo = tipo;
  }
  calcularArea() {
    return this.altura * this.anchura;
  }
  propiedades() {
    return `La forma tiene una altura de ${this.altura}cm, una anchura de ${
      this.anchura
    } y es un ${this.tipo}. Además su area es de ${this.calcularArea()}cm.`;
  }
}

const shape1 = new Shape(10, 10, "Rectangulo");
const shape2 = new Shape(5, 5, "Triangulo");
const areas = shape1.calcularArea() + shape2.calcularArea();

document.getElementById(
  "ejercicioClases"
).innerHTML = `${shape1.propiedades()}. La suma de ambas areas son ${areas}cm`;
