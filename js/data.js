/* ==========================================================================
   CONTENIDO EDITABLE DE LA WEB
   ==========================================================================
   Este es el ÚNICO archivo que necesitas tocar para rellenar la web.
   No hace falta saber programar: solo edita el texto entre comillas " ".
   Cada texto tiene versión "es" (español) y "en" (inglés).

   Las imágenes van en la carpeta /images/. Pon ahí tus fotos y escribe
   la ruta, por ejemplo: "images/foto-explorer/01-zoom.jpg"
   ========================================================================== */


/* --------------------------------------------------------------------------
   1. FOTO EXPLORER

   PUNTOS DE PARTIDA
   El juego intenta detectar la ubicación del móvil del jugador para empezar
   por el reto más cercano. Si el navegador no puede o no le dejan (algunos
   móviles bloquean la geolocalización, o no hay cobertura GPS en ese
   momento), se le pide elegir uno de estos 3 puntos de partida y se ordena
   la ruta desde ahí. Puedes cambiar sus coordenadas si lo consideras.
   -------------------------------------------------------------------------- */

const STARTING_POINTS = [
  {
    id: "obradoiro",
    name: { es: "Praza do Obradoiro (Catedral)", en: "Praza do Obradoiro (Cathedral)" },
    lat: 42.8805,
    lng: -8.5456
  },
  {
    id: "mercado",
    name: { es: "Mercado de Abastos", en: "Mercado de Abastos" },
    lat: 42.8794,
    lng: -8.5438
  },
  {
    id: "alameda",
    name: { es: "Alameda", en: "Alameda" },
    lat: 42.8776,
    lng: -8.5476
  }
];


/* --------------------------------------------------------------------------
   Cada objeto de la lista es un "reto". Para rellenar uno:

   - clueImage:    la foto-pista que se ve ANTES de encontrar el sitio
                   (usa el enlace DIRECTO de imgur, tipo https://i.imgur.com/XXXXX.jpeg
                   — no el enlace de la página tipo https://imgur.com/XXXXX).
                   Para conseguirlo: abre la imagen en imgur, botón derecho
                   sobre ella > "Copiar dirección de la imagen".
   - title:        nombre corto del reto (aparece antes de encontrarlo)
   - mapsQuery:    el nombre del lugar tal cual lo buscarías en Google Maps
   - lat / lng:    coordenadas del lugar exacto — así el juego sabe lo cerca
                   que está de cada jugador. Consíguelas con clic derecho en
                   Google Maps > "¿Qué hay aquí?". Si las dejas en null, el
                   reto seguirá funcionando pero aparecerá siempre al final
                   de la lista (el juego no sabe dónde colocarlo).
   - reward:       el texto largo que se muestra al marcarlo como encontrado
   - rewardImage:  la foto "buena" del detalle, la que se enseña de premio
                   (mismo formato de enlace directo que clueImage)
   - imagePosition: OPCIONAL. Si la foto se recorta mal (por ejemplo, se ve
                   el centro pero no la parte de arriba de lo importante),
                   añade este campo con "top", "bottom", "left", "right" o
                   un valor tipo "50% 20%" para decirle al recorte qué parte
                   de la foto priorizar. Si no lo pones, recorta centrado.
   -------------------------------------------------------------------------- */

