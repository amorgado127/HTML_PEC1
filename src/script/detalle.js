

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
    libros: [
      {
        categoria: 0,
        isbn: 9788499086514,
        titulo: "Los pilares de la Tierra",
        autor: "Ken Follet",
        imagenPequeña: "./img/los_pilares_de_la_tierra_th.jpg",
        imagenGrande: "./img/los_pilares_de_la_tierra_large.jpg",
        resumen: "",
        resumen_corto:
          "El amor y la muerte se entrecruzan vibrantemente en este magistral tapiz cuyo centro es la construcción de una catedral gótica. La historia se inicia con el ahorcamiento público de un inocente y finaliza con la humillación de un rey.",
        video:"",  
      },
  
      {
        categoria: 0,
        isbn: 9788420435480,
        titulo: "SIDI",
        autor: "Arturo Pérez-Reverte",
        imagenPequeña: "./img/sidi_th.jpg",
        imagenGrande: "./img/sidi_large.jpg",
        resumen: "",
        resumen_corto: "",
        video:"",
      },
      {
        categoria: 0,
        isbn: 9788420483535,
        titulo: "El capitán Alatriste",
        autor: "Arturo y Carla Pérez-Reverte",
        imagenPequeña: "./img/el_capitan_alatriste_th.jpg",
        imagenGrande: "./img/el_capitan_alatriste_large.jpg",
        resumen:
          "«No era el hombre más honesto ni el más piadoso, pero era un hombre valiente.»  Con estas palabras empieza El capitán Alatriste, la historia de un soldado veterano de los tercios de Flandes que malvive como espadachín a sueldo en el Madrid del siglo XVII. Sus aventuras peligrosas y apasionantes nos sumergen sin aliento en las intrigas de una España corrupta y en decadencia, las emboscadas en callejones oscuros entre el brillo de dos aceros, las tabernas donde Francisco de Quevedo compone sonetos entre pendencias y botellas de vino, o los corrales de comedias donde las representaciones de Lope de Vega terminan a cuchilladas. Todo ello de la mano de personajes entrañables y fascinantes: el joven Íñigo Balboa, el implacable inquisidor fray Emilio Bocanegra, el peligroso asesino Gualterio Malatesta, o el diabólico secretario del rey, Luis de Alquézar.",
        resumen_corto:
          "Acción, historia y aventura se dan cita como un torbellino en las inolvidables páginas de esta primera novela de la serie «Las aventuras del capitán Alatriste», que comienza cuando el valeroso protagonista acepta un peligroso encargo...",
          video:"",
      },
      {
        categoria: 0,
        isbn: 9788499088044,
        titulo: "La catedral del mar",
        autor: "Ildefonso Falcones",
        imagenPequeña: "./img/la_catedral_del_mar_th.jpg",
        imagenGrande: "./img/la_catedral_del_mar_large.jpg",
        resumen:
          "Una catedral construida por el pueblo y para el pueblo en la Barcelona medieval es el escenario de una apasionante historia de intriga, violencia y pasión.    Siglo XIV. La ciudad de Barcelona se encuentra en su momento de mayor prosperidad; ha crecido hacia la Ribera, el humilde barrio de los pescadores, cuyos habitantes deciden construir, con el dinero de unos y el esfuerzo de otros, el mayor templo mariano jamás conocido: Santa María de la Mar. Una construcción que es paralela a la azarosa historia de Arnau, un siervo de la tierra que huye de los abusos de su señor feudal y se refugia en Barcelona, donde se convierte en ciudadano y, con ello, en hombre libre. El joven Arnau trabaja como palafrenero, estibador, soldado y cambista. Una vida extenuante, siempre al amparo de la catedral de la mar, que le iba a llevar de la miseria del fugitivo a la nobleza y la riqueza. Pero con esta posición privilegiada también le llega la envidia de sus pares, que urden una sórdida conjura que pone su vida en manos de la Inquisición...",
        resumen_corto:
          "Una catedral construida por el pueblo y para el pueblo en la Barcelona medieval es el escenario de una apasionante historia de intriga, violencia y pasión.",
          video:"",
      },
      {
        categoria: 0,
        isbn: 
        9788497596657,
        titulo: "Sinuhe el egipcio",
        autor: "Mika Waltari",
        imagenPequeña: "./img/sinuhe_el_egipcio_th.jpg",
        imagenGrande: "./img/sinuhe_el_egipcio_large.jpg",
        resumen: `En el ocaso de su vida, el protagonista de este relato confiesa: "porque yo, Sinuhé, soy un hombre y, como tal, he vivido en todos los que han existido antes que yo y viviré en todos los que existan después de mí. Viviré en las risas y en las lágrimas de los hombres, en sus pesares y temores, en su bondad y en su maldad, en su debilidad y en su fuerza". Sinuhé el egipcio nos introduce en el fascinante y lejano mundo del Egipto de los faraones, los reinos sirios, la Babilonia decadente, la Creta anterior a la Hélade..., es decir, en todo el mundo conocido catorce siglos antes de Jesucristo. Sobre este mapa, Sinuhé dibuja la línea errante de sus viajes; y aunque la vida no sea generosa con él, en su corazón vive inextinguible la confianza en la bondad de los hombres. `,
        resumen_corto: "",
        video:"",
      },
      {
        categoria: 0,
        isbn: 9788496940840,
        titulo: "El médico",
        autor: "Noah Gordon",
        imagenPequeña: "./img/el_medico_th.jpg",
        imagenGrande: "./img/el_medico_large.jpg",
        resumen: "La extraordinaria odisea de un joven médico en el siglo XI. Ésta es la historia de una pasión. Ésta es la crónica del increíble viaje del joven Rob Cole, de su lucha contrala enfermedad y la muerte, de su don místico para curar. Su sueño de convertirse en médico lo conduce desde laInglaterra dominada por la brutalidad y la ignorancia hasta la sensual turbulencia de la remota Persia.Allí, en las universidades árabes, bajo la tutela del legendario maestro Avicena, ocurrirá la transformaciónque marcará su destino y el de su familia para siempre.",
        resumen_corto: "Un joven aprendiz de médico con un don para sanar nunca visto recorrerá la Europa sombría y oscura del siglo XI hasta la fascinante Persia, para encontrarse con el mejor maestro imaginable: el mítico Avicena.",
        video:"",
      },
      {
        categoria: 0,
        isbn:9788408068983,
        titulo: "Iacobus",
        autor: "Matilde Asensi",
        imagenPequeña: "./img/iacobus_th.jpg",
        imagenGrande: "./img/iacobus_large.jpg",
        resumen: "Galceran de Born es un caballero de la orden de los hospitalarios, enemigos de los templarios. Su gran capacidad para resolver enigmas llega a oídos del Papa Juan XXII quien decide encargarle una misión: descubrir a los culpalbes de las muertes del Papa Clemente, del rey Felipe y de Guillermo de Nogaret. COn la ayuda de Jonás, su hijo, aunque éste aún no sabe lo que es y de Sara, la hechicera judía de pelo blanco, consiguen la prueba definitiva que implicaba a los templarios en estos asesinatos, como venganza por haber quemado en la hoguera al gran Maestre del Temple. Además, descubrieon en un pergamino, que el oro que los templarios tenían cuando fueron abolidos por el anterior papa había sido escondido a lo largo del Camino de Santiago en lugares señalados con la cruz de oro, la Tau. Juan XXII encomienda a Galcerán una nueva misión: hacerse pasar por un peregrino y descubrir los escondites secretos del tesoro templario: más de mil quinientos cofres llenos de oro, plata y piedras preciosas. En Las Médulas, un laberinto bajo tierra, encontraron uno de los mayores secretos de la Historia: el Arca de la Alianza.",
        resumen_corto: "Galceran de Born es un caballero de la orden de los hospitalarios, enemigos de los templarios. Su gran capacidad para resolver enigmas llega a oídos del Papa Juan XXII quien decide encargarle una misión: descubrir a los culpalbes de las muertes del Papa Clemente, del rey Felipe y de Guillermo de Nogaret.",
        video:"",
      },
      {
        categoria: 0,
        isbn: 9788426418807,
        titulo: "El nombre de la rosa",
        autor: "Umberto Ecco",
        imagenPequeña: "./img/el_nombre_de_la_rosa_th.jpg",
        imagenGrande: "./img/el_nombre_de_la_rosa_large.jpg",
        resumen: "Valiéndose de las características de la novela gótica, la crónica medieval y la novela policíaca,El nombre de la rosa narra las investigaciones detectivescas que realiza el fraile franciscano Guillermo de Baskerville para esclarecer los crímenes cometidos en una abadía benedictina en el año 1327. Le ayudará en su labor el novicio Adso, un joven que se enfrenta por primera vez a las realidades de la vida situadas más allá de las puertas del convento.",
        resumen_corto: "",
        video:"",
      },
  
      {
        categoria: 1,
        isbn: 9788408177081,
        titulo: "Origen",
        autor: "Dan Brown",
        imagenPequeña: "./img/origen_th.jpg",
        imagenGrande: "./img/origen_large.jpg",
        resumen:
          "Robert Langdon, profesor de simbología e iconografía religiosa de la universidad de Harvard, acude al Museo Guggenheim Bilbao para asistir a un trascendental anuncio que «cambiará la faz de la ciencia para siempre». El anfitrión de la velada es Edmond Kirsch, un joven multimillonario cuyos visionarios inventos tecnológicos y audaces predicciones lo han convertido en una figura de renombre mundial. Kirsch, uno de los alumnos más brillantes de Langdon años atrás, se dispone a revelar un extraordinario descubrimiento que dará respuesta a las dos preguntas que han obsesionado a la humanidad desde el principio de los tiempos. ¿DE DÓNDE VENIMOS? ¿ADÓNDE VAMOS? Al poco tiempo de comenzar la presentación, meticulosamente orquestada por Edmond Kirsch y la directora del museo Ambra Vidal, estalla el caos para asombro de cientos de invitados y millones de espectadores en todo el mundo. Ante la inminente amenaza de que el valioso hallazgo se pierda para siempre, Langdon y Ambra deben huir desesperadamente a Barcelona e iniciar una carrera contrarreloj para localizar la críptica contraseña que les dará acceso al revolucionario secreto de Kirsch. Perseguidos por un atormentado y peligroso enemigo, Langdon y Ambra descubrirán los episodios más oscuros de la Historia y del extremismo religioso. Siguiendo un rastro de pistas compuesto por obras de arte moderno y enigmáticos símbolos, tendrán pocas horas para intentar desvelar la fascinante investigación de Kirsch... y su sobrecogedora revelación sobre el origen y el destino de la Humanidad. ORIGEN se desarrolla íntegramente en España. Barcelona, Bilbao, Madrid y Sevilla son los escenarios principales en los que transcurre la nueva aventura de Robert Langdon. De la mano del autor de El código Da Vinci, el lector recorrerá escenarios como el Monasterio de Montserrat, la Casa Milà (La Pedrera), la Sagrada Familia, el Museo Guggenheim Bilbao, el Palacio Real o la Catedral de Sevilla. Como ya sucedió con París en El código Da Vinci, con Roma en Ángeles y demonios o con Florencia en Inferno, los escenarios de las novelas de Dan Brown siempre han sido un elemento clave en sus tramas. Edición dedicada por Dan Brown.",
        resumen_corto: "Robert Langdon, profesor de simbología e iconografía religiosa de la universidad de Harvard, acude al Museo Guggenheim Bilbao para asistir a un trascendental anuncio que «cambiará la faz de la ciencia para siempre».",
        video:`<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xUk7DlmUctg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      },
      {
        categoria: 1,
        isbn: 9788408127413,
        titulo: "Inferno",
        autor: "Dan Brown",
        imagenPequeña: "./img/inferno_th.jpg",
        imagenGrande: "./img/inferno_large.jpg",
        resumen:
          "Dan Brown vuelve a los misterios históricos con su personaje favorito, el profesor de simbología Robert Langdon, con la novela Inferno, inspirada en La Divina Comedia de Dante y que saldrá a la venta el 16 de mayo. En sus bestsellers internacionales El código Da Vinci, Ángeles y demonios y El símbolo perdido, Dan Brown aunó con maestría historia, arte, códigos y símbolos. En su fascinante nuevo thriller, Brown recupera su esencia con su novela más ambiciosa hasta la fecha. En el corazón de Italia, el catedrático de Simbología de Harvard Robert Langdon se ve arrastrado a un mundo terrorífico centrado en una de las obras maestras de la Literatura más imperecederas y misteriosas de la Historia: el Infierno de Dante. Con este telón de fondo, Langdon se enfrenta a un adversario escalofriante y lidia con un acertijo ingenioso en un escenario de arte clásico, pasadizos secretos y ciencia futurista. Apoyándose en el oscuro poema épico de Dante, Langdon, en una carrera contrarreloj, busca respuestas y personas de confianza antes de que el mundo cambie irrevocablemente",
        resumen_corto:
          "En el corazón de Italia, el catedrático de Simbología de Harvard Robert Langdon se ve arrastrado a un mundo terrorífico centrado en una de las obras maestras de la Literatura más imperecederas y misteriosas de la Historia: el Infierno de Dante. Con este telón de fondo, Langdon se enfrenta a un adversario escalofriante y lidia con un acertijo ingenioso en un escenario de arte clásico, pasadizos secretos y ciencia futurista. Apoyándose en el oscuro poema épico de Dante, Langdon, en una carrera contrarreloj, busca respuestas y personas de confianza antes de que el mundo cambie irrevocablemente.",
          video:"",
        },
      {
        categoria: 1,
        isbn: 9788497938891,
        titulo: "La Biblia de barro",
        autor: "Julia Navarro",
        imagenPequeña: "./img/la_biblia_de_barro_th.jpg",
        imagenGrande: "./img/la_biblia_de_barro_large.jpg",
        resumen:
          "En Roma, un hombre se confiesa: «Padre, me acuso de que voy a matar a un hombre...». Al mismo tiempo Clara Tannenberg, una joven arqueóloga nieta de un poderoso hombre de oscuro pasado, anuncia en el transcurso de un congreso el descubrimiento de unas tablillas que, de ser auténticas, serían la prueba científica de la existencia del patriarca Abraham: se trata de la obra de un escriba que recogió el relato del profeta sobre la creación del mundo, la confusión de las lenguas en Babel y el Diluvio universal. Una auténticaBiblia de Barro. Junto a un equipo de arqueólogos, poco antes del inicio de la última guerra del Golfo, Clara pondrá en marcha unas arriesgadas excavaciones que alientan a muchas personas a acabar con su vida y la de su abuelo: desde millonarios traficantes de arte hasta cuatro amigos que no desistirán hasta culminar una implacable venganza.     resumen_corto: En el corazón de Italia, el catedrático de Simbología de Harvard Robert Langdon se ve arrastrado a un mundo terrorífico centrado en una de las obras maestras de la Literatura más imperecederas y misteriosas de la Historia: el Infierno de Dante. Con este telón de fondo, Langdon se enfrenta a un adversario escalofriante y lidia con un acertijo ingenioso en un escenario de arte clásico, pasadizos secretos y ciencia futurista. Apoyándose en el oscuro poema épico de Dante, Langdon, en una carrera contrarreloj, busca respuestas y personas de confianza antes de que el mundo cambie irrevocablemente.",
        resumen_corto: "",
        video:"",
      },
  
      {
        categoria: 1,
        isbn: 9788483465202,
        titulo: "El Ocho",
        autor: "Katherine Neville",
        imagenPequeña: "./img/el_ocho_th.jpg",
        imagenGrande: "./img/el_ocho_large.jpg",
        resumen:
          "Nueva York, 1972. Catherine Velis, aficionada a las matemáticas y al ajedrez, trabaja en una auditoría como experta en informática. La firma la destina a Argelia, pero, antes de partir, una vidente le lee las líneas de la mano y le advierte de que un grave peligro se cierne sobre ella. Poco después, un marchante de antigüedades hace a Cat una misteriosa oferta: un cliente suyo está intentando reunir las piezas de un antiguo juego de ajedrez que presuntamente se encuentra en Argelia. Si Cat le consigue esas piezas, obtendrá a cambio una generosa recompensa.     Sur de Francia, 1790. Mireille de Rémy y su prima Valentine son dos novicias de la abadía de Montglane. Francia arde en las llamas de la revolución que, entre otros proyectos, pretende aniquilar a la Iglesia y hacerse con sus tesoros. Enterradas desde hace mil años bajo el suelo de la abadía se encuentran las piezas de un ajedrez legendario, que perteneció a Carlomagno. Quien consiga reunir dichas piezas adquirirá un poder ilimitado. Y, para mantenerlas fuera del alcance de quienes pudieran abusar de él, Mireille...",
        resumen_corto: "",
        video:"",
      },
      {
        categoria: 1,
        isbn: 9788408154167,
        titulo: "El silecio de la ciudad blanca",
        autor: "Eva García Sáenz",
        imagenPequeña: "./img/silencio_ciudad_blanca_th.jpg",
        imagenGrande: "./img/silencio_ciudad_blanca_large.jpg",
        resumen:
          "«Una ciudad aterrorizada por el regreso de unos asesinatos rituales. Un experto en perfiles criminales que esconde una tragedia. Un thriller hipnótico cuyas claves descansan en unos misteriosos restos arqueológicos» Tasio Ortiz de Zárate, el brillante arqueólogo condenado por los extraños asesinatos que aterrorizaron la tranquila ciudad de Vitoria hace dos décadas, está a punto de salir de prisión en su primer permiso cuando los crímenes se reanudan de nuevo: en la emblemática Catedral Vieja de Vitoria, una pareja de veinte años aparece desnuda y muerta por picaduras de abeja en la garganta. Poco después, otra pareja de veinticinco años es asesinada en la Casa del Cordón, un conocido edificio medieval.      El joven inspector Unai López de Ayala—alias Kraken—, experto en perfiles criminales, está obsesionado con prevenir los crímenes antes de que ocurran, una tragedia personal aún fresca no le permite encarar el caso como uno más. Sus métodos poco ortodoxos enervan a su jefa, Alba, la subcomisaria con la que mantiene una ambigua relación marcada por los crímenes…El tiempo corre en su contra y la amenaza acecha en cualquier rincón de la ciudad. ¿Quién será el siguiente?",
        resumen_corto:
          "Tasio Ortiz de Zárate, el brillante arqueólogo condenado por los asesinatos que aterrorizaron Vitoria hace dos décadas, está a punto de salir de prisión cuando los crímenes se reanudan. En la Catedral Vieja, una pareja de veinte años aparece muerta por picaduras de abeja en la garganta. Pero solo serán los primeros.",
          video:"",
        },
  
      {
        categoria: 1,
        isbn: 9788423341986,
        titulo: "El guardian invisible",
        autor: "Dolores Redondo",
        imagenPequeña: "./img/el_guardian_invisible_th.jpg",
        imagenGrande: "./img/el_guardian_invisible_large.jpg",
        resumen:
          "Ainhoa Elizasu fue la segunda víctima del basajaun, aunque entonces la prensa todavía no lo llamaba así. Fue un poco más tarde cuando trascendió que alrededor de los cadáveres aparecían pelos de animal, restos de piel y rastros dudosamente humanos, unidos a una especie de fúnebre ceremonia de purificación. Una fuerza maligna, telúrica y ancestral parecía haber marcado los cuerpos de aquellas casi niñas con la ropa rasgada, el vello púbico rasurado y las manos dispuestas en actitud virginal.» En los márgenes del río Baztán, en el valle de Navarra, aparece el cuerpo desnudo de una adolescente en unas circunstancias que lo ponen en relación con un asesinato ocurrido en los alrededores un mes atrás. La inspectora de la sección de homicidios dela Policía Foral, Amaia Salazar, será la encargada de dirigir una investigación que la llevará devuelta a Elizondo, una pequeña población de donde es originaria y de la que ha tratado dehuir toda su vida. Enfrentada con las cada vez más complicadas derivaciones del caso y con sus propios fantasmas familiares, la investigación de Amaia es una carrera contrarreloj para dar con un asesino que puede mostrar el rostro más aterrador de una realidad brutal al tiempo que convocar a los seres más inquietantes de las leyendas del Norte.",
        resumen_corto:
          "En los márgenes del río Baztán, en el valle de Navarra, aparece el cuerpo desnudo de una adolescente en unas circunstancias que lo ponen en relación con un asesinato ocurrido en los alrededores un mes atrás. La inspectora de la sección de homicidios dela Policía Foral, Amaia Salazar, será la encargada de dirigir una investigación que la llevará devuelta a Elizondo, una pequeña población de donde es originaria y de la que ha tratado dehuir toda su vida",
          video:"",
        },
      {
        categoria: 1,
        isbn: 9788497934299,
        titulo: "El sastre de Panamá",
        autor: "John Le Carré",
        imagenPequeña: "./img/el_sastre_de_panama_th.jpg",
        imagenGrande: "./img/el_sastre_de_panama_large.jpg",
        resumen:
          "El final de la explotación estadounidense del canal de Panamá toca a su fin. Todas las potencias mundiales quieren... asegurarse una situación ventajosa cuando llegue el 31 de diciembre de 1999. En este revuelto mar de fondo Harry Pendel, presunto sastre de la realeza, cobra un insospechado protagonismo. Por su establecimiento desfilan los personajes más importantes de Panamá y en el probador, casi un confesionario, escucha secretos de toda índole. Dadas las circunstancias no resulta extraño que el servicio de inteligencia británico, representado por el agente Andy Osnard, arribista, manipulador y ambicioso, seleccione al sastre como eje de sus intrigas.",
        resumen_corto:
          "El final de la explotación estadounidense del canal de Panamá toca a su fin. Todas las potencias mundiales quieren... asegurarse una situación ventajosa cuando llegue el 31 de diciembre de 1999. ",
          video:"",
        },
    ],
  };


  var parametros = window.location.search;

  var isbn = parametros.substring(
    parametros.indexOf("isbn=") + 5,
    parametros.length - parametros.indexOf("isbn=") + 5
  );

  var libro = data.libros.filter((book) => {
    return book.isbn === parseInt(isbn, 10);
  });
  
  var categoriaActual=data.categorias.filter((categoria)=>{
    return categoria.id===libro[0].categoria;
  });

  const tituloEnlaces=document.getElementById("titulo-enlaces-libros");
  tituloEnlaces.textContent="Otros libros en "+categoriaActual[0].nombre;

  const imagenLibro = document.getElementById("portada");
  imagenLibro.src = libro[0].imagenGrande;

  const tituloLibro = document.getElementById("titulo");
  tituloLibro.textContent = libro[0].titulo;

  const autorLibro = document.getElementById("autor");
  autorLibro.textContent = libro[0].autor;

  const resumenLibro = document.getElementById("resumen");
  resumenLibro.textContent = libro[0].resumen;

  const enlacesLibros = document.getElementById("enlaces-libros-categoria");
  var primero = true;

  librosCategoriaActual=data.libros.filter(book=>{
    return book.categoria===categoriaActual[0].id;
  })
  librosCategoriaActual.forEach((libro) => {
    if (libro.isbn !== parseInt(isbn, 10)) {
      // NO es el libro del que mostramos el detalle
      if (primero) {
        primero = false;
        const divActual = enlacesLibros.getElementsByTagName("div")[0];
        const enlaceActual = divActual.getElementsByTagName("a")[0];
        enlaceActual.href = "./detalle.html?isbn=" + libro.isbn;
        const imagenActual = divActual.getElementsByTagName("img")[0];
        imagenActual.src = libro.imagenPequeña;
        imagenActual.alt = libro.titulo;
      } else {
        const div = document.createElement("div");
        const enlace = document.createElement("a");
        enlace.href = "./detalle.html?isbn=" + libro.isbn;
        const imagen = document.createElement("img");
        imagen.src = libro.imagenPequeña;
        imagen.className = "img-th";
        enlace.appendChild(imagen);
        div.appendChild(enlace);
        div.className = "enlaces-libros";
        enlacesLibros.appendChild(div);
      }
    }
  });
};
