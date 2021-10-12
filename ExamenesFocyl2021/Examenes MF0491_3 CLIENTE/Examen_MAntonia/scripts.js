console.log("Todo Funciona");

const divJS = document.getElementById("javascript");

//  Ejercicio 2

const unirCadenas = (cadena1, cadena2) => {
  let mensaje = "mensaje";
  mensaje = cadena1 + " - " + cadena2;
  console.log(mensaje.toLowerCase());
};

concatenarStrings("HOLA", "clase");

//Ejercicio 3

const compararNumeros = () => {
  let num1 = parseInt(prompt("Introduce numero1"));
  let num2 = parseInt(prompt("Introduce numero2"));

  if (num1 === num2) {
    alert(`${num1} es igual a ${num2}`);
  } else if (num1 > num2) {
    alert(`${num1} es mayor que ${num2}`);
  }
};
console.log("numero");

// Ejercicio 4

const rellenarUl = () => {
  const hobbies = ["cine", "lectura", "pasear", "musica", "dormir"];

  const fragment = document.createDocumentFragment();

  for (const hobbie of hobbies) {
    const itemList = document.createElement("LI");
    itemList.textContent = hobbie;
    hobbies.push("comer");
    hobbies.unshift("tejer");
    fragment.appendChild(itemList);
    hobbies.sort();
  }
};

// Ejercicio 5

const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  compararNumeros();
});

// Ejercicio 6

const rellenarlibroFav = () => {
  const libroFav = {
    title: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    year: 1942,
    paginas: 145,
    img: "https://www.nacionrex.com/__export/1513982279509/sites/debate/img/2017/12/22/baby_driver_poster.jpg_458947530.jpg",
    genre: "Literatura infantil",
    isRead: true,
  };

  const parrafoLibro = document.createElement("P");
  parrafoLibro.innerHTML = `Mi libro favorito es <strong>${libroFav.title}</strong> cuyo autor es <em>${libroFav.autor}
</em> sus paginas son <span class="libro">${libroFav.paginas}</span><br>
<img src="${libroFav.img}" alt="${libroFav.title}">
`;

  divJS.appendChild(parrafoLibro);
};
//  Ejercicio 7

class Shape {
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

const rectangulo = new Shape("rectangulo", 12, 48);

const parrafoObjeto = document.createElement("P");