const PHOTO_CHALLENGES = [
  {
    id: "reto-01",
    clueImage: "https://i.imgur.com/0lVKJ2y.jpeg",
    title: { es: "Hostal dos Reis Católicos", en: "Hostal dos Reis Católicos" },
    mapsQuery: "Hostal dos Reis Católicos, Santiago de Compostela",
    lat: 42.8809,
    lng: -8.5451,
    reward: {
      es: "¡El lugar de la celebración de la boda!\n\nAunque ahora es un hotel, no siempre fue así. Originalmente era un hospital de peregrinos. La mayoría sabe que lo fundaron los Reyes Católicos, pero pocos conocen su verdadera función. Aquí no venían a \"hacer noche\": llegaban personas con infecciones, fracturas, pies destrozados o enfermedades tras recorrer miles de kilómetros. El hospital ofrecía cama, comida y asistencia médica gratuita. En verano podían permanecer tres días; en invierno, cinco.\n\nTenéis enfrente una cadena enorme, ¡no es decorativa! Esa gruesa cadena sostenida por pilares frente a la portada marcaba el límite de la jurisdicción del hospital. Era una forma visible de decir: \"a partir de aquí manda el Hospital, no el Ayuntamiento\". Surgió tras disputas de competencias entre ambas instituciones.\n\nAunque hoy sea un hotel de lujo, mantiene una tradición heredada de su origen hospitalario: ofrece un número limitado de comidas gratuitas a peregrinos que acreditan haber completado el Camino. Es una pequeña supervivencia de la función para la que fue creado hace más de cinco siglos.\n\nMi rincón favorito del edificio, sin embargo, no es la fachada: es el primer patio renacentista. Si entras temprano, antes de que lleguen los grupos, el sonido del agua y la piedra crean una atmósfera muy parecida a la que pudieron experimentar los peregrinos del siglo XVI al cruzar por primera vez sus puertas.\n\nAhora, ¡estad atentos! La siguiente parada está muy cerca, escaleras arriba.",
      en: "The wedding venue!\n\nAlthough it's a hotel today, it wasn't always one. It was originally a pilgrims' hospital. Most people know it was founded by the Catholic Monarchs, but few know its true purpose. People didn't come here to \"spend the night\": they arrived with infections, fractures, ruined feet, or illnesses after walking thousands of kilometers. The hospital offered a bed, food, and free medical care. In summer they could stay three days; in winter, five.\n\nThere's a huge chain in front of the building — it's not decorative! That thick chain held up by pillars in front of the façade marked the boundary of the hospital's jurisdiction. It was a visible way of saying: \"from here on, the Hospital rules, not the City Council.\" It came about after disputes over authority between the two institutions.\n\nEven though it's a luxury hotel today, it keeps a tradition inherited from its hospital origins: it still offers a limited number of free meals to pilgrims who can prove they completed the Camino. It's a small survival of the purpose it was built for over five centuries ago.\n\nMy favorite corner of the building, though, isn't the façade — it's the first Renaissance courtyard. If you go in early, before the tour groups arrive, the sound of water and stone creates an atmosphere very similar to what 16th-century pilgrims might have experienced the first time they crossed its doors.\n\nNow, pay attention! The next stop is very close, up the stairs."
    },
    rewardImage: "https://i.imgur.com/Gro1zws.jpeg"
  }
,
  {
    id: "reto-02",
    clueImage: "https://i.imgur.com/QCVUIT0.jpeg",
    title: { es: "Pazo de Xelm\u00edrez / Arco de Xelm\u00edrez", en: "Pazo de Xelm\u00edrez / Arco de Xelm\u00edrez" },
    mapsQuery: "Arco de Xelm\u00edrez, Santiago de Compostela",
    lat: 42.881,
    lng: -8.5449,
    reward: {
      es: "Est\u00e1is debajo del Pazo de Xelm\u00edrez, en el Arco de Xelm\u00edrez. Lo curioso es que esas escaleras no se construyeron simplemente para salvar un desnivel. Durante siglos fueron una de las arterias principales de Santiago. La antigua \"R\u00faa Maior\" atravesaba literalmente el palacio arzobispal: quien llegaba desde la Porta do Cami\u00f1o y el Camino Franc\u00e9s pasaba por ese arco para alcanzar el Obradoiro y continuar hacia la Porta da Trindade. Es decir, el palacio no cortaba la ciudad: la ciudad pasaba por debajo del palacio.\n\nSi el Hostal de los Reyes Cat\u00f3licos representa el poder de la Corona, el Pazo de Xelm\u00edrez representa el poder del arzobispo. Y en el siglo XII, el arzobispo de Santiago era casi tan poderoso como un rey. El primer palacio episcopal estaba en la zona de Plater\u00edas. En 1117 una revuelta popular lo destruy\u00f3 casi por completo mientras el joven Alfonso Raim\u00fandez (futuro Alfonso VII) se encontraba en la ciudad. Diego Xelm\u00edrez decidi\u00f3 entonces levantar una residencia mucho m\u00e1s s\u00f3lida y simb\u00f3lica junto a la Catedral. No era solo reconstruir: era dejar claro qui\u00e9n mandaba en Compostela.\n\nM\u00e1s que un obispo, fue un aut\u00e9ntico pol\u00edtico. Consigui\u00f3 que Santiago se convirtiera en sede arzobispal, impuls\u00f3 la construcci\u00f3n de la Catedral rom\u00e1nica, organiz\u00f3 una flota para proteger la costa gallega y negoci\u00f3 de igual a igual con reyes y papas. El palacio era su centro de operaciones.\n\nSi haces el recorrido en sentido descendente, desde Acibecher\u00eda, el pasadizo comprime el espacio. Caminas entre muros de granito, bajo una b\u00f3veda relativamente baja, y de repente desembocas en el inmenso vac\u00edo del Obradoiro. Ese contraste est\u00e1 amplificado por la propia topograf\u00eda y hace que la fachada barroca aparezca de golpe, casi como un tel\u00f3n que se abre. No es casualidad que muchos peregrinos describan ese momento como el m\u00e1s emocionante de toda la llegada.\n\nSi te fijas, casi siempre hay m\u00fasicos callejeros tocando en el descansillo del arco. No es solo porque pase mucha gente: la b\u00f3veda de piedra produce una reverberaci\u00f3n muy agradable, que proyecta el sonido hacia ambas plazas. Es uno de los mejores \"escenarios naturales\" del casco hist\u00f3rico. Es tan importante, que grandes grupos de m\u00fasica tradicional gallega como Berrog\u00fceto dieron sus primeros pasos bajo este arco; y a d\u00eda de hoy para obtener permiso y tocar aqu\u00ed, has de pasar un casting.\n\nAhora, \u00a1continuemos subiendo!",
      en: "You're standing beneath the Pazo de Xelm\u00edrez, under the Arco de Xelm\u00edrez. The curious thing is that these stairs weren't built simply to handle a change in elevation. For centuries they were one of Santiago's main arteries. The old \"R\u00faa Maior\" ran literally straight through the archbishop's palace: anyone arriving from the Porta do Cami\u00f1o along the French Way passed through this arch to reach the Obradoiro and continue on toward the Porta da Trindade. In other words, the palace didn't cut the city in two \u2014 the city passed right underneath the palace.\n\nIf the Hostal dos Reis Cat\u00f3licos represents the power of the Crown, the Pazo de Xelm\u00edrez represents the power of the archbishop. And in the 12th century, the archbishop of Santiago was almost as powerful as a king. The first episcopal palace stood in the Prater\u00edas area. In 1117 a popular uprising destroyed most of it while the young Alfonso Raim\u00fandez (the future Alfonso VII) happened to be in the city. Diego Xelm\u00edrez then decided to build a much more solid, symbolic residence right next to the Cathedral. It wasn't just about rebuilding \u2014 it was about making clear who ruled Compostela.\n\nMore than a bishop, he was a real politician. He got Santiago made an archbishopric, drove the construction of the Romanesque Cathedral, organized a fleet to protect the Galician coast, and negotiated on equal footing with kings and popes. The palace was his operations center.\n\nIf you walk the route downhill, from Acibecher\u00eda, the passage compresses the space. You walk between granite walls, under a fairly low vault, and suddenly spill out into the immense openness of the Obradoiro. That contrast is amplified by the topography itself, making the baroque fa\u00e7ade appear all at once, almost like a curtain opening. It's no coincidence that many pilgrims describe that moment as the most moving of the whole arrival.\n\nIf you pay attention, there are almost always street musicians playing on the landing under the arch. It's not just because so many people pass by: the stone vault produces a very pleasant reverberation that projects sound toward both squares. It's one of the best \"natural stages\" in the old town \u2014 so important that big traditional Galician music groups like Berrog\u00fceto took their first steps under this arch, and to this day you need to pass an audition to get permission to play here.\n\nNow, let's keep climbing!"
    },
    rewardImage: "https://i.imgur.com/DYahj4B.jpeg"
  },
  {
    id: "reto-03",
    clueImage: "https://i.imgur.com/JwKZKWv.jpeg",
    title: { es: "San Marti\u00f1o Pinario / Praza da Acibecher\u00eda", en: "San Marti\u00f1o Pinario / Praza da Acibecher\u00eda" },
    mapsQuery: "Praza da Acibecher\u00eda, Santiago de Compostela",
    lat: 42.8817,
    lng: -8.5445,
    reward: {
      es: "Los grandes rivales de la Catedral\n\nLos monjes de San Marti\u00f1o fueron los primeros custodios del culto al Ap\u00f3stol. Sin embargo, a finales del siglo XI los can\u00f3nigos de la Catedral fueron asumiendo ese papel y el monasterio perdi\u00f3 gran parte de su influencia. Durante siglos hubo tensiones por privilegios, rentas e incluso por qui\u00e9n deb\u00eda tener protagonismo en las ceremonias. En cierto modo, la historia de Santiago tambi\u00e9n es la historia de esa rivalidad silenciosa. Muestra de esa rivalidad es esa torre truncada que pod\u00e9is ver a la izquierda. En su d\u00eda, quisieron hacerla m\u00e1s alta que la Catedral, hasta que el arzobispo les cort\u00f3 las alas (y la punta\u2026 de la Torre). Consecuencia de eso es una ley antigua que todav\u00eda se respeta y que no permite construir m\u00e1s alto que la Catedral en los terrenos de la ciudad.\n\nCuando miras San Marti\u00f1o desde la plaza parece enorme\u2026 y lo es. Pero el efecto est\u00e1 calculado. La iglesia se levant\u00f3 sobre un terreno muy inclinado, por lo que los arquitectos aprovecharon el desnivel para crear una nave alt\u00edsima sin que el edificio pareciera desproporcionado desde el exterior.\n\nHoy muchos la llaman Praza da Inmaculada, aunque hist\u00f3ricamente fue la Praza da Acibecher\u00eda, porque aqu\u00ed trabajaban los artesanos del azabache. El azabache compostelano era un aut\u00e9ntico souvenir medieval. Los peregrinos compraban conchas, cruces, vieiras y peque\u00f1as im\u00e1genes talladas en ese material, a las que adem\u00e1s se atribu\u00edan propiedades protectoras contra el mal de ojo. Todav\u00eda puedes comprar artesan\u00eda de azabache en los alrededores como recuerdo. Como curiosidad, no es una piedra, es madera fosilizada.\n\nSi te colocas en el centro de la plaza y giras sobre ti mismo, tienes condensado el poder de la Compostela medieval:\n\u2022 Al sur, la Catedral (el poder espiritual).\n\u2022 Al oeste, el Pazo de Xelm\u00edrez (el poder pol\u00edtico del arzobispo).\n\u2022 Al norte, Mosteiro de San Marti\u00f1o Pinario (el poder mon\u00e1stico).\n\u2022 Al este, la antigua entrada del Camino Franc\u00e9s.\n\nEn apenas 50 metros conviv\u00edan \u2014y compet\u00edan\u2014 las instituciones m\u00e1s poderosas del noroeste peninsular.\n\nEn la fachada de Igrexa de San Marti\u00f1o Pinario, sobre la puerta principal, ver\u00e1s a San Mart\u00edn de Tours partiendo su capa con un pobre. Lo curioso es que el caballo ocupa casi tanto protagonismo como el santo. No es casual: el caballo simboliza el poder militar y nobiliario al que el santo renuncia al compartir su capa. Es un mensaje de humildad colocado precisamente en la fachada del monasterio m\u00e1s rico de Galicia. Retranca esculpida en piedra.\n\nAhora, prestad atenci\u00f3n porque la siguiente est\u00e1 un poco escondida, en un callej\u00f3n cuesta arriba, pegado al monasterio.",
      en: "The Cathedral's great rivals\n\nThe monks of San Marti\u00f1o were the first custodians of the cult of the Apostle. However, by the late 11th century the Cathedral's canons had taken over that role, and the monastery lost much of its influence. For centuries there was tension over privileges, revenues, and even who should take center stage in ceremonies. In a way, the history of Santiago is also the history of that quiet rivalry. Proof of that rivalry is the truncated tower you can see on the left. At one point they tried to make it taller than the Cathedral, until the archbishop clipped their wings (and the tip... of the tower). As a result, there's an old law, still respected today, that forbids building taller than the Cathedral anywhere in the city.\n\nWhen you look at San Marti\u00f1o from the square it seems enormous \u2014 and it is. But the effect is calculated. The church was built on a steeply sloped plot, so the architects used the difference in elevation to create an extremely tall nave without the building looking disproportionate from the outside.\n\nToday many call it Praza da Inmaculada, though historically it was Praza da Acibecher\u00eda, because the jet-stone (azabache) craftsmen worked here. Compostelan jet was a genuine medieval souvenir. Pilgrims bought shells, crosses, scallops and small carved figures in this material, which were also believed to have protective properties against the evil eye. You can still buy jet handicrafts nearby as a souvenir. As a fun fact, it isn't actually a stone \u2014 it's fossilized wood.\n\nIf you stand in the middle of the square and turn around slowly, you have the power of medieval Compostela laid out before you:\n\u2022 To the south, the Cathedral (spiritual power).\n\u2022 To the west, the Pazo de Xelm\u00edrez (the archbishop's political power).\n\u2022 To the north, the Mosteiro de San Marti\u00f1o Pinario (monastic power).\n\u2022 To the east, the old entrance of the French Way.\n\nIn barely 50 meters, the most powerful institutions of the northwest of the Iberian Peninsula lived side by side \u2014 and competed.\n\nOn the fa\u00e7ade of the Igrexa de San Marti\u00f1o Pinario, above the main door, you'll see Saint Martin of Tours cutting his cloak to share with a poor man. The curious thing is that the horse gets almost as much prominence as the saint. That's not by chance: the horse symbolizes the military and noble power the saint gives up by sharing his cloak. It's a message of humility, placed right on the fa\u00e7ade of the wealthiest monastery in Galicia. Wit carved in stone.\n\nNow, pay attention, because the next stop is a little hidden, in an uphill alley right next to the monastery."
    },
    rewardImage: "https://i.imgur.com/hONTRPY.jpeg"
  },
  {
    id: "reto-04",
    clueImage: "https://i.imgur.com/YUcTqe6.jpeg",
    title: { es: "R\u00faa da Moeda Vella", en: "R\u00faa da Moeda Vella" },
    mapsQuery: "R\u00faa da Moeda Vella 7, Santiago de Compostela",
    lat: 42.8819,
    lng: -8.5439,
    reward: {
      es: "Este es uno de mis lugares favoritos de Santiago porque esconde una historia que pas\u00f3 inadvertida durante m\u00e1s de siete siglos.\n\nMar\u00eda Leve y Sancha P\u00e9rez\n\nUna cantiga sat\u00edrica del siglo XIII sit\u00faa aqu\u00ed a dos mujeres: Mar\u00eda Leve y Sancha P\u00e9rez.\n\nDurante mucho tiempo se interpret\u00f3 simplemente como una burla a una soldadeira (artista itinerante), pero estudios recientes han puesto el foco en otro aspecto: los textos describen una relaci\u00f3n afectiva entre ambas mujeres con un grado de concreci\u00f3n muy poco habitual para la Europa medieval. Sabemos sus nombres, la calle donde viv\u00edan y hasta que un trovador estaba celoso porque Sancha no le hac\u00eda caso.\n\nEl estribillo m\u00e1s famoso repite:\n\u00abE na Moeda Velha vai morar / Dona Maria Leve, a seu pesar.\u00bb\n\nLa composici\u00f3n cuenta que Mar\u00eda se traslada a vivir a la Moeda Vella porque su manceba (t\u00e9rmino medieval que puede significar compa\u00f1era o amante, seg\u00fan el contexto) ya no quiere seguir viviendo con ella. El propio poema juega continuamente con esa separaci\u00f3n.\n\n\u00bfLa primera pareja de mujeres documentada?\n\nConviene ser prudentes. No existe un documento que diga expl\u00edcitamente \"eran pareja\". Sin embargo, muchos medievalistas consideran que el conjunto de las cantigas hace muy plausible esa interpretaci\u00f3n y destacan que es un caso extraordinariamente raro en la literatura europea del siglo XIII.\n\nVarias cantigas galaicoportuguesas del siglo XIII mencionan a Mar\u00eda Leve y Sancha P\u00e9rez como personas reales de Santiago. No son personajes legendarios. Aparecen asociadas a la zona de la Moeda Vella y los poemas describen una relaci\u00f3n estrecha entre ambas.\n\nLo interesante es el uso de palabras como \"manceba\", que en la documentaci\u00f3n medieval puede significar desde criada o compa\u00f1era hasta amante, seg\u00fan el contexto. En las cantigas, adem\u00e1s, hay referencias a convivencia, separaci\u00f3n, celos y conflictos afectivos que recuerdan m\u00e1s a una relaci\u00f3n sentimental que a una mera amistad o relaci\u00f3n laboral. Por eso algunos investigadores consideran que podr\u00eda tratarse de una relaci\u00f3n amorosa entre mujeres.\n\nUn detalle poco conocido es que el autor de una de las cantigas, Pero da Ponte, parece burlarse de la situaci\u00f3n porque \u00e9l mismo estaba interesado en Sancha. Es decir, el tono no es el de alguien denunciando un delito o una conducta escandalosa, sino el de un poeta que utiliza un conflicto sentimental para hacer s\u00e1tira. Eso resulta bastante llamativo para la \u00e9poca.\n\nTambi\u00e9n es importante recordar que la sociedad medieval no clasificaba las relaciones con las categor\u00edas actuales (\"lesbiana\", \"bisexual\", etc.). Por eso los especialistas m\u00e1s cautos prefieren decir que existi\u00f3 una relaci\u00f3n afectiva intensa entre dos mujeres antes que aplicar etiquetas modernas.\n\nLo verdaderamente excepcional no es tanto que pudieran haber sido pareja \u2014seguramente hubo muchas\u2014 sino que conservamos sus nombres. La inmensa mayor\u00eda de personas corrientes del Santiago del siglo XIII desaparecieron de la historia. Mar\u00eda Leve y Sancha P\u00e9rez, en cambio, quedaron inmortalizadas en versos, con direcci\u00f3n casi exacta incluida.\n\nY hay otro matiz fascinante: las cantigas no las presentan como figuras nobles o santas, sino como mujeres de la vida cotidiana. Eso convierte a la Moeda Vella en uno de los poqu\u00edsimos lugares de Europa donde podemos se\u00f1alar una calle concreta y decir: \"aqu\u00ed vivieron dos mujeres cuya relaci\u00f3n amorosa, o al menos profundamente afectiva, fue comentada por sus contempor\u00e1neos hace m\u00e1s de siete siglos\".\n\nLa calle es estrecha, silenciosa y queda justo detr\u00e1s del enorme monasterio de San Marti\u00f1o Pinario, uno de los centros del poder eclesi\u00e1stico medieval. Resulta fascinante pensar que, mientras a pocos metros se tomaban decisiones religiosas y pol\u00edticas de enorme trascendencia, una peque\u00f1a calle conserv\u00f3 en la literatura la memoria de dos mujeres cuya historia ha sobrevivido m\u00e1s de 750 a\u00f1os gracias a unos versos aparentemente sat\u00edricos. Es uno de esos rincones donde Santiago demuestra que su historia no solo est\u00e1 escrita en la piedra, sino tambi\u00e9n en la poes\u00eda.\n\nAhora, continuemos por este callej\u00f3n para encontrar la siguiente parada.",
      en: "This is one of my favorite spots in Santiago because it hides a story that went unnoticed for more than seven centuries.\n\nMar\u00eda Leve and Sancha P\u00e9rez\n\nA satirical cantiga from the 13th century places two women here: Mar\u00eda Leve and Sancha P\u00e9rez.\n\nFor a long time it was read simply as mockery of a soldadeira (a traveling performer), but recent studies have focused on another angle: the texts describe an affectionate relationship between the two women with a level of specific detail that's very unusual for medieval Europe. We know their names, the street where they lived, and even that a troubadour was jealous because Sancha wouldn't pay him any attention.\n\nThe most famous refrain repeats:\n\"E na Moeda Velha vai morar / Dona Maria Leve, a seu pesar.\"\n\nThe poem tells how Mar\u00eda moves to live on the Moeda Vella because her manceba (a medieval term that can mean companion or lover, depending on context) no longer wants to live with her. The poem itself keeps playing with that separation.\n\nThe first documented female couple?\n\nIt's worth being cautious here. There's no document that explicitly states \"they were a couple.\" Still, many medievalists consider that reading very plausible when you look at the cantigas as a whole, and they point out that it's an extraordinarily rare case in 13th-century European literature.\n\nSeveral Galician-Portuguese cantigas from the 13th century mention Mar\u00eda Leve and Sancha P\u00e9rez as real people from Santiago. They aren't legendary figures. They're associated with the Moeda Vella area, and the poems describe a close relationship between the two.\n\nWhat's interesting is the use of words like \"manceba,\" which in medieval documents can mean anything from servant or companion to lover, depending on context. The cantigas also include references to living together, separation, jealousy, and emotional conflict that sound more like a romantic relationship than mere friendship or a working relationship. That's why some researchers believe it could have been a romantic relationship between women.\n\nA little-known detail is that the author of one of the cantigas, Pero da Ponte, seems to be mocking the situation because he himself was interested in Sancha. In other words, the tone isn't that of someone denouncing a crime or scandalous behavior, but that of a poet using a personal conflict to write satire. That's quite striking for the period.\n\nIt's also worth remembering that medieval society didn't classify relationships using today's categories (\"lesbian,\" \"bisexual,\" etc.). That's why the more cautious specialists prefer to say that an intense affectionate relationship existed between two women, rather than applying modern labels.\n\nWhat's truly exceptional isn't so much that they may have been a couple \u2014 there were surely many \u2014 but that we still have their names. The vast majority of ordinary people from 13th-century Santiago vanished from history. Mar\u00eda Leve and Sancha P\u00e9rez, on the other hand, were immortalized in verse, complete with an address that's almost exact.\n\nAnd there's another fascinating detail: the cantigas don't present them as noble figures or saints, but as women from everyday life. That makes the Moeda Vella one of the very few places in Europe where we can point to a specific street and say: \"here lived two women whose romantic, or at least deeply affectionate, relationship was talked about by their contemporaries more than seven centuries ago.\"\n\nThe street is narrow, quiet, and sits right behind the huge monastery of San Marti\u00f1o Pinario, one of the centers of medieval church power. It's fascinating to think that, just a few meters away, enormously consequential religious and political decisions were being made, while a small street preserved, in literature, the memory of two women whose story has survived more than 750 years thanks to some apparently satirical verses. It's one of those corners where Santiago shows that its history isn't only written in stone, but in poetry too.\n\nNow, let's continue down this alley to find the next stop."
    },
    rewardImage: "https://i.imgur.com/YC4PUaY.jpeg"
  },
  {
    id: "reto-05",
    clueImage: "https://i.imgur.com/YP2FsBz.jpeg",
    title: { es: "Igrexa de San Marti\u00f1o Pinario", en: "Igrexa de San Marti\u00f1o Pinario" },
    mapsQuery: "Igrexa de San Marti\u00f1o Pinario, Santiago de Compostela",
    lat: 42.8816,
    lng: -8.545,
    reward: {
      es: "Si el exterior impresiona, el interior de Igrexa de San Marti\u00f1o Pinario es donde se entiende por qu\u00e9 fue el gran monasterio benedictino de Galicia.\n\nEl inmenso retablo no est\u00e1 presidido por San Mart\u00edn, sino por San Benito, fundador de la orden benedictina. A sus pies aparecen dos obispos gallegos muy vinculados al monasterio: San Rosendo y San Pedro de Mezonzo. El mensaje era claro: los benedictinos reivindicaban su enorme peso en la historia religiosa de Galicia.\n\nEl coro est\u00e1 \"en medio\" de la iglesia\n\nHoy nos parece extra\u00f1o, pero originalmente el coro ocupaba el centro de la nave, como ocurr\u00eda en muchas iglesias mon\u00e1sticas. La espectacular siller\u00eda, tallada por Mateo de Prado, estaba pensada para el rezo diario de decenas de monjes. No era un elemento decorativo: era su lugar de trabajo.\n\nLa iglesia mira... hacia el oeste\n\nTradicionalmente, las iglesias cristianas orientan el altar hacia el este, s\u00edmbolo de la Resurrecci\u00f3n. En San Marti\u00f1o ocurri\u00f3 lo contrario: debido al terreno y al enorme monasterio existente, se obtuvo autorizaci\u00f3n papal para invertir la orientaci\u00f3n y situar la cabecera hacia el oeste. Es una excepci\u00f3n muy poco frecuente.\n\nSi sientes que es buen momento para un descanso, encontrar\u00e1s la cafeter\u00eda Adelia en la plaza de San Miguel, sobre las escaleras. Si has venido a media tarde, el Camalea (a la derecha de la iglesia, seg\u00fan la observas) es un buen lugar para un combinado o algo refrescante.\n\nAhora, vuelve hacia la Catedral por la R\u00faa da Troia.",
      en: "If the outside is impressive, the inside of the Igrexa de San Marti\u00f1o Pinario is where you understand why it was Galicia's great Benedictine monastery.\n\nThe immense altarpiece isn't presided over by Saint Martin, but by Saint Benedict, founder of the Benedictine order. At his feet appear two Galician bishops closely linked to the monastery: Saint Rosendo and Saint Peter of Mezonzo. The message was clear: the Benedictines were asserting their enormous weight in Galicia's religious history.\n\nThe choir sits \"in the middle\" of the church\n\nIt seems strange to us today, but the choir originally sat in the center of the nave, as was common in many monastic churches. The spectacular choir stalls, carved by Mateo de Prado, were designed for the daily prayers of dozens of monks. They weren't decorative \u2014 they were the monks' workplace.\n\nThe church faces... west\n\nTraditionally, Christian churches orient the altar to the east, a symbol of the Resurrection. In San Marti\u00f1o the opposite happened: because of the terrain and the huge existing monastery, papal authorization was obtained to reverse the orientation and place the head of the church to the west. It's a very unusual exception.\n\nIf you feel like it's a good moment for a break, you'll find the Adelia caf\u00e9 on Praza de San Miguel, up the stairs. If you've come by mid-afternoon, Camalea (to the right of the church, as you face it) is a good spot for a cocktail or something refreshing.\n\nNow, head back toward the Cathedral along R\u00faa da Troia."
    },
    rewardImage: "https://i.imgur.com/4DqbEMo.jpeg"
  },
  {
    id: "reto-06",
    clueImage: "https://i.imgur.com/VDJrPhI.jpeg",
    title: { es: "Casa da Troia", en: "Casa da Troia" },
    mapsQuery: "Casa da Troia, Santiago de Compostela",
    lat: 42.8811,
    lng: -8.5447,
    reward: {
      es: "Este peque\u00f1o museo es una ventana a la Santiago universitaria de finales del XIX, una ciudad muy distinta de la de los peregrinos.\n\nEntre 1886 y 1906 la casa funcion\u00f3 como una aut\u00e9ntica pensi\u00f3n estudiantil. La Universidad ten\u00eda pocos alumnos comparada con hoy, pero la mayor\u00eda ven\u00edan de fuera de Galicia. Viv\u00edan hacinados, compart\u00edan habitaciones y apenas regresaban a casa durante el curso. La pensi\u00f3n era su hogar.\n\nAlejandro P\u00e9rez Lug\u00edn estudi\u00f3 Derecho en Santiago y convirti\u00f3 la pensi\u00f3n de Do\u00f1a Generosa Carollo en el escenario de La Casa de la Troya (1915). Lo curioso es que la novela tuvo tanto \u00e9xito que acab\u00f3 cambiando la percepci\u00f3n de la ciudad: durante d\u00e9cadas, muchos espa\u00f1oles imaginaban el Santiago universitario a trav\u00e9s de sus p\u00e1ginas.\n\nLa tuna ensayaba all\u00ed\n\nLa primera planta recrea tambi\u00e9n el espacio donde ensayaba la tuna compostelana. En aquella \u00e9poca, las tunas no eran solo una tradici\u00f3n folcl\u00f3rica: eran parte de la vida social de la universidad y una forma de ganar alg\u00fan dinero ofreciendo serenatas.\n\nEl museo es econ\u00f3mico y curioso, pero aunque sea, as\u00f3mate a la ventana de la planta baja: entra en la casa sin prisas y olv\u00eddate por un momento de la novela. M\u00e1s que un museo literario, es uno de los pocos lugares de Santiago donde puedes imaginar c\u00f3mo era el d\u00eda a d\u00eda de un estudiante de hace 130 a\u00f1os: el fr\u00edo, los pupitres, las bromas, las serenatas y el bullicio de una ciudad que, entonces, viv\u00eda tanto del conocimiento como de la peregrinaci\u00f3n.\n\nLa R\u00faa da Troia es una de las m\u00e1s estrechas y evocadoras de Santiago. Si te sit\u00faas frente a la casa y miras hacia arriba, ver\u00e1s c\u00f3mo las fachadas casi parecen tocarse. Esa sensaci\u00f3n de intimidad explica por qu\u00e9 la calle ha aparecido tantas veces en pel\u00edculas, fotograf\u00edas y postales: conserva la escala de la ciudad universitaria de hace m\u00e1s de un siglo.\n\nContin\u00faa la calle y al llegar al cruce podr\u00e1s buscar la siguiente ubicaci\u00f3n.",
      en: "This small museum is a window into student life in Santiago at the end of the 19th century, a very different city from the pilgrims'.\n\nBetween 1886 and 1906 the house operated as an actual student boarding house. The University had far fewer students than today, but most came from outside Galicia. They lived crowded together, shared rooms, and barely went home during the school year. The boarding house was their home.\n\nAlejandro P\u00e9rez Lug\u00edn studied Law in Santiago and turned Do\u00f1a Generosa Carollo's boarding house into the setting for La Casa de la Troya (1915). The curious thing is that the novel was so successful it ended up shaping how the city was perceived: for decades, many Spaniards pictured university-era Santiago through its pages.\n\nThe tuna used to rehearse there\n\nThe first floor also recreates the space where the Compostela tuna (traditional student musical group) used to rehearse. Back then, tunas weren't just a folk tradition \u2014 they were part of university social life and a way to earn a bit of money by performing serenades.\n\nThe museum is inexpensive and quirky, but even so, take a look through the ground-floor window: step into the house without rushing and forget about the novel for a moment. More than a literary museum, it's one of the few places in Santiago where you can picture the day-to-day life of a student from 130 years ago: the cold, the desks, the pranks, the serenades, and the bustle of a city that back then lived off both learning and pilgrimage.\n\nR\u00faa da Troia is one of Santiago's narrowest, most evocative streets. If you stand in front of the house and look up, you'll see how the fa\u00e7ades almost seem to touch. That sense of intimacy explains why the street has shown up so often in films, photographs and postcards: it keeps the scale of the university city from more than a century ago.\n\nContinue down the street, and when you reach the crossroads you can look for the next location."
    },
    rewardImage: "https://i.imgur.com/o8IclDw.jpeg"
  },
  {
    id: "reto-07",
    clueImage: "https://i.imgur.com/dI8ufJY.jpeg",
    title: { es: "Praza de Cervantes", en: "Praza de Cervantes" },
    mapsQuery: "Praza de Cervantes, Santiago de Compostela",
    lat: 42.8801,
    lng: -8.5427,
    reward: {
      es: "\u00a1Hab\u00e9is llegado a la plaza de Cervantes!\n\nEs tradici\u00f3n entre los locales gastarle una broma al visitante haci\u00e9ndole buscar los pies de Cervantes en el interior de la fuente para salpicarle cuando se asome a mirar (\u00a1aprovecha que ahora lo sabes!)\n\nEs uno de los puntos m\u00e1s altos de la ciudad medieval, con la excepci\u00f3n de San Roque, pero era extramuros.\n\nAntes de llamarse Praza de Cervantes fue conocida como Praza do Campo y despu\u00e9s como Praza da Constituci\u00f3n. Aqu\u00ed estaba la sede del ayuntamiento medieval y, sobre todo, el lugar donde se proclamaban ordenanzas, se anunciaban impuestos y se ejecutaban sentencias p\u00fablicas.\n\nDesde esta plaza se le\u00edan las disposiciones municipales a voz en grito. Piensa que la mayor\u00eda de la poblaci\u00f3n no sab\u00eda leer. La plaza funcionaba como el bolet\u00edn oficial de la ciudad.\n\nAntes de que existiera el actual Mercado de Abastos, buena parte del comercio urbano se realizaba aqu\u00ed. Entraban productos procedentes de toda Galicia: pescado, cereales, vino, textiles y ganado menor. A d\u00eda de hoy todav\u00eda es habitual encontrar puestos de artesan\u00eda y libros usados.\n\nPor eso la plaza conecta de forma natural con Casas Reais (que aunque no la vamos a visitar en este juego-gu\u00eda, puedes desviarte un momento \u20141-2 minutos caminando desde aqu\u00ed\u2014 para ver en ella la Capela das \u00c1nimas y la subida final del Camino Franc\u00e9s), una de las principales v\u00edas de entrada hist\u00f3rica a Compostela.\n\n\u00bfY Cervantes qu\u00e9 pinta aqu\u00ed?\n\nLa estatua de Miguel de Cervantes lleg\u00f3 en 1916, coincidiendo con el tercer centenario de su muerte.\n\nLo curioso es que Cervantes nunca tuvo una relaci\u00f3n especial con esta plaza. Su nombre sustituy\u00f3 a denominaciones hist\u00f3ricas mucho m\u00e1s antiguas. Para muchos compostelanos veteranos, la plaza sigui\u00f3 siendo simplemente \"o Campo\" durante d\u00e9cadas.\n\nEn el lado oriental se encuentra la antigua Casa do Concello. El edificio actual es resultado de numerosas reformas, pero sigue ocupando el espacio donde se concentr\u00f3 buena parte del poder municipal compostelano.\n\nSi quieres hacer una parada, te recomiendo el Gramola y su terraza.\n\nAhora, contin\u00faa por el lateral de la iglesia de San Benito (la iglesia \"del pueblo\").",
      en: "You've arrived at Praza de Cervantes!\n\nIt's a tradition among locals to prank visitors into looking for Cervantes's feet inside the fountain, so they get splashed when they lean in to look (now that you know, you're one step ahead!).\n\nIt's one of the highest points of the medieval city, with the exception of San Roque, but it stood outside the city walls.\n\nBefore being called Praza de Cervantes, it was known as Praza do Campo and later as Praza da Constituci\u00f3n. This is where the medieval town hall stood, and above all, the place where ordinances were proclaimed, taxes were announced, and public sentences were carried out.\n\nMunicipal orders used to be read aloud from this square. Keep in mind that most of the population couldn't read. The square worked as the city's official gazette.\n\nBefore today's Mercado de Abastos existed, much of the city's trade took place here. Goods came in from all over Galicia: fish, grain, wine, textiles and small livestock. Even today it's common to find craft stalls and secondhand book vendors.\n\nThat's why the square connects naturally with Casas Reais (which we won't be visiting in this game-guide, but you can take a short detour \u2014 1-2 minutes' walk from here \u2014 to see the Capela das \u00c1nimas and the final stretch of the French Way there), one of the main historic entry routes into Compostela.\n\nSo what's Cervantes doing here?\n\nThe statue of Miguel de Cervantes arrived in 1916, marking the third centenary of his death.\n\nThe curious thing is that Cervantes never had any special connection to this square. His name replaced much older historical names. For many longtime locals, the square simply kept being called \"o Campo\" for decades.\n\nOn the eastern side stands the old Casa do Concello (town hall). Today's building is the result of many renovations, but it still occupies the space where much of Compostela's municipal power was concentrated.\n\nIf you feel like taking a break, I'd recommend O Gramola and its terrace.\n\nNow, continue along the side of the Igrexa de San Benito (the \"people's church\")."
    },
    rewardImage: "https://i.imgur.com/kPPa0jn.jpeg"
  },
  {
    id: "reto-08",
    clueImage: "https://i.imgur.com/QPY3yoF.jpeg",
    imagePosition: "top", // el recorte de la foto prioriza la parte de arriba (la "punta" de la piedra)
    title: { es: "O Carallo 29", en: "O Carallo 29" },
    mapsQuery: "42.8810389,-8.5414863",
    lat: 42.8810389,
    lng: -8.5414863,
    reward: {
      es: "Pues\u2026 est\u00e1is\u2026 frente a\u2026 bueno, O Carallo 29.\n\nEs una de las expresiones m\u00e1s santiaguesas que existen, lo mismo sirve para decir que algo est\u00e1 lejos como para mostrar incredulidad.\n\nNo es una escultura, sino un pivote de piedra del siglo XVII que proteg\u00eda la esquina de las casas del paso de carros y caballer\u00edas. Su forma f\u00e1lica hizo que, con el tiempo, los compostelanos lo bautizaran como \"O Carallo 29\".\n\n\u00bfPor qu\u00e9 \"29\"?\n\nAqu\u00ed confluyen dos historias.\n\nLa primera es pol\u00edtica. La expresi\u00f3n \"o carallo vinte e nove\" ya exist\u00eda por el famoso art\u00edculo 29 de la Ley Electoral de 1907, que permit\u00eda proclamar autom\u00e1ticamente a un candidato si no ten\u00eda oposici\u00f3n. En una Galicia dominada por el caciquismo, aquello se convirti\u00f3 en s\u00edmbolo de fraude y de incredulidad. De ah\u00ed que \"\u00a1o carallo 29!\" acabara significando algo parecido a \"\u00a1anda ya!\" o \"s\u00ed, hombre...\".\n\nLa segunda es una feliz coincidencia: el pivote est\u00e1 donde corresponder\u00eda el n\u00famero 29 de la R\u00faa Travesa. La calle termina en el 27, pero el moj\u00f3n ocupa el lugar donde estar\u00eda el 29. Los compostelanos unieron el dicho popular con la piedra y naci\u00f3 la leyenda.\n\nF\u00edjate en la piedra: est\u00e1 inclinada. No es un defecto moderno; es consecuencia de siglos soportando empujes, roces y peque\u00f1as colisiones. Es uno de esos objetos urbanos que ha sobrevivido porque nunca dej\u00f3 de cumplir su funci\u00f3n.\n\nSi por lo que sea has llegado con hambre, est\u00e1s cerca de O Curro da Parra.\n\n\u00a1Sigamos bajando!",
      en: "Well... you're... standing in front of... okay, it's O Carallo 29.\n\nIt's one of the most quintessentially Compostelan expressions there is \u2014 it can mean something is far away, or express disbelief.\n\nIt's not a sculpture, but a 17th-century stone bollard that protected the corner of the houses from passing carts and pack animals. Its phallic shape led locals, over time, to nickname it \"O Carallo 29.\"\n\nWhy \"29\"?\n\nTwo stories come together here.\n\nThe first is political. The expression \"o carallo vinte e nove\" already existed because of the famous Article 29 of the 1907 Electoral Law, which allowed a candidate to be automatically declared elected if they had no opposition. In a Galicia dominated by political bossism (caciquismo), that became a symbol of fraud and disbelief. That's how \"o carallo 29!\" came to mean something like \"yeah, right!\" or \"sure, whatever...\"\n\nThe second is a happy coincidence: the bollard stands right where number 29 of R\u00faa Travesa would be. The street actually ends at number 27, but the marker sits where 29 would be. Locals combined the popular saying with the stone, and the legend was born.\n\nLook closely at the stone: it leans. That's not a modern flaw \u2014 it's the result of centuries of pushes, scrapes, and small collisions. It's one of those pieces of street furniture that has survived simply because it never stopped doing its job.\n\nIf you happen to have arrived hungry, you're close to O Curro da Parra.\n\nLet's keep heading down!"
    },
    rewardImage: "https://i.imgur.com/IRowIpV.jpeg"
  },
  {
    id: "reto-09",
    clueImage: "https://i.imgur.com/d9nGiQD.jpeg",
    title: { es: "Mercado de Abastos", en: "Mercado de Abastos" },
    mapsQuery: "Mercado de Abastos, Santiago de Compostela",
    lat: 42.8794,
    lng: -8.5438,
    reward: {
      es: "Vale, este os lo he puesto un poco dif\u00edcil, pero me niego a creer que el ruido, los olores, y toda la gente que pasa la zona no os ha llamado la atenci\u00f3n.\n\nNo est\u00e1 donde estaba el mercado medieval\n\nAunque parece antiqu\u00edsimo, el edificio actual se inaugur\u00f3 en 1941. Antes, el mercado estaba repartido por varias plazas, especialmente Cervantes, Azibecher\u00eda y Plater\u00edas. A finales del siglo XIX se decidi\u00f3 concentrar toda esa actividad en las antiguas huertas de los Condes de Altamira, y el edificio que ves hoy sustituy\u00f3 a un mercado anterior derribado en 1937.\n\nUn mercado con forma de iglesias\n\nF\u00edjate en las cubiertas de granito. Las ocho naves parecen peque\u00f1as iglesias rom\u00e1nicas alineadas. El arquitecto Joaqu\u00edn Vaquero Palacios quiso que el mercado dialogara con la arquitectura hist\u00f3rica de Santiago, evitando construir una nave industrial que rompiese la est\u00e9tica del casco hist\u00f3rico.\n\nLas \"paisanas\"\n\nUno de los s\u00edmbolos del mercado son las paisanas, mujeres que durante generaciones han vendido directamente lo cultivado en sus propias huertas. Si has llegado hasta aqu\u00ed en horas de mercado, las encontrar\u00e1s vendiendo sus productos sentadas alrededor del mercado.\n\nNo eran simples comerciantes: muchas llegaban de madrugada desde Ames, Teo, Vedra, Oroso o el valle del Ulla con cestas cargadas de verduras, huevos, quesos o mantequilla. Algunas a\u00fan siguen vendiendo producto de sus propias explotaciones familiares. Es una tradici\u00f3n que ha sobrevivido mucho mejor aqu\u00ed que en otras ciudades espa\u00f1olas.\n\nEst\u00e1 construido sobre uno de los or\u00edgenes de Santiago\n\nBajo el mercado se localizan restos del castro de Libred\u00f3n, el asentamiento prerromano que ocupaba esta colina antes de la fundaci\u00f3n de Compostela. Es decir, mientras compras pescado o fruta est\u00e1s caminando sobre uno de los lugares donde comenz\u00f3 la historia de la ciudad.\n\nDel mercado al plato\n\nDesde hace unos a\u00f1os existe la posibilidad de comprar el marisco o el pescado en un puesto y llevarlo a cocinar a locales cercanos como Abastos Praza, donde te lo preparan. Es una forma de mantener el mercado como un espacio vivo y no solo tur\u00edstico.\n\nEn cualquier caso, es un lugar excelente para llevar alg\u00fan recuerdo de los que no s\u00f3lo alimentan el alma. Os recomiendo alguno de los quesos t\u00edpicos gallegos, por ejemplo, pero pod\u00e9is dejaros llevar por el impulso.\n\nAntes de abandonar el mercado, os aconsejo acercaros al final del mercado, a la muralla, para ver c\u00f3mo se conectan los dos Santiagos, el medieval y el contempor\u00e1neo.\n\nSi quieres hacer una parada de descanso, el Caf\u00e9 de Altamira o el Abastos 2.0 son excelentes.\n\nAhora, salgamos del mercado por el otro extremo de la recta por la que entramos.",
      en: "Okay, I made this one a bit tricky, but I refuse to believe the noise, the smells, and all the people passing through the area didn't catch your attention.\n\nIt's not where the medieval market used to be\n\nEven though it looks ancient, the current building actually opened in 1941. Before that, the market was spread across several squares, especially Cervantes, Acibecher\u00eda and Prater\u00edas. In the late 19th century it was decided to bring all that activity together in the old orchards of the Counts of Altamira, and the building you see today replaced an earlier market that was demolished in 1937.\n\nA market shaped like churches\n\nTake a look at the granite roofs. The eight naves look like small Romanesque churches lined up in a row. The architect Joaqu\u00edn Vaquero Palacios wanted the market to be in dialogue with Santiago's historic architecture, avoiding an industrial-looking building that would clash with the aesthetic of the old town.\n\nThe \"paisanas\"\n\nOne of the market's symbols are the paisanas, women who for generations have sold produce grown directly in their own vegetable gardens. If you've come at market hours, you'll find them selling their produce, seated around the market.\n\nThey weren't just merchants: many arrived before dawn from Ames, Teo, Vedra, Oroso or the Ulla valley with baskets loaded with vegetables, eggs, cheese, or butter. Some still sell produce from their own family smallholdings today. It's a tradition that has survived here far better than in other Spanish cities.\n\nIt's built over one of Santiago's origins\n\nBeneath the market lie the remains of the castro de Libred\u00f3n, the pre-Roman settlement that occupied this hill before Compostela was founded. In other words, while you're buying fish or fruit, you're walking over one of the places where the city's story began.\n\nFrom the market to the plate\n\nFor some years now it's been possible to buy seafood or fish at a stall and take it to be cooked nearby, at places like Abastos Praza, where they'll prepare it for you. It's a way of keeping the market a living space, not just a tourist attraction.\n\nEither way, it's an excellent place to pick up a souvenir that feeds more than just the soul. I'd recommend one of the typical Galician cheeses, for example, but feel free to just follow your instinct.\n\nBefore leaving the market, I'd suggest heading to the far end, toward the city wall, to see how the two Santiagos \u2014 medieval and contemporary \u2014 connect.\n\nIf you'd like a break, Caf\u00e9 de Altamira or Abastos 2.0 are excellent choices.\n\nNow, let's leave the market from the opposite end of the row we came in through."
    },
    rewardImage: "https://i.imgur.com/xl3vi69.jpeg"
  },
  {
    id: "reto-10",
    clueImage: "https://i.imgur.com/u72CrDv.jpeg",
    title: { es: "Cruceiro de San Fiz", en: "Cruceiro de San Fiz" },
    mapsQuery: "42.8794696,-8.5418061",
    lat: 42.8794696,
    lng: -8.5418061,
    reward: {
      es: "Para compensar, \u00a1este ha sido m\u00e1s f\u00e1cil!\n\nEl Cruceiro de San Fiz es uno de los m\u00e1s curiosos de Santiago porque durante casi dos siglos fue conocido como el \"cruceiro maldito\".\n\nUna inscripci\u00f3n que parec\u00eda una maldici\u00f3n\n\nEn el pedestal puede leerse una inscripci\u00f3n de 1718 dedicada a un hombre llamado Manuel Joseph Ram\u00edrez de Arellano, que muri\u00f3 de forma violenta.\n\nDurante mucho tiempo se ley\u00f3 as\u00ed:\n\"...NO RUEGUEN A DIOS POR \u00c9L\"\n\nImag\u00ednate el impacto. Un cruceiro donde parec\u00eda pedirse expresamente que nadie rezara por el difunto. En una ciudad profundamente religiosa, aquello resultaba casi blasfemo.\n\nEl misterio ten\u00eda una explicaci\u00f3n\n\nA finales del siglo XIX, el historiador P\u00e9rez Constanti resolvi\u00f3 el enigma.\n\nEse \"NO\" no era la palabra \"no\", sino las \u00faltimas letras del apellido ArellaNO. La inscripci\u00f3n deb\u00eda leerse as\u00ed:\n\"...Ram\u00edrez de ArellaNO. Rueguen a Dios por \u00e9l.\"\n\nUn salto de l\u00ednea convirti\u00f3 una petici\u00f3n de oraci\u00f3n en una maldici\u00f3n, \u00a1hay que tener cuidado con lo que escribimos!\n\n\u00a1Vaya, me he dado cuenta de que no os he contado lo que son los cruceiros!\n\nLos cruceiros son probablemente el elemento m\u00e1s caracter\u00edstico del paisaje gallego, pero suelen explicarse de forma demasiado simple como \"una cruz de piedra\". En realidad, son mucho m\u00e1s.\n\nLa mayor\u00eda se levantaron entre los siglos XVI y XIX, aunque algunos son anteriores. Sol\u00edan colocarse en:\n\u2022 Cruces de caminos.\n\u2022 Entradas de aldeas.\n\u2022 Atrios de iglesias.\n\u2022 L\u00edmites parroquiales.\n\u2022 Lugares donde ocurri\u00f3 una muerte.\n\u2022 Caminos de peregrinaci\u00f3n.\n\nDe hecho, la palabra cruceiro viene precisamente de estar situado en una encrucijada.\n\n\u00bfCristianismo o algo m\u00e1s antiguo?\n\nMuchos historiadores creen que los cruceiros cristianizaron lugares que ya ten\u00edan importancia simb\u00f3lica antes del cristianismo. En Galicia exist\u00eda una enorme tradici\u00f3n relacionada con caminos, fuentes, piedras singulares y l\u00edmites territoriales.\n\nLa Iglesia coloc\u00f3 cruces en muchos de esos lugares para integrarlos en la nueva religiosidad.\n\nEran \"puntos de paso\" entre mundos\n\nPara la mentalidad popular gallega, los cruces de caminos eran lugares especiales y a veces peligrosos. All\u00ed pod\u00edan aparecer \u00e1nimas, la Santa Compa\u00f1a o seres sobrenaturales.\n\nEl cruceiro actuaba como protecci\u00f3n espiritual para viajeros y vecinos.\n\nPor eso muchas personas se santiguaban al pasar delante de ellos.\n\nLos cruceiros y la muerte\n\nMuchos estaban vinculados a los cortejos f\u00fanebres.\n\nCuando un entierro se dirig\u00eda al cementerio, era habitual detenerse junto a determinados cruceiros para rezar por el difunto.\n\nPor eso algunos tienen peque\u00f1as plataformas o escalones alrededor.\n\nToca hablar un poco de literatura, y es que uno de los grandes escritores de Galicia, Castelao, public\u00f3 en 1950 \"As cruces de pedra na Galiza\", una de las obras m\u00e1s importantes jam\u00e1s escritas sobre los cruceiros gallegos.\n\nLo fascinante es que Castelao no los ve\u00eda simplemente como monumentos religiosos. Para \u00e9l eran una especie de ADN cultural gallego tallado en piedra. Dec\u00eda que para entender Galicia hab\u00eda que estudiar sus cruceiros igual que un arque\u00f3logo estudia un templo o una necr\u00f3polis.\n\nLa conexi\u00f3n con Irlanda\n\nCastelao estaba convencido de que Galicia compart\u00eda profundas ra\u00edces culturales con las llamadas naciones celtas del Atl\u00e1ntico, especialmente Irlanda y Breta\u00f1a.\n\nAl estudiar los cruceiros observ\u00f3 similitudes con las High Crosses irlandesas, las grandes cruces medievales de piedra que todav\u00eda pueden verse en lugares como Monasterboice o Clonmacnoise.\n\nPero no son iguales\n\nLas cruces irlandesas suelen ser:\n\u2022 M\u00e1s antiguas (siglos VIII-XII).\n\u2022 Monumentales.\n\u2022 Decoradas con escenas b\u00edblicas.\n\nLos cruceiros gallegos son:\n\u2022 Generalmente m\u00e1s recientes.\n\u2022 M\u00e1s vinculados a caminos y aldeas.\n\u2022 M\u00e1s relacionados con la religiosidad popular.\n\nCastelao no dec\u00eda que los cruceiros gallegos descendieran directamente de los irlandeses. Lo que propon\u00eda era que ambos pertenec\u00edan a una misma tradici\u00f3n atl\u00e1ntica de monumentalizar la piedra y el paisaje.\n\nEl Atl\u00e1ntico un\u00eda m\u00e1s que separaba\n\nHoy sabemos que en la Edad Media exist\u00edan contactos mar\u00edtimos constantes entre Galicia, Irlanda, Breta\u00f1a, Cornualles y el norte de Portugal.\n\nPara Castelao, el mar era una autopista cultural.\n\nPor eso le fascinaba que tanto en una aldea gallega como en un monasterio irland\u00e9s aparecieran cruces de piedra dominando el paisaje.\n\nSi eres anglicano practicante, la iglesia que corona esta plaza es \u2014creo\u2014 la \u00fanica con culto en ingl\u00e9s y disponibilidad de misas anglicanas. Aqu\u00ed podr\u00e9is encontrar tanto misas cat\u00f3licas como anglicanas, en ingl\u00e9s. Suelen tener los horarios en un tabl\u00f3n.\n\nSi quieres hacer una parada t\u00e9cnica, a medio camino entre esta parada y la siguiente encontrar\u00e9is el Ca\u00f1ahueca y el Piorno, t\u00edpicos lugares de \"tapeo\" entre la gente local.\n\nPara seguir, contin\u00faa esa calle a favor del tr\u00e1fico.",
      en: "To make up for that, this one was easier!\n\nThe Cruceiro de San Fiz is one of Santiago's most curious ones, because for almost two centuries it was known as the \"cursed cruceiro.\"\n\nAn inscription that looked like a curse\n\nOn the pedestal you can read an inscription from 1718, dedicated to a man named Manuel Joseph Ram\u00edrez de Arellano, who died a violent death.\n\nFor a long time it was read like this:\n\"...NO RUEGUEN A DIOS POR \u00c9L\" (\"...DO NOT pray to God for him\")\n\nImagine the impact. A cruceiro that seemed to explicitly ask that no one pray for the deceased. In a deeply religious city, that felt almost blasphemous.\n\nThe mystery had an explanation\n\nIn the late 19th century, the historian P\u00e9rez Constanti solved the riddle.\n\nThat \"NO\" wasn't the word \"no\" \u2014 it was the last letters of the surname ArellaNO. The inscription was meant to be read like this:\n\"...Ram\u00edrez de ArellaNO. Rueguen a Dios por \u00e9l.\" (\"...Ram\u00edrez de Arellano. Pray to God for him.\")\n\nA line break turned a request for prayer into a curse \u2014 you really do have to be careful with how you write things!\n\nOh wait, I realize I haven't told you what cruceiros actually are!\n\nCruceiros are probably the most characteristic feature of the Galician landscape, but they're often explained too simply as \"a stone cross.\" In reality, they're much more.\n\nMost were built between the 16th and 19th centuries, though some are older. They were usually placed at:\n\u2022 Crossroads.\n\u2022 Village entrances.\n\u2022 Church atriums.\n\u2022 Parish boundaries.\n\u2022 Places where a death occurred.\n\u2022 Pilgrimage routes.\n\nIn fact, the word cruceiro comes precisely from being located at an encrucijada (crossroads).\n\nChristianity, or something older?\n\nMany historians believe cruceiros Christianized places that already held symbolic importance before Christianity. Galicia had an enormous tradition tied to roads, springs, unusual stones, and territorial boundaries.\n\nThe Church placed crosses at many of these spots to fold them into the new faith.\n\nThey were \"crossing points\" between worlds\n\nIn the Galician popular imagination, crossroads were special, and sometimes dangerous, places. Spirits, the Santa Compa\u00f1a, or other supernatural beings were said to appear there.\n\nThe cruceiro acted as spiritual protection for travelers and villagers.\n\nThat's why many people crossed themselves when passing in front of one.\n\nCruceiros and death\n\nMany were linked to funeral processions.\n\nWhen a burial was heading to the cemetery, it was common to stop beside certain cruceiros to pray for the deceased.\n\nThat's why some have small platforms or steps around their base.\n\nTime for a bit of literature: one of Galicia's great writers, Castelao, published \"As cruces de pedra na Galiza\" in 1950, one of the most important works ever written about Galician cruceiros.\n\nWhat's fascinating is that Castelao didn't see them simply as religious monuments. To him they were a kind of Galician cultural DNA carved in stone. He said that to understand Galicia you had to study its cruceiros the way an archaeologist studies a temple or a necropolis.\n\nThe connection with Ireland\n\nCastelao was convinced that Galicia shared deep cultural roots with the so-called Atlantic Celtic nations, especially Ireland and Brittany.\n\nStudying the cruceiros, he noticed similarities with the Irish High Crosses, the great medieval stone crosses still standing in places like Monasterboice or Clonmacnoise.\n\nBut they're not the same\n\nIrish crosses tend to be:\n\u2022 Older (8th-12th centuries).\n\u2022 Monumental.\n\u2022 Decorated with biblical scenes.\n\nGalician cruceiros tend to be:\n\u2022 Generally more recent.\n\u2022 More closely tied to roads and villages.\n\u2022 More linked to popular religiosity.\n\nCastelao wasn't saying Galician cruceiros descended directly from the Irish ones. What he proposed was that both belonged to the same Atlantic tradition of turning stone and landscape into monuments.\n\nThe Atlantic united more than it divided\n\nToday we know that in the Middle Ages there were constant sea contacts between Galicia, Ireland, Brittany, Cornwall and northern Portugal.\n\nFor Castelao, the sea was a cultural highway.\n\nThat's why he found it fascinating that stone crosses dominating the landscape could appear both in a Galician village and at an Irish monastery.\n\nIf you're a practicing Anglican, the church crowning this square is \u2014 I believe \u2014 the only one with English-language worship and Anglican services available. Here you can find both Catholic and Anglican Mass in English. They usually post the schedule on a noticeboard.\n\nIf you'd like a technical stop, halfway between this location and the next you'll find O Ca\u00f1ahueca and O Piorno, typical spots for tapeo among locals.\n\nTo continue, follow that street in the direction of traffic."
    },
    rewardImage: "https://i.imgur.com/9uco7JH.jpeg"
  },
  {
    id: "reto-11",
    clueImage: "https://i.imgur.com/T0ONucP.jpeg",
    title: { es: "Facultade de Xeograf\u00eda e Historia (Colexio de Fonseca)", en: "Facultade de Xeograf\u00eda e Historia (Colexio de Fonseca)" },
    mapsQuery: "Colexio de Fonseca, Santiago de Compostela",
    lat: 42.88,
    lng: -8.5452,
    reward: {
      es: "La actual Facultade de Xeograf\u00eda e Historia tiene una peculiaridad que muchos estudiantes desconocen: no naci\u00f3 para ser una facultad.\n\nEl edificio es el antiguo Colexio de Fonseca, fundado en 1501 por el arzobispo Alonso III de Fonseca. De hecho, es el embri\u00f3n de la Universidad de Santiago. Durante siglos, si alguien dec\u00eda \"la Universidad\", se refer\u00eda b\u00e1sicamente a este edificio.\n\nAqu\u00ed empez\u00f3 la USC\n\nAntes de los campus de San Caetano, Sur o Norte, la universidad compostelana cab\u00eda pr\u00e1cticamente entre Fonseca, el Colegio de San Xerome y unas pocas dependencias m\u00e1s.\n\nPor eso, cuando entras en el claustro, est\u00e1s entrando en el lugar donde se formaron generaciones de juristas, te\u00f3logos, m\u00e9dicos y humanistas desde el Renacimiento.\n\nUn colegio para competir\n\nFonseca quer\u00eda que Santiago tuviese una instituci\u00f3n comparable a Salamanca o Alcal\u00e1. No era solo un proyecto educativo: era una declaraci\u00f3n de prestigio para Compostela.\n\nEn cierto modo, la Universidad fue otro instrumento para competir con otras grandes ciudades del reino.\n\nEl fantasma m\u00e1s famoso no est\u00e1 en la Catedral\n\nEn la capilla de Fonseca se conserva el sepulcro del propio Alonso de Fonseca.\n\nLa leyenda popular dec\u00eda que algunas noches el arzobispo abandonaba su tumba para recorrer el edificio y comprobar si los estudiantes estaban estudiando o perdiendo el tiempo. Es una de esas historias universitarias que han sobrevivido siglos.\n\nEl claustro es una joya silenciosa\n\nEl claustro renacentista es uno de los espacios m\u00e1s armoniosos de Santiago. A diferencia del barroco exuberante de San Marti\u00f1o Pinario, aqu\u00ed domina la proporci\u00f3n y el equilibrio.\n\nLa biblioteca que cambi\u00f3 Galicia\n\nDurante siglos, algunas de las colecciones bibliogr\u00e1ficas m\u00e1s importantes de Galicia estuvieron asociadas a Fonseca.\n\nLos estudiantes ven\u00edan de toda la regi\u00f3n porque aqu\u00ed pod\u00edan consultar obras imposibles de encontrar en otros lugares.\n\nEncima, es una sala espectacular. Si ten\u00e9is la suerte de encontrar la Facultad abierta, os recomiendo entrar a admirarla.\n\nNuestro siguiente objetivo est\u00e1 un poco m\u00e1s abajo en la calle.",
      en: "The current Facultade de Xeograf\u00eda e Historia has a quirk many students don't know about: it wasn't built to be a university faculty.\n\nThe building is the old Colexio de Fonseca, founded in 1501 by archbishop Alonso III de Fonseca. In fact, it's the embryo of the University of Santiago. For centuries, if someone said \"the University,\" they basically meant this building.\n\nThis is where the USC began\n\nBefore the San Caetano, Sur or Norte campuses existed, Compostela's university fit almost entirely between Fonseca, the Colegio de San Xerome, and a few other small buildings.\n\nThat's why, when you walk into the cloister, you're stepping into the place where generations of jurists, theologians, doctors and humanists trained since the Renaissance.\n\nA college built to compete\n\nFonseca wanted Santiago to have an institution comparable to Salamanca or Alcal\u00e1. It wasn't just an educational project \u2014 it was a statement of prestige for Compostela.\n\nIn a way, the University was another tool used to compete with other great cities of the kingdom.\n\nThe most famous ghost in town isn't in the Cathedral\n\nIn the Fonseca chapel you'll find the tomb of Alonso de Fonseca himself.\n\nPopular legend said that on some nights the archbishop would leave his tomb to walk through the building and check whether students were studying or wasting their time. It's one of those university stories that has survived for centuries.\n\nThe cloister is a quiet gem\n\nThe Renaissance cloister is one of the most harmonious spaces in Santiago. Unlike the exuberant baroque of San Marti\u00f1o Pinario, here proportion and balance dominate.\n\nThe library that changed Galicia\n\nFor centuries, some of Galicia's most important book collections were linked to Fonseca.\n\nStudents came from all over the region because here they could consult works impossible to find anywhere else.\n\nOn top of that, it's a spectacular room. If you're lucky enough to find the Faculty open, I'd recommend stepping in to admire it.\n\nOur next stop is a bit further down the street."
    },
    rewardImage: "https://i.imgur.com/SYTfXHM.jpeg"
  },
  {
    id: "reto-12",
    clueImage: "https://i.imgur.com/y8sOPMI.jpeg",
    title: { es: "Arco de Mazarelos", en: "Arco de Mazarelos" },
    mapsQuery: "42.8781092,-8.5422634",
    lat: 42.8781092,
    lng: -8.5422634,
    reward: {
      es: "Arco de Mazarelos\n\nEs la \u00fanica puerta que se conserva de la muralla medieval compostelana. La muralla ten\u00eda unos dos kil\u00f3metros de per\u00edmetro y siete accesos principales, pero fue derribada en los siglos XVIII y XIX cuando dej\u00f3 de tener utilidad defensiva. Mazarelos sobrevivi\u00f3 casi por casualidad: parte del arco hab\u00eda quedado integrada en propiedades privadas y eso dificult\u00f3 su demolici\u00f3n.\n\nCada puerta ten\u00eda una funci\u00f3n econ\u00f3mica. Por Mazarelos entraban los vinos de O Ribeiro procedentes de Ourense y tambi\u00e9n los cereales llegados desde la Meseta por la V\u00eda de la Plata. El C\u00f3dice Calixtino ya menciona esta puerta como el acceso del vino a Compostela. As\u00ed que, si hoy cruzas el arco, est\u00e1s siguiendo el mismo camino que durante siglos recorrieron los arrieros con sus cubas.\n\nLa mayor\u00eda solo observa el arco, pero el detalle interesante est\u00e1 a la derecha (mirando hacia la ciudad). All\u00ed se conservan los cimientos del antiguo torre\u00f3n defensivo que proteg\u00eda la entrada. Es uno de los pocos restos visibles que permiten imaginar el grosor y la estructura de la muralla.\n\nA vuestro lado, en la Plaza da Universidade, ten\u00e9is la estatua de Eugenio Montero R\u00edos (1832-1914), compostelano, catedr\u00e1tico de Derecho, ministro y presidente del Gobierno durante unos meses en 1905. Tambi\u00e9n presidi\u00f3 la delegaci\u00f3n espa\u00f1ola que negoci\u00f3 el Tratado de Par\u00eds de 1898, tras la guerra con Estados Unidos.\n\nComo curiosidad, este no es el emplazamiento original de la estatua. Cuando se inaugur\u00f3 en 1916, la estatua estaba en el centro de la Praza do Obradoiro. La idea gener\u00f3 bastante pol\u00e9mica: muchos compostelanos consideraban que un monumento civil romp\u00eda la armon\u00eda de la plaza de la Catedral. En 1928 fue trasladada a Mazarelos, donde permanece desde entonces.\n\nPara la siguiente, ten\u00e9is dos alternativas. El itinerario m\u00e1s r\u00e1pido va a trav\u00e9s de la calle Cardeal Pay\u00e1 (mirando al arco, desde la plaza, est\u00e1 a vuestra derecha), en d\u00f3nde podr\u00e9is tomar algo en el Pub Irland\u00e9s A Novena Porta, si ven\u00eds de tarde, para luego continuar por el callej\u00f3n cuesta abajo que nace al final de la calle (R\u00faa de Tras Salom\u00e9) y que os llevar\u00e1 a la R\u00faa Nova. La otra opci\u00f3n es aprovechar y pasear la R\u00faa das Orfas, en lugar de bajar por el callej\u00f3n, y os saltar\u00e9is dos im\u00e1genes, aunque siempre podr\u00e9is visitarlas adentr\u00e1ndoos en la calle R\u00faa Nova, donde encontrar\u00e9is la siguiente imagen (el kiosko).",
      en: "Arco de Mazarelos\n\nIt's the only surviving gate of Compostela's medieval city wall. The wall was about two kilometers around, with seven main gates, but it was torn down in the 18th and 19th centuries once it stopped serving any defensive purpose. Mazarelos survived almost by accident: part of the arch had ended up built into private properties, which made it harder to demolish.\n\nEach gate had an economic role. Wine from O Ribeiro, coming from Ourense, entered through Mazarelos, as did grain arriving from the Meseta along the V\u00eda de la Plata. The Codex Calixtinus already mentions this gate as the entry point for wine into Compostela. So if you walk through the arch today, you're following the same route that muleteers and their wine casks took for centuries.\n\nMost people just look at the arch, but the interesting detail is on the right (facing the city). There you can still see the foundations of the old defensive tower that protected the entrance. It's one of the few visible remains that let you picture the thickness and structure of the wall.\n\nRight next to you, in Praza da Universidade, stands the statue of Eugenio Montero R\u00edos (1832-1914), a Compostela native, law professor, minister, and briefly prime minister in 1905. He also led the Spanish delegation that negotiated the 1898 Treaty of Paris, after the war with the United States.\n\nAs a fun fact, this isn't the statue's original spot. When it was unveiled in 1916, it stood in the middle of Praza do Obradoiro. The idea caused quite a controversy: many locals felt a civic monument broke the harmony of the Cathedral square. In 1928 it was moved to Mazarelos, where it's remained ever since.\n\nFor the next stop, you have two options. The fastest route goes along Cardeal Pay\u00e1 street (facing the arch from the square, it's on your right), where you can grab something at the Irish pub A Novena Porta if you're coming through in the afternoon, then continue down the alley at the end of the street (R\u00faa de Tras Salom\u00e9), which will take you to R\u00faa Nova. The other option is to walk along R\u00faa das Orfas instead of going down the alley \u2014 that will skip two of the photos, though you can still visit them later by heading into R\u00faa Nova, where you'll find the next photo (the kiosk)."
    },
    rewardImage: "https://i.imgur.com/u6Mrbxt.jpeg"
  },
  {
    id: "reto-13",
    clueImage: "https://i.imgur.com/XgY565Y.jpeg",
    title: { es: "Igrexa de Santa Mar\u00eda Salom\u00e9", en: "Igrexa de Santa Mar\u00eda Salom\u00e9" },
    mapsQuery: "42.8783676,-8.5432254",
    lat: 42.8783676,
    lng: -8.5432254,
    reward: {
      es: "La Igrexa de Santa Mar\u00eda Salom\u00e9 es una de las iglesias m\u00e1s discretas de Santiago y, al mismo tiempo, una de las m\u00e1s singulares.\n\nSu principal singularidad es que est\u00e1 dedicada a Santa Mar\u00eda Salom\u00e9, considerada por la tradici\u00f3n cristiana la madre de los ap\u00f3stoles Santiago el Mayor y San Juan Evangelista.\n\nNo es un detalle menor: es la \u00fanica iglesia parroquial de Espa\u00f1a dedicada a ella. En una ciudad construida alrededor del culto al Ap\u00f3stol, resulta l\u00f3gico que tambi\u00e9n acabara teniendo un templo dedicado a su madre.\n\nEl detalle m\u00e1s fascinante est\u00e1 en la portada.\n\nA ambos lados de la puerta hay un grupo escult\u00f3rico de la Anunciaci\u00f3n. Si observas con atenci\u00f3n la figura de Mar\u00eda, ver\u00e1s que aparece embarazada, con el vientre claramente abultado.\n\nEs una representaci\u00f3n muy poco frecuente en el arte medieval.\n\nLa portada rom\u00e1nica del siglo XII se conserva extraordinariamente bien por una raz\u00f3n muy pr\u00e1ctica: el p\u00f3rtico del siglo XVI la protegi\u00f3 durante quinientos a\u00f1os de la lluvia compostelana. Por esa raz\u00f3n, si te acercas y te fijas con cuidado, podr\u00e1s ver todav\u00eda policrom\u00edas en la fachada.\n\nHay una curiosidad que encanta a los gu\u00edas.\n\nEn una de las esculturas del p\u00f3rtico, el desgaste de la piedra crea la ilusi\u00f3n de que uno de los \u00e1ngeles lleva gafas. Evidentemente no las lleva; es un efecto producido por la erosi\u00f3n y por antiguas restauraciones. Pero, una vez que alguien te lo se\u00f1ala, cuesta dejar de verlo.\n\nLa torre tiene un parentesco\n\nSi la espada\u00f1a te resulta familiar, no es casualidad. La torre barroca del siglo XVIII sigue un modelo que ya hab\u00eda tenido mucho \u00e9xito en Santiago, especialmente el de San Fiz de Solovio (que es la iglesia que ofrece culto en ingl\u00e9s que ya hemos visitado). Es un buen ejemplo de c\u00f3mo los arquitectos compostelanos reutilizaban soluciones que funcionaban bien tanto est\u00e9tica como t\u00e9cnicamente. Cuando est\u00e9s bajo el p\u00f3rtico, no mires solo al frente. Levanta la vista hacia la clave de la arquivolta: all\u00ed aparece la Virgen de la Leche, amamantando al Ni\u00f1o Jes\u00fas. Es una iconograf\u00eda muy humana, muy distinta de las im\u00e1genes solemnes y regias que predominar\u00e1n en siglos posteriores.\n\nSi quieres descansar, enfrente de la Iglesia est\u00e1 el Caf\u00e9 Mori (la puerta conserva el antiguo cartel del Rhin), caf\u00e9 de especialidad y ambiente tranquilo.\n\nAhora que estamos a mitad de camino, te propongo tambi\u00e9n que te fijes en las paredes alrededor de las puertas. Ver\u00e1s un mont\u00f3n de s\u00edmbolos tallados en piedra.\n\nNo est\u00e1n por azar, indican a qu\u00e9 instituci\u00f3n de la ciudad pertenec\u00eda cada casa.\n\nDurante siglos, gran parte de las casas de Santiago no pertenec\u00edan a particulares, sino a monasterios, conventos, cabildos o colegios universitarios. Para identificar la propiedad se colocaban escudos o marcas en las fachadas.\n\nLos m\u00e1s habituales son:\n\nCatedral de Santiago (Cabildo)\n\u2022 Escudo con la urna apost\u00f3lica.\n\u2022 Conchas de vieira.\n\u2022 Cruz de Santiago.\n\u2022 A veces las letras S.A. (Santiago Ap\u00f3stol).\nIndican propiedades administradas por el Cabildo catedralicio.\n\nSan Marti\u00f1o Pinario\n\u2022 Imagen o b\u00e1culo de San Benito.\n\u2022 Escudo benedictino.\n\u2022 Mitra y b\u00e1culo combinados.\nMuy frecuentes en el entorno de Acibecher\u00eda y San Marti\u00f1o.\n\nArzobispado\n\u2022 Escudos con sombrero episcopal o arzobispal.\n\u2022 Borlas colgantes a ambos lados.\n\u2022 Mitra, b\u00e1culo y cruz procesional.\nIdentificaban propiedades dependientes directamente del arzobispo.\n\nSan Paio de Antealtares\n\u2022 A menudo aparecen referencias a la orden benedictina femenina.\n\u2022 Escudos conventuales con cruces y elementos marianos.\n\nUniversidad\n\u2022 Escudo real con referencias a Fonseca.\n\u2022 A veces aparecen las armas de los Fonseca.\nSobre todo en edificios pr\u00f3ximos a Fonseca y la antigua universidad.\n\nHospital Real\n\u2022 Yugo y flechas de los Reyes Cat\u00f3licos.\n\u2022 \u00c1guila de San Juan.\n\u2022 Escudos reales de Castilla y Arag\u00f3n.\nRelacionados con propiedades del Hospital de los Reyes Cat\u00f3licos.\n\nOrden de Santiago\n\u2022 La famosa cruz roja en forma de espada.\n\nLa siguiente est\u00e1 REALMENTE cerca.",
      en: "The Igrexa de Santa Mar\u00eda Salom\u00e9 is one of Santiago's most discreet churches, and at the same time one of its most singular.\n\nIts main quirk is that it's dedicated to Saint Mary Salome, considered by Christian tradition to be the mother of the apostles James the Greater and John the Evangelist.\n\nThat's no small detail: it's the only parish church in Spain dedicated to her. In a city built around the cult of the Apostle, it makes sense that it would eventually also have a church dedicated to his mother.\n\nThe most fascinating detail is on the doorway.\n\nOn either side of the door there's a sculptural group of the Annunciation. If you look closely at the figure of Mary, you'll notice she appears pregnant, with a clearly rounded belly.\n\nIt's a very unusual depiction in medieval art.\n\nThe 12th-century Romanesque doorway has survived remarkably well for a very practical reason: the 16th-century porch protected it for five hundred years from Compostela's rain. Because of that, if you look closely, you can still see traces of polychrome paint on the fa\u00e7ade.\n\nThere's a detail guides love.\n\nOn one of the porch's sculptures, the wear on the stone creates the illusion that one of the angels is wearing glasses. Obviously it isn't \u2014 it's an effect caused by erosion and old restorations. But once someone points it out to you, it's hard to unsee.\n\nThe tower has a family resemblance\n\nIf the bell-gable looks familiar, that's no coincidence. The 18th-century baroque tower follows a model that had already proven very successful in Santiago, especially at San Fiz de Solovio (the church with English-language worship we've already visited). It's a good example of how Compostela's architects reused solutions that worked well both aesthetically and technically. When you're under the porch, don't just look straight ahead \u2014 look up at the keystone of the archivolt: there you'll see the Virgin of the Milk, nursing the Christ child. It's a very human piece of iconography, very different from the solemn, regal images that would dominate later centuries.\n\nIf you feel like a break, across from the church is Caf\u00e9 Mori (the door still keeps the old \"Rhin\" sign), a specialty coffee shop with a calm atmosphere.\n\nNow that we're halfway through, I'd also suggest looking at the walls around the doorways. You'll see a bunch of symbols carved in stone.\n\nThey're not random \u2014 they indicate which institution in the city each house belonged to.\n\nFor centuries, many houses in Santiago didn't belong to private individuals, but to monasteries, convents, cathedral chapters or university colleges. Shields or marks were placed on the fa\u00e7ades to identify ownership.\n\nThe most common are:\n\nCathedral of Santiago (Cabildo)\n\u2022 A shield with the apostolic urn.\n\u2022 Scallop shells.\n\u2022 Cross of Santiago.\n\u2022 Sometimes the letters S.A. (Santiago Ap\u00f3stol).\nThese mark properties managed by the cathedral chapter.\n\nSan Marti\u00f1o Pinario\n\u2022 An image or staff of Saint Benedict.\n\u2022 A Benedictine coat of arms.\n\u2022 A combined miter and staff.\nVery common around Acibecher\u00eda and San Marti\u00f1o.\n\nArchbishopric\n\u2022 Shields with an episcopal or archiepiscopal hat.\n\u2022 Hanging tassels on both sides.\n\u2022 A miter, staff and processional cross.\nThese identified properties directly dependent on the archbishop.\n\nSan Paio de Antealtares\n\u2022 Often references to the female Benedictine order.\n\u2022 Convent shields with crosses and Marian elements.\n\nUniversity\n\u2022 A royal shield with references to Fonseca.\n\u2022 Sometimes the Fonseca family's coat of arms.\nMostly on buildings near Fonseca and the old university.\n\nHospital Real\n\u2022 The yoke and arrows of the Catholic Monarchs.\n\u2022 The eagle of Saint John.\n\u2022 Royal shields of Castile and Arag\u00f3n.\nLinked to properties of the Hospital de los Reyes Cat\u00f3licos.\n\nOrder of Santiago\n\u2022 The famous red cross shaped like a sword.\n\nThe next stop is REALLY close by."
    },
    rewardImage: "https://i.imgur.com/e91Cdvr.jpeg"
  },
  {
    id: "reto-14",
    clueImage: "https://i.imgur.com/NNHiRSn.jpeg",
    title: { es: "Casas de R\u00faa Nova, 29 y 31", en: "R\u00faa Nova houses, no. 29 and 31" },
    mapsQuery: "42.8784599,-8.5439919",
    lat: 42.8784599,
    lng: -8.5439919,
    reward: {
      es: "Estas dos casas, en los n\u00fameros 29 y 31 de la R\u00faa Nova, junto a la iglesia de Santa Mar\u00eda Salom\u00e9, est\u00e1n consideradas las viviendas civiles m\u00e1s antiguas conservadas de Santiago de Compostela. Datan del siglo XIII, por lo que son pr\u00e1cticamente contempor\u00e1neas de las \u00faltimas fases de construcci\u00f3n de la Catedral.\n\nPor desgracia, acaban de pasar por una restauraci\u00f3n que les ha quitado gran parte del encanto. Sin embargo, todav\u00eda quedan detalles que se pueden observar.\n\nLo curioso es que no fueron palacios ni residencias nobiliarias, sino viviendas urbanas relativamente modestas, vinculadas a la antigua rectoral de Santa Mar\u00eda Salom\u00e9. Eso las hace a\u00fan m\u00e1s valiosas: muestran c\u00f3mo era la arquitectura dom\u00e9stica de la Compostela medieval.\n\nCuando pensamos en Santiago imaginamos fachadas de piedra vista. Sin embargo, estas casas recuerdan una realidad distinta: muchas viviendas medievales estaban enfoscadas y encaladas, con la piedra oculta bajo capas de cal. La imagen gris del casco hist\u00f3rico es, en buena medida, fruto de restauraciones de los siglos XIX y XX.\n\nAunque hoy solo vemos la fachada, originalmente combinaban muros de mamposter\u00eda, entramados de madera y soportales. Eran edificios mucho m\u00e1s ligeros de lo que solemos imaginar, parecidos a muchas casas medievales conservadas en ciudades francesas o inglesas.\n\nSi te fijas, las ventanas son peque\u00f1as y est\u00e1n colocadas de forma irregular. No responden a un criterio est\u00e9tico moderno, sino a las necesidades de una vivienda medieval: conservar el calor, mantener la estabilidad del muro y aprovechar al m\u00e1ximo la luz.\n\nPara continuar, avanza por la R\u00faa Nova. En ella encontrar\u00e1s el Pazo dos Irlandeses (que el pobre lleva tantos a\u00f1os de abandono que no he querido incluirlo en esta lista, aunque es f\u00e1cil de ver, bastante impresionante, lo tendr\u00e9is a mano derecha al avanzar) y podr\u00e9is parar en La Tita a probar su famosa tortilla espa\u00f1ola, si no est\u00e1 lleno el local.",
      en: "These two houses, at numbers 29 and 31 of R\u00faa Nova, next to the church of Santa Mar\u00eda Salom\u00e9, are considered the oldest surviving civil homes in Santiago de Compostela. They date back to the 13th century, making them practically contemporary with the final construction phases of the Cathedral.\n\nUnfortunately, they've just gone through a restoration that stripped away much of their charm. Still, some details can still be made out.\n\nThe curious thing is that they weren't palaces or noble residences, but relatively modest urban homes, linked to the old rectory of Santa Mar\u00eda Salom\u00e9. That makes them even more valuable: they show what everyday domestic architecture looked like in medieval Compostela.\n\nWhen we picture Santiago, we imagine exposed stone fa\u00e7ades. Yet these houses are a reminder of a different reality: many medieval homes were plastered and whitewashed, with the stone hidden under layers of lime. The old town's grey look today is, in large part, the result of 19th- and 20th-century restorations.\n\nAlthough today we only see the fa\u00e7ade, they originally combined masonry walls, timber framing and arcaded porches. They were much lighter buildings than we tend to imagine, similar to many medieval houses preserved in French or English cities.\n\nIf you look closely, the windows are small and irregularly placed. That's not a modern aesthetic choice, but the needs of a medieval home: keeping in heat, maintaining the wall's stability, and making the most of the light.\n\nTo continue, head along R\u00faa Nova. There you'll find the Pazo dos Irlandeses (which, after so many years of neglect, I didn't want to include in this list, though it's easy to spot and quite impressive \u2014 you'll have it on your right as you walk along), and you can stop at La Tita to try their famous Spanish tortilla, if it's not too full."
    },
    rewardImage: "https://i.imgur.com/9o99LON.jpeg"
  },
  {
    id: "reto-15",
    clueImage: "https://i.imgur.com/WlSmDRb.jpeg",
    title: { es: "Kiosko do Toural", en: "Kiosko do Toural" },
    mapsQuery: "42.8777141,-8.5444559",
    lat: 42.8777141,
    lng: -8.5444559,
    reward: {
      es: "Vaaaaale, no es el sitio m\u00e1s llamativo ni espectacular de la ciudad, pero es muy \u00fatil para orientarse.\n\nAdem\u00e1s, al lado podr\u00e9is ver un callej\u00f3n estrecho que visitaremos m\u00e1s adelante, por el otro extremo del mismo.\n\nAunque muchos lo llaman simplemente el quiosco de la R\u00faa Nova, en realidad es el Quiosco do Toural, porque se encuentra justo en el Cant\u00f3n do Toural, en la entrada de la calle.\n\nEs uno de los elementos urbanos m\u00e1s queridos de Santiago, no por su arquitectura \u2014aunque es un bonito ejemplo de quiosco modernista de hierro y cristal\u2014, sino por lo que represent\u00f3 para varias generaciones.\n\nAbierto desde 1910, durante m\u00e1s de un siglo fue mucho m\u00e1s que un punto de venta de prensa. Era un lugar donde se comentaban las noticias, se saludaba a los vecinos y comenzaba el d\u00eda. En una ciudad universitaria y administrativa como Santiago, era habitual ver a profesores, abogados, m\u00e9dicos o funcionarios comprando el peri\u00f3dico antes de entrar al trabajo.\n\nCerr\u00f3 por jubilaci\u00f3n hace unos a\u00f1os, y el ayuntamiento busca formas de conservarlo.\n\nPara seguir, bajad por la calle con los bonitos arcos. En esos arcos encontrar\u00e9is la tienda de golosinas Pecados de Compostela, muy llamativa, por si quer\u00e9is endulzar vuestro paseo.",
      en: "Okaaay, it's not the most eye-catching or spectacular spot in the city, but it's very useful for getting your bearings.\n\nAlso, right next to it you'll see a narrow alley we'll visit later, from the other end.\n\nEven though many people just call it the R\u00faa Nova kiosk, it's actually the Quiosco do Toural, because it stands right at the Cant\u00f3n do Toural, at the entrance to the street.\n\nIt's one of the most beloved urban fixtures in Santiago \u2014 not so much for its architecture, though it is a lovely example of an iron-and-glass modernist kiosk, but for what it meant to several generations.\n\nOpen since 1910, for over a century it was much more than a place to buy the newspaper. It was a spot where people discussed the news, greeted their neighbors, and started the day. In a university and administrative city like Santiago, it was common to see professors, lawyers, doctors or civil servants buying the paper before heading to work.\n\nIt closed a few years ago when its owner retired, and the city council is looking for ways to preserve it.\n\nTo continue, head down the street with the pretty arches. Under those arches you'll find the Pecados de Compostela candy shop, quite eye-catching, in case you want to sweeten your walk."
    },
    rewardImage: "https://i.imgur.com/LNYMu4f.jpeg"
  },
  {
    id: "reto-16",
    clueImage: "https://i.imgur.com/ruZYTuH.jpeg",
    title: { es: "Praza do Toural", en: "Praza do Toural" },
    mapsQuery: "Praza do Toural, Santiago de Compostela",
    lat: 42.8779,
    lng: -8.5452,
    reward: {
      es: "El nombre procede de \"touro\" (toro). Aqu\u00ed se celebraba el mercado de ganado mayor, especialmente de bueyes y toros, antes de que la ciudad creciera. En la Edad Media este lugar estaba junto al l\u00edmite de la muralla y era perfecto para comerciar sin congestionar las calles del interior.\n\nLa fuente actual, inaugurada en 1822, no era un elemento ornamental. Era uno de los principales puntos de abastecimiento de agua para vecinos, comerciantes y animales. Antes de que existiera agua corriente, una plaza importante necesitaba una fuente importante.\n\nEl edificio que domina la plaza es el Pazo de Benda\u00f1a, obra de Clemente Fern\u00e1ndez Sarela en el siglo XVIII.\n\nPero casi nadie mira hacia arriba.\n\nEn lo alto de la fachada hay una figura de Atlas sosteniendo la b\u00f3veda celeste. Es un motivo casi \u00fanico en la arquitectura civil compostelana. Mientras la mayor\u00eda de los pazos rematan sus fachadas con escudos o pin\u00e1culos, aqu\u00ed un personaje de la mitolog\u00eda griega carga literalmente con el mundo. Hoy alberga la Fundaci\u00f3n y Museo Eugenio Granell.\n\nEn Santiago se dice que cuando una persona virgen y pura pase por debajo, Atlas dejar\u00e1 caer la bola del mundo. Ah\u00ed sigue el pobre.\n\nEn uno de los laterales encontrar\u00e1s una enorme galer\u00eda acristalada.\n\nLas galer\u00edas son t\u00edpicas de Galicia, pero esta tiene un valor especial porque muestra c\u00f3mo la arquitectura tradicional aprovechaba el efecto invernadero: en invierno acumulaba calor y en verano permit\u00eda ventilar la vivienda abriendo solo los peque\u00f1os respiraderos laterales. No era un adorno; era una soluci\u00f3n clim\u00e1tica muy ingeniosa.\n\nSi comparas las fachadas de la plaza, notar\u00e1s que pertenecen a \u00e9pocas distintas, pero mantienen una sorprendente armon\u00eda. No es casualidad: Santiago fue creciendo muy despacio y las nuevas construcciones se adaptaban a la escala de las antiguas. Por eso el Toural no parece una plaza dise\u00f1ada de una vez, sino una plaza que ha ido madurando durante siglos.\n\nLos compostelanos suelen decir que el Toural es el verdadero kil\u00f3metro cero de Santiago. No porque exista una placa, sino porque, si quedas con alguien en el casco hist\u00f3rico y no concret\u00e1is m\u00e1s, durante generaciones bastaba decir: \"v\u00e9monos no Toural\".\n\nPara seguir, dirig\u00edos cuesta abajo hasta el final del casco antiguo.",
      en: "The name comes from \"touro\" (bull). This is where the market for large livestock was held, especially oxen and bulls, before the city grew. In the Middle Ages this spot sat right at the edge of the city wall, perfect for trading without clogging up the streets inside.\n\nThe current fountain, unveiled in 1822, wasn't just decorative. It was one of the main water supply points for residents, merchants and animals. Before running water existed, an important square needed an important fountain.\n\nThe building overlooking the square is the Pazo de Benda\u00f1a, built by Clemente Fern\u00e1ndez Sarela in the 18th century.\n\nBut almost nobody looks up.\n\nAt the top of the fa\u00e7ade there's a figure of Atlas holding up the celestial sphere. It's an almost unique motif in Compostela's civic architecture. While most pazos top their fa\u00e7ades with coats of arms or pinnacles, here a figure from Greek mythology literally carries the weight of the world. Today the building houses the Eugenio Granell Foundation and Museum.\n\nIn Santiago it's said that if a pure, virgin person walks underneath, Atlas will drop the globe. He's still holding on, poor guy.\n\nOn one of the sides you'll find a huge glazed gallery.\n\nGaler\u00edas (glazed balconies) are typical of Galicia, but this one is especially valuable because it shows how traditional architecture made use of the greenhouse effect: it stored heat in winter and allowed ventilation in summer by opening only the small side vents. It wasn't decoration \u2014 it was a very clever climate solution.\n\nIf you compare the fa\u00e7ades around the square, you'll notice they belong to different periods, yet they keep a surprising harmony. That's no accident: Santiago grew very slowly, and new buildings adapted to the scale of the older ones. That's why the Toural doesn't feel like a square designed all at once, but one that has matured over centuries.\n\nLocals often say the Toural is Santiago's true kilometer zero. Not because there's a plaque, but because, for generations, if you made plans with someone in the old town without specifying more, it was enough to say: \"let's meet at the Toural.\"\n\nTo continue, head downhill to the far end of the old town."
    },
    rewardImage: "https://i.imgur.com/qdF4E07.jpeg"
  },
  {
    id: "reto-17",
    clueImage: "https://i.imgur.com/Ror8gKo.jpeg",
    title: { es: "As D\u00faas Mar\u00edas", en: "As D\u00faas Mar\u00edas" },
    mapsQuery: "42.8777154,-8.5460303",
    lat: 42.8777154,
    lng: -8.5460303,
    reward: {
      es: "Maruxa y Coralia Fandi\u00f1o Ricart, \"As D\u00faas Mar\u00edas\"\n\nAunque la gente suele banalizar mucho su historia, son dos de las personas de Santiago que m\u00e1s homenaje merecen. Ellas eran dos hermanas nacidas en una familia obrera de Santiago. Sus hermanos estaban vinculados al movimiento anarcosindicalista durante la Segunda Rep\u00fablica.\n\nTras el golpe de 1936, la familia sufri\u00f3 una persecuci\u00f3n brutal. Algunos hermanos huyeron, otros fueron encarcelados y las hermanas quedaron marcadas para siempre.\n\nMaruxa y Coralia no fueron encarceladas ni fusiladas, pero sufrieron algo muy habitual en la posguerra: el acoso constante.\n\nFueron detenidas, interrogadas, humilladas p\u00fablicamente y sometidas a vigilancia durante a\u00f1os para intentar obtener informaci\u00f3n sobre sus hermanos.\n\nMuchos historiadores consideran que el deterioro psicol\u00f3gico que sufrieron est\u00e1 directamente relacionado con esa persecuci\u00f3n.\n\nA partir de los a\u00f1os 50 comenzaron a recorrer Santiago todos los d\u00edas.\n\nVest\u00edan colores llamativos, se maquillaban de forma extravagante y paseaban por la Alameda exactamente a las dos de la tarde.\n\nPor eso muchos compostelanos las conoc\u00edan como \"Las Dos en Punto\".\n\nDurante a\u00f1os fueron objeto de burlas.\n\nSin embargo, hoy mucha gente interpreta su comportamiento de otra manera: como una forma de resistencia personal.\n\nLas Mar\u00edas adoraban el ambiente estudiantil.\n\nSol\u00edan acercarse a los universitarios, conversar, pedir un cigarrillo o lanzar alg\u00fan piropo. Por eso siguen estando muy presentes en la memoria colectiva de varias generaciones de estudiantes compostelanos.\n\nSi observas fotograf\u00edas antiguas, ver\u00e1s que la estatua reproduce su forma caracter\u00edstica de caminar: juntas, ligeramente inclinadas hacia delante y conversando entre ellas.\n\nDurante d\u00e9cadas fueron vistas como dos locas. Hoy se entienden como un s\u00edmbolo de memoria, dignidad y supervivencia.\n\nPor eso, cuando alguien se sienta a hacerse una foto entre ellas en la Alameda, en realidad est\u00e1 haci\u00e9ndose una foto con una parte de la historia menos visible de Santiago: la de quienes sobrevivieron a la represi\u00f3n sin dejar nunca de recorrer las calles de su ciudad.",
      en: "Maruxa and Coralia Fandi\u00f1o Ricart, \"As D\u00faas Mar\u00edas\"\n\nEven though people often trivialize their story, they're two of the people from Santiago who deserve the most tribute. They were two sisters born into a working-class family in Santiago. Their brothers were linked to the anarcho-syndicalist movement during the Second Republic.\n\nAfter the 1936 coup, the family suffered brutal persecution. Some brothers fled, others were imprisoned, and the sisters were marked forever.\n\nMaruxa and Coralia weren't imprisoned or executed, but they suffered something very common in the postwar years: constant harassment.\n\nThey were detained, interrogated, publicly humiliated, and kept under surveillance for years in an attempt to get information about their brothers.\n\nMany historians believe the psychological toll they suffered is directly linked to that persecution.\n\nStarting in the 1950s, they began walking through Santiago every day.\n\nThey wore bright colors, wore extravagant makeup, and strolled through the Alameda at exactly two in the afternoon.\n\nThat's why many locals knew them as \"Las Dos en Punto\" (\"The Two O'Clock Ladies\").\n\nFor years they were the target of mockery.\n\nToday, though, many people read their behavior differently: as a form of personal resistance.\n\nThe Mar\u00edas adored the student atmosphere.\n\nThey liked approaching university students, chatting, asking for a cigarette, or tossing out a flirtatious remark. That's why they remain very present in the collective memory of several generations of Compostela students.\n\nIf you look at old photographs, you'll see that the statue reproduces their characteristic way of walking: close together, leaning slightly forward, talking to each other.\n\nFor decades they were seen as two madwomen. Today they're understood as a symbol of memory, dignity, and survival.\n\nSo when someone sits down to take a photo between them in the Alameda, they're actually taking a photo with a less visible part of Santiago's history: that of people who survived repression without ever stopping their walks through their city's streets."
    },
    rewardImage: "https://i.imgur.com/vHy0xog.jpeg"
  },
  {
    id: "reto-18",
    clueImage: "https://i.imgur.com/Stvxesj.jpeg",
    title: { es: "R\u00faa do Vilar \u2014 ventanas de vigilancia", en: "R\u00faa do Vilar \u2014 watch windows" },
    mapsQuery: "42.8778611,-8.5454139",
    lat: 42.8778611,
    lng: -8.5454139,
    reward: {
      es: "Ring! Antes de Ring!\n\nAhora somos todos muy modernos, con nuestros videoporteros conectados al tel\u00e9fono para poder ver c\u00f3mo el repartidor se va con nuestro paquete mientras pone \"ausente\" en la app; pero en la Santiago medieval esto ya exist\u00eda. Estas ventanitas que encontrar\u00e9is en muchos soportales de las calles con arcos, como esta R\u00faa do Vilar, serv\u00edan para que las criadas controlaran qui\u00e9n llegaba, los comerciantes vigilaran sus tiendas y m\u00e1s de un estudiante compostelano supiera que alguien lo estaba observando sin que \u00e9l pudiera ver a quien miraba.\n\nAl estar la puerta bajo los p\u00f3rticos, si alguien llamaba ser\u00eda imposible saber qui\u00e9n era, y hacerle asomarse a la habitual lluvia del invierno, especialmente en un tiempo en el que secar la ropa era... dif\u00edcil, no sonaba como una buena opci\u00f3n; por lo que estos ventanucos hac\u00edan las veces de videoportero al mismo tiempo que te permit\u00edan arrojar la llave por ellos para que el visitante pudiera entrar.\n\nCuidado, la siguiente imagen est\u00e1 cerca, \u00a1muy cerca!",
      en: "Ring! Before Ring doorbells existed\n\nWe're all very modern now, with video doorbells linked to our phones so we can watch the delivery driver leave with our package while the app shows us as \"away\"; but medieval Santiago already had something like it. These little windows you'll find in many of the arcaded doorways along streets like R\u00faa do Vilar let servants keep an eye on who was arriving, shopkeepers watch over their stores, and more than one Compostela student learn that someone was watching him without him being able to see who was looking.\n\nSince the door sat under the porticoes, if someone knocked it would be impossible to know who it was, and making them step out into the usual winter rain \u2014 especially at a time when drying clothes was... difficult \u2014 didn't sound like a good option. So these little windows worked as a kind of video doorbell, while also letting you drop the key through so the visitor could let themselves in.\n\nCareful, the next photo is close, very close!"
    },
    rewardImage: "https://i.imgur.com/nOs7crt.jpeg"
  },
  {
    id: "reto-19",
    clueImage: "https://i.imgur.com/ytUTErs.jpeg",
    title: { es: "Calella de Entrerr\u00faas", en: "Calella de Entrerr\u00faas" },
    mapsQuery: "42.8780633,-8.5448648",
    lat: 42.8780633,
    lng: -8.5448648,
    reward: {
      es: "Est\u00e1s ante una de las calles m\u00e1s estrechas de Santiago. En realidad, el paso m\u00e1s estrecho corresponder\u00eda a la R\u00faa da Oliveira (70cm), pero es s\u00f3lo en un punto y se ensancha enormemente. Sin embargo, este alargado callej\u00f3n (90 cm en su parte m\u00e1s estrecha) se estira durante varios metros, hasta dar a una peque\u00f1a plaza en la que hasta no hace mucho tiempo se manten\u00eda una herrer\u00eda tradicional, y vuelve como callej\u00f3n hasta la R\u00faa Nova que hemos atravesado hace un rato.\n\nMira hacia arriba. Ver\u00e1s que las fachadas no son paralelas. Cada propietario fue ampliando o modificando su casa con el paso de los siglos, de manera que el callej\u00f3n se estrecha y ensancha ligeramente.\n\nLa entrada desde la R\u00faa do Vilar est\u00e1 dominada por el Pazo de Vaamonde, hoy sede del Consorcio de Santiago. Merece la pena fijarse en el llamador de la puerta: es una obra del escultor gallego Francisco Asorey.\n\nAhora, volvamos a la R\u00faa do Vilar para buscar la siguiente parada.",
      en: "You're standing in one of Santiago's narrowest streets. Technically, the narrowest passage is R\u00faa da Oliveira (70 cm), but that's only at one point before it widens considerably. This long alley, though (90 cm at its narrowest), stretches on for several meters, opening onto a small square that until not long ago held a traditional blacksmith's forge, then continues back out as an alley to R\u00faa Nova, which we already crossed a while ago.\n\nLook up. You'll notice the fa\u00e7ades aren't parallel. Each owner expanded or altered their house over the centuries, so the alley narrows and widens slightly along the way.\n\nThe entrance from R\u00faa do Vilar is dominated by the Pazo de Vaamonde, today home to the Consorcio de Santiago. It's worth checking out the door knocker: it's a work by the Galician sculptor Francisco Asorey.\n\nNow, let's head back to R\u00faa do Vilar to look for the next stop."
    },
    rewardImage: "https://i.imgur.com/cEnWvfB.jpeg"
  },
  {
    id: "reto-20",
    clueImage: "https://i.imgur.com/bHkgw5o.jpeg",
    title: { es: "Caf\u00e9 Casino", en: "Caf\u00e9 Casino" },
    mapsQuery: "42.8789448,-8.5447398",
    lat: 42.8789448,
    lng: -8.5447398,
    reward: {
      es: "Si entras pensando que es una cafeter\u00eda bonita, te perder\u00e1s lo mejor: en realidad est\u00e1s entrando en el antiguo casino de la burgues\u00eda compostelana, uno de los espacios civiles m\u00e1s elegantes de Galicia.\n\nUn club privado... sin ruletas\n\nLa palabra casino aqu\u00ed no tiene nada que ver con el juego.\n\nEn el siglo XIX un casino era una sociedad de recreo donde se reun\u00edan las \u00e9lites para leer la prensa, celebrar bailes, escuchar conciertos, jugar al billar o discutir de pol\u00edtica. El Casino de Santiago naci\u00f3 en 1873, heredando una sociedad anterior fundada en 1844 en el Pazo de Benda\u00f1a, en el Toural.\n\nDurante d\u00e9cadas fue uno de los grandes centros de la vida intelectual compostelana. La tradici\u00f3n sit\u00faa aqu\u00ed a Valle-Incl\u00e1n, que frecuent\u00f3 sus salones, y el propio Castelao le dedic\u00f3 uno de sus dibujos, Cousas do Casino. M\u00e1s tarde tambi\u00e9n pasaron por aqu\u00ed escritores, pol\u00edticos y artistas de paso por Santiago.\n\nEn 1919 un gran incendio destruy\u00f3 buena parte de los salones y la biblioteca. La reconstrucci\u00f3n dio lugar al espectacular espacio que hoy ves, con una enorme sala di\u00e1fana de m\u00e1s de veinte metros de largo sin vigas centrales, algo muy avanzado para la \u00e9poca.\n\nEl techo suele llevarse todas las miradas, pero yo siempre invito a mirar las paredes. Las 36 tallas de madera fueron realizadas por el escultor compostelano Maximino Magari\u00f1os. No son simples adornos: representan escenas religiosas, alegor\u00edas, pecados, juegos de cartas e incluso escudos de Galicia y de las provincias. Es casi un museo de ebanister\u00eda escondido en una cafeter\u00eda.\n\nEn la primera planta exist\u00eda el famoso Sal\u00f3n Amarillo, considerado durante muchos a\u00f1os el gran sal\u00f3n de baile de Compostela. En Carnaval, Ascensi\u00f3n o Pascua acog\u00eda algunas de las fiestas m\u00e1s exclusivas de Galicia. All\u00ed sonaban las mejores orquestas y acud\u00eda la alta sociedad compostelana. Hoy ya no conserva esa funci\u00f3n, pero durante d\u00e9cadas fue el epicentro de la vida social de la ciudad.\n\nAhora, pi\u00e9rdete un rato paseando la R\u00faa do Vilar hasta llegar a la siguiente imagen, al final de la calle. Por el camino, puedes parar en el museo de la Fundaci\u00f3n Gonzalo Torrente Ballester. Actualmente tiene una exposici\u00f3n interactiva sobre el Camino de Santiago bastante entretenida.",
      en: "If you walk in thinking it's just a pretty caf\u00e9, you'll miss the best part: you're actually stepping into the old casino of Compostela's bourgeoisie, one of the most elegant civic spaces in Galicia.\n\nA private club... with no roulette wheels\n\nThe word casino here has nothing to do with gambling.\n\nIn the 19th century, a casino was a leisure society where the elite gathered to read the press, hold dances, listen to concerts, play billiards, or discuss politics. The Casino de Santiago was founded in 1873, inheriting an earlier society founded in 1844 at the Pazo de Benda\u00f1a, in the Toural.\n\nFor decades it was one of the great centers of Compostela's intellectual life. Tradition places Valle-Incl\u00e1n here, who frequented its salons, and Castelao himself dedicated one of his drawings to it, Cousas do Casino. Later, writers, politicians and artists passing through Santiago also came through here.\n\nIn 1919 a major fire destroyed much of the halls and the library. The rebuilding produced the spectacular space you see today, with an enormous open hall over twenty meters long with no central beams \u2014 quite advanced for its time.\n\nThe ceiling usually gets all the attention, but I always suggest looking at the walls. The 36 wood carvings were made by the Compostela sculptor Maximino Magari\u00f1os. They're not just decoration: they depict religious scenes, allegories, sins, card games, and even the coats of arms of Galicia and its provinces. It's almost a hidden museum of woodwork inside a caf\u00e9.\n\nOn the first floor was the famous Sal\u00f3n Amarillo, considered for many years the great ballroom of Compostela. At Carnival, Ascension, or Easter it hosted some of Galicia's most exclusive parties \u2014 the best orchestras played there, and Compostela high society attended. It no longer serves that purpose today, but for decades it was the epicenter of the city's social life.\n\nNow, spend a while wandering down R\u00faa do Vilar until you reach the next photo, at the end of the street. On the way, you can stop at the Fundaci\u00f3n Gonzalo Torrente Ballester museum \u2014 it currently has quite an entertaining interactive exhibition about the Camino de Santiago."
    },
    rewardImage: "https://i.imgur.com/x4Cv3jG.jpeg"
  },
  {
    id: "reto-21",
    clueImage: "https://i.imgur.com/0yqlw4W.jpeg",
    title: { es: "Praza das Prater\u00edas", en: "Praza das Prater\u00edas" },
    mapsQuery: "42.8799758,-8.5443258",
    lat: 42.8799758,
    lng: -8.5443258,
    reward: {
      es: "La Praza das Prater\u00edas es, probablemente, el rinc\u00f3n donde mejor se entiende la evoluci\u00f3n de Santiago. En apenas unos metros conviven el rom\u00e1nico del siglo XII, el barroco del XVIII y el urbanismo del XIX, formando un escenario cuidadosamente dise\u00f1ado.\n\nLa plaza recibe su nombre del gremio de los plateros, que desde la Edad Media ten\u00eda aqu\u00ed sus talleres. Si hoy todav\u00eda ves joyer\u00edas alrededor, no es una casualidad: es una tradici\u00f3n con m\u00e1s de setecientos a\u00f1os.\n\nAdem\u00e1s, es la \u00fanica fachada rom\u00e1nica de la Catedral que se conserva esencialmente en su lugar original. Si comparas Prater\u00edas con el Obradoiro, est\u00e1s viendo dos maneras muy distintas de entender la arquitectura: el rom\u00e1nico del siglo XII frente al barroco del XVIII.\n\nLa fuente actual se instal\u00f3 en 1829, aunque aprovecha elementos anteriores. Lo primero que llaman la atenci\u00f3n son los cuatro caballos \u2014en realidad, hipocampos, criaturas mitol\u00f3gicas mitad caballo y mitad pez\u2014 que lanzan agua por la boca. Sobre ellos se alza una figura femenina sosteniendo una estrella, interpretada generalmente como una alegor\u00eda de Compostela.\n\nCuando Federico Garc\u00eda Lorca visit\u00f3 Santiago en 1932, qued\u00f3 fascinado por esta plaza y por la fuente. Esa impresi\u00f3n termin\u00f3 cristalizando en su poema \"Danza da l\u00faa en Santiago\", incluido en Seis poemas galegos. La plaza, iluminada por la luna y con el sonido del agua, le pareci\u00f3 casi un escenario irreal.\n\nA vuestra espalda, frente a la Catedral, est\u00e1 la Casa do Cabildo.\n\nEsta es una de las mayores \"ilusiones \u00f3pticas\" arquitect\u00f3nicas de Galicia. A primera vista parece un gran palacio barroco. Pero en realidad... \u00a1solo tiene unos tres o cuatro metros de profundidad! Fue construida entre 1754 y 1758 por Clemente Fern\u00e1ndez Sarela con un objetivo muy concreto: embellecer la plaza. No hac\u00eda falta un edificio; hac\u00eda falta una fachada.\n\nEs uno de los mejores ejemplos espa\u00f1oles de lo que en teatro se llama una escenograf\u00eda: un decorado permanente para que el espacio urbano resultara m\u00e1s armonioso. Si la observas de lado comprender\u00e1s el truco. Desde Prater\u00edas parece un edificio monumental. Desde la R\u00faa da Conga descubres que apenas tiene fondo. Es una aut\u00e9ntica obra maestra del urbanismo barroco: en lugar de transformar toda la plaza, bast\u00f3 una fachada elegante para cambiar por completo su percepci\u00f3n. Una muestra de la vanidad del poder catedralicio, nada pod\u00eda afear el entorno de la Catedral.",
      en: "Praza das Prater\u00edas is probably the corner of the city where you best understand Santiago's evolution. Within just a few meters, 12th-century Romanesque, 18th-century baroque, and 19th-century urban planning coexist, forming a carefully composed stage set.\n\nThe square gets its name from the silversmiths' guild, who had their workshops here since the Middle Ages. If you still see jewelry shops around today, that's no coincidence \u2014 it's a tradition more than seven hundred years old.\n\nIt's also the only Romanesque fa\u00e7ade of the Cathedral that survives essentially in its original spot. Compare Prater\u00edas with the Obradoiro and you're looking at two very different ways of understanding architecture: 12th-century Romanesque versus 18th-century baroque.\n\nThe current fountain was installed in 1829, though it reuses earlier elements. The first thing that catches your eye are the four horses \u2014 actually hippocamps, mythological creatures half horse, half fish \u2014 spouting water from their mouths. Above them rises a female figure holding a star, generally read as an allegory of Compostela.\n\nWhen Federico Garc\u00eda Lorca visited Santiago in 1932, he was captivated by this square and its fountain. That impression later crystallized into his poem \"Danza da l\u00faa en Santiago,\" included in Seis poemas galegos. Lit by the moon and filled with the sound of water, the square struck him as almost an unreal stage.\n\nBehind you, facing the Cathedral, stands the Casa do Cabildo.\n\nThis is one of the greatest architectural \"optical illusions\" in Galicia. At first glance it looks like a grand baroque palace. But in reality... it's only three or four meters deep! It was built between 1754 and 1758 by Clemente Fern\u00e1ndez Sarela with one very specific goal: to beautify the square. What was needed wasn't a building \u2014 it was a fa\u00e7ade.\n\nIt's one of the finest Spanish examples of what in theater is called a scenography: a permanent backdrop designed to make the urban space feel more harmonious. Look at it from the side and you'll understand the trick \u2014 from Prater\u00edas it looks like a monumental building; from R\u00faa da Conga you discover it barely has any depth at all. It's a true masterpiece of baroque urban planning: instead of transforming the whole square, one elegant fa\u00e7ade was enough to completely change how it's perceived \u2014 a display of the Cathedral chapter's vanity, since nothing was allowed to spoil the area around the Cathedral."
    },
    rewardImage: "https://i.imgur.com/tRQPyb1.jpeg"
  },
  {
    id: "reto-22",
    clueImage: "https://i.imgur.com/P2QpeWI.jpeg",
    title: { es: "A Sombra do Peregrino", en: "A Sombra do Peregrino (the Pilgrim's Shadow)" },
    mapsQuery: "42.880381,-8.5439586",
    lat: 42.880381,
    lng: -8.5439586,
    reward: {
      es: "La Sombra do Peregrino es una de las leyendas m\u00e1s recientes de Santiago, pero ha arraigado tan bien que mucha gente cree que es medieval.\n\nLa encontrar\u00e1s en la Praza da Quintana, junto a la Porta Santa. Por la noche, una sombra con forma de peregrino aparece proyectada sobre los sillares de granito.\n\nLa explicaci\u00f3n f\u00edsica es sencilla: una combinaci\u00f3n de iluminaci\u00f3n urbana y elementos arquitect\u00f3nicos proyecta una silueta muy sugerente. Pero la gracia de Santiago nunca ha estado en las explicaciones sencillas.\n\nCuenta la historia de un peregrino que lleg\u00f3 a Compostela para encontrarse con una mujer de la que estaba enamorado. Ella nunca apareci\u00f3. El peregrino sigui\u00f3 esper\u00e1ndola d\u00eda tras d\u00eda en la Quintana hasta morir. Su sombra, incapaz de abandonar el lugar, contin\u00faa aguardando junto a la Catedral.\n\nLa sombra mira hacia la Catedral, no hacia la plaza. Por eso algunos gu\u00edas cuentan otra versi\u00f3n: no espera a una mujer, sino que es un peregrino que lleg\u00f3 demasiado tarde para obtener el perd\u00f3n jubilar y qued\u00f3 condenado a permanecer all\u00ed eternamente.\n\nLa Quintana ya ten\u00eda tradici\u00f3n de leyendas mucho antes de la sombra. La mitad inferior de esta plaza es la Quintana dos Mortos, el antiguo cementerio de la Catedral. Durante siglos estuvo llena de sepulturas. Si hab\u00eda una plaza compostelana destinada a generar historias de apariciones, era esta.\n\nSigue por la plaza para encontrar la siguiente imagen.",
      en: "The Sombra do Peregrino (Pilgrim's Shadow) is one of Santiago's most recent legends, but it has taken root so well that many people believe it's medieval.\n\nYou'll find it in Praza da Quintana, next to the Porta Santa. At night, a shadow shaped like a pilgrim appears projected onto the granite ashlars.\n\nThe physical explanation is simple: a combination of streetlighting and architectural elements casts a very suggestive silhouette. But Santiago's charm has never been in the simple explanations.\n\nThe story goes that a pilgrim arrived in Compostela to meet a woman he was in love with. She never showed up. The pilgrim kept waiting for her day after day in the Quintana until he died. His shadow, unable to leave the spot, keeps waiting beside the Cathedral to this day.\n\nThe shadow looks toward the Cathedral, not toward the square. That's why some guides tell a different version: he isn't waiting for a woman, but is a pilgrim who arrived too late to receive the jubilee pardon and was condemned to remain there forever.\n\nThe Quintana already had a tradition of legends long before the shadow. The lower half of this square is the Quintana dos Mortos, the Cathedral's old cemetery. For centuries it was full of graves. If any Compostela square was destined to generate ghost stories, it was this one.\n\nContinue across the square to find the next photo."
    },
    rewardImage: "https://albertosolana.wordpress.com/wp-content/uploads/2015/09/fb_img_1593302154360-2.jpg"
  },
  {
    id: "reto-23",
    clueImage: "https://i.imgur.com/gRUnbFv.jpeg",
    title: { es: "Porta Santa", en: "Porta Santa (Holy Door)" },
    mapsQuery: "42.880381,-8.5439586",
    lat: 42.880381,
    lng: -8.5439586,
    video: "https://www.youtube.com/shorts/glsBldxPGEI",
    reward: {
      es: "La Porta Santa es uno de los lugares m\u00e1s importantes de Santiago, pero su inter\u00e9s va mucho m\u00e1s all\u00e1 de abrirse en A\u00f1o Santo.\n\nLa puerta que ves en la Quintana permanece tapiada o cerrada la mayor parte del tiempo. Solo se abre durante los A\u00f1os Santos Jacobeos, cuando el 25 de julio cae en domingo.\n\nLo curioso es que la ceremonia de apertura consiste literalmente en derribar simb\u00f3licamente el muro que la sella desde el interior.\n\nLa Porta Santa se abre hacia la Quintana dos Mortos, que durante siglos fue el cementerio de la Catedral. Por eso la experiencia medieval de cruzarla ten\u00eda una enorme carga simb\u00f3lica: se pasaba del espacio asociado a la muerte al interior del templo del Ap\u00f3stol.\n\nMuchos peregrinos cruzan la puerta sin fijarse en las figuras que la rodean. Las esculturas proceden del antiguo coro p\u00e9treo rom\u00e1nico realizado por el Maestro Mateo para el interior de la Catedral. Cuando el coro fue desmontado en el siglo XVII, varias piezas acabaron reutilizadas aqu\u00ed. Es decir, algunas de las esculturas que ves estuvieron originalmente dentro de la Catedral rom\u00e1nica.\n\nEs una de las pocas Puertas Santas del mundo; Roma tiene las suyas en las bas\u00edlicas mayores, pero fuera de ese contexto la de Santiago es una de las m\u00e1s relevantes de la cristiandad. Atravesarla durante un A\u00f1o Santo permite obtener la indulgencia jubilar, siempre que se cumplan las condiciones establecidas por la Iglesia.\n\nSi quieres hacer una \"parada t\u00e9cnica\", te recomiendo el caf\u00e9 Literarios, en lo alto de las escaleras, en la Quintana de Vivos.\n\nPara seguir nuestra b\u00fasqueda, vuelve sobre tus pasos a la plaza de Prater\u00edas (la de la fuente de caballos) y contin\u00faa bajando la calle, pegado a la Catedral, si la cola interminable de peregrinos te lo permite.",
      en: "The Porta Santa is one of Santiago's most important spots, but its interest goes well beyond simply opening in a Holy Year.\n\nThe door you see in the Quintana stays bricked up or closed most of the time. It only opens during Jacobean Holy Years, when July 25 falls on a Sunday.\n\nThe curious thing is that the opening ceremony literally consists of symbolically knocking down the wall that seals it from the inside.\n\nThe Porta Santa opens onto the Quintana dos Mortos, which for centuries was the Cathedral's cemetery. That's why, in medieval experience, crossing it carried enormous symbolic weight: you passed from a space associated with death into the interior of the Apostle's temple.\n\nMany pilgrims cross the door without noticing the figures around it. The sculptures come from the old Romanesque stone choir made by Master Mateo for the Cathedral's interior. When the choir was dismantled in the 17th century, several pieces ended up reused here. In other words, some of the sculptures you see were originally inside the Romanesque Cathedral.\n\nIt's one of the few Holy Doors in the world \u2014 Rome has its own in the major basilicas, but outside that context, Santiago's is one of the most significant in Christianity. Crossing it during a Holy Year grants the jubilee indulgence, provided the conditions set by the Church are met.\n\nIf you'd like a \"technical stop,\" I'd recommend Caf\u00e9 Literarios, at the top of the stairs, in the Quintana de Vivos.\n\nTo continue our search, retrace your steps to Prater\u00edas square (the one with the horse fountain) and keep heading down the street, hugging the Cathedral, if the endless line of pilgrims lets you."
    },
    rewardImage: "https://i.imgur.com/crusHQq.jpeg"
  },
  {
    id: "reto-24",
    clueImage: "https://i.imgur.com/tPlldUO.jpeg",
    title: { es: "\u00c1rbol da Ciencia", en: "Tree of Knowledge" },
    mapsQuery: "42.8799477,-8.5452529",
    lat: 42.8799477,
    lng: -8.5452529,
    reward: {
      es: "El \u00c1rbol da Ciencia es una de las curiosidades menos conocidas del Obradoiro. Miles de personas pasan delante sin darse cuenta de que esconde una tradici\u00f3n universitaria con siglos de historia. Si te acercas ver\u00e1s que entre las ramas cuelgan trece pergaminos escritos en lat\u00edn. Cada uno representa una de las disciplinas que antiguamente se ense\u00f1aban en la Universidad de Santiago: Teolog\u00eda, Medicina, Derecho, Filosof\u00eda... El \u00e1rbol simboliza que todo el conocimiento nace de un mismo tronco.\n\nLos estudiantes indecisos se colocaban frente al \u00e1rbol, daban tres vueltas sobre s\u00ed mismos, se giraban de espaldas y se\u00f1alaban al azar una de las ramas. La disciplina que tocaban era la carrera que deb\u00edan estudiar.\n\nHoy el \u00e1rbol est\u00e1 protegido por un cristal. Antiguamente se pod\u00eda tocar directamente, y el desgaste de algunas zonas era consecuencia de miles de manos de estudiantes siguiendo el ritual. Ahora la tradici\u00f3n contin\u00faa, pero el dedo se apoya sobre el cristal.\n\nAhora, antes de ir hacia la Catedral, avanzaremos un poco en direcci\u00f3n contraria, al Pazo de Fonseca (el edificio grande frente a la plaza con tanta vegetaci\u00f3n).",
      en: "The \u00c1rbol da Ciencia (Tree of Knowledge) is one of the lesser-known curiosities of the Obradoiro. Thousands of people walk past it without noticing it holds a centuries-old university tradition. Look closely and you'll see thirteen parchments hanging from its branches, written in Latin. Each represents one of the disciplines once taught at the University of Santiago: Theology, Medicine, Law, Philosophy... The tree symbolizes that all knowledge grows from a single trunk.\n\nUndecided students would stand in front of the tree, spin around three times, turn their backs to it, and point at random toward one of the branches. Whichever discipline they touched was the degree they were meant to study.\n\nToday the tree is protected behind glass. In the past you could touch it directly, and the wear on certain spots came from thousands of students' hands following the ritual over the years. The tradition continues today, but now your finger rests on the glass instead.\n\nNow, before heading toward the Cathedral, we'll go a little way in the opposite direction, to the Pazo de Fonseca (the large building with all the greenery facing the square)."
    },
    rewardImage: "https://i.imgur.com/QLHxvIR.jpeg"
  },
  {
    id: "reto-25",
    clueImage: "https://i.imgur.com/IS5vMRJ.jpeg",
    title: { es: "Pazo de Fonseca", en: "Pazo de Fonseca" },
    mapsQuery: "42.8796891,-8.5453891",
    lat: 42.8796891,
    lng: -8.5453891,
    reward: {
      es: "El Colegio de Fonseca es, en mi opini\u00f3n, uno de los edificios m\u00e1s importantes de Santiago y, al mismo tiempo, uno de los m\u00e1s infravalorados. Sin \u00e9l, probablemente la Universidad de Santiago no habr\u00eda alcanzado el prestigio que tuvo durante siglos.\n\nFue fundado en 1501 por el arzobispo Alonso III de Fonseca, uno de los grandes mecenas del Renacimiento espa\u00f1ol. Su idea era revolucionaria para la \u00e9poca: crear un colegio donde los estudiantes vivieran, estudiaran y se formasen juntos, siguiendo el modelo de Salamanca o Alcal\u00e1.\n\nM\u00e1s que una facultad, era un colegio mayor, reservado a alumnos brillantes, muchos de los cuales acabar\u00edan ocupando cargos importantes en la Iglesia o en la administraci\u00f3n.\n\nCuando Santiago a\u00fan era una ciudad de aspecto eminentemente medieval, Fonseca introdujo un lenguaje arquitect\u00f3nico completamente nuevo. El patio interior, de l\u00edneas sobrias y perfectamente proporcionadas, es uno de los primeros grandes ejemplos del Renacimiento gallego. Si vienes de recorrer el rom\u00e1nico y el barroco de la Catedral, entrar en este claustro es casi un cambio de \u00e9poca instant\u00e1neo.\n\nVale la pena entrar para recorrer el claustro: tiene dos pisos de arquer\u00edas y una armon\u00eda muy distinta a la arquitectura compostelana habitual. Despu\u00e9s de tanto rom\u00e1nico y barroco, el patio transmite una serenidad muy \"italiana\"; y el paraninfo (si tienes suerte y est\u00e1 abierto, podr\u00e1s ver uno de los espacios ceremoniales m\u00e1s importantes de la Universidad de Santiago. All\u00ed se celebran investiduras de doctores, aperturas de curso y otros actos solemnes).\n\nAhora s\u00ed, \u00a1sal de Fonseca y dir\u00edgete al Obradoiro!",
      en: "The Colegio de Fonseca is, in my opinion, one of the most important buildings in Santiago and, at the same time, one of the most underrated. Without it, the University of Santiago probably wouldn't have reached the prestige it held for centuries.\n\nIt was founded in 1501 by archbishop Alonso III de Fonseca, one of the great patrons of the Spanish Renaissance. His idea was revolutionary for the time: create a college where students would live, study, and train together, following the model of Salamanca or Alcal\u00e1.\n\nMore than a faculty, it was a colegio mayor, reserved for brilliant students, many of whom went on to hold important posts in the Church or in government.\n\nAt a time when Santiago still looked overwhelmingly medieval, Fonseca introduced a completely new architectural language. The interior courtyard, with its sober, perfectly proportioned lines, is one of the first great examples of the Galician Renaissance. If you've just come from the Romanesque and baroque of the Cathedral, stepping into this cloister feels almost like an instant change of era.\n\nIt's worth going in to walk the cloister: it has two floors of arcades and a harmony very different from Compostela's usual architecture. After so much Romanesque and baroque, the courtyard has a very \"Italian\" serenity to it; and the paraninfo (if you're lucky and it's open, you can see one of the most important ceremonial spaces of the University of Santiago, where doctoral investitures, opening-of-term ceremonies and other formal events take place).\n\nNow, leave Fonseca and head to the Obradoiro!"
    },
    rewardImage: "https://i.imgur.com/OKYpesW.jpeg"
  },
  {
    id: "reto-26",
    clueImage: "https://i.imgur.com/k3GgMIl.jpeg",
    title: { es: "Catedral de Santiago \u2014 fachada do Obradoiro", en: "Cathedral of Santiago \u2014 Obradoiro fa\u00e7ade" },
    mapsQuery: "Praza do Obradoiro, Santiago de Compostela",
    lat: 42.8805,
    lng: -8.5456,
    video: "https://www.youtube.com/watch?v=sYz3T6tHWWk",
    reward: {
      es: "\u00bfPensabas que no te iba a hablar de la Catedral?\n\nPrimero, para los muy futboleros, un v\u00eddeo de Ronaldinho.\n\nY ahora, a lo que hemos venido.\n\nLa Praza do Obradoiro, tal y como la conocemos, es relativamente reciente. Durante siglos este espacio estaba mucho m\u00e1s fragmentado por construcciones, muros y desniveles.\n\nSu nombre procede de los obradoiros (talleres) de los canteros que trabajaban en la fachada occidental de la Catedral durante los siglos XVII y XVIII.\n\nSi giras sobre ti mismo en el centro del Obradoiro ver\u00e1s algo extraordinario:\n\u2022 Catedral \u2192 poder religioso.\n\u2022 Pazo de Raxoi \u2192 poder pol\u00edtico y administrativo.\n\u2022 Hostal dos Reis Cat\u00f3licos \u2192 poder asistencial y hospitalario (\u00a1y donde nos veremos el d\u00eda de la boda!).\n\u2022 Colexio de Fonseca / San Xerome \u2192 poder acad\u00e9mico.\n\nPocas plazas europeas re\u00fanen de forma tan clara los grandes poderes de una sociedad.\n\nLa fachada que vemos hoy no es la fachada original de la Catedral. Entre 1738 y 1750, Fernando de Casas Novoa construy\u00f3 la enorme fachada barroca para proteger el antiguo P\u00f3rtico de la Gloria de la lluvia y del viento atl\u00e1ntico. Detr\u00e1s de ese inmenso decorado sigue estando la fachada medieval. Es uno de los ejemplos m\u00e1s espectaculares de Europa de una fachada construida como protecci\u00f3n de otra m\u00e1s antigua.\n\nLas torres no son gemelas\n\nCasi nadie lo aprecia a primera vista.\n\u2022 La torre de la izquierda (mirando la Catedral) es la Carraca.\n\u2022 La de la derecha es la de las Camp\u00e1s.\n\nParecen id\u00e9nticas, pero no lo son. Si observas con atenci\u00f3n descubrir\u00e1s diferencias en ventanas, remates y proporciones. La torre sur alberga algunas de las campanas hist\u00f3ricas m\u00e1s importantes de la Catedral. Durante siglos marcaron las horas, los incendios, las fiestas y las emergencias. A d\u00eda de hoy siguen siendo el terror de los insomnes.\n\nLa torre norte recibe su nombre de la carraca, un instrumento de madera utilizado durante la Semana Santa cuando las campanas guardaban silencio. Ese detalle conserva una tradici\u00f3n lit\u00fargica medieval que sobrevive en el propio nombre de la torre y todav\u00eda se lleva a cabo cada Semana Santa.\n\nEn el centro de la fachada, sobre el gran ventanal, aparece la estatua del Ap\u00f3stol Santiago como peregrino: sombrero, bord\u00f3n, capa y concha jacobea. Es un mensaje muy potente: el santo recibe a quienes llegan siguiendo sus propios pasos.\n\nSi te acercas a la fachada del Obradoiro y empiezas a leerla de abajo arriba, descubrir\u00e1s que est\u00e1 dise\u00f1ada como una enorme catequesis de piedra.\n\nUna fachada para salvar otra\n\nLo primero que hay que entender es que la fachada no se construy\u00f3 para embellecer la Catedral, sino para proteger el P\u00f3rtico de la Gloria. La lluvia atl\u00e1ntica estaba deteriorando las esculturas del Maestro Mateo, y la soluci\u00f3n fue envolver toda la fachada occidental con esta gigantesca pantalla barroca. Por eso algunos historiadores la llaman una especie de \"paraguas monumental\".\n\nEl gran ventanal\n\nEl enorme ventanal central no es solo decorativo. Su misi\u00f3n es iluminar el interior del P\u00f3rtico de la Gloria. Antes de la iluminaci\u00f3n artificial, era la principal fuente de luz natural para las esculturas mateanas. La luz que entra por ah\u00ed fue cuidadosamente calculada para ba\u00f1ar el p\u00f3rtico.\n\nA ambos lados de Santiago aparecen Atanasio y Teodoro, considerados seg\u00fan la tradici\u00f3n los disc\u00edpulos que trasladaron el cuerpo del Ap\u00f3stol desde Palestina hasta Galicia. Son personajes fundamentales en la leyenda jacobea, aunque muchos visitantes no saben qui\u00e9nes son.\n\nEl escudo gigantesco\n\nUno de los elementos m\u00e1s impresionantes es el enorme escudo real que domina la fachada. Representa a la monarqu\u00eda espa\u00f1ola y recuerda que la Catedral no fue solo un centro religioso, sino tambi\u00e9n un proyecto pol\u00edtico de primer orden. Cuando se construye el Obradoiro, Santiago es una cuesti\u00f3n de Estado.\n\nLa siguiente parada est\u00e1 escondida entre el Obradoiro y el Hostal dos Reis Cat\u00f3licos.",
      en: "Did you think I wasn't going to talk about the Cathedral?\n\nFirst, for the football fans, a Ronaldinho video.\n\nAnd now, on to what we came for.\n\nPraza do Obradoiro, as we know it today, is relatively recent. For centuries this space was far more fragmented by buildings, walls and changes in level.\n\nIts name comes from the obradoiros (workshops) of the stonemasons who worked on the Cathedral's western fa\u00e7ade during the 17th and 18th centuries.\n\nTurn around in the middle of the Obradoiro and you'll see something extraordinary:\n\u2022 The Cathedral \u2192 religious power.\n\u2022 The Pazo de Raxoi \u2192 political and administrative power.\n\u2022 The Hostal dos Reis Cat\u00f3licos \u2192 welfare and hospital power (and where we'll see you on the wedding day!).\n\u2022 The Colexio de Fonseca / San Xerome \u2192 academic power.\n\nFew European squares bring together the great powers of a society so clearly.\n\nThe fa\u00e7ade we see today isn't the Cathedral's original fa\u00e7ade. Between 1738 and 1750, Fernando de Casas Novoa built the huge baroque fa\u00e7ade to protect the old P\u00f3rtico de la Gloria from Atlantic rain and wind. Behind that immense decoration, the medieval fa\u00e7ade is still there. It's one of Europe's most spectacular examples of a fa\u00e7ade built to protect an older one.\n\nThe towers aren't twins\n\nAlmost nobody notices at first glance.\n\u2022 The tower on the left (facing the Cathedral) is the Carraca.\n\u2022 The one on the right is the Camp\u00e1s.\n\nThey look identical, but they aren't. Look closely and you'll spot differences in the windows, finials and proportions. The south tower holds some of the Cathedral's most historically important bells. For centuries they marked the hours, fires, festivities, and emergencies. To this day they remain the terror of light sleepers.\n\nThe north tower takes its name from the carraca, a wooden instrument used during Holy Week when the bells fall silent. That detail preserves a medieval liturgical tradition that survives in the tower's very name and is still carried out every Holy Week.\n\nAt the center of the fa\u00e7ade, above the great window, stands the statue of the Apostle Santiago as a pilgrim: hat, staff, cape, and scallop shell. It's a powerful message: the saint welcomes those who arrive following in his own footsteps.\n\nIf you look at the Obradoiro fa\u00e7ade and start reading it from bottom to top, you'll find it's designed as an enormous catechism carved in stone.\n\nA fa\u00e7ade to save another fa\u00e7ade\n\nThe first thing to understand is that the fa\u00e7ade wasn't built to beautify the Cathedral, but to protect the P\u00f3rtico de la Gloria. Atlantic rain was damaging Master Mateo's sculptures, and the solution was to wrap the whole western fa\u00e7ade in this giant baroque screen. That's why some historians call it a kind of \"monumental umbrella.\"\n\nThe great window\n\nThe enormous central window isn't just decorative. Its job is to light the interior of the P\u00f3rtico de la Gloria. Before artificial lighting, it was the main source of natural light for Master Mateo's sculptures. The light entering through it was carefully calculated to bathe the portico.\n\nOn either side of Santiago appear Atanasio and Teodoro, considered by tradition to be the disciples who carried the Apostle's body from Palestine to Galicia. They're key figures in the Jacobean legend, though many visitors don't know who they are.\n\nThe giant coat of arms\n\nOne of the most striking elements is the enormous royal coat of arms that dominates the fa\u00e7ade. It represents the Spanish monarchy and is a reminder that the Cathedral wasn't just a religious center, but also a major political project. By the time the Obradoiro was built, Santiago was a matter of State.\n\nThe next stop is hidden between the Obradoiro and the Hostal dos Reis Cat\u00f3licos."
    },
    rewardImage: "https://i.imgur.com/B0BRQtK.jpeg"
  },
  {
    id: "reto-27",
    clueImage: "https://i.imgur.com/MPLZxQo.jpeg",
    title: { es: "Iglesia de San Fructuoso", en: "Iglesia de San Fructuoso" },
    mapsQuery: "42.8806394,-8.5465384",
    lat: 42.8806394,
    lng: -8.5465384,
    reward: {
      es: "O, como se la conoce, \"Iglesia de la baraja\".\n\nSi levantas la vista hacia la parte superior de la fachada ver\u00e1s cuatro figuras femeninas. Oficialmente representan las cuatro virtudes cardinales:\n\u2022 Prudencia.\n\u2022 Justicia.\n\u2022 Fortaleza.\n\u2022 Templanza.\n\nPero el pueblo compostelano empez\u00f3 a decir que parec\u00edan las cuatro sotas de la baraja espa\u00f1ola. Desde entonces, el apodo de \"iglesia de la baraja\" qued\u00f3 para siempre.\n\nLa fachada est\u00e1 dise\u00f1ada para verse desde el Obradoiro, que est\u00e1 unos metros m\u00e1s alto que la puerta de la iglesia. Por eso las esculturas se concentran en la parte superior: el arquitecto sab\u00eda que el espectador las contemplar\u00eda desde arriba, no desde la calle.\n\nCuando la gente llega a la plaza, la Catedral acapara toda la atenci\u00f3n. Sin embargo, San Fructuoso ocupa una posici\u00f3n privilegiada: forma parte del gran escenario barroco que cierra el Obradoiro por el oeste.\n\nFue construida entre 1754 y 1765 por Lucas Ferro Caaveiro, uno de los grandes arquitectos del barroco gallego. En las esquinas superiores de la fachada aparecen cuatro figuras que representan a los reyes:\n\u2022 Alfonso IX de Le\u00f3n.\n\u2022 Fernando II.\n\u2022 Alfonso VII.\n\u2022 Ordo\u00f1o II.\n\nSon monarcas estrechamente vinculados a la historia de Santiago y del reino medieval de Galicia y Le\u00f3n. Si los miras desde abajo parecen vigilar la ciudad.\n\nLa mayor\u00eda de iglesias compostelanas tienen planta longitudinal. San Fructuoso, en cambio, posee una planta de cruz griega, con los cuatro brazos de longitud semejante.\n\nF\u00edjate en la c\u00fapula. Desde ciertos puntos del Obradoiro apenas se percibe porque queda visualmente eclipsada por la masa gigantesca de la Catedral. Sin embargo, cuando la observas desde la Costa do Cristo o desde las calles traseras, aparece de repente como una de las c\u00fapulas barrocas m\u00e1s elegantes de la ciudad.\n\nEl siguiente lugar ya lo conoces (o lo conocer\u00e1s en breve), est\u00e1 a pocos pasos de ti, \u00a1busca bien!",
      en: "Or, as it's known, the \"Iglesia de la Baraja\" (Church of the Playing Cards).\n\nLook up toward the top of the fa\u00e7ade and you'll see four female figures. Officially they represent the four cardinal virtues:\n\u2022 Prudence.\n\u2022 Justice.\n\u2022 Fortitude.\n\u2022 Temperance.\n\nBut the people of Compostela started saying they looked like the four jacks of a Spanish deck of cards. Since then, the nickname \"iglesia de la baraja\" stuck for good.\n\nThe fa\u00e7ade is designed to be seen from the Obradoiro, which sits a few meters higher than the church door. That's why the sculptures are concentrated near the top: the architect knew viewers would look at them from above, not from street level.\n\nWhen people arrive at the square, the Cathedral grabs all the attention. Yet San Fructuoso holds a privileged position: it's part of the great baroque backdrop that closes off the Obradoiro to the west.\n\nIt was built between 1754 and 1765 by Lucas Ferro Caaveiro, one of the great architects of Galician baroque. In the upper corners of the fa\u00e7ade appear four figures representing kings:\n\u2022 Alfonso IX of Le\u00f3n.\n\u2022 Fernando II.\n\u2022 Alfonso VII.\n\u2022 Ordo\u00f1o II.\n\nThese are monarchs closely tied to the history of Santiago and the medieval kingdom of Galicia and Le\u00f3n. Looked at from below, they seem to keep watch over the city.\n\nMost Compostela churches have a longitudinal floor plan. San Fructuoso, on the other hand, has a Greek-cross plan, with four arms of similar length.\n\nLook at the dome. From certain points in the Obradoiro it's barely visible, overshadowed by the Cathedral's massive bulk. But seen from Costa do Cristo or the back streets, it suddenly appears as one of the most elegant baroque domes in the city.\n\nThe next spot you already know (or you'll get to know it very soon) \u2014 it's just a few steps away, look carefully!"
    },
    rewardImage: "https://i.imgur.com/ZXBZHo7.jpeg"
  }
];


