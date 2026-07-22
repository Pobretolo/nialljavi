/* ==========================================================================
   Foto Explorer — minijuego de pistas
   - Intenta geolocalizar al jugador para averiguar POR QUÉ RETO EMPEZAR.
   - Si no puede (permiso denegado, sin GPS, navegador sin soporte...),
     pide elegir uno de los 3 puntos de partida (STARTING_POINTS en data.js).
   - Los retos son una secuencia narrativa fija (1, 2, 3...): la ubicación
     SOLO decide en qué punto de esa secuencia empezar. A partir de ahí,
     siempre se continúa en orden numérico estricto (nunca se desordenan).
   Progreso guardado en localStorage del navegador de cada invitado.
   ========================================================================== */

const PROGRESS_KEY = "boda_foto_explorer_progress";
let feReferencePoint = null; // {lat, lng} usado solo para elegir el punto de partida

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function setFound(id) {
  const progress = getProgress();
  progress[id] = true;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

function resetProgress() {
  localStorage.removeItem(PROGRESS_KEY);
}

/* Distancia en metros entre dos coordenadas (fórmula de Haversine) */
function distanceMeters(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/* Encuentra el índice del reto más cercano al punto de referencia (solo
   entre los que ya tienen lat/lng). Ese va a ser el punto de partida. */
function findNearestChallengeIndex(refPoint) {
  let bestIndex = 0;
  let bestDist = Infinity;
  PHOTO_CHALLENGES.forEach((ch, index) => {
    const hasCoords = typeof ch.lat === "number" && typeof ch.lng === "number";
    if (!hasCoords) return;
    const dist = distanceMeters(refPoint.lat, refPoint.lng, ch.lat, ch.lng);
    if (dist < bestDist) {
      bestDist = dist;
      bestIndex = index;
    }
  });
  return bestIndex;
}

/* Devuelve los retos en su ORDEN NUMÉRICO fijo, empezando por el reto más
   cercano al punto de referencia y continuando en secuencia (dando la
   vuelta al llegar al final, para que ninguno quede inalcanzable). */
function getSortedChallenges() {
  if (!feReferencePoint) return PHOTO_CHALLENGES;

  const startIndex = findNearestChallengeIndex(feReferencePoint);
  return PHOTO_CHALLENGES.slice(startIndex).concat(PHOTO_CHALLENGES.slice(0, startIndex));
}

/* ---------- Selección de punto de partida / geolocalización ---------- */

let feStep = "locating"; // "locating" | "choosing" | "done"
let feDoneLabel = "";

function feRenderLocationPanel() {
  const status = document.getElementById("fe-location-status");
  const buttons = document.getElementById("fe-start-buttons");
  if (!status || !buttons) return;
  const lang = getLang();

  if (feStep === "locating") {
    status.textContent = UI_TEXT.fe_locating[lang];
    buttons.style.display = "none";
  } else if (feStep === "choosing") {
    status.textContent = UI_TEXT.fe_choose_start[lang];
    buttons.innerHTML = STARTING_POINTS.map((p) => `
      <button class="filter-pill" data-start-point="${p.id}">${p.name[lang]}</button>
    `).join("");
    buttons.style.display = "flex";
    buttons.querySelectorAll("[data-start-point]").forEach((btn) => {
      btn.addEventListener("click", () => feSetReferenceFromStart(btn.getAttribute("data-start-point")));
    });
  } else if (feStep === "done") {
    status.innerHTML = `${UI_TEXT.fe_starting_from[lang]} <strong>${feDoneLabel[lang] || feDoneLabel}</strong>`;
    buttons.style.display = "none";
  }
}

function feShowStartButtons() {
  feStep = "choosing";
  feRenderLocationPanel();
}

function feSetReferenceFromStart(pointId) {
  const point = STARTING_POINTS.find((p) => p.id === pointId);
  if (!point) return;
  feReferencePoint = { lat: point.lat, lng: point.lng };
  sessionStorage.setItem("fe_chosen_start", pointId);
  feFinishLocationSetup(point.name);
}

function feFinishLocationSetup(placeLabel) {
  feStep = "done";
  feDoneLabel = placeLabel;
  feRenderLocationPanel();
  renderPhotoGrid();
}

function feInitLocation() {
  feStep = "locating";
  feRenderLocationPanel();

  if (!("geolocation" in navigator)) {
    feShowStartButtons();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      feReferencePoint = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      feFinishLocationSetup(UI_TEXT.fe_your_location);
    },
    () => {
      // Permiso denegado, timeout, o error: pedimos que elija un punto de partida
      feShowStartButtons();
    },
    { enableHighAccuracy: true, timeout: 6000, maximumAge: 60000 }
  );
}

/* ---------- Rejilla de retos ---------- */

function renderPhotoGrid() {
  const grid = document.getElementById("photo-grid");
  if (!grid) return;
  const lang = getLang();
  const progress = getProgress();
  const ordered = getSortedChallenges();

  grid.innerHTML = ordered.map((ch) => {
    const found = !!progress[ch.id];
    const thumb = ch.rewardImage || ch.clueImage;
    const miniStamp = `
      <span class="stamp stamp-mini ${found ? "stamp-earned" : "stamp-locked"}">
        <svg viewBox="0 0 24 24" stroke-width="1.6"><path d="M12 3l2.2 4.8 5.2.6-3.9 3.6 1 5.2L12 14.8 7.5 17.2l1-5.2L4.6 8.4l5.2-.6L12 3z"/></svg>
      </span>`;
    return `
      <button class="photo-tile" data-challenge-id="${ch.id}" aria-label="${ch.title[lang]}">
        ${thumb
          ? `<span class="photo-tile-thumb-wrap">
              <img src="${thumb}" alt="" style="width:100%;aspect-ratio:1/1;object-fit:cover;object-position:${ch.imagePosition || "center"};border-radius:4px;${found ? "" : "filter:grayscale(0.3) brightness(0.9);"}">
              ${miniStamp}
            </span>`
          : miniStamp}
        <span class="photo-tile-title">${found ? ch.title[lang] : UI_TEXT.fe_find_this[lang]}</span>
        <span class="photo-tile-hint">${found ? UI_TEXT.photo_found_hint[lang] : UI_TEXT.photo_locked_hint[lang]}</span>
      </button>
    `;
  }).join("");

  updateProgressCount();

  grid.querySelectorAll("[data-challenge-id]").forEach((el) => {
    el.addEventListener("click", () => openChallenge(el.getAttribute("data-challenge-id")));
  });
}

function updateProgressCount() {
  const el = document.getElementById("photo-progress-count");
  if (!el) return;
  const progress = getProgress();
  const found = PHOTO_CHALLENGES.filter((c) => progress[c.id]).length;
  el.textContent = `${found} / ${PHOTO_CHALLENGES.length}`;
}

let feModalStage = 0; // 0: solo miniatura | 1: + pista | 2: + ubicación

function openChallenge(id) {
  feModalStage = 0;
  renderModal(id);
  document.getElementById("photo-modal").classList.add("open");
}

function renderModal(id) {
  const ch = PHOTO_CHALLENGES.find((c) => c.id === id);
  if (!ch) return;
  const lang = getLang();
  const found = !!getProgress()[ch.id];
  const body = document.getElementById("photo-modal-body");
  const mapsUrl = ch.mapsQuery
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ch.mapsQuery)}`
    : null;

  const showClue = found || feModalStage >= 1;
  const showLocation = found || feModalStage >= 2;

  body.innerHTML = `
    <h2>${found ? ch.title[lang] : UI_TEXT.fe_find_this[lang]}</h2>

    ${ch.rewardImage && !found ? `
      <p class="eyebrow">${UI_TEXT.fe_find_this[lang]}</p>
      <img src="${ch.rewardImage}" alt="" style="border-radius:4px;margin-bottom:18px;width:100%;aspect-ratio:4/3;object-fit:cover;object-position:${ch.imagePosition || "center"};filter:grayscale(0.3) brightness(0.9);">
    ` : ""}

    ${!found && !showClue ? `
      <button class="btn" id="reveal-clue-btn">${UI_TEXT.fe_reveal_clue[lang]}</button>
    ` : ""}

    ${showClue ? `
      <p class="eyebrow">${UI_TEXT.photo_clue1[lang]}</p>
      ${ch.clueImage
        ? `<img src="${ch.clueImage}" alt="" style="border-radius:4px;margin-bottom:20px;width:100%;aspect-ratio:4/3;object-fit:cover;">`
        : `<p style="color:var(--parchment-dim);font-style:italic;">${UI_TEXT.fe_no_image_yet[lang]}</p>`}
    ` : ""}

    ${showClue && !found && !showLocation ? `
      <button class="btn" id="reveal-location-btn">${UI_TEXT.photo_reveal_clue3[lang]}</button>
    ` : ""}

    ${showLocation && mapsUrl ? `
      <p style="margin-top:14px;">
        <a class="btn btn-solid" target="_blank" rel="noopener" href="${mapsUrl}">
          ${UI_TEXT.photo_open_maps[lang]}
        </a>
      </p>
    ` : ""}

    <div id="photo-reward-zone" style="margin-top:24px;">
      ${found ? rewardHtml(ch, lang) : `<button class="btn btn-solid" id="mark-found-btn">${UI_TEXT.photo_found_btn[lang]}</button>`}
    </div>
  `;

  const revealClueBtn = document.getElementById("reveal-clue-btn");
  if (revealClueBtn) revealClueBtn.addEventListener("click", () => {
    feModalStage = 1;
    renderModal(id);
  });

  const revealLocationBtn = document.getElementById("reveal-location-btn");
  if (revealLocationBtn) revealLocationBtn.addEventListener("click", () => {
    feModalStage = 2;
    renderModal(id);
  });

  const markFoundBtn = document.getElementById("mark-found-btn");
  if (markFoundBtn) markFoundBtn.addEventListener("click", () => {
    setFound(ch.id);
    renderModal(id);
    renderPhotoGrid();
  });
}

/* Convierte cualquier formato de enlace de YouTube (watch, shorts, youtu.be)
   en la URL de embed correspondiente. Devuelve null si no lo reconoce. */
function getYoutubeEmbedUrl(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed${u.pathname}`;
    }
    if (u.pathname.startsWith("/shorts/")) {
      const id = u.pathname.split("/shorts/")[1];
      return `https://www.youtube.com/embed/${id}`;
    }
    const v = u.searchParams.get("v");
    if (v) return `https://www.youtube.com/embed/${v}`;
    return null;
  } catch (e) {
    return null;
  }
}

