const divJavascript = document.getElementById("javascript");

//Ejercicio JS 1
console.log("Todo Funciona");

//Ejercicio JS 2
function unirCadenas(str1, str2) {
  let mensaje = str1 + "-" + str2;
  console.log(mensaje.toLocaleLowerCase());
}

unirCadenas("HELLO", "WORLD");
unirCadenas("Hello", "World");

//Ejercicio JS 3
function compararNumeros() {
  let n1, n2;
  while (isNaN(n1)) {
    n1 = prompt("Dame el primer numero");
    if (!isNaN(n1)) {
      n1 = parseInt(n1);
    }
  }
  while (isNaN(n2)) {
    n2 = prompt("Dame el segundo numero");
    if (!isNaN(n2)) {
      n2 = parseInt(n2);
    }
  }
  console.log(n1);
  console.log(n2);
  if (n1 > n2) {
    alert(`${n1} es mayor que ${n2}`);
  } else if (n2 > n1) {
    alert(`${n2} es mayor que ${n1}`);
  } else {
    alert("Los numeros son iguales");
  }
}

compararNumeros();

//Ejercicio JS 4

const pasatiempos = [
  "Peliculas",
  "Juegos",
  "Mirar Memes",
  "Comer",
  "Tecnologia",
];

function funArray(arr) {
  const frag = document.createDocumentFragment();
  arr.unshift("Series");
  arr.push("Programar");
  arr.sort();
  const lista = document.createElement("OL");
  for (let pasatiempo of pasatiempos) {
    const il = document.createElement("LI");
    il.textContent = pasatiempo;
    lista.appendChild(il);
  }
  frag.appendChild(lista);
  divJavascript.appendChild(frag);
}

funArray(pasatiempos);

//Ejercicio JS 5

const botEvento = document.getElementById("botEvento");
botEvento.addEventListener("click", unirCadenas("Ejercicio5", "Ejecutado"));

//Ejercicio JS 6

const libro = {
  titulo: "Arduino Projects Book",
  autor: "Scott Fitzgerald",
  paginas: "200",
  anio: "2013",
  img: "https://images-na.ssl-images-amazon.com/images/I/41sJfXUPMkL._SX293_BO1,204,203,200_.jpg",
  isRead: true,
};

function toStringLibro() {
  const parr = document.createElement("p");
  const imagenLibro = document.createElement("img");
  parr.innerHTML = `El titulo del libro es <strong>${libro.titulo}</strong>, dirigida por <em>${libro.autor}</em>, con <span class="libro">${libro.paginas}</span> paginas.`;
  imagenLibro.setAttribute("src", libro.img);
  imagenLibro.setAttribute("alt", "Portada del libro Arduino Projects Book");
  divJavascript.appendChild(parr);
  divJavascript.appendChild(imagenLibro);
}

toStringLibro();

//Ejercicio JS 7

class Shape {
  constructor(altura, anchura, tipo) {
    this.altura = altura;
    this.anchura = anchura;
    this.tipo = tipo;
  }

  calcArea() {
    let res;
    res = this.altura * this.anchura;
    return res;
  }

  toString() {
    return `La figura es un ${this.tipo.toLocaleLowerCase()}, su altura es ${
      this.altura
    }, su anchura es ${this.altura} y su area es ${this.calcArea()}.`;
  }
}

const figura1 = new Shape(50, 100, "rectangulo");
const figura2 = new Shape(50, 50, "cuadrado");
const parrafoFigura = document.createElement("P");
parrafoFigura.textContent = figura1.toString();
parrafoFigura.textContent += `\n La suma de las areas de las dos figuras es ${
  figura1.calcArea() + figura2.calcArea()
}`;
divJavascript.appendChild(parrafoFigura);