/* --------------------------------------------------------------------------
   2. QUÉ VER EN UN DÍA
   Lista ordenada de paradas. "time" es opcional (ej: "09:00" o "Mañana").
   -------------------------------------------------------------------------- */

const QUE_VER_ITEMS = [
  {
    image: "images/general/obradoiro.jpg",
    time: { es: "Mañana", en: "Morning" },
    title: { es: "Praza do Obradoiro y la Catedral", en: "Praza do Obradoiro and the Cathedral" },
    description: {
      es: "Empieza aquí, es el corazón de la ciudad y donde termina el Camino de Santiago. Entra a ver el Pórtico de la Gloria.",
      en: "Start here — it's the heart of the city and where the Camino de Santiago ends. Go in to see the Pórtico de la Gloria."
    }
  },
  {
    image: "images/general/casco-antiguo.jpg",
    time: { es: "Media mañana", en: "Mid-morning" },
    title: { es: "Paseo por el casco antiguo", en: "Stroll through the old town" },
    description: {
      es: "Piérdete por las calles de piedra: Rúa do Vilar, Rúa Nova, Praza de Praterías.",
      en: "Get lost in the stone streets: Rúa do Vilar, Rúa Nova, Praza de Praterías."
    }
  },
  {
    image: "images/general/mercado-abastos.jpg",
    time: { es: "Mediodía", en: "Midday" },
    title: { es: "Mercado de Abastos", en: "Mercado de Abastos" },
    description: {
      es: "Mercado tradicional gallego donde puedes comer marisco fresquísimo en varios puestos.",
      en: "Traditional Galician market where you can eat super-fresh seafood at several stalls."
    }
  },
  {
    image: "images/general/alameda.jpg",
    time: { es: "Tarde", en: "Afternoon" },
    title: { es: "Parque de la Alameda", en: "Alameda Park" },
    description: {
      es: "Las mejores vistas de la Catedral desde el Paseo de la Herradura, sobre todo al atardecer.",
      en: "The best views of the Cathedral from the Paseo de la Herradura, especially at sunset."
    }
  }
  // Añade más paradas copiando un bloque como los de arriba.
];


