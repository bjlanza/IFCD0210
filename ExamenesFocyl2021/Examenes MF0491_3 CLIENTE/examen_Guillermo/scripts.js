
// ------------------ EJERCICIO 1 -----------------

console.log("Todo funciona");

const divjs = document.getElementById("javascript")


// ------------------ EJERCICIO 2 -----------------

const unirCadenas = (cad1, cad2) => {

    let mensaje = (cad1 + " - " + cad2).toLowerCase();

    console.log(mensaje)
}

unirCadenas("HOLA", "MUNDO")
unirCadenas("HoLa", "MuNDoOOooOO")


// ------------------ EJERCICIO 3 -----------------

const compararNumeros=()=>{

    const num1=parseInt(prompt("Introduce un número"))
    const num2=parseInt(prompt("Introduce otro número"))

    if(num1<num2){
        alert(`${num2} es mayor que ${num1}`)
    }else if (num1>num2){
        alert(`${num1} es mayor que ${num2}`)
    }
    else{alert ("Son iguales")}
}


// ------------------ EJERCICIO 4 -----------------


const hobbies=["tenis", "ciclismo", "lectura", "poker", "padel"]
hobbies.unshift("montaña")
hobbies.push("playa")
hobbies.sort()


const creaLista = () => {

    const hobbies=["tenis", "ciclismo", "lectura", "poker", "padel"]
    const fragment = document.createDocumentFragment()
    for (const hobby of hobbies){
        const itemList = document.createElement("LI")
        itemList.textContent=hobby
        fragment.appendChild(itemList)
    } //llave del for

    const oList=document.getElementById("ejercicio4")
    oList.appendChild(fragment)
}//llave función

creaLista(); //invocamos función

// ------------------ EJERCICIO 5 -----------------

const miBoton=document.getElementById("miBoton")
miBoton.addEventListener("click", (e)=>{

    compararNumeros()
} )

// ------------------- EJERCICO 6 -----------------

const libro = {

Title : "The catcher in the rye",
Author : "D.J. Salinger",
Pages : 144,
Year : 1955,
Img : "https://www.whitmorerarebooks.com/pictures/medium/2191.jpeg",
isRead : true

}

const parrafoLibro = document.createElement("P") 
parrafoLibro.innerHTML = `Mi libro favorito es <strong>${libro.Title}</strong> escrito por
 <em> ${libro.Author}</em>. Tiene <span class="libro">${libro.Pages} páginas</span><br><br>
<img src="${libro.Img}" width="200px" alt="${libro.Title}">`
javascript.appendChild(parrafoLibro);


//----------------- EJERCICIO 7 --------------------

class Shape {

    constructor (altura, anchura, tipo){

        this.altura=altura
        this.anchura=anchura
        this.tipo=tipo

    }

   getArea () {
        return this.altura*this.anchura;
    }

    getDatos () {
        return `La figura es un ${this.tipo}, cuya altura es ${this.altura} y su anchura ${this.anchura}. `
    }

}

const cuadrado = new Shape(2, 2, "cuadrado")
const rectangulo = new Shape(2, 3, "rectangulo")

const parrafoObjeto = document.getElementById("ejercicioClases")
let mensaje =cuadrado.getDatos() + rectangulo.getDatos()
mensaje += ` La suma de ambas áreas es igual a ${rectangulo.getArea()+ cuadrado.getArea()}`
parrafoObjeto.textContent = mensaje