function rewardHtml(ch, lang) {
  const rewardText = (ch.reward[lang] || "").replace(/\n/g, "<br><br>");
  const embedUrl = ch.video ? getYoutubeEmbedUrl(ch.video) : null;
  return `
    <div class="card" style="border-color:var(--gold);">
      <span class="eyebrow">${UI_TEXT.photo_reward_title[lang]}</span>
      <h3>${ch.title[lang]}</h3>
      ${ch.rewardImage ? `<img src="${ch.rewardImage}" alt="" style="border-radius:4px;margin:12px 0;aspect-ratio:4/3;object-fit:cover;object-position:${ch.imagePosition || "center"};">` : ""}
      <p>${rewardText}</p>
      ${embedUrl ? `
        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:4px;margin-top:16px;">
          <iframe src="${embedUrl}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
        </div>
      ` : ""}
    </div>
  `;
}

function closeModal() {
  document.getElementById("photo-modal").classList.remove("open");
}

document.addEventListener("DOMContentLoaded", () => {
  feInitLocation();
  renderPhotoGrid();

  const modal = document.getElementById("photo-modal");
  const closeBtn = document.getElementById("photo-modal-close");
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  const resetBtn = document.getElementById("photo-reset-btn");
  if (resetBtn) resetBtn.addEventListener("click", () => {
    resetProgress();
    renderPhotoGrid();
  });
});

document.addEventListener("langchange", () => {
  feRenderLocationPanel();
  renderPhotoGrid();
});