/* --------------------------------------------------------------------------
   3. ¡TENGO COCHE!
   Escapadas fuera de la ciudad. "distance" tipo "30 min en coche".
   -------------------------------------------------------------------------- */

const TENGO_COCHE_ITEMS = [
  {
    image: "images/general/fisterra.jpg",
    title: { es: "Cabo Fisterra", en: "Cape Fisterra" },
    distance: { es: "1h en coche", en: "1h by car" },
    description: {
      es: "El 'fin del mundo' para los romanos. Atardecer espectacular sobre el Atlántico.",
      en: "The 'end of the world' for the Romans. Spectacular sunset over the Atlantic."
    }
  },
  {
    image: "images/general/coruna.jpg",
    title: { es: "A Coruña", en: "A Coruña" },
    distance: { es: "45 min en coche", en: "45 min by car" },
    description: {
      es: "Ciudad de la Torre de Hércules y el paseo marítimo más largo de Europa. Buen marisco en la zona vieja.",
      en: "Home of the Tower of Hercules and the longest seaside promenade in Europe. Great seafood in the old town."
    }
  },
  {
    image: "images/general/costa-da-morte.jpg",
    title: { es: "Costa da Morte", en: "Costa da Morte" },
    distance: { es: "45-60 min en coche", en: "45-60 min by car" },
    description: {
      es: "Acantilados salvajes y faros. Muxía y Cabo Vilán son parada obligatoria.",
      en: "Wild cliffs and lighthouses. Muxía and Cabo Vilán are a must-stop."
    }
  }
  // Añade más destinos copiando un bloque como los de arriba.
];


