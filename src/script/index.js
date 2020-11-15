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

window.onload = function () {
  const categorias = document.getElementById("container");
  data.categorias.forEach((dato) => {
    const div = document.createElement("div");
    const enlaceCategoria = document.createElement("a");
    const imagen = document.createElement("img");
    imagen.className = "img-categoria";
    imagen.src = dato.imagen;
    enlaceCategoria.href = dato.enlace;
    enlaceCategoria.appendChild(imagen);

    div.appendChild(enlaceCategoria);
    div.className = "categoria";
    categorias.appendChild(div);
  });
};
