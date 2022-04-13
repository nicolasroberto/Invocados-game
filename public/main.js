let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let btnAgregar = document.getElementById("btnAgregar");
let textoLore = document.querySelector(".texto-lore");
let invocaciones = document.querySelector(".invocaciones");
let contenidoLista = document.querySelector(".contenidoLista");
let carousel = document.getElementById("carouselExampleCaptions");
let carouselInner = document.querySelector(".carousel-inner");
let cerrar = document.getElementById("cerrar");
let mostrarResultados = document.getElementById("mostrarResultados");
let volverInvocar = document.getElementById("volverInvocar");
let resultadoPartida = document.querySelector(".resultadoPartida");
let cerrar2 = document.getElementById("cerrar2");
let cerrar3 = document.getElementById("cerrar3");
let sino = document.getElementById("sino");
let guardar = document.getElementById("guardar");
let salirpantalla = document.getElementById("salirpantalla");
let containerCarga = document.querySelector(".containerCarga");
let pantallaPrincipal = document.querySelector(".pantallaPrincipal");
let layer = document.querySelector(".layer");
let verResultados = document.querySelector(".verResultados");
let form = document.querySelector("form");
let cartasp1 = document.querySelector(".cartasp1");
let cartasp2 = document.querySelector(".cartasp2");
let lista1 = document.querySelector(".lista1");
let lista1h2 = document.querySelector(".lista1 h2");
let lista1ul = document.querySelector(".lista1 ul");
let lista2 = document.querySelector(".lista2");
let lista2h2 = document.querySelector(".lista2 h2");
let lista2ul = document.querySelector(".lista2 ul");

let seisCartas = [];
//Limpia el array al comenzar una jugada
let iniciarJuego = () => {
  seisCartas = [];
};

/* FUNCION RANDOM */
function cartaRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

let juego = () => {
  let numeroRandom = cartaRandom(0, cartas.length);
  let repetidas = seisCartas.indexOf(cartas[numeroRandom]);
  if (repetidas == -1) {
    seisCartas.push(cartas[numeroRandom]);
  }
  if (seisCartas.length < 6) {
    juego();
  } else {
  }
};

/* PRIMER PANTALLA */
btnAgregar.addEventListener("click", (e) => {
  e.preventDefault();
  let player1 = document.getElementById("player1").value;
  let player2 = document.getElementById("player2").value;
  iniciarJuego();
  if (player1 == "" || player2 == "") {
    alert("Faltan los nombres de 'Jugador 1' y 'Jugador 2'");
  } else {
    pantallaPrincipal.style.display = "none";
    containerCarga.style.display = "flex";
    if ((containerCarga.style.display = "flex")) {
      layer.style.backgroundColor = "transparent";
    }
    containerCarga.style.display = "flex";


    juego();
    
    setTimeout(() => {
      (containerCarga.style.display = "none");
      (carousel.style.display = "block");
      (cerrar.style.display = "block");
      (cerrar3.style.display = "none");
      layer.style.backgroundColor= "rgba(33, 33, 33, 0.6)";
    }, 3000);
    



    //recorro seisCartas y carga en carousel
    cartaNum = 0;
    paginaSlide = [];
    seisCartas.forEach((carta, index) => {
      if (index === 0) active = "active";
      else active = "";

      if (index < 3) {
        cartaNum++;
        paginaSlide += `<div class="carousel-item ${active}">
        <h2>Carta ${cartaNum}/3 de: ${player1}</h2>
        <img src="${carta.img}" class="d-block w-100" alt="${carta.nombre}">
        <div class="carousel-caption d-none d-md-block">
          <h5>${carta.nombre}</h5>
          <p>${carta.descripcion}</p>
        </div>
        </div>`;
      }
      if (cartaNum === 3) {
        cartaNum = 0;
      }
      if (index > 2 && index < 6) {
        cartaNum++;
        paginaSlide += `<div class="carousel-item ${active}">
         <h2>Carta ${cartaNum}/3 de: ${player2}</h2>
        <img src="${carta.img}" class="d-block w-100" alt="${carta.nombre}">
        <div class="carousel-caption d-none d-md-block">
          <h5>${carta.nombre}</h5>
          <p>${carta.descripcion}</p>
        </div>
        </div>`;
        carouselInner.innerHTML = paginaSlide;
      }
    });
  }
});

cerrar.addEventListener("click", (e) => {
  verResultados.style.display = "flex";
});

//pantalla mostrar resultados

let suma = 0;
mostrarResultados.addEventListener("click", () => {
  guardar.style.display = "inline-block";
  carousel.style.display = "none";
  pantallaPrincipal.style.display = "none";
  resultadoPartida.style.display = "flex";
  seisCartas.forEach((carta, index) => {
    if (index < 3) {
      lista1ul.innerHTML += `<li><img src="${carta.img}" alt="${carta.nombre}"></li>`;
      suma = suma + carta.id;
    }
    if (index > 2 && index < 6) {
      lista2ul.innerHTML += `<li><img src="${carta.img}" alt="${carta.nombre}"></li>`;
      suma = suma + carta.id;
    }
  });
  if (suma % 2 == 0) {
    sino.innerHTML += `SÍ`;
  } else {
    sino.innerHTML += `NO`;
  }
  lista1h2.innerHTML += `Cartas de: ${player1.value}`;
  lista2h2.innerHTML += `Cartas de: ${player2.value}`;
});