/* --------------------------------------------------------------------------
   4. ¿POR DÓNDE SALIR?
   Cada sitio tiene estos filtros (todos opcionales excepto music):
     - music:      "celta" | "moderna" | "tranquila"
     - tapa:       true | false  (¿ponen tapa con la bebida?)
     - gay:        true | false  (¿es un sitio gay friendly?)
     - irish:      true | false  (¿es un pub de estilo irlandés?)
     - liveMusic:  true | false  (¿suele haber música en directo?)
   Verifica bien estos datos antes de publicarlos — son ejemplos de partida.

   - image: OPCIONAL. Foto del local para la tarjeta. Usa el enlace DIRECTO
            de imgur (https://i.imgur.com/XXXXX.jpeg), igual que en el Foto
            Explorer — no el enlace de la página normal de imgur.com.
            Si lo dejas vacío, la tarjeta se muestra igual, solo que sin foto.
   -------------------------------------------------------------------------- */

const SALIR_ITEMS = [
  {
    name: "Modus Vivendi",
    music: "celta",
    tapa: false,
    gay: false,
    image: "",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Modus+Vivendi+Santiago+de+Compostela",
    description: {
      es: "Uno de los pubs con más solera de Santiago, ambiente de música celta y folk en un antiguo pajar de piedra.",
      en: "One of Santiago's most iconic pubs, Celtic and folk music vibe inside an old stone hay barn."
    }
  },
,
  {
    name: "Casa das Crechas",
    music: "celta",
    tapa: false,
    gay: false,
    image: "",
    liveMusic: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Casa+das+Crechas+Santiago+de+Compostela",
    description: {
      es: "El bar de referencia en Santiago para m\u00fasica folk e irlandesa en directo. Sesiones espont\u00e1neas de gaita y viol\u00edn casi cualquier noche, cerca de Praza de Prater\u00edas.",
      en: "Santiago's go-to spot for live folk and Irish music. Spontaneous bagpipe and fiddle sessions happen most nights, near Praza de Prater\u00edas."
    }
  },
  {
    name: "Pub Atl\u00e1ntico",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pub+Atl%C3%A1ntico+Santiago+de+Compostela",
    description: {
      es: "Favorito entre estudiantes, con buena selecci\u00f3n de cervezas y c\u00f3cteles y ambiente animado.",
      en: "A student favorite, with a good selection of beers and cocktails and a lively atmosphere."
    }
  },
  {
    name: "A Gramola",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=A+Gramola+Santiago+de+Compostela",
    description: {
      es: "Bar de tem\u00e1tica retro con buen rollo nost\u00e1lgico, cerca de Praza de Cervantes.",
      en: "A retro-themed bar with a great nostalgic vibe, near Praza de Cervantes."
    }
  },
  {
    name: "A Novena Porta",
    music: "moderna",
    tapa: true,
    gay: false,
    image: "",
    irish: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=A+Novena+Porta+Cardeal+Pay%C3%A1+Santiago+de+Compostela",
    description: {
      es: "Pub de estilo irland\u00e9s en Cardeal Pay\u00e1, con TV para deporte, buena selecci\u00f3n de cervezas de importaci\u00f3n y tapa sencilla (perritos calientes) con la consumici\u00f3n.",
      en: "An Irish-style pub on Cardeal Pay\u00e1, with sports TVs, a good selection of imported beers, and a simple tapa (hot dogs) with your drink."
    }
  },
  {
    name: "Pub Momo",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "",
    liveMusic: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pub+Momo+Santiago+de+Compostela",
    description: {
      es: "Uno de los pubs m\u00e1s emblem\u00e1ticos de Santiago, abierto desde 1984, inspirado en la novela \"Momo\". Cuatro ambientes distintos y una preciosa terraza-jard\u00edn en verano, frente al Mercado de Abastos.",
      en: "One of Santiago's most iconic pubs, open since 1984 and inspired by the novel \"Momo.\" Four distinct areas and a lovely garden terrace in summer, across from the Mercado de Abastos."
    }
  },
  {
    name: "O Boneco Bar",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "",
    liveMusic: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=O+Boneco+Bar+Santiago+de+Compostela",
    description: {
      es: "Bar peque\u00f1o y con encanto muy cerca de la Catedral, buena selecci\u00f3n de ginebras y m\u00fasica que va de los 80 a la actualidad. Ambiente muy variado.",
      en: "A small, charming bar very close to the Cathedral, with a good gin selection and music ranging from the 80s to today. A nicely mixed crowd."
    }
  },
  {
    name: "Way Club",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Way+Club+R%C3%BAa+Nova+13+Santiago+de+Compostela",
    description: {
      es: "Discoteca universitaria en pleno casco hist\u00f3rico, en la R\u00faa Nova. Dos plantas, iluminaci\u00f3n integrada en la estructura del local y ambiente muy joven.",
      en: "A university nightclub right in the old town, on R\u00faa Nova. Two floors, lighting built into the structure of the venue, and a very young crowd."
    }
  },
  {
    name: "Gabanna",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Gabanna+Discoteca+R%C3%BAa+da+Rep%C3%BAblica+Arxentina+Santiago+de+Compostela",
    description: {
      es: "Discoteca de referencia para universitarios, sobre todo m\u00fasica urbana. Entrada gratuita, en la zona de Rep\u00fablica de Arxentina.",
      en: "A go-to nightclub for university students, mostly urban music. Free entry, in the Rep\u00fablica de Arxentina area."
    }
  },
  {
    name: "Maycar",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Discoteca+Maycar+R%C3%BAa+do+Doutor+Teixeiro+Santiago+de+Compostela",
    description: {
      es: "Discoteca m\u00edtica de Santiago abierta desde 1969, con identidad muy marcada: rock, reggae, metal y m\u00fasica de los 90. Atrae a un p\u00fablico algo mayor que otras discotecas.",
      en: "An iconic Santiago nightclub open since 1969, with a strong identity: rock, reggae, metal and 90s music. Attracts a slightly older crowd than other clubs."
    }
  },
  {
    name: "Chocolate",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "",
    liveMusic: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pub+Chocolate+Santiago+de+Compostela",
    description: {
      es: "Pub cerca del Mercado de Abastos, acogedor y decorado de forma moderna. Los jueves suele haber conciertos en directo.",
      en: "A cozy, modern-decorated pub near the Mercado de Abastos. Thursdays usually feature live concerts."
    }
  },
  {
    name: "La Quintana Pub",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Quintana+Pub+Praza+da+Quintana+Santiago+de+Compostela",
    description: {
      es: "Justo frente a la Catedral, en la Praza da Quintana. Tiene la terraza m\u00e1s grande de la ciudad, con vistas impresionantes. Ambiente moderno y juvenil.",
      en: "Right in front of the Cathedral, on Praza da Quintana. Has the biggest terrace in the city, with striking views. A modern, youthful atmosphere."
    }
  },
  {
    name: "Albaroque",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pub+Albaroque+R%C3%BAa+da+Acibecher%C3%ADa+12+Santiago+de+Compostela",
    description: {
      es: "Pub del casco hist\u00f3rico con m\u00fasica actual y ambiente de baile. Buen sitio para empezar la noche.",
      en: "An old-town pub with current music and a dance-floor vibe. A good place to start the night."
    }
  },
  {
    name: "Bar Marte",
    music: "tranquila",
    tapa: false,
    gay: false,
    image: "",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar+Marte+Avenida+Rodrigo+del+Padr%C3%B3n+Santiago+de+Compostela",
    description: {
      es: "Bar m\u00edtico en la Avenida de Rodrigo del Padr\u00f3n, muy conocido por sus tapas de tortilla. Buena terraza para cenar tranquilo antes de salir.",
      en: "An iconic bar on Avenida de Rodrigo del Padr\u00f3n, well known for its tortilla tapas. A nice terrace for a calm dinner before heading out."
    }
  },
  {
    name: "Caf\u00e9 Casino",
    music: "tranquila",
    tapa: false,
    gay: false,
    image: "",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+Casino+Santiago+de+Compostela",
    description: {
      es: "Caf\u00e9 hist\u00f3rico de finales del siglo XIX, con ambiente literario y tranquilo. Ideal si busc\u00e1is algo con menos ruido.",
      en: "A historic late-19th-century caf\u00e9 with a calm, literary atmosphere. Ideal if you're after something quieter."
    }
  },
  {
    name: "Para\u00edso Perdido",
    music: "tranquila",
    tapa: false,
    gay: false,
    image: "",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Para%C3%ADso+Perdido+R%C3%BAa+de+San+Paio+de+Antealtares+Santiago+de+Compostela",
    description: {
      es: "Bar con ambiente de cueva, decoraci\u00f3n vintage (m\u00e1quinas de coser antiguas, objetos de otra \u00e9poca) en una plaza tranquila detr\u00e1s de Cervantes. Perfecto para desconectar del bullicio.",
      en: "A cave-like bar with vintage decor (old sewing machines, period pieces) on a quiet square behind Cervantes. Perfect for getting away from the bustle."
    }
  },
  {
    name: "O Filand\u00f3n",
    music: "tranquila",
    tapa: false,
    gay: false,
    image: "",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Vinoteca+O+Filand%C3%B3n+R%C3%BAa+da+Acibecher%C3%ADa+Santiago+de+Compostela",
    description: {
      es: "Vinoteca de piedra en la esquina de R\u00faa da Acibecher\u00eda con R\u00faa da Troia, con chimenea y carta de vinos muy amplia. Ambiente familiar y tranquilo.",
      en: "A stone wine bar on the corner of R\u00faa da Acibecher\u00eda and R\u00faa da Troia, with a fireplace and a very extensive wine list. A cozy, calm atmosphere."
    }
  },
  {
    name: "O Bandullo do Lamb\u00f3n",
    music: "tranquila",
    tapa: true,
    gay: false,
    image: "",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=O+Bandullo+do+Lamb%C3%B3n+R%C3%BAa+da+Ra%C3%AD\u00f1a+Santiago+de+Compostela",
    description: {
      es: "Bar de cervezas artesanas gallegas e internacionales en la R\u00faa da Ra\u00ed\u00f1a, con tapa gratis (aceitunas, quesos) con cada bebida. Ambiente relajado.",
      en: "A Galician and international craft beer bar on R\u00faa da Ra\u00ed\u00f1a, with a free tapa (olives, cheese) with every drink. A relaxed vibe."
    }
  },
  {
    name: "Damajuana",
    music: "tranquila",
    tapa: true,
    gay: false,
    image: "",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Damajuana+R%C3%BAa+da+Acibecher%C3%ADa+5+Santiago+de+Compostela",
    description: {
      es: "Mezcla de vida nocturna y gastronom\u00eda en la R\u00faa da Acibecher\u00eda, con terraza y ambiente acogedor. Buenas tapas y raciones gallegas.",
      en: "A mix of nightlife and dining on R\u00faa da Acibecher\u00eda, with a terrace and a cozy atmosphere. Good Galician tapas and shared plates."
    }
  },
  {
    name: "Tarasca",
    music: "moderna",
    tapa: false,
    gay: true,
    image: "",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tarasca+V%C3%ADa+Sacra+3+Santiago+de+Compostela",
    description: {
      es: "Uno de los locales de referencia del ambiente LGTBI+ en Santiago, m\u00fasica variada (de los 80 a la actualidad) y muy buen ambiente.",
      en: "One of the go-to LGBTQI+ venues in Santiago, with varied music (80s to today) and a great atmosphere."
    }
  },
  {
    name: "O Curruncho",
    music: "moderna",
    tapa: false,
    gay: true,
    image: "",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=O+Curruncho+R%C3%BAa+da+Algalia+de+Abaixo+Santiago+de+Compostela",
    description: {
      es: "Frente a Tarasca; cuando ambos se juntan por la noche se conoce como \"Tarruncho\". Ambiente LGTBI+ acogedor que atrae tambi\u00e9n a p\u00fablico diverso.",
      en: "Across from Tarasca; when both venues merge for the night it's known as \"Tarruncho.\" A welcoming LGBTQI+ vibe that also draws a diverse crowd."
    }
  },
  {
    name: "Bloom",
    music: "moderna",
    tapa: false,
    gay: true,
    image: "",
    mapsUrl: "https://www.google.es/maps/place/Bloom+(Santiago+de+Compostela)/@42.8821522,-8.5418256,17z",
    description: {
      es: "Club LGBT con espect\u00e1culos de drag, dos plantas con ambientes musicales distintos. Se anima especialmente a partir de la 1am.",
      en: "An LGBT club with drag shows, two floors with different musical vibes. Gets especially lively after 1am."
    }
  },
  {
    name: "TS - A Casa",
    music: "tranquila",
    tapa: false,
    gay: true,
    image: "",
    mapsUrl: "https://www.google.es/maps/place/TS+-+A+Casa+(Santiago+de+Compostela)/@42.8817913,-8.5356725,17z",
    description: {
      es: "Bar vegetariano en el barrio de San Pedro (considerado el barrio gay friendly de la ciudad), ambiente colorido e inclusivo.",
      en: "A vegetarian bar in the San Pedro neighborhood (considered the city's gay-friendly area), colorful and inclusive atmosphere."
    }
  },
  {
    name: "A Medusa Pub",
    music: "tranquila",
    tapa: false,
    gay: true,
    image: "",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=A+Medusa+Pub+Praza+de+Salvador+Parga+Santiago+de+Compostela",
    description: {
      es: "Pub de ambiente bohemio y muy LGTBI+ friendly, con juegos de mesa, opciones veganas, y conciertos ocasionales en el s\u00f3tano.",
      en: "A bohemian, very LGBTQ+-friendly pub, with board games, vegan options, and occasional gigs in the basement."
    }
  },
  {
    name: "Embora",
    music: "moderna",
    tapa: false,
    gay: false,
    liveMusic: true,
    image: "",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Embora+R%C3%BAa+de+Tras+San+Fiz+de+Solovio+Santiago+de+Compostela",
    description: {
      es: "Bar musical cerca del Mercado de Abastos, ambiente acogedor y decoraci\u00f3n moderna, con m\u00fasica en directo algunos d\u00edas. P\u00fablico muy variado: estudiantes, vecinos y visitantes por igual.",
      en: "A music bar near the Mercado de Abastos, cozy and modern, with live music some days. A very mixed crowd of students, locals, and visitors alike."
    }
  }
  // Añade más sitios copiando un bloque como los de arriba.
  // "mapsUrl" -> en Google Maps, busca el sitio, pulsa "Compartir" y copia el enlace aquí.
];


