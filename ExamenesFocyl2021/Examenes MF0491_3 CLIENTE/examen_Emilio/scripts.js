// ejercicio Js 1-----------------

console.log("todo Funciona");

// ---Ejercicio js 2 ----- Dos strings y mensaje en minuscula..---------------------------------------....

const unirCadenas = (cadena1, cadena2) => {
  let mensaje = "";
  mensaje = cadena1 + "-" + cadena2;
  console.log(mensaje.toLowerCase());
};
unirCadenas("ENVIADO", "en MayusCulas");

// -- ejercicio js 3------ comparar numeros -----------------------------------------

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

// boton eventlistener----------------------------

const button = document.getElementById("button");
button.addEventListener("click", (e) => {
  compararNumeros();
});

// --ejercicio js 4 -- array con pasatiempos favoritos hacia console.log  ...............................

const arrayDeportes = () => {
  const pasatiempos = ["Pasear", "Dormir", "Leer", "Television"];
  pasatiempos.push("Nadar"); // añadismos un elemento al final
  pasatiempos.unshift("Bici"); //añadimos un elemento al principio
  console.log(pasatiempos);
  const arrayordenada = pasatiempos.sort();
  console.log(arrayordenada);
};
arrayDeportes();

// ------- Lista ordenada.--------------------------

const rellenarUl = () => {
  //Declaro el array con los deportes
  const deportes = ["baloncesto", "tenis", "volleyball", "futbol", "pingpong"];
  // Creo un fragmento para añadir los LI que hago
  const fragment = document.createDocumentFragment();

  //Uso un bucle for porque es un numero limitado de elementos
  //Uso un bucleo for of porque iterar todo el array
  for (const deporte of deportes) {
    //Para cada item creo un LI
    const itemList = document.createElement("LI");
    //Igualo el contenido del LI a al deporte (String) correspondiente
    itemList.textContent = deporte;
    //Añado el LI al Fragmento
    fragment.appendChild(itemList);
  }

  // Obtengo el UL donde voy inserlar los LI
  const ulEjer4 = document.getElementById("ejercicio4");
  //Inserto el fragmento
  ulEjer4.appendChild(fragment);
};

rellenarUl();

//--Ejercicio 6 libro favorito----- ------------

const divJS = document.getElementById("javascript");

const rellenarPeliFav = () => {
  const peliculaFav = {
    title: "el arte de engañar el karma",
    autor: "elisabet benavent",
    year: 2021,
    duration: 145,
    img: "https://images-na.ssl-images-amazon.com/images/I/51pInAM5X6L._SX324_BO1,204,203,200_.jpg",
    isRead: true,
  };

  const parrafoPelicula = document.createElement("P");
  parrafoPelicula.innerHTML = `Mi libro favorito es <strong>${peliculaFav.title}</strong> cuyo autor es <em>${peliculaFav.autor}
</em> de <span class="pelicula">${peliculaFav.duration}</span> paginas<br><br><br>
<img src="${peliculaFav.img}" alt="${peliculaFav.title}">
`;

  divJS.appendChild(parrafoPelicula);
};

rellenarPeliFav();

// --- ejercicio js 7 ----- calcular area ---------------------------------

const divForma = document.getElementById("forma");

class Figura {
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
const rectangulo = new Figura("rectangulo", 12, 48); // instanciamos rectangulo
const cuadrado = new Figura("cuadrado", 6, 21); // instanciamos cuadrado

const parrafoObjeto = document.createElement("P");
let mensajeObjeto = rectangulo.imprimir();
mensajeObjeto += ` mi area es igual a ${rectangulo.calcularArea()}`;
parrafoObjeto.textContent = mensajeObjeto;

divForma.appendChild(parrafoObjeto);

// ----------------------------
