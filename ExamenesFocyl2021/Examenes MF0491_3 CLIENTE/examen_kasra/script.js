//ej1
console.log("todo funciona");

const divJS = document.getElementById("javascript");
//ej2
const unirCadenas = (cadena1, cadena2) => {
  let mensaje = "";
  mensaje = cadena1 + "-" + cadena2;
  console.log(mensaje.toLowerCase());
};

unirCadenas("HOLA", "mundo Grande");
// Ejercicio 3
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
// Ejercicio 4

const rellenarUl = () => {
  const hobis = ["baloncesto", "tenis", "volleyball", "futbol", "pingpong"];
  hobis.push("andar");
  hobis.unshift("cenar");

  const fragment = document.createDocumentFragment();

  for (const hobi of hobis) {
    const itemList = document.createElement("LI");

    itemList.textContent = hobi;

    fragment.appendChild(itemList);
  }

  const ulEjer4 = document.getElementById("javascript");

  ulEjer4.appendChild(fragment);
};
console.log(hobi);
rellenarUl();
// Ejercicio 5

const rellenarLibrFav = () => {
  const libroFav = {
    title: "Baby Driver",
    author: "Mustang",
    year: 1969,
    pages: 145,
    img: "https://www.nacionrex.com/__export/1513982279509/sites/debate/img/2017/12/22/baby_driver_poster.jpg_458947530.jpg",
    genre: "scifi",
    isRead: true,
  };

  const rellenarLibrFav = document.createElement("P");
  parrafoPelicula.innerHTML = `Mi libro favorita es <strong>${libroFav.title}</strong> cuyo author es <em>${libroFav.author}
</em> su numero de pagina es <span class="libroa">${libroFav.pages}</span><br>
<img src="${libroFav.img}" alt="${libroFav.title}">
`;

  divJS.appendChild(rellenarLibrFav);
};

rellenarLibrFav();
// Ejercicio 7

class shape {
  constructor(tipo, altura, anchura) {
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

const rectangulo = new shape("rectangulo", 12, 48);

const parrafoObjeto = document.createElement("P");

let mensajeObjeto = rectangulo.imprimir();
mensajeObjeto += ` mi area es igual a ${rectangulo.calcularArea()}`;
parrafoObjeto.textContent = mensajeObjeto;

divJS.appendChild(parrafoObjeto);