/* --------------------------------------------------------------------------
   5. DÓNDE COMER
   Cada sitio tiene:
     - category: "marisco" | "tradicional" | "tapas" | "cafeteria"  (define el icono)
     - mapsUrl:  enlace de Google Maps (botón "Compartir" > copiar enlace)
     - description: por qué lo recomiendas
   -------------------------------------------------------------------------- */

const COMER_ITEMS = [
  {
    name: "Bar La Tita",
    category: "tapas",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar+La+Tita+R%C3%BAa+Nova+Santiago+de+Compostela",
    description: {
      es: "Clásico de la Rúa Nova: con cada caña te ponen una tapa de tortilla poco hecha, sea la hora que sea. Suele llenarse, así que llegad con hambre y paciencia.",
      en: "A Rúa Nova classic: every beer comes with a soft, barely-set tortilla tapa, no matter the time of day. It fills up fast, so come hungry and patient."
    }
  },
  {
    name: "A Taberna do Bispo",
    category: "tapas",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=A+Taberna+do+Bispo+R%C3%BAa+do+Franco+Santiago+de+Compostela",
    description: {
      es: "En la Rúa do Franco, tapas gallegas con mucho marisco desde 2003. Ambiente animado y elegante a la vez.",
      en: "On Rúa do Franco, Galician tapas with a strong seafood focus, open since 2003. A lively yet elegant atmosphere."
    }
  },
  {
    name: "Mercado de Abastos — puestos de marisco",
    category: "marisco",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mercado+de+Abastos+Santiago+de+Compostela",
    description: {
      es: "Compra el marisco en el mercado y te lo cocinan al momento en alguno de los puestos-restaurante. Experiencia muy local.",
      en: "Buy the seafood at the market and have it cooked on the spot at one of the stall-restaurants. A very local experience."
    }
  },
  {
    name: "Sustituye — Taberna tradicional",
    category: "tradicional",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=taberna+casco+antiguo+Santiago+de+Compostela",
    description: {
      es: "Sustituye por una taberna del casco antiguo con buen pulpo á feira o caldo gallego.",
      en: "Replace with an old-town taberna with good octopus 'á feira' or Galician caldo."
    }
  },
  {
    name: "Sustituye — Tapas por Rúa do Franco",
    category: "tapas",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rúa+do+Franco+Santiago+de+Compostela",
    description: {
      es: "Sustituye por tu bar de tapas favorito de la zona de Rúa do Franco o Rúa da Raíña.",
      en: "Replace with your favorite tapas bar around Rúa do Franco or Rúa da Raíña."
    }
  },
  {
    name: "Sustituye — Cafetería / postre",
    category: "cafeteria",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=cafeteria+Santiago+de+Compostela",
    description: {
      es: "Sustituye por una cafetería o pastelería con tarta de Santiago para el capricho dulce.",
      en: "Replace with a café or pastry shop with tarta de Santiago for something sweet."
    }
  }
  // Añade más sitios copiando un bloque como los de arriba.
];