//vacía los innerHTML anteriores

const reiniciarPartida = () => {
  lista1ul.innerHTML = "";
  lista2ul.innerHTML = "";
  lista1h2.innerHTML = "";
  lista2h2.innerHTML = "";
  sino.innerHTML = "";
  carouselInner.innerHTML = "";
  suma = 0;
  seisCartas = [];
};

//botón para volver a jugar

volverInvocar.addEventListener("click", (e) => {
  paginaSlide = [""];
  reiniciarPartida();
  form.reset();
  pantallaPrincipal.style.display = "flex";
  carousel.style.display = "none";
  resultadoPartida.style.display = "none";
  verResultados.style.display = "none";
});

//botón de cerrado de la pantalla resultados

cerrar2.addEventListener("click", (e) => {
  reiniciarPartida();
  form.reset();
  carousel.style.display = "none";
  pantallaPrincipal.style.display = "flex";
  resultadoPartida.style.display = "none";
  verResultados.style.display = "none";
});

//botón "Salir" de la pantalla resultados

salirpantalla.addEventListener("click", (e) => {
  reiniciarPartida();
  form.reset();
  carousel.style.display = "none";
  pantallaPrincipal.style.display = "flex";
  resultadoPartida.style.display = "none";
  verResultados.style.display = "none";
});


//array que guarda las jugadas anteriores (pushea seisCartas)
partidasViejas = [];
// array que guarda los jugadores (pushea los input.value)
jugadoresAnteriores = [];
posicionArray = 0;
guardar.addEventListener("click", (e) => {
  pantallaPrincipal.style.display = "flex";
  carousel.style.display = "none";
  resultadoPartida.style.display = "none";
  verResultados.style.display = "none";
  textoLore.style.display = "none";
  invocaciones.style.display = "flex";
  //push partidasViejas con plalyers incluidos
  let player1 = document.getElementById("player1").value;
  let player2 = document.getElementById("player2").value;
  jugadoresAnteriores.push({ player1, player2 });
  partidasViejas.push(seisCartas);
  reiniciarPartida();
  form.reset();
  //vacía el array seisCartas
  seisCartas = [""];

/*   Se crea el <li> con los nombres de los jugadores y
  se le da el valor de la variable al botón, para luego compararlo
  con la posición de array en partidasViejas y jugadoresAnteriores */
  let verDetalles = `<li class="partidaGuardada">
    <p>${player1}</p>
    <span><p>&</p></span>
    <p>${player2}</p>
    <button posicionArray="${posicionArray++}">Ver</button>
    </li>`;
  contenidoLista.innerHTML += verDetalles;
});

/* Se compara el botón clickeado del li y se compara su valor "posicionArray"
con las posiciones de partidasViejas y jugadoresAnteriores para ingresarlos
en el carousel */
contenidoLista.addEventListener("click", (e) => {
  if (e.target.getAttribute("posicionArray")) {
    showResultados(
      partidasViejas[e.target.getAttribute("posicionArray")],
      jugadoresAnteriores[e.target.getAttribute("posicionArray")]
    );
  }
});

//Se le da indicaciones al botón de cerrado del nuevo carousel
cerrar3.addEventListener("click", (e) => {
  reiniciarPartida();
  form.reset();
  carousel.style.display = "none";
  pantallaPrincipal.style.display = "flex";
  resultadoPartida.style.display = "none";
  verResultados.style.display = "none";
});

//Se crea un nuevo carousel para las partidas guardadas
const showResultados = (e, pjs) => {
  reiniciarPartida();
  form.reset();
  carousel.style.display = "block";
  cerrar.style.display = "none";
  cerrar3.style.display= "block"
  pantallaPrincipal.style.display = "none";
  resultadoPartida.style.display = "none";

  cartaNum = 0;
  paginaSlide = [];
  e.forEach((carta, index) => {
    if (index === 0) active = "active";
    else active = "";
    if (index < 3) {
      cartaNum++;
//comienzo del carousel
      paginaSlide += `<div class="carousel-item ${active}">
        <h2>Carta ${cartaNum}/3 de: ${pjs.player1}</h2>
        <img src="${carta.img}" class="d-block w-100" alt="${carta.nombre}">
        <div class="carousel-caption d-none d-md-block">
          <h5>${carta.nombre}</h5>
          <p>${carta.descripcion}</p>
        </div>
        </div>`;
    }
    if (cartaNum === 3) {
      cartaNum = 0;
    }
    if (index > 2 && index < 6) {
      cartaNum++;
      paginaSlide += `<div class="carousel-item ${active}">
         <h2>Carta ${cartaNum}/3 de: ${pjs.player2}</h2>
        <img src="${carta.img}" class="d-block w-100" alt="${carta.nombre}">
        <div class="carousel-caption d-none d-md-block">
          <h5>${carta.nombre}</h5>
          <p>${carta.descripcion}</p>
        </div>
        </div>`;
      carouselInner.innerHTML = paginaSlide;
    }
  });
};



