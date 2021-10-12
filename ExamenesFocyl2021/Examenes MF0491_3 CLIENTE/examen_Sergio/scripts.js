//Ejercicio 1

console.log("todo funciona");

const divJS = document.getElementById("javascript");

//Ejerciccio 2

const unirCadenas = (parametro1, parametro2) => {
  let = mensaje = `-`;
  mensaje = parametro1 + "-" + parametro2;
  console.log(mensaje.toLowerCase());
};
unirCadenas("HOLA", "mUndo");

//Ejercicio 3

const compararNumeros = () => {
  let num1 = parseInt(prompt(`introduce un numero 1`));
  let num2 = parseInt(prompt(`introduce un numero 2`));

  if (num1 === num2) {
    alert(`${num1}es igual a ${num2}`);
  } else if (num1 > num2) {
    alert(`${num1}es mayor a ${num2}`);
  } else {
    alert(`${num1}es menor a ${num2}`);
  }
};

/*Me da el error que hablamos el martes:me pide un numero , y salta directamente a la alerta
que me da NaN*/

compararNumeros();

//Ejercicio 4

const rellenarOl = () => {
  const pasatiempos = [
    "crucigrama",
    "sudoku",
    "autodefinido",
    "sopa de letras",
    "7 diferencias",
  ];

  const fragment = document.createDocumentFragment();

  for (const pasatiempo of pasatiempos) {
    const itemList = document.createElement("LI");

    itemList.textContent = pasatiempo;

    fragment.appendChild(itemList);
  }

  const ulejercicio4 = document.getElementById("pasatiempo");
  ulejercicio4.appendChild(fragment);
};

rellenarOl();

//Ejercicio 5

//Ejercicio 6

const LibroFavorito = () => {
  const librofav = {
    title: "Rebeldes",
    author: "Susan E.Hinton",
    year: 1967,
    pages: 219,
    img: "https://imagessl8.casadellibro.com/a/l/t7/88/9788491221388.jpg",
    isRead: "true",
  };

  const parrafoLibro = document.createElement("P");
  parrafoLibro.innerHTML = `Mi libro favorito es <strong>${librofav.title}</strong> su escritor es <em>${librofav.author}
</em> tiene  <span class="pelicula">${librofav.pages}</span><br>
<img src="${librofav.img}" alt="${librofav.title}">
`;

  divJS.appendChild(parrafoLibro);
};

LibroFavorito();

//Ejercicio 7

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

const rectangulo = new Figura("rectangulo", 12, 48);

const parrafoObjeto = document.createElement("P");

let mensajeObjeto = rectangulo.imprimir();
mensajeObjeto += ` mi area es igual a ${rectangulo.calcularArea()}`;
parrafoObjeto.textContent = mensajeObjeto;

divJS.appendChild(parrafoObjeto);
