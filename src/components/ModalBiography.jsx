import { IoCloseOutline } from "react-icons/io5";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

const ModalBiography = ({ isClosing, handleCloseBioArtist, artist }) => {
  const infoArtist = (artist) => {
    switch (artist) {
      case "kayfex.png":
        return {
          name: "Kayfex",
          img1: "/images/artists/sliders/kayfex.png",
          img2: "/images/artists/biography/kayfex.webp",
          bio: "Luis Gavilán Alarcón, mejor conocido como KAYFEX, es un DJ y productor musical originario de Ayacucho, Perú. Nacido el 21 de marzo de 1999, Kayfex ha logrado destacarse en la escena musical gracias a su habilidad para fusionar música electrónica con melodías e instrumentos autóctonos de diversas regiones de Perú.",
          bio2: `Su carrera despegó en 2018 con la colaboración en el tema ‘La Tijera’ junto a la artista quechua-pop Renata Flores. En esta canción, Kayfex mezcló sonidos peruanos con música electrónica, incorporando la danza de tijeras y el trap, lo cual se convirtió en un éxito en las plataformas digitales y llamó la atención de Warner Chappell Group, cambiando su carrera para siempre.

          Kayfex también participó en el ‘Tusuriy Challenge’, un evento realizado con motivo del Bicentenario de la Independencia de Perú, que reunió a montañistas y bailarines en un baile a más de 5,000 metros sobre el nivel del mar en Áncash. Aquí colaboró con artistas como Vania Masías y Pepe Corzo.

          En su carrera reciente, Kayfex lanzó ‘Them Bow’, un tema de reggaetón donde colaboró con Alexis y Fido, J Álvarez, Carlitos Rossy y Jonna Torres. Además, se presentó en la décima edición del festival ‘Pura Calle’, un conocido evento de cultura urbana.

          Kayfex continúa innovando y fusionando géneros, manteniéndose como una figura clave en la evolución de la música peruana contemporánea.`,
        };

      case "arianGaitan.png":
        return {
          name: "Arián Gaitán",
          img1: "/images/artists/sliders/arianGaitan.png",
          img2: "/images/artists/biography/arianGaitan.webp",
          bio: "Arian Gaitán es un versátil percusionista y  productor peruano, conocido por su habilidad para fusionar diversos géneros musicales a través del uso de la percusión y una variedad de instrumentos andinos.",
          bio2: `Heredero de la rica tradición folklórica de su padre, el reconocido músico Diosdado Gaitán Castro, Arian ha desarrollado un estilo único que combina la esencia de los sonidos tradicionales del Perú con influencias contemporáneas como el pop, el funk y el hip hop.
          
          El arte de Arian nace de su insaciable curiosidad por experimentar y mezclar sonidos, lo que le ha permitido crear una propuesta musical innovadora y fresca. Su trabajo refleja un profundo respeto por sus raíces culturales, mientras que al mismo tiempo, demuestra una visión moderna y global de la música.
          
          Como percusionista y productor, Arian continúa expandiendo los límites de la música andina, llevando sus ritmos y melodías a nuevos y emocionantes territorios sonoros.`,
        };

      case "chabucaGranda.png":
        return {
          name: "María Isabel Granda Larco",
          img1: "/images/artists/sliders/chabucaGranda.png",
          img2: "/images/artists/biography/chabucaGranda.webp",
          bio: "María Isabel Granda Larco nació el 3 de septiembre de 1920 en Las Cotabambas Aurarias, un asentamiento minero en el distrito de Progreso, provincia de Grau, departamento de Apurímac. Su padre fue Eduardo Granda y San Bartolomé, un ingeniero de minas, y su madre Isabel Susana Larco Ferrari de Granda.",
          bio2: `En 1923, la familia se trasladó a Lima, donde María Isabel estudió en el Colegio Sagrado Corazón. A los 12 años descubrió su pasión por el canto y se unió a la Asociación de Artistas Aficionados, participando en teatro y ópera. Formó un dúo llamado Luz y Sombra con Pilar Mujica, interpretando música mexicana, y luego un trío con las hermanas Martha y Rosario Gibson, presentándose en Radio Miraflores y Radio Nacional.

          Chabuca Granda fue una figura destacada en programas de televisión en Perú y en el extranjero, así como en películas. Participó como jurado en importantes festivales internacionales como el de Viña del Mar y llevó su arte por todo el mundo, llenando teatros y coliseos con sus actuaciones en vivo. Varios lugares en Madrid, Santiago de Chile y Buenos Aires llevan su nombre.

          Falleció el 8 de marzo de 1983 en Miami, Estados Unidos, después de una enfermedad. Su legado está protegido por la Asociación Chabuca Granda, que incluye a su hija Teresa Fuller Granda y su bisnieta Maccarena Becerra, entre otras personalidades. Chabuca Granda, la compositora peruana más reconocida a nivel internacional, vive no sólo a través de sus composiciones musicales, sino también en el corazón de todos los peruanos.`,
        };

      case "cruzCaiman.png":
        return {
          name: "Cruz Caimán",
          img1: "/images/artists/sliders/cruzCaiman.png",
          img2: "/images/artists/biography/cruzCaiman.jpg",
          bio: "Cruz Caiman es un dúo peruano que está comenzando a brillar en festivales internacionales, especialmente en España, donde su estilo único está ganando reconocimiento. Su música fusiona géneros urbanos como el R&B, hip hop, música electrónica y afroperuana, lo que les ha permitido compartir escenario con artistas de la talla de Rosalía, destacada como una de las más influyentes del mundo según Forbes.",
          bio2: `El proyecto está conformado por Adrián Mora y Paul Sáenz, quienes se conocieron en la universidad y, en 2019, decidieron colaborar en Instagram. “Nos dimos cuenta de que habíamos estado haciendo música parecida (afrofusión) en los últimos meses, así que decidimos unirnos para armar un proyecto”, explicó Paul Sáenz a Kluid Magazine.

          Inicialmente, el dúo iba a llamarse Bois Caïman, en referencia a la isla haitiana donde tuvo lugar la primera revolución de esclavos en 1791. Más tarde, agregaron ‘Cruz’ en homenaje al apellido Santa Cruz, famoso en la cultura afroperuana por figuras como Nicomedes Santa Cruz, Victoria Santa Cruz y Rafael Santa Cruz.

          En 2021, Cruz Caiman lanzó su primer tema, “Quiero”, definiendo su propuesta como R&B afroperuano, un género que combina un sonido contemporáneo con una identidad profundamente peruana. En 2022, presentaron “Ausente”, y el 17 de mayo de 2023 lanzaron “Regresa”, una reinterpretación de “Raíces del festejo – Le dije a papá” de Pepe Vásquez.`,
        };

      case "danielBazanJr.png":
        return {
          name: "Daniel Bazán Jr.",
          img1: "/images/artists/sliders/danielBazanJr.png",
          img2: "/images/artists/biography/danielBazanJr.webp",
          bio: "Daniel Bazán Jr., nacido en Nueva York, es un talentoso arreglista, productor y compositor. De padre peruano y madre dominicana, Bazán se graduó en la especialidad de música en la Universidad de Nueva York. Recientemente, llegó a Lima para presentar su última producción, “QUEMA”, un disco que fusiona la música afroperuana con el trap y el hip hop.",
          bio2: `Daniel está profundamente enamorado de la música afroperuana. “El sabor. Es compleja. Estoy obsesionado con los ritmos y la temática”, comenta. “Es la música de mis ancestros y de mis hijos en el futuro y deseo internacionalizarla a través del mundo”. Su música es una mezcla única de arreglos latinos tradicionales con elementos de producción contemporánea, como el reggaeton, el pop y el hip hop, combinados con líneas melódicas y exploración temática.
          
          La propuesta musical de Bazán representa una fusión innovadora que busca llevar la riqueza de la música afroperuana a una audiencia global, preservando sus raíces mientras la adapta a los sonidos modernos.`,
        };

      case "daskeGaitan.png":
        return {
          name: "Daske Gaitán",
          img1: "/images/artists/sliders/daskeGaitan.png",
          img2: "/images/artists/biography/daskeGaitan.avif",
          bio: "Piero Rodolfo Gaitán García, mejor conocido como Daske Gaitán, es un destacado cantautor y beatmaker de música urbana. Nacido el 2 de abril de 1994 en Lima, Perú, es hijo del reconocido músico Rodolfo Gaitán Castro y Magaly García.",
          bio2: `Rodeado de diversos ritmos como el folklore andino, música criolla, rock, pop, salsa, reggae y rap, comenzó a grabar sus primeras rimas en 2006, pero no fue hasta 2010 que decidió dedicarse por completo a la música.

          En 2008, cuando estaba en tercer año de secundaria, Daske adoptó el nombre D.A.S.C., que significa "Dominando el Arte Sobre la Calle", reflejando su enfoque en la música urbana. Posteriormente, lo cambió a D.A.S.K. por razones fonéticas. En 2011, mientras formaba parte del grupo Rapersonas, añadió una "E" al final para mejorar la pronunciación, convirtiéndose en Daske. Tras la disolución de Rapersonas en 2013, decidió complementar su nombre artístico con "Gaitán" para honrar su apellido y su herencia musical.

          El 26 de diciembre de 2014, Daske publicó su primer álbum titulado "A Mi Modo" a través de las redes sociales, marcando el inicio de su carrera como solista. Desde entonces, ha ganado reconocimiento con canciones como "Ay Mujer", "Me Enamoraste", "No Se Da Cuenta", "Confía En Mí", "A Mi Modo", "Mía" y "Positiva Vibración". Ha participado en numerosos conciertos y festivales en Perú, compartiendo escenario con artistas internacionales como Akapellah, AL2 “Los Aldeanos”, Movimiento Original, Lil Supa y Rapper School.

          Daske Gaitán también es conocido por fusionar ritmos urbanos con estilos tradicionales como el festejo, la saya y el huayno, rindiendo homenaje al legado musical de su familia. Este año, promete traer una nueva propuesta musical innovadora.`,
        };

      case "diosdado.png":
        return {
          name: "Diosdado Gaitán Castro",
          img1: "/images/artists/sliders/diosdado.png",
          img2: "/images/artists/biography/diosdadoGaitan.png",
          bio: "Diosdado Gaitán Castro, nacido en Huamanga, Ayacucho, el 24 de marzo de 1969, es un destacado cantautor y guitarrista peruano de música andina. Reconocido por formar el dúo Gaitán Castro junto a su hermano Rodolfo.",
          bio2: `Desde muy joven, Diosdado mostró un talento innato para la música. A los 12 años, se trasladó a Lima para estudiar en el Conservatorio Nacional de Música, donde se graduó como profesor de música y piano. Durante su carrera, trabajó con artistas de renombre como Chabuca Granda, Arturo “Zambo” Cavero, Óscar Avilés y Lucho Barrios, entre otros.

          Gaitán Castro es conocido por su estilo único, que fusiona la música andina con influencias de la música clásica y popular. Sus composiciones, que abarcan una amplia gama de géneros, reflejan su profundo amor por la música y su compromiso con la preservación de la cultura andina.

          A lo largo de su carrera, Diosdado Gaitán Castro recibió numerosos premios y reconocimientos, incluyendo el Premio Nacional de Cultura en 2001. Su legado musical continúa vivo en la memoria de todos los peruanos, que lo recuerdan como uno de los más grandes compositores de la música andina.`,
        };

      case "milenaWarthon.png":
        return {
          name: "Milena Warthon",
          img1: "/images/artists/sliders/milenaWarthon.png",
          img2: "/images/artists/biography/milenaWarthon.webp",
          bio: "Milena Warthon es una artista que ha logrado equilibrar sus raíces andinas con el pop, creando una armonía entre lo andino, la capital y lo occidental. Utiliza su pasión por el arte como un mecanismo de redescubrimiento y construcción de su identidad, revalorizando los sonidos andinos latinoamericanos y fusionándolos con géneros como el reggae, el latín y el pop.",
          bio2: `Ha trabajado y colaborado con artistas reconocidos como Jesús “El Viejo” Rodríguez, Max Castro y Sergio “Checho” Cuadros, grabando una versión de “Tú y yo” de Gian Marco. Al inicio de su carrera, enfrentó barreras mentales respecto a la música andina, rompiendo estereotipos y logrando consolidar su concepto de pop andino.

          Su estética refleja una armonía entre lo pop y lo andino, desarrollando un estilo visual que la hace sentir auténtica y cómoda. Como futura comunicadora, Milena busca aportar positivamente a la sociedad resaltando la identidad pluricultural del Perú.

          Durante la pandemia, escribió su exitoso sencillo “Agua de Mar”, una fusión única de sonidos de la costa y el mundo andino, que conectó con la gente a través de sus sentimientos y experiencias personales. Activa en Instagram y TikTok, ha logrado una viralización orgánica de su trabajo, alcanzando el #1 en ‘los 50 más virales de Perú’ en Spotify.`,
        };

      case "oscarAviles.png":
        return {
          name: "Óscar Guillermo Avilés Arcos",
          img1: "/images/artists/sliders/oscarAviles.png",
          img2: "/images/artists/biography/oscarAviles.avif",
          bio: "Óscar Guillermo Avilés Arcos, fue un destacado guitarrista, cantor, compositor, arreglista y productor discográfico peruano. Reconocido como “La Primera Guitarra del Perú” por su innovadora interpretación de la guitarra criolla, Avilés nació en el Callao en la calle Zepita N.º 653, hoy en día renombrada en su honor.",
          bio2: `Hijo de José Avilés Cáceres y la chilena Angelina Arcos Galván, Óscar creció en un ambiente profundamente influenciado por la música criolla. Su padre, un destacado fotógrafo y pionero de la cinematografía en el Perú, emigró de Tarapacá debido a la chilenización postguerra. Fue su abuela materna quien le enseñó los primeros acordes de guitarra, despertando en él una pasión que continuaría toda su vida.

          A pesar de las restricciones impuestas por su padre debido a sus estudios, Óscar mostró un amor inquebrantable por la guitarra, iniciando formalmente su carrera musical a los quince años. Estudió en el Colegio Salesiano de Breña y continuó su educación secundaria en Callao, complementando su formación con clases de guitarra en el Conservatorio Nacional de Música.

          Avilés se destacó en varios grupos musicales, incluyendo Los Trovadores del Perú y Los Morochucos. Fundó y dirigió el Conjunto Fiesta Criolla y colaboró extensamente con artistas como Chabuca Granda, con quien trabajó durante quince años. Su estilo distintivo y su capacidad para fusionar la música criolla con otros géneros le ganaron reconocimiento tanto a nivel nacional como internacional.

          A lo largo de su vida, Avilés recibió numerosos premios y distinciones, incluyendo el título de "Patrimonio Musical de América" otorgado por la OEA en 1987 y el Doctor Honoris Causa por la Universidad Nacional Mayor de San Marcos en el año 2000. Falleció el 5 de abril de 2014 en Lima, dejando un legado perdurable en la música peruana.`,
        };

      case "renataFlores.png":
        return {
          name: "Renata Flores",
          img1: "/images/artists/sliders/renataFlores.png",
          img2: "/images/artists/biography/renataFlores.jpg",
          bio: "Renata Flores se ha destacado como líder en una nueva generación de artistas que crean música contemporánea en quechua. A través de sus videos en YouTube, ha conseguido una gran cantidad de seguidores no solo en Perú, sino también a nivel mundial. Sus videos son populares en América Latina, varios países de Europa e incluso en China. Muchos peruanos en el extranjero elogian sus interpretaciones en quechua, mientras que otros aprecian cómo este idioma suena en géneros musicales modernos.",
          bio2: `Cuando tenía 16 años, Renata lanzó su primer sencillo con letra y música propias: "Mirando la misma luna", una canción en quechua que ha superado el millón de reproducciones. Con una combinación de instrumentos andinos y sonidos pop electrónicos, la letra aboga por un mundo sin discriminación, especialmente hacia los hablantes de quechua. En septiembre de 2018, presentó "Tijeras", una canción con un video impactante que fusiona el trap, la danza de tijeras y el canto en quechua. En esta canción, la artista ayacuchana aborda la violencia contra la mujer y la falta de atención a esta problemática.
          
          A los 19 años, en medio de la pandemia, lanzó su primer álbum "ISQUN", que significa "el reflejo del alma" en quechua y es el número nueve. Este álbum incluye canciones inspiradas en mujeres que han dejad  o huella en la historia de Perú con sus decisiones y logros. Entre las canciones se encuentran "Francisca Pizarro" y "María Parado de Bellido", dedicadas a mujeres destacadas, junto con una recopilación de sus primeros sencillos.

          Renata Flores ha sido elogiada internacionalmente por su innovador enfoque musical. El New York Times la ha nombrado "la reina peruana del rap en quechua", destacando su combinación de tradición y transgresión.`,
        };

      case "susanaBaca.png":
        return {
          name: "Susana Esther Baca de la Colina",
          img1: "/images/artists/sliders/susanaBaca.png",
          img2: "/images/artists/biography/susanaBaca.avif",
          bio: "Susana Esther Baca de la Colina, conocida como Susana Baca, es una cantante, compositora, investigadora de música y educadora peruana, tres veces ganadora de los Premios Grammy Latinos. Fue Ministra de Cultura del Perú y Presidenta de la Comisión Interamericana de Cultura de la OEA. Es una figura clave en el folklore latinoamericano y en la revitalización de la música afroperuana.",
          bio2: `Nació el 24 de mayo de 1944 en Chorrillos, Lima, Perú. Ha publicado más de 25 discos y su trabajo ha influido a muchos artistas.
          Hija de Ernesto Baca Ramírez y Carmen de la Colina Gonzáles, Susana proviene de una familia ilustre en la música afroperuana. Junto a su esposo Ricardo Pereira, ha trabajado en la recuperación de armonías y ritmos casi olvidados de esta tradición musical.

          Estudió educación en la Universidad Enrique Guzmán y Valle, graduándose en 1968 y obteniendo un Doctorado Honoris Causa en 2009. En 1995, su canción "María Landó" en el álbum "El alma del Perú Negro" la consolidó como una referente de la música afroperuana.

          Ha compartido escenario con artistas como Lila Downs, Mercedes Sosa y Calle 13. Ganó su primer Latin Grammy en 2002 por "Lamento Negro", y recibió otros dos en 2011 y 2020. Fue distinguida con la Orden de las Artes y las Letras de Francia, la Orden al Mérito del Perú y la medalla Juan Pablo Vizcardo y Guzmán del Congreso peruano.`,
        };

      case "tonySuccar.png":
        return {
          name: "Tony Succar",
          img1: "/images/artists/sliders/tonySuccar.png",
          img2: "/images/artists/biography/tonySuccar.avif",
          bio: "Tony Succar, nacido en Lima, Perú, y criado en Miami, Florida, es un destacado productor, compositor y arreglista que ha ganado dos veces el Latin Grammy. Desde muy joven, la música ha sido su pasión, influenciado por su familia de músicos.",
          bio2: `El sonido de Succar es refinado y distintivo, con canciones de ritmo acelerado llenas de energía explosiva y arreglos más lentos que cautivan con sus intrincados matices. Actualmente, trabaja en su próximo álbum y realiza giras mundiales con su banda, actuando en eventos como el Caribbean Sea Jazz Festival, Ravinia Festival, Auditorio Telmex, Vivo Beach, Tempo Latino y los Latin Grammy Awards 2019.

          Conocido por su diversidad musical, Tony ha colaborado con artistas como Tito Nieves, India, Jon Secada, Marc Anthony, Sheila E., Arturo Sandoval, Judith Hill y Obie Bermudez. Su carrera abarca géneros como salsa, jazz, pop y música afro-latina. Estudió piano y percusión, obteniendo una licenciatura en Jazz Performance en 2008 y una maestría en 2010 en la Florida International University.

          En 2018, fue nominado a los Latin Grammy por la Mejor Canción Tropical, “Me Enamoro Mas De Ti”. En 2019, recibió cuatro nominaciones y ganó dos premios: Productor del Año y Mejor Álbum de Salsa por "Mas de Mi", convirtiéndose en el ganador más joven de ambas categorías.

          El proyecto "UNITY: El Tributo Latino a Michael Jackson" fue un gran éxito, alcanzando el #1 en varias listas de Billboard y convirtiéndose en un especial de PBS en horario estelar. En 2023, lanzó el álbum debut de su madre, Mimy Succar, "Mimy & Tony", una fusión musical que celebra la diversidad cultural y familiar. El álbum incluye el single "Sukiyaki", grabado con Nora Suzuki y la Orquesta de la Luz, con un videoclip filmado en Tokio.`,
        };

      case "zamboCavero.png":
        return {
          name: "Arturo Cavero Velásquez",
          img1: "/images/artists/sliders/zamboCavero.png",
          img2: "/images/artists/biography/zamboCavero.jpeg",
          bio: "Arturo Cavero Velásquez, nacido en Lima el 29 de noviembre de 1940, es reconocido entre sus seguidores como El Zambo Cavero. Este cantor de la música criolla peruana ha conquistado los corazones de muchos con su arte.",
          bio2: `El Zambo Cavero, venerado como un ícono de la peruanidad, destaca por su voz única y su estilo inconfundible al interpretar la música criolla, cautivando a entendidos y apasionados por igual. A lo largo de su prolífica carrera, ha cosechado el amor y la admiración del pueblo peruano.

          Entre sus interpretaciones más memorables se encuentran aquellas creadas por el compositor peruano Augusto Polo Campos, en las que brilló al lado del guitarrista Óscar Avilés. En un hito trascendental, el 3 de junio de 1987, El Zambo Cavero fue honrado en Washington D.C. por la Organización de los Estados Americanos, junto a otros distinguidos artistas peruanos como Luis Abanto Morales, Jesús Vásquez y Augusto Polo Campos. Esta distinción celebró sus contribuciones a la música peruana, que han cimentado su reconocimiento en América y más allá. Arturo "Zambo" Cavero, en la fecha del 7 de octubre de 2009, se halla en la encrucijada entre la vida y la eternidad.`,
        };
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/40 z-[1000] animate__animated ${
        isClosing ? "animate__fadeOut" : "animate__fadeIn"
      }`}
    >
      <div
        className={`fixed top-0 right-0 w-[90%] h-full bg-[#FFFAF3] z-50 transition-all duration-500 ease-in-out animate__animated overflow-y-auto ${
          isClosing ? "animate__slideOutRight" : "animate__slideInRight"
        }`}
      >
        <div
          className="fixed top-10 left-0 p-1 text-4xl rounded-e-lg text-[#45260B] bg-[#DEC499] cursor-pointer"
          onClick={handleCloseBioArtist}
        >
          <IoCloseOutline className="font-extrabold" />
        </div>

        <div
          className="h-64 bg-center bg-cover bg-no-repeat flex justify-center items-center bg-gradient-to-tr from-black to-[#FFFAF3]"
          style={{ backgroundImage: "url('images/raicesFusion.webp')" }}
        >
          <h2 className="text-[#FFFAF3] font-extrabold text-center text-4xl md:text-6xl">
            {infoArtist(artist).name}
          </h2>
        </div>

        <div className="bg-white flex lg:flex-row flex-col gap-10 lg:gap-20 justify-center items-center py-14 text-[#45260B]">
          <div className="bg-[#45260B] flex justify-center items-end rounded-full size-60 overflow-hidden">
            <img
              className="h-60 object-contain object-bottom"
              src={infoArtist(artist).img1}
              alt=""
            />
          </div>

          <p className="text-lg w-4/5 lg:w-1/3">{infoArtist(artist).bio}</p>
        </div>

        <div className="flex lg:flex-row flex-col justify-center items-center lg:text-sm 2xl:text-lg">
          <div className="w-full basis-1/2">
            <img className="w-full" src={infoArtist(artist).img2} />
          </div>

          <div className="basis-1/2 lg:text-end p-10 lg:py-0 lg:px-20">
            <p style={{ whiteSpace: "pre-line" }}>{infoArtist(artist).bio2}</p>
          </div>
        </div>

        <div className="bg-white text-[#45260B] flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-10 text-xl lg:text-2xl py-5">
          <p className="font-bold text-center">Síguenos en nuestras redes sociales</p>

          <div className="flex gap-4 [&>div]:size-9 text-[#FFFAF3] [&>div]:bg-[#45260B] [&>div]:rounded-full [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:hover:cursor-pointer">
            <div>
              <a href="https://www.instagram.com/raices_music" target="_blank">
                <FaInstagram />
              </a>
            </div>

            <div>
              <a href="www.youtube.com/@Raices_music" target="_blank">
                <FaYoutube />
              </a>
            </div>

            <div>
              <a href="https://www.tiktok.com/@raices_music" target="_blank">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBiography;
