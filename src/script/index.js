
window.onload = function () {
  const data = {
    categorias: [
      {
        id: 0,
        nombre: "Novela Histórica",
        imagen: "./img/novela_historica_large.png",
        imagen_th: "./img/novela_historica_th.png",
        enlace: "./categoria.html?categoria=0",
      },
      {
        id: 1,
        nombre: "Novela Negra y Thriller",
        imagen: "./img/novela_negra_large.png",
        imagen_th: "./img/novela_negra_th.png",
        enlace: "./categoria.html?categoria=1",
      },
      {
        id: 2,
        nombre: "Ciencia Ficción",
        imagen: "./img/ciencia_ficcion_large.png",
        imagen_th: "./img/ciencia_ficcion_th.png",
        enlace: "#",
      },
      {
        id: 3,
        nombre: "Fantasía",
        imagen: "./img/fantasia_large.png",
        imagen_th: "./img/fantasia_th.png",
        enlace: "#",
      },
    ],
  };
  
  const categorias = document.getElementById("container");
  var primero=true;
  data.categorias.forEach((dato) => {
   if(primero){  // La primea categoria ya está en el HTML y sólo hay que actualizar sus datos
     primero=false;
     const imagen=categorias.getElementsByClassName("img-sombra");
     imagen[0].src=dato.imagen;
     imagen[0].alt="Categoría de libros "+dato.nombre;
     const enlace=categorias.getElementsByClassName("categoria");
     enlace[0].href=dato.enlace;

   }else{

    const div = document.createElement("div");
    const enlaceCategoria = document.createElement("a");
    const imagenCategoria = document.createElement("img");
    imagenCategoria.className = "img-sombra";
    imagenCategoria.src = dato.imagen;
    imagenCategoria.alt="Categoría de libros "+dato.nombre;
    enlaceCategoria.href = dato.enlace;
    enlaceCategoria.appendChild(imagenCategoria);
    div.appendChild(enlaceCategoria);
    div.className = "categoria";
    categorias.appendChild(div);
   }
  });
};