/* --------------------------------------------------------------------------
   6. FIESTAS DEL APÓSTOL 2026 — programa oficial (22-31 de julio)
   Justo los días previos a la boda (1 de agosto). Datos del programa oficial
   del Concello de Santiago. Si algo cambia de última hora, revisa
   santiagoturismo.com para confirmar horarios.
   -------------------------------------------------------------------------- */

const FIESTAS_ITEMS = [
  {
    isoDate: "2026-07-22",
    date: { es: "Miércoles 22 de julio", en: "Wednesday, July 22" },
    title: { es: "Pregón de apertura", en: "Opening ceremony" },
    description: {
      es: "21:30 h, pregón inaugural desde el balcón del Pazo de Raxoi (Praza do Obradoiro). A continuación, concierto de la Real Filharmonía de Galicia en la Praza da Quintana.",
      en: "9:30 pm, opening address from the balcony of the Pazo de Raxoi (Praza do Obradoiro), followed by a concert by the Real Filharmonía de Galicia in Praza da Quintana."
    }
  },
  {
    isoDate: "2026-07-23",
    date: { es: "Jueves 23 de julio", en: "Thursday, July 23" },
    title: { es: "Alborada y Julian Marley", en: "Alborada and Julian Marley" },
    description: {
      es: "Alborada matinal por el barrio a las 10:00 h, actividades infantiles en el Parque de Galeras desde las 17:30 h, concierto de Julian Marley a las 21:00 h en la Quintana y verbena con la Orquesta Finisterre en la Alameda a las 22:00 h.",
      en: "Morning alborada parade at 10 am, kids' activities in Parque de Galeras from 5:30 pm, a Julian Marley concert at 9 pm in Praza da Quintana, and a verbena with Orquesta Finisterre in the Alameda at 10 pm."
    }
  },
  {
    isoDate: "2026-07-24",
    date: { es: "Viernes 24 de julio", en: "Friday, July 24" },
    title: { es: "Fuegos del Apóstol", en: "Fireworks of the Apóstol" },
    description: {
      es: "Uno de los días grandes: desfile de Cabezudos e Xigantes al mediodía, conciertos de Belém Tajes y Lila Downs en la Quintana a las 21:00 h, y a las 23:30 h el gran espectáculo pirotécnico lanzado desde la Alameda, la Cidade da Cultura y el Parque Carlomagno. Después, videomapping sobre la fachada del Pazo de Raxoi hasta las 2:00 h.",
      en: "One of the big days: the Cabezudos e Xigantes parade at midday, concerts by Belém Tajes and Lila Downs in Praza da Quintana at 9 pm, and at 11:30 pm the main fireworks display launched from the Alameda, the Cidade da Cultura and Parque Carlomagno. Videomapping on the Pazo de Raxoi façade follows until 2 am."
    }
  },
  {
    isoDate: "2026-07-25",
    date: { es: "Sábado 25 de julio", en: "Saturday, July 25" },
    title: { es: "Día de Galicia y Festival do Folclore", en: "Galicia Day and Folk Festival" },
    description: {
      es: "Festividad del Apóstol y Día Nacional de Galicia. Comparsa de Cabezudos por el casco histórico a las 11:30 h y Jornada de Folclore Gallego desde las 21:00 h en la Quintana, con grupos tradicionales locales.",
      en: "Feast of the Apóstol and Galicia's national day. Cabezudos parade through the old town at 11:30 am, and a Galician Folk Festival from 9 pm in Praza da Quintana with local traditional groups."
    }
  },
  {
    isoDate: "2026-07-26",
    date: { es: "Domingo 26 de julio", en: "Sunday, July 26" },
    title: { es: "Día do Traxe (traje tradicional)", en: "Día do Traxe (traditional dress day)" },
    description: {
      es: "Jornada dedicada al folclore y al traje tradicional gallego: desfiles por el casco histórico desde las 11:45 h, y música tradicional todo el día en distintas plazas, con Felisa Segade y Budiño cerrando la noche en la Quintana.",
      en: "A day devoted to folklore and traditional Galician dress: parades through the old town from 11:45 am, and traditional music all day across several squares, with Felisa Segade and Budiño closing the night in Praza da Quintana."
    }
  },
  {
    isoDate: "2026-07-27",
    date: { es: "Lunes 27 de julio", en: "Monday, July 27" },
    title: { es: "Arranca Compostela Cinema", en: "Compostela Cinema begins" },
    description: {
      es: "Comienza el ciclo de cine al aire libre por distintos barrios de la ciudad. Por la noche, concierto de La Perra Blanco en la Quintana desde las 21:00 h.",
      en: "The open-air film series across the city's neighborhoods kicks off. In the evening, a concert by La Perra Blanco in Praza da Quintana from 9 pm."
    }
  },
  {
    isoDate: "2026-07-28",
    date: { es: "Martes 28 de julio", en: "Tuesday, July 28" },
    title: { es: "Ajedrez al aire libre y Festa Xitana", en: "Outdoor chess and Festa Xitana" },
    description: {
      es: "Ajedrez al aire libre en la Alameda de 17:00 a 20:00 h, cine al aire libre desde las 20:00 h, y por la noche Festa Xitana Galega en la Quintana desde las 21:00 h.",
      en: "Outdoor chess in the Alameda from 5 to 8 pm, open-air cinema from 8 pm, and a Festa Xitana Galega (Galician Roma festival) in Praza da Quintana from 9 pm."
    }
  },
  {
    isoDate: "2026-07-29",
    date: { es: "Miércoles 29 de julio", en: "Wednesday, July 29" },
    title: { es: "Música emergente en la Quintana", en: "Emerging music in Praza da Quintana" },
    description: {
      es: "Alborada matinal, ajedrez al aire libre en la Alameda, y por la noche uno de los conciertos más esperados: Bewis de la Rosa y Eris Mackenzie en la Quintana desde las 21:00 h.",
      en: "Morning alborada, outdoor chess in the Alameda, and in the evening one of the most anticipated concerts: Bewis de la Rosa and Eris Mackenzie in Praza da Quintana from 9 pm."
    }
  },
  {
    isoDate: "2026-07-30",
    date: { es: "Jueves 30 de julio", en: "Thursday, July 30" },
    title: { es: "Concierto de Shego", en: "Shego concert" },
    description: {
      es: "Cine al aire libre desde las 20:00 h y concierto de Shego en la Quintana a partir de las 21:00 h, seguido de verbena con la Orquestra Costa Dorada en la Alameda.",
      en: "Open-air cinema from 8 pm and a Shego concert in Praza da Quintana from 9 pm, followed by a verbena with Orquestra Costa Dorada in the Alameda."
    }
  },
  {
    isoDate: "2026-07-31",
    isWeddingEve: true,
    date: { es: "Viernes 31 de julio · víspera de la boda", en: "Friday, July 31 · the night before the wedding" },
    title: { es: "Cierre de fiestas: The Rapants y fuegos finales", en: "Closing night: The Rapants and final fireworks" },
    description: {
      es: "Último día de las fiestas, justo la noche antes de la boda. Cantos de Taberna por San Lázaro y rúa de San Pedro desde las 21:00 h, concierto de cierre de The Rapants en la Quintana a las 22:00 h, verbena con la Orquestra Suavecito en la Alameda, y a las 23:30 h el espectáculo pirotécnico de fin de fiestas.",
      en: "The last day of the festivities, the night right before the wedding. Cantos de Taberna in San Lázaro and rúa de San Pedro from 9 pm, a closing concert by The Rapants in Praza da Quintana at 10 pm, a verbena with Orquestra Suavecito in the Alameda, and the closing fireworks display at 11:30 pm."
    }
  },

  /* ---- Atardecer no Gaiás — ciclo de conciertos gratuitos en la Cidade
     da Cultura (jueves y viernes, 2 de julio - 14 de agosto de 2026,
     21:00 h, entrada libre). Solo incluimos aquí las fechas que caen
     dentro de la semana de la boda; el ciclo sigue después en agosto,
     consulta cidadedacultura.gal si os quedáis más días. ---- */
  {
    isoDate: "2026-07-23",
    isGaias: true,
    date: { es: "Jueves 23 de julio", en: "Thursday, July 23" },
    title: { es: "Atardecer no Gaiás: Bala", en: "Atardecer no Gaiás: Bala" },
    description: {
      es: "21:00 h, Praza Central da Cidade da Cultura, entrada libre. Concierto de Bala, dúo de stoner rock gallego, dentro del ciclo gratuito de conciertos al atardecer en el Gaiás.",
      en: "9 pm, Praza Central at the Cidade da Cultura, free entry. A concert by Bala, a Galician stoner rock duo, part of the free sunset concert series at the Gaiás."
    }
  },
  {
    isoDate: "2026-07-30",
    isGaias: true,
    date: { es: "Jueves 30 de julio", en: "Thursday, July 30" },
    title: { es: "Atardecer no Gaiás: Sheila Patricia", en: "Atardecer no Gaiás: Sheila Patricia" },
    description: {
      es: "21:00 h, Praza Central da Cidade da Cultura, entrada libre. Concierto de Sheila Patricia dentro del ciclo gratuito de conciertos al atardecer en el Gaiás.",
      en: "9 pm, Praza Central at the Cidade da Cultura, free entry. A concert by Sheila Patricia, part of the free sunset concert series at the Gaiás."
    }
  },
  {
    isoDate: "2026-07-31",
    isGaias: true,
    date: { es: "Viernes 31 de julio · víspera de la boda", en: "Friday, July 31 · the night before the wedding" },
    title: { es: "Atardecer no Gaiás: Lisdexia", en: "Atardecer no Gaiás: Lisdexia" },
    description: {
      es: "21:00 h, Praza Central da Cidade da Cultura, entrada libre. Concierto de Lisdexia, la misma noche del cierre de las fiestas — para quien prefiera un plan más tranquilo antes de la boda del día siguiente.",
      en: "9 pm, Praza Central at the Cidade da Cultura, free entry. A concert by Lisdexia, the same night as the festival closing — a calmer option for anyone who'd rather take it easy the night before the wedding."
    }
  }
  // Nota: no incluimos fechas después del 5 de agosto (límite pedido).
  // El siguiente Atardecer no Gaiás tras la boda cae el 6 de agosto, ya
  // fuera de esa ventana — si en el futuro queréis ampliar el rango,
  // el ciclo sigue hasta el 14 de agosto (datos en cidadedacultura.gal).
];


