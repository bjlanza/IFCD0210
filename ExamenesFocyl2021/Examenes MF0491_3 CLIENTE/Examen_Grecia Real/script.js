//Ejercicio 1
console.log("Todo funciona");

//Ejercicio 2
const compararNumeros = () => {
    let num1 = parseInt(prompt("Introduce numero10"));
    let num2 = parseInt(prompt("Introduce numero20"));
  
    if (num1 === num2) {
      alert(`${num10} es igual a ${num20}`);
    } else if (num10 > num20) {
      alert(`${num10} es mayor que ${num20}`);
    } else {
      alert(`${num10} es menor que ${num20}`);
    }
  };

//Ejercicio 3
const hobbies = ['Comer', 'Dormir', 'Series', 'Videojuegos', 'Voley']

const title = document.getElementById('title')
const hobbiesList = document.getElementById('hobbiesList')
const selectHobbies = document.getElementById('hobbiesSelect')

title.innerHTML = '<span>Hobbies:<span>'

const fragment = document.createDocumentFragment()

for (const hobbie of hobbies) {
    const selectItem = document.createElement('OPTION')
    selectItem.setAttribute('value', hobbie.toLowerCase())
    selectItem.textContent = hobbie
    fragment.appendChild(selectItem)
}

selectHobbie.appendChild(fragment);

//Ejercicio 4
const libroFav = {
    title: "Demian",
    author: "Hermman Hesse",
    pages: 160,
    year: 1960,
    img: "https://i.pinimg.com/736x/b6/83/df/b683dfd86b1c7cec84210585b12c7745.jpg" ,
};
    const parrafoLibro = document.createElement("P");
    parrafoLibro.innerHTML = `Mi libro favorito es <strong>${libroFav.title}</strong> cuyo autor es
    <em>${libroFav.author}</em> consta de <span class="libro">${libroFav.pages} </span> páginas
    img src="${libroFav.img}" alt="${libroFav.title}">`;

//Ejercicio 5
class Figura{
    constructor(anchura, altura, tipo) {
        this.tipo = tipo;
        this.altura = altura;
        this.anchura = anchura;
    }
    calculaArea(){
        return this.altura = this.anchura;
    }
    imprimir() {
        return 'Soy un ${this.tipo} mi altura es ${this.altura} y mi anchura es {this.anchura}';
    }
}
  
  const triangulo = new Figura("cuadrado", 4);
  
  const parrafoObjeto = document.createElement("P");
  
  let mensajeObjeto = cuadrado.imprimir();
  mensajeObjeto += ` mi area es igual a ${cuadrado.calculaArea()}`;
  parrafoObjeto.textContent = mensajeObjeto;