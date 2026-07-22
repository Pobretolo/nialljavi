/* Render helpers compartidos por varias páginas */

function renderQueVer() {
  const wrap = document.getElementById("que-ver-list");
  if (!wrap) return;
  const lang = getLang();
  wrap.innerHTML = QUE_VER_ITEMS.map((item, i) => `
    <div class="card">
      ${item.image ? `<img src="${item.image}" alt="${item.title[lang]}" style="border-radius:4px;margin-bottom:16px;aspect-ratio:4/3;object-fit:cover;">` : ""}
      ${item.time ? `<span class="eyebrow" style="color:var(--rust)">${item.time[lang]}</span>` : ""}
      <h3>${i + 1}. ${item.title[lang]}</h3>
      <p>${item.description[lang]}</p>
    </div>
  `).join("");
}

function renderTengoCoche() {
  const wrap = document.getElementById("tengo-coche-list");
  if (!wrap) return;
  const lang = getLang();
  wrap.innerHTML = TENGO_COCHE_ITEMS.map((item) => {
    const rating = item.rating || 0;
    const ringsHtml = Array.from({ length: 5 }).map((_, i) => `
      <span class="ring-icon ${i < rating ? "filled" : ""}">${ICONS.ring()}</span>
    `).join("");
    return `
    <div class="card">
      ${item.image ? `<img src="${item.image}" alt="${item.title[lang]}" style="border-radius:4px;margin-bottom:16px;aspect-ratio:4/3;object-fit:cover;">` : ""}
      <h3>${item.title[lang]}</h3>
      <div class="rings-rating" title="${UI_TEXT.coche_rating_label[lang]}: ${rating}/5">${ringsHtml}</div>
      <span class="tag" style="color:var(--rust);border-color:var(--rust)">${item.distance[lang]}</span>
      <p style="margin-top:12px;">${item.description[lang]}</p>
      ${item.mapsUrl ? `<a class="btn" target="_blank" rel="noopener" href="${item.mapsUrl}">${ICONS.pin()}${UI_TEXT.maps_link[lang]}</a>` : ""}
    </div>
  `;
  }).join("");
}

function renderComer() {
  const wrap = document.getElementById("comer-list");
  if (!wrap) return;
  const lang = getLang();
  const catLabel = {
    marisco: UI_TEXT.comer_cat_marisco,
    tradicional: UI_TEXT.comer_cat_tradicional,
    tapas: UI_TEXT.comer_cat_tapas,
    cafeteria: UI_TEXT.comer_cat_cafeteria,
    altacocina: UI_TEXT.comer_cat_altacocina,
    vegano: UI_TEXT.comer_cat_vegano,
  };
  const catIcon = {
    marisco: ICONS.fish,
    tradicional: ICONS.pot,
    tapas: ICONS.plate,
    cafeteria: ICONS.cup,
    altacocina: ICONS.star,
    vegano: ICONS.leaf,
  };

  wrap.innerHTML = COMER_ITEMS.map((item) => {
    const ratingHtml = typeof item.rating === "number" ? `
      <div class="rings-rating" style="margin-bottom:2px;" title="Google: ${item.rating}/5">
        ${Array.from({ length: 5 }).map((_, i) => `<span class="ring-icon ${i < Math.round(item.rating) ? "filled" : ""}">${ICONS.ring()}</span>`).join("")}
        <span style="font-family:var(--font-mono);font-size:0.72rem;color:#6b654f;margin-left:4px;">${item.ratingApprox ? "~" : ""}${item.rating} · Google</span>
      </div>` : "";

    const priceHtml = typeof item.price === "number" ? `
      <span class="tag icon-tag" style="color:var(--moss);border-color:var(--moss);">
        ${"€".repeat(item.price)}<span style="opacity:0.35;">${"€".repeat(5 - item.price)}</span>
      </span>` : "";

    return `
    <div class="card">
      <h3>${item.name}</h3>
      ${ratingHtml}
      <div style="margin-bottom:10px;display:flex;flex-wrap:wrap;gap:8px;">
        ${item.category && catLabel[item.category] ? `
          <span class="tag icon-tag" style="color:var(--rust);border-color:var(--rust);">
            ${catIcon[item.category]()}${catLabel[item.category][lang]}
          </span>` : ""}
        ${item.breakfast ? `<span class="tag icon-tag" style="color:var(--gold);border-color:var(--gold);">${ICONS.cup()}${UI_TEXT.comer_breakfast[lang]}</span>` : ""}
        ${priceHtml}
      </div>
      <p style="margin-top:12px;">${item.description[lang]}</p>
      ${item.mapsUrl ? `<a class="btn" target="_blank" rel="noopener" href="${item.mapsUrl}">${ICONS.pin()}${UI_TEXT.maps_link[lang]}</a>` : ""}
    </div>
  `;
  }).join("");
}

function renderDatosInteres() {
  const wrap = document.getElementById("datos-interes-list");
  if (!wrap) return;
  const lang = getLang();

  wrap.innerHTML = DATOS_INTERES_ITEMS.map((item) => `
    <div class="card" style="display:flex;gap:16px;align-items:flex-start;">
      <span class="stamp stamp-earned" style="width:52px;height:52px;flex-shrink:0;">
        ${ICONS[item.icon] ? ICONS[item.icon]() : ""}
      </span>
      <div>
        <h3>${item.title[lang]}</h3>
        <p style="margin-bottom:0;">${item.description[lang]}</p>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderQueVer();
  renderTengoCoche();
  renderComer();
  renderDatosInteres();
});
document.addEventListener("langchange", () => {
  renderQueVer();
  renderTengoCoche();
  renderComer();
  renderDatosInteres();
});
