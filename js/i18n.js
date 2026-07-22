/* ==========================================================================
   Sistema de idiomas (ES/EN)
   - El texto de la interfaz (menús, botones, títulos fijos) vive aquí en UI_TEXT.
   - El contenido "editable" (qué ver, tengo coche, salir, foto explorer)
     vive en data.js, cada texto con sus dos versiones {es: "...", en: "..."}.
   ========================================================================== */

const UI_TEXT = {
  nav_home:        { es: "Inicio",          en: "Home" },
  nav_photo:       { es: "Foto Explorer",   en: "Photo Explorer" },
  nav_ver:         { es: "Qué ver en un día", en: "One-day guide" },
  nav_coche:       { es: "¡Tengo coche!",   en: "I have a car!" },
  nav_salir:       { es: "¿Por dónde salir?", en: "Nightlife guide" },
  nav_comer:       { es: "Dónde comer",     en: "Where to eat" },
  nav_fiestas:     { es: "Fiestas del Apóstol", en: "Fiestas del Apóstol" },
  nav_parisdakar:  { es: "Pasaporte París-Dakar", en: "Paris-Dakar passport" },
  nav_datos:       { es: "Datos de interés", en: "Practical info" },

  hero_eyebrow:    { es: "Nos casamos", en: "We're getting married" },
  hero_date:       { es: "1 de agosto de 2026 · Santiago de Compostela", en: "August 1, 2026 · Santiago de Compostela" },
  hero_sub:        { es: "Todo lo que necesitas para el gran día y para descubrir la ciudad mientras estás por aquí.", en: "Everything you need for the big day, and for discovering the city while you're here." },

  home_photo_title: { es: "Foto Explorer", en: "Photo Explorer" },
  home_photo_desc:  { es: "Un juego de pistas por la ciudad. Encuentra el lugar y consigue tu sello.", en: "A clue-hunting game around the city. Find the spot and earn your stamp." },

  home_ver_title:  { es: "Qué ver en un día", en: "One-day guide" },
  home_ver_desc:   { es: "Nuestra ruta favorita para descubrir Santiago si solo tienes un día.", en: "Our favorite route to discover Santiago if you only have one day." },

  home_coche_title: { es: "¡Tengo coche!", en: "I have a car!" },
  home_coche_desc:  { es: "Escapadas por Galicia y A Coruña si te quieres alejar un poco de la ciudad.", en: "Day trips around Galicia and A Coruña if you fancy venturing outside the city." },

  home_salir_title: { es: "¿Por dónde salir?", en: "Nightlife guide" },
  home_salir_desc:  { es: "Bares y planes nocturnos, filtrados por lo que te apetezca esta noche.", en: "Bars and night plans, filtered by whatever you're in the mood for tonight." },

  home_comer_title: { es: "Dónde comer", en: "Where to eat" },
  home_comer_desc:  { es: "Nuestros sitios de confianza para comer bien en Santiago.", en: "Our trusted spots to eat well in Santiago." },

  home_fiestas_title: { es: "Fiestas del Apóstol", en: "Fiestas del Apóstol" },
  home_fiestas_desc:  { es: "El programa oficial del 22 al 31 de julio, justo antes de la boda.", en: "The official program from July 22 to 31, right before the wedding." },

  home_parisdakar_title: { es: "Pasaporte París-Dakar", en: "Paris-Dakar passport" },
  home_parisdakar_desc:  { es: "La mítica ruta de bares de los estudiantes compostelanos, convertida en pasaporte de sellos.", en: "Santiago students' legendary bar route, turned into a stamp passport." },

  home_datos_title: { es: "Datos de interés", en: "Practical info" },
  home_datos_desc:  { es: "Teléfonos, transporte y otra información práctica para el día a día en Santiago.", en: "Phone numbers, transport and other practical info for getting around Santiago." },

  footer_text: { es: "Hecho con cariño por Niall & Javi", en: "Made with love by Niall & Javi" },

  page_photo_title: { es: "Foto Explorer", en: "Photo Explorer" },
  page_photo_sub: {
    es: "Cada tarjeta esconde un rincón de Santiago. Ábrela, sigue las pistas y márcalo como encontrado cuando estés delante del sitio.",
    en: "Each card hides a corner of Santiago. Open it, follow the clues, and mark it found once you're standing right in front of it."
  },
  photo_progress: { es: "sellos conseguidos", en: "stamps collected" },
  photo_clue1: { es: "Pista · La foto", en: "Clue · The photo" },
  photo_reveal_clue3: { es: "Revelar ubicación", en: "Reveal location" },
  photo_open_maps: { es: "Abrir en Google Maps", en: "Open in Google Maps" },
  photo_found_btn: { es: "¡Lo he encontrado!", en: "I found it!" },
  photo_reward_title: { es: "Sello conseguido", en: "Stamp earned" },
  photo_close: { es: "Cerrar", en: "Close" },
  photo_locked_hint: { es: "Toca para empezar", en: "Tap to start" },
  fe_find_this: { es: "Encuentra este lugar", en: "Find this place" },
  fe_reveal_clue: { es: "Revelar pista", en: "Reveal clue" },
  photo_found_hint: { es: "Encontrado", en: "Found" },
  photo_reset: { es: "Reiniciar progreso", en: "Reset progress" },

  fe_locating: { es: "Detectando tu ubicación…", en: "Detecting your location…" },
  fe_your_location: { es: "tu ubicación", en: "your location" },
  fe_starting_from: { es: "Empezando desde:", en: "Starting from:" },
  fe_choose_start: {
    es: "No hemos podido detectar tu ubicación. Elige desde dónde empiezas:",
    en: "We couldn't detect your location. Choose where you're starting from:"
  },
  fe_no_image_yet: {
    es: "(Aún no se ha añadido la foto de esta pista)",
    en: "(No photo has been added for this clue yet)"
  },

  page_ver_title: { es: "Qué ver en un día", en: "One-day guide" },
  page_ver_sub: {
    es: "Si solo tienes un día en Santiago, esta es la ruta que te recomendamos, en orden.",
    en: "If you only have one day in Santiago, here's the route we recommend, in order."
  },

  page_coche_title: { es: "¡Tengo coche!", en: "I have a car!" },
  page_coche_sub: {
    es: "Si te apetece alquilar un coche y salir de la ciudad, estas son nuestras recomendaciones por Galicia y A Coruña.",
    en: "If you fancy renting a car and heading out of the city, here are our recommendations around Galicia and A Coruña."
  },
  coche_distance: { es: "Distancia desde Santiago", en: "Distance from Santiago" },

  page_salir_title: { es: "¿Por dónde salir?", en: "Nightlife guide" },
  page_salir_sub: {
    es: "Santiago no compite en tamaño con Madrid o Barcelona, pero sí en ambiente: al ser ciudad universitaria y de peregrinación, cada noche mezcla a estudiantes, vecinos, turistas y peregrinos en un público muy diverso. No existe un \"barrio gay\" como Chueca, pero sí una cultura nocturna donde todo el mundo convive con naturalidad —Bloom y O Curruncho son los referentes más claros del ambiente LGTBIQ+. Filtra abajo por lo que te apetezca esta noche.",
    en: "Santiago doesn't compete with Madrid or Barcelona in size, but it does in atmosphere: as a university and pilgrimage city, every night mixes students, locals, tourists, and pilgrims into a wonderfully varied crowd. There's no \"gay district\" like Chueca, but there is a nightlife culture where everyone mixes naturally — Bloom and O Curruncho are the clearest go-to spots for the LGBTQI+ scene. Filter below by whatever you're in the mood for tonight."
  },
  salir_filter_music: { es: "Música", en: "Music" },
  salir_filter_tapa: { es: "Tapa con la bebida", en: "Tapa with your drink" },
  salir_filter_gay: { es: "Gay friendly", en: "Gay friendly" },
  salir_filter_irish: { es: "Irlandés", en: "Irish" },
  salir_filter_live: { es: "Música en directo", en: "Live music" },
  salir_filter_all: { es: "Todos", en: "All" },
  salir_music_celta: { es: "Celta / Folk", en: "Celtic / Folk" },
  salir_music_moderna: { es: "Moderna", en: "Modern" },
  salir_music_tranquila: { es: "Tranquila", en: "Chill" },
  salir_no_results: { es: "No hay planes con esos filtros. Prueba a quitar alguno.", en: "No spots match those filters. Try removing one." },
  maps_link: { es: "Ver en Google Maps", en: "View on Google Maps" },

  page_comer_title: { es: "Dónde comer", en: "Where to eat" },
  page_comer_sub: {
    es: "Nuestros sitios de confianza en Santiago, con ubicación en Google Maps.",
    en: "Our trusted spots in Santiago, with a Google Maps location."
  },
  comer_cat_marisco: { es: "Marisco", en: "Seafood" },
  comer_cat_tradicional: { es: "Tradicional", en: "Traditional" },
  comer_cat_tapas: { es: "Tapas", en: "Tapas" },
  comer_cat_cafeteria: { es: "Cafetería / postre", en: "Café / dessert" },

  page_fiestas_title: { es: "Fiestas del Apóstol 2026", en: "Fiestas del Apóstol 2026" },
  page_fiestas_sub: {
    es: "El programa oficial de las fiestas patronales de Santiago, del 22 al 31 de julio de 2026 — justo los días antes de la boda, incluyendo los Atardecer no Gaiás. La víspera, 31 de julio, es el cierre de fiestas. Cubrimos como máximo hasta el 5 de agosto, por si os quedáis unos días más después de la boda (no hemos encontrado otros grandes eventos confirmados en la ciudad para esas fechas). Esta lista se actualiza sola: las citas que ya han pasado desaparecen automáticamente.",
    en: "The official program for Santiago's patron saint festivities, July 22–31, 2026 — right in the days before the wedding, including the Atardecer no Gaiás sunset concerts. July 31 is the closing night. We cover up to August 5 at most, in case you're staying a few extra days after the wedding (we didn't find other major confirmed events in the city for those dates). This list updates itself: past dates disappear automatically."
  },
  fiestas_wedding_eve: { es: "Víspera de la boda", en: "Night before the wedding" },
  fiestas_all_past: {
    es: "Las Fiestas del Apóstol de este año ya han terminado. ¡Nos vemos en la boda!",
    en: "This year's Fiestas del Apóstol have already wrapped up. See you at the wedding!"
  },

  page_parisdakar_title: { es: "Pasaporte París-Dakar", en: "Paris-Dakar passport" },
  page_parisdakar_sub: {
    es: "La ruta de bares más tradicional de Santiago, con formato de credencial: un sello por cada parada superada.",
    en: "Santiago's most traditional bar route, passport-style: one stamp for every stop you complete."
  },
  parisdakar_history: {
    es: "El «París-Dakar» nació a finales de los años 80 entre estudiantes universitarios de Santiago, como un rally con guiño de humor a la carrera automovilística. La ruta original recorría la Rúa do Franco y la Rúa da Raíña, empezando en la cafetería O París y terminando en el bar Dakar, tomando una cunca de vino Ribeiro en cada parada — con pruebas de por medio, como cantar una canción o contar un chiste. Hoy sigue siendo una tradición muy viva entre locales y visitantes, en versión bastante más tranquila.",
    en: "The 'Paris-Dakar' was born in the late 1980s among Santiago university students, a playful nod to the car rally of the same name. The original route ran along Rúa do Franco and Rúa da Raíña, starting at the O París café and ending at the Dakar bar, with a cunca (traditional bowl) of Ribeiro wine at every stop — often with a little challenge along the way, like singing a song or telling a joke. It's still a lively tradition among locals and visitors today, in a much more relaxed version."
  },
  parisdakar_moderation: {
    es: "Ve a tu ritmo: no hace falta terminar la ruta ni beber en todas las paradas para pasarlo bien. Alterna con agua, y si alguien prefiere no beber alcohol, la mayoría de estos bares tienen alternativa sin alcohol — el objetivo es la tradición y el ambiente, no la cantidad.",
    en: "Go at your own pace: you don't need to finish the whole route or drink at every stop to have a good time. Alternate with water, and if someone would rather skip the alcohol, most of these bars have a non-alcoholic option — the point is the tradition and the atmosphere, not the quantity."
  },
  parisdakar_progress: { es: "sellos conseguidos", en: "stamps collected" },
  parisdakar_mark_visited: { es: "Marcar como visitado", en: "Mark as visited" },
  parisdakar_visited: { es: "Visitado", en: "Visited" },
  parisdakar_start: { es: "Salida", en: "Start" },
  parisdakar_finish: { es: "Meta", en: "Finish" },
  parisdakar_optional_title: { es: "Paradas opcionales", en: "Optional stops" },
  parisdakar_optional_sub: {
    es: "Si os apetece alargar la ruta o hacer una parada más tranquila para comer algo, estos sitios no forman parte del recorrido clásico de la Rúa do Franco/Raíña pero merecen la pena igualmente. No cuentan para el pasaporte de sellos.",
    en: "If you fancy extending the route or taking a calmer sit-down stop for food, these places aren't part of the classic Rúa do Franco/Raíña route but are still worth it. They don't count toward the stamp passport."
  },
  parisdakar_complete_title: { es: "¡Ruta completada!", en: "Route complete!" },
  parisdakar_complete_text: {
    es: "Habéis llegado al Dakar. Enhorabuena, ya formáis parte de la tradición compostelana.",
    en: "You've made it to the Dakar. Congratulations — you're now part of Compostela tradition."
  },

  page_datos_title: { es: "Datos de interés", en: "Practical info" },
  page_datos_sub: {
    es: "Algunos teléfonos y datos prácticos que pueden venir bien durante vuestra estancia en Santiago.",
    en: "A few phone numbers and practical details that might come in handy during your stay in Santiago."
  },
};

