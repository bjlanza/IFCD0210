console.log("Todo funciona");

const divJS = document.getElementById("javascript");

const unirCadenas = (cadena1, cadena2) => {
    let mensaje = "";
    mensaje = cadena1 + " " + cadena2;
    console.log(mensaje.toLowerCase());
  };

//ejercicio1
const comparar = () => {
  let numero1 = parseInt(prompt("Introduzca un numero"));
  let numero2 = parseInt(prompt("Introduzca un numero"));
  
  if (numero1 === numero2) {
    alert(`${numero1} es igual que ${numero2}`);
} else if (numero1 > numero2) {
    alert(`${numero1} es mayor que ${numero2}`);
} else {
    alert(`${numero1} es menor que ${numero2}`);
} 

  }
  comparar();
  
//ejercicio2

const misPasatiempos = () => {
   
    const pasatiempos = ["Videojuegos", "Manga", "Anime", "Programacion", "Gym",];
    pasatiempos.unshift("Ordenadores");
    pasatiempos.push("Libros");
    pasatiempos.sort();
    
    const fragment = document.createDocumentFragment();
  
    
    for (const pasatiempo of pasatiempos) {
     
      const itemList = document.createElement("LI");
      
      itemList.textContent = pasatiempo;
      
      fragment.appendChild(itemList);
    }
  
   
    const ejercicio4 = document.getElementById("javascript");
    
   ejercicio4.appendChild(fragment);
  };
  
  misPasatiempos()

//ejercicio3

  const libroFav = () => {
    const libroFav = {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      pages: 218,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/220px-The_Great_Gatsby_Cover_1925_Retouched.jpg ",
      genre: "tragedy",
    };
  
    const parrafoLibro = document.createElement("P");
    parrafoLibro.innerHTML = `Mi libro favorito es el <strong>${libroFav.title}</strong> y su autor es <em>${libroFav.author} 
  </em> y su numero de paginas es <span class="pelicula">${libroFav.pages}</span><br>
  <img src="${libroFav.img}" width="200px" height="200px" alt="${libroFav.title}">
  `;
  
    divJS.appendChild(parrafoLibro);
  };

  libroFav();




  






  