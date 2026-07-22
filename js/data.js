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
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 11 — sin rellenar", en: "Challenge 11 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 11.",
      en: "Replace this text with the story/fun fact for challenge 11."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-12",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 12 — sin rellenar", en: "Challenge 12 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 12.",
      en: "Replace this text with the story/fun fact for challenge 12."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-13",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 13 — sin rellenar", en: "Challenge 13 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 13.",
      en: "Replace this text with the story/fun fact for challenge 13."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-14",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 14 — sin rellenar", en: "Challenge 14 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 14.",
      en: "Replace this text with the story/fun fact for challenge 14."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-15",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 15 — sin rellenar", en: "Challenge 15 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 15.",
      en: "Replace this text with the story/fun fact for challenge 15."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-16",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 16 — sin rellenar", en: "Challenge 16 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 16.",
      en: "Replace this text with the story/fun fact for challenge 16."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-17",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 17 — sin rellenar", en: "Challenge 17 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 17.",
      en: "Replace this text with the story/fun fact for challenge 17."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-18",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 18 — sin rellenar", en: "Challenge 18 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 18.",
      en: "Replace this text with the story/fun fact for challenge 18."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-19",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 19 — sin rellenar", en: "Challenge 19 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 19.",
      en: "Replace this text with the story/fun fact for challenge 19."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-20",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 20 — sin rellenar", en: "Challenge 20 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 20.",
      en: "Replace this text with the story/fun fact for challenge 20."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-21",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 21 — sin rellenar", en: "Challenge 21 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 21.",
      en: "Replace this text with the story/fun fact for challenge 21."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-22",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 22 — sin rellenar", en: "Challenge 22 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 22.",
      en: "Replace this text with the story/fun fact for challenge 22."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-23",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 23 — sin rellenar", en: "Challenge 23 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 23.",
      en: "Replace this text with the story/fun fact for challenge 23."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-24",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 24 — sin rellenar", en: "Challenge 24 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 24.",
      en: "Replace this text with the story/fun fact for challenge 24."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-25",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 25 — sin rellenar", en: "Challenge 25 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 25.",
      en: "Replace this text with the story/fun fact for challenge 25."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-26",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 26 — sin rellenar", en: "Challenge 26 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 26.",
      en: "Replace this text with the story/fun fact for challenge 26."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-27",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 27 — sin rellenar", en: "Challenge 27 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 27.",
      en: "Replace this text with the story/fun fact for challenge 27."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-28",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 28 — sin rellenar", en: "Challenge 28 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 28.",
      en: "Replace this text with the story/fun fact for challenge 28."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-29",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 29 — sin rellenar", en: "Challenge 29 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 29.",
      en: "Replace this text with the story/fun fact for challenge 29."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-30",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 30 — sin rellenar", en: "Challenge 30 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 30.",
      en: "Replace this text with the story/fun fact for challenge 30."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-31",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 31 — sin rellenar", en: "Challenge 31 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 31.",
      en: "Replace this text with the story/fun fact for challenge 31."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-32",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 32 — sin rellenar", en: "Challenge 32 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 32.",
      en: "Replace this text with the story/fun fact for challenge 32."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-33",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 33 — sin rellenar", en: "Challenge 33 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 33.",
      en: "Replace this text with the story/fun fact for challenge 33."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-34",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 34 — sin rellenar", en: "Challenge 34 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 34.",
      en: "Replace this text with the story/fun fact for challenge 34."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
  },
  {
    id: "reto-35",
    clueImage: "", // pega aquí el enlace DIRECTO de imgur (https://i.imgur.com/XXXXX.jpeg)
    title: { es: "Reto 35 — sin rellenar", en: "Challenge 35 — not filled in yet" },
    mapsQuery: "", // ej: "Praza da Quintana, Santiago de Compostela"
    lat: null,
    lng: null,
    reward: {
      es: "Sustituye este texto por la historia/curiosidad del reto 35.",
      en: "Replace this text with the story/fun fact for challenge 35."
    },
    rewardImage: "" // pega aquí el enlace DIRECTO de la foto premio
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
      es: "Ciudad de las Torre de Hércules y el paseo marítimo más largo de Europa. Buen marisco en la zona vieja.",
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
   Cada sitio tiene tres filtros:
     - music:  "celta" | "moderna" | "tranquila"
     - tapa:   true | false  (¿ponen tapa con la bebida?)
     - gay:    true | false  (¿es un sitio gay friendly?)
   Verifica bien estos datos antes de publicarlos — son ejemplos de partida.
   -------------------------------------------------------------------------- */

const SALIR_ITEMS = [
  {
    name: "Modus Vivendi",
    music: "celta",
    tapa: false,
    gay: false,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Modus+Vivendi+Santiago+de+Compostela",
    description: {
      es: "Uno de los pubs con más solera de Santiago, ambiente de música celta y folk en un antiguo pajar de piedra.",
      en: "One of Santiago's most iconic pubs, Celtic and folk music vibe inside an old stone hay barn."
    }
  },
  {
    name: "Sustituye — Bar de ejemplo",
    music: "moderna",
    tapa: true,
    gay: false,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rúa+do+Franco+Santiago+de+Compostela",
    description: {
      es: "Sustituye por un bar real de la Rúa do Franco o Rúa da Raíña con tapa incluida.",
      en: "Replace with a real bar on Rúa do Franco or Rúa da Raíña that includes a tapa."
    }
  },
  {
    name: "Sustituye — Plan tranquilo",
    music: "tranquila",
    tapa: true,
    gay: false,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santiago+de+Compostela+vinoteca",
    description: {
      es: "Sustituye por una terraza o vinoteca tranquila para charlar.",
      en: "Replace with a quiet terrace or wine bar for chatting."
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
    date: { es: "Miércoles 22 de julio", en: "Wednesday, July 22" },
    title: { es: "Pregón de apertura", en: "Opening ceremony" },
    description: {
      es: "21:30 h, pregón inaugural desde el balcón del Pazo de Raxoi (Praza do Obradoiro). A continuación, concierto de la Real Filharmonía de Galicia en la Praza da Quintana.",
      en: "9:30 pm, opening address from the balcony of the Pazo de Raxoi (Praza do Obradoiro), followed by a concert by the Real Filharmonía de Galicia in Praza da Quintana."
    }
  },
  {
    date: { es: "Jueves 23 de julio", en: "Thursday, July 23" },
    title: { es: "Alborada y Julian Marley", en: "Alborada and Julian Marley" },
    description: {
      es: "Alborada matinal por el barrio a las 10:00 h, actividades infantiles en el Parque de Galeras desde las 17:30 h, concierto de Julian Marley a las 21:00 h en la Quintana y verbena con la Orquesta Finisterre en la Alameda a las 22:00 h.",
      en: "Morning alborada parade at 10 am, kids' activities in Parque de Galeras from 5:30 pm, a Julian Marley concert at 9 pm in Praza da Quintana, and a verbena with Orquesta Finisterre in the Alameda at 10 pm."
    }
  },
  {
    date: { es: "Viernes 24 de julio", en: "Friday, July 24" },
    title: { es: "Fuegos del Apóstol", en: "Fireworks of the Apóstol" },
    description: {
      es: "Uno de los días grandes: desfile de Cabezudos e Xigantes al mediodía, conciertos de Belém Tajes y Lila Downs en la Quintana a las 21:00 h, y a las 23:30 h el gran espectáculo pirotécnico lanzado desde la Alameda, la Cidade da Cultura y el Parque Carlomagno. Después, videomapping sobre la fachada del Pazo de Raxoi hasta las 2:00 h.",
      en: "One of the big days: the Cabezudos e Xigantes parade at midday, concerts by Belém Tajes and Lila Downs in Praza da Quintana at 9 pm, and at 11:30 pm the main fireworks display launched from the Alameda, the Cidade da Cultura and Parque Carlomagno. Videomapping on the Pazo de Raxoi façade follows until 2 am."
    }
  },
  {
    date: { es: "Sábado 25 de julio", en: "Saturday, July 25" },
    title: { es: "Día de Galicia y Festival do Folclore", en: "Galicia Day and Folk Festival" },
    description: {
      es: "Festividad del Apóstol y Día Nacional de Galicia. Comparsa de Cabezudos por el casco histórico a las 11:30 h y Jornada de Folclore Gallego desde las 21:00 h en la Quintana, con grupos tradicionales locales.",
      en: "Feast of the Apóstol and Galicia's national day. Cabezudos parade through the old town at 11:30 am, and a Galician Folk Festival from 9 pm in Praza da Quintana with local traditional groups."
    }
  },
  {
    date: { es: "Domingo 26 de julio", en: "Sunday, July 26" },
    title: { es: "Día do Traxe (traje tradicional)", en: "Día do Traxe (traditional dress day)" },
    description: {
      es: "Jornada dedicada al folclore y al traje tradicional gallego: desfiles por el casco histórico desde las 11:45 h, y música tradicional todo el día en distintas plazas, con Felisa Segade y Budiño cerrando la noche en la Quintana.",
      en: "A day devoted to folklore and traditional Galician dress: parades through the old town from 11:45 am, and traditional music all day across several squares, with Felisa Segade and Budiño closing the night in Praza da Quintana."
    }
  },
  {
    date: { es: "Lunes 27 de julio", en: "Monday, July 27" },
    title: { es: "Arranca Compostela Cinema", en: "Compostela Cinema begins" },
    description: {
      es: "Comienza el ciclo de cine al aire libre por distintos barrios de la ciudad. Por la noche, concierto de La Perra Blanco en la Quintana desde las 21:00 h.",
      en: "The open-air film series across the city's neighborhoods kicks off. In the evening, a concert by La Perra Blanco in Praza da Quintana from 9 pm."
    }
  },
  {
    date: { es: "Martes 28 de julio", en: "Tuesday, July 28" },
    title: { es: "Ajedrez al aire libre y Festa Xitana", en: "Outdoor chess and Festa Xitana" },
    description: {
      es: "Ajedrez al aire libre en la Alameda de 17:00 a 20:00 h, cine al aire libre desde las 20:00 h, y por la noche Festa Xitana Galega en la Quintana desde las 21:00 h.",
      en: "Outdoor chess in the Alameda from 5 to 8 pm, open-air cinema from 8 pm, and a Festa Xitana Galega (Galician Roma festival) in Praza da Quintana from 9 pm."
    }
  },
  {
    date: { es: "Miércoles 29 de julio", en: "Wednesday, July 29" },
    title: { es: "Música emergente en la Quintana", en: "Emerging music in Praza da Quintana" },
    description: {
      es: "Alborada matinal, ajedrez al aire libre en la Alameda, y por la noche uno de los conciertos más esperados: Bewis de la Rosa y Eris Mackenzie en la Quintana desde las 21:00 h.",
      en: "Morning alborada, outdoor chess in the Alameda, and in the evening one of the most anticipated concerts: Bewis de la Rosa and Eris Mackenzie in Praza da Quintana from 9 pm."
    }
  },
  {
    date: { es: "Jueves 30 de julio", en: "Thursday, July 30" },
    title: { es: "Concierto de Shego", en: "Shego concert" },
    description: {
      es: "Cine al aire libre desde las 20:00 h y concierto de Shego en la Quintana a partir de las 21:00 h, seguido de verbena con la Orquestra Costa Dorada en la Alameda.",
      en: "Open-air cinema from 8 pm and a Shego concert in Praza da Quintana from 9 pm, followed by a verbena with Orquestra Costa Dorada in the Alameda."
    }
  },
  {
    date: { es: "Viernes 31 de julio · víspera de la boda", en: "Friday, July 31 · the night before the wedding" },
    title: { es: "Cierre de fiestas: The Rapants y fuegos finales", en: "Closing night: The Rapants and final fireworks" },
    description: {
      es: "Último día de las fiestas, justo la noche antes de la boda. Cantos de Taberna por San Lázaro y rúa de San Pedro desde las 21:00 h, concierto de cierre de The Rapants en la Quintana a las 22:00 h, verbena con la Orquestra Suavecito en la Alameda, y a las 23:30 h el espectáculo pirotécnico de fin de fiestas.",
      en: "The last day of the festivities, the night right before the wedding. Cantos de Taberna in San Lázaro and rúa de San Pedro from 9 pm, a closing concert by The Rapants in Praza da Quintana at 10 pm, a verbena with Orquestra Suavecito in the Alameda, and the closing fireworks display at 11:30 pm."
    }
  }
  // Nota: si el programa sufre cambios de última hora, verifica en santiagoturismo.com
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