function getLang() {
  const stored = localStorage.getItem("boda_lang");
  if (stored) return stored;
  return detectDeviceLang();
}

/* Si el visitante no ha elegido idioma nunca (primera visita), usamos el
   idioma del dispositivo: español si el dispositivo está en español,
   inglés en cualquier otro caso. */
function detectDeviceLang() {
  const raw = (navigator.language || (navigator.languages && navigator.languages[0]) || "en").toLowerCase();
  return raw.startsWith("es") ? "es" : "en";
}

function setLang(lang) {
  localStorage.setItem("boda_lang", lang);
  applyLang();
}

function applyLang() {
  const lang = getLang();
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (UI_TEXT[key]) {
      el.textContent = UI_TEXT[key][lang];
    }
  });

  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
  });

  // Let each page re-render dynamic content (data.js driven) in the new language
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

function initLangToggle() {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang-btn")));
  });
  applyLang();
}

function initNavToggle() {
  const btn = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!btn || !links) return;

  btn.addEventListener("click", () => {
    const isOpen = links.classList.toggle("mobile-open");
    btn.classList.toggle("open", isOpen);
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close the dropdown if the viewport is resized back to desktop width
  window.addEventListener("resize", () => {
    if (window.innerWidth > 640 && links.classList.contains("mobile-open")) {
      links.classList.remove("mobile-open");
      btn.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLangToggle();
  initNavToggle();
});