/* --------------------------------------------------------------------------
   7. PASAPORTE PARÍS-DAKAR
   La ruta tradicional de bares de Santiago: empieza en la cafetería O París
   (Porta Faxeira / Rúa dos Bautizados) y termina en el bar Dakar (Rúa do
   Franco), pasando por la Rúa do Franco y la Rúa da Raíña. La costumbre es
   tomar una cunca de vino Ribeiro en cada parada.

   Ya tenemos puestas la parada de salida y la de meta (son fijas, forman
   parte de la tradición). Rellena las paradas intermedias con los bares
   que recomendéis vosotros — no hace falta que sean muchas, con 4-6 basta.
   -------------------------------------------------------------------------- */

const PARIS_DAKAR_ITEMS = [
  {
    name: "Café Bar Paris",
    isStart: true,
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJYbzF2ED-Lg0RlWsGaqW_JjE",
    tip: {
      es: "El punto de salida histórico de la ruta, en Rúa dos Bautizados. Negocio familiar con casi 30 años detrás de la barra. Empezad aquí con una primera cunca.",
      en: "The route's historic starting point, on Rúa dos Bautizados. A family-run spot with nearly 30 years behind the bar. Start here with your first cunca."
    }
  },
  {
    name: "O'42",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJRdq2JUH-Lg0RZozSa1goQlI",
    tip: {
      es: "También conocido como Mesón 42, en plena Rúa do Franco. Buenas raciones para compartir, sobre todo si vais en grupo.",
      en: "Also known as Mesón 42, right on Rúa do Franco. Good sharing plates, especially if you're in a group."
    }
  },
  {
    name: "Porto",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar+Porto+R%C3%BAa+do+Franco+Santiago+de+Compostela",
    tip: {
      es: "⚠️ No hemos podido confirmar la ubicación exacta en Google Maps — verificadla vosotros antes de publicar y sustituid este enlace por el correcto.",
      en: "⚠️ We couldn't confirm the exact location on Google Maps — please verify it yourselves before publishing and replace this link with the right one."
    }
  },
  {
    name: "Bar Restaurante Orella",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJVV7mNUH-Lg0RWwWJnPg1qFI",
    tip: {
      es: "En la Rúa da Raíña. Buen marisco a la plancha a precio justo — sencillo y muy recomendable.",
      en: "On Rúa da Raíña. Good grilled seafood at a fair price — simple and well worth it."
    }
  },
  {
    name: "Nova Galicia",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Nova+Galicia+R%C3%BAa+da+Ra%C3%ADña+Santiago+de+Compostela",
    tip: {
      es: "⚠️ No hemos podido confirmar la ubicación exacta en Google Maps — verificadla vosotros antes de publicar y sustituid este enlace por el correcto.",
      en: "⚠️ We couldn't confirm the exact location on Google Maps — please verify it yourselves before publishing and replace this link with the right one."
    }
  },
  {
    name: "Carpe Diem",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJAzaPJkH-Lg0RdO6U3uGMZlc",
    tip: {
      es: "En Rúa do Franco 48. Una parada más de la ruta clásica.",
      en: "At Rúa do Franco 48. Another classic stop on the route."
    }
  },
  {
    name: "Catedral",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar+Catedral+R%C3%BAa+do+Franco+Santiago+de+Compostela",
    tip: {
      es: "⚠️ No hemos podido confirmar la ubicación exacta en Google Maps — verificadla vosotros antes de publicar y sustituid este enlace por el correcto.",
      en: "⚠️ We couldn't confirm the exact location on Google Maps — please verify it yourselves before publishing and replace this link with the right one."
    }
  },
  {
    name: "El Submarino",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJlezXJUH-Lg0RJ-PC6KZ9eZQ",
    tip: {
      es: "Producto fresco de mercado en plena Rúa do Franco, formato de barra pequeña.",
      en: "Fresh market produce right on Rúa do Franco, small bar-style spot."
    }
  },
  {
    name: "Bar Trafalgar",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJGzOTVkH-Lg0RXYUNIGbgCSg",
    tip: {
      es: "Uno de los clásicos de la Rúa da Raíña, famoso por sus \"tigres rabiosos\" (mejillones picantes) y la tapa gratis con cada bebida.",
      en: "One of the Rúa da Raíña classics, famous for its spicy stuffed mussels (\"tigres rabiosos\") and a free tapa with every drink."
    }
  },
  {
    name: "A Barrola",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJ0UHDMEH-Lg0Rnhip7EA-2mk",
    tip: {
      es: "Marisquería de las de mantel, un punto más elegante de la ruta — ideal si os apetece darse un capricho con marisco.",
      en: "A proper white-tablecloth seafood restaurant, a slightly more upscale point on the route — great if you fancy splurging on shellfish."
    }
  },
  {
    name: "San Jaime",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJtSJVU0H-Lg0RUk3dhY9m2Iw",
    tip: {
      es: "En la Praza de Fonseca, con terraza a la plaza. Muy frecuentado por gente local.",
      en: "On Praza de Fonseca, with terrace seating on the square. Popular with locals."
    }
  },
  {
    name: "Orense",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJ2_jYNUH-Lg0RuBDsn3NsZtI",
    tip: {
      es: "Bar de barrica en la Rúa da Raíña, vino de la casa servido directo del tonel. Ambiente muy local, nada turístico.",
      en: "A barrel-wine bar on Rúa da Raíña, house wine served straight from the cask. Very local vibe, not touristy at all."
    }
  },
  {
    name: "O Gato Negro",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJW8J_SUH-Lg0RnFOWtBtEhn4",
    tip: {
      es: "Más de 100 años de historia en la Rúa da Raíña. Está escondido en un callejón — buscad el gato negro en la fachada y la puerta verde. Suele llenarse rápido.",
      en: "Over 100 years of history on Rúa da Raíña. It's tucked down a small alley — look for the black cat on the façade and the green door. Fills up fast."
    }
  },
  {
    name: "El Cayado",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJMyKzMEH-Lg0Rl3Pn5bD9XcE",
    tip: {
      es: "En Rúa do Franco 20. Aviso: en Google Maps este local aparece también asociado a un cambio de nombre reciente — comprobad in situ que sigue siendo el que buscáis.",
      en: "At Rúa do Franco 20. Heads up: on Google Maps this spot also shows up linked to a recent name change — double-check on the spot that it's still the one you're after."
    }
  },
  {
    name: "Restaurante Dakar",
    isFinish: true,
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJDSwLSUH-Lg0RPWtsrm1GNCY",
    tip: {
      es: "La meta tradicional de la ruta, en Rúa do Franco 13, con terraza a la calle. Si llegáis hasta aquí, ¡ya sois parte de la historia del París-Dakar!",
      en: "The route's traditional finish line, at Rúa do Franco 13, with street-side terrace seating. If you make it here, you're officially part of Paris-Dakar history!"
    }
  },

  // ---- Paradas opcionales (fuera de la ruta clásica Franco/Raíña) ----
  {
    name: "A Taberna do Bispo",
    isOptional: true,
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJ08-pOkH-Lg0R9G3LD9V3pv8",
    tip: {
      es: "Rúa do Franco 37. Tapas servidas en formato barra: te sientas y vas señalando lo que te apetece de lo que hay expuesto.",
      en: "Rúa do Franco 37. Bar-style tapas: sit down and point at whatever looks good from what's on display."
    }
  },
  {
    name: "Casa de Xantar O Dezaseis",
    isOptional: true,
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJBz7wikX-Lg0RY3oNkxsPBR8",
    tip: {
      es: "Rúa de San Pedro 16, un poco fuera del núcleo Franco/Raíña. Ambiente acogedor y muy querido por los vecinos del barrio.",
      en: "Rúa de San Pedro 16, a bit outside the core Franco/Raíña stretch. Cozy atmosphere, well loved by neighborhood regulars."
    }
  },
  {
    name: "Mesón do Pulpo",
    isOptional: true,
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJ75gGLFz-Lg0R4jdVeux_NTo",
    tip: {
      es: "Algo alejado del centro (Rúa de Vista Alegre), conocido sobre todo por su pulpo. Más plan tranquilo de sobremesa que parada rápida.",
      en: "A bit outside the center (Rúa de Vista Alegre), known especially for its octopus. More of a relaxed sit-down stop than a quick one."
    }
  },
  {
    name: "Casa Camilo",
    isOptional: true,
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJrVwUSUH-Lg0RPqn1WXecGxg",
    tip: {
      es: "Rúa da Raíña 24. Restaurante de marisco con ambiente animado, buena opción si queréis alargar la noche con algo más de comida.",
      en: "Rúa da Raíña 24. A lively seafood restaurant, a good option if you want to stretch the night out with a proper sit-down bite."
    }
  }
];


/* --------------------------------------------------------------------------
   8. DATOS DE INTERÉS
   Información práctica suelta: teléfonos, transportes, y cualquier otro
   dato útil para los invitados. Cada bloque tiene:
     - icon: "taxi" | "bus" | "phoneEmergency"  (o cualquier otro que añadas
       a js/icons.js más adelante)
     - title / description: como siempre, versión es/en
   -------------------------------------------------------------------------- */

const DATOS_INTERES_ITEMS = [
  {
    icon: "taxi",
    title: { es: "Radio Taxi Compostela", en: "Radio Taxi Compostela" },
    description: {
      es: "981 56 92 92 — servicio 24 horas todos los días del año. También se puede pedir con la app Taxiclick. Otra opción es Taxi Santiago: 619 492 393.",
      en: "981 56 92 92 — 24-hour service, every day of the year. You can also book through the Taxiclick app. Another option is Taxi Santiago: 619 492 393."
    }
  },
  {
    icon: "bus",
    title: { es: "Autobús al aeropuerto (línea 6A)", en: "Airport bus (line 6A)" },
    description: {
      es: "El autobús urbano línea 6A conecta el Aeropuerto de Santiago (Lavacolla) con el centro (Praza de Galicia, Rúa da Rosa, Estación Intermodal). Sale cada 20-30 minutos, aproximadamente de 7:00 a 23:00. El billete cuesta 1€ y se paga en efectivo al subir (no aceptan billetes de más de 20€). El trayecto dura unos 25-30 minutos.",
      en: "Urban bus line 6A connects Santiago Airport (Lavacolla) with the city center (Praza de Galicia, Rúa da Rosa, Estación Intermodal). It runs every 20-30 minutes, roughly from 7:00 am to 11:00 pm. The fare is €1, paid in cash on board (no bills over €20 accepted). The ride takes about 25-30 minutes."
    }
  },
  {
    icon: "phoneEmergency",
    title: { es: "Emergencias", en: "Emergencies" },
    description: {
      es: "112 — número de emergencias gratuito válido en toda España (ambulancia, policía, bomberos). Se puede llamar desde cualquier teléfono, incluso sin cobertura o saldo, y atienden en varios idiomas.",
      en: "112 — free emergency number valid throughout Spain (ambulance, police, fire). It can be called from any phone, even without signal or credit, and operators are available in multiple languages."
    }
  }
  // Añade más datos prácticos copiando un bloque como los de arriba.
];
