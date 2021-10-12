//Ejercicio JS1
console.log("Todo funciona");

const divJava = document.getElementById("javascript");

// Ejercicio JS2
const concatenarStrings = (cadena1, cadena2) => {
  let mensaje = "";
  mensaje = cadena1 + "-" + cadena2;
  console.log(mensaje.toLowerCase());
};
concatenarStrings("JAVA", "Script");

// Ejercicio JS3
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

// Ejercicio JS4

const rellenarOl = () => {
  const lista = ["Sopa de Letras", "Sudoku", "Cruzadas", "Autodefinidos", "Jerogrifico"];
  const valor = document.createDocumentFragment();

  lista.push("Diferencias")
  lista.unshift("Jaquemate")
  lista.sort()
  
  for (const step of lista) {
    const box = document.createElement("LI");
    box.textContent = step;
    valor.appendChild(box);
  }

  const olEjer4 = document.getElementById("rellenarLista");
  olEjer4.appendChild(valor);
}

rellenarOl();

// Ejercicio JS5

const rellenarLibroFav = () => {
  const libroFav = {
    title: "La Historia de León.",
    author: "Ismael Alonso Alonso",
    pages: 320,
    year: 1969,
    img: "https://m.media-amazon.com/images/I/41CBpv+hq3L.jpg",
    isread: true,
  };

  const parrafoLibro = document.createElement("P");
  parrafoLibro.innerHTML =`Mi libro favorito es <strong> ${libroFav.title} </strong> escrito por <em> ${libroFav.author}</em> tiene ${libroFav.pages} y es del año ${libroFab.year}`;
  <img src="${libroFav.img}" alt="${libroFav.title}"></img>


  divJava.appendChild(parrafoLibro);


rellenarLibroFav();


//Ejercicio JS5
const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  compararNumeros();
});


// Ejercicio JS6

class Figura {
  constructor(tipo, altura, anchura) {
    this.tipo = tipo;
    this.altura = altura;
    this.anchura = anchura;
  }
}


}

const rectangulo = new Figura("rectangulo", 12, 48);

const parrafoObjeto = document.createElement("P");

let mensajeObjeto = rectangulo.imprimir();
mensajeObjeto += ` mi area es igual a ${rectangulo.calcularArea()}`;
parrafoObjeto.textContent = mensajeObjeto;

divJava.appendChild(parrafoObjeto);

//Ejercicio 7
const gallery = document.getElementById("gallery");
gallery.addEventListener("click", (e) => {
  e.target.classList.add("red");
});

