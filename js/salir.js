/* Filtro de la guía nocturna */

let salirFilters = { music: "all", tapa: false, gay: false };

function renderSalir() {
  const wrap = document.getElementById("salir-list");
  if (!wrap) return;
  const lang = getLang();

  const filtered = SALIR_ITEMS.filter((item) => {
    if (salirFilters.music !== "all" && item.music !== salirFilters.music) return false;
    if (salirFilters.tapa && !item.tapa) return false;
    if (salirFilters.gay && !item.gay) return false;
    return true;
  });

  if (filtered.length === 0) {
    wrap.innerHTML = `<p style="text-align:center;color:var(--parchment-dim);grid-column:1/-1;">${UI_TEXT.salir_no_results[lang]}</p>`;
    return;
  }

  const musicLabel = { celta: UI_TEXT.salir_music_celta, moderna: UI_TEXT.salir_music_moderna, tranquila: UI_TEXT.salir_music_tranquila };
  const musicIcon = { celta: ICONS.triskele, moderna: ICONS.musicNote, tranquila: ICONS.moon };

  wrap.innerHTML = filtered.map((item) => `
    <div class="card">
      <h3>${item.name}</h3>
      <div style="margin-bottom:12px;display:flex;flex-wrap:wrap;gap:8px;">
        <span class="tag icon-tag" style="color:var(--moss);border-color:var(--moss)">${musicIcon[item.music]()}${musicLabel[item.music][lang]}</span>
        ${item.tapa ? `<span class="tag icon-tag" style="color:var(--rust);border-color:var(--rust)">${ICONS.fork()}${UI_TEXT.salir_filter_tapa[lang]}</span>` : ""}
        ${item.gay ? `<span class="tag icon-tag" style="color:var(--gold);border-color:var(--gold)">${ICONS.rainbow()}${UI_TEXT.salir_filter_gay[lang]}</span>` : ""}
      </div>
      <p>${item.description[lang]}</p>
      ${item.mapsUrl ? `<a class="btn" target="_blank" rel="noopener" href="${item.mapsUrl}">${ICONS.pin()}${UI_TEXT.maps_link[lang]}</a>` : ""}
    </div>
  `).join("");
}

function setupSalirFilters() {
  document.querySelectorAll("[data-music-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      salirFilters.music = btn.getAttribute("data-music-filter");
      document.querySelectorAll("[data-music-filter]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderSalir();
    });
  });

  const tapaToggle = document.getElementById("filter-tapa");
  const gayToggle = document.getElementById("filter-gay");
  if (tapaToggle) tapaToggle.addEventListener("click", () => {
    salirFilters.tapa = !salirFilters.tapa;
    tapaToggle.classList.toggle("active", salirFilters.tapa);
    renderSalir();
  });
  if (gayToggle) gayToggle.addEventListener("click", () => {
    salirFilters.gay = !salirFilters.gay;
    gayToggle.classList.toggle("active", salirFilters.gay);
    renderSalir();
  });
}

function paintPillIcons() {
  document.querySelectorAll("[data-icon]").forEach((el) => {
    const key = el.getAttribute("data-icon");
    if (ICONS[key]) el.innerHTML = ICONS[key]();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  paintPillIcons();
  setupSalirFilters();
  renderSalir();
});
document.addEventListener("langchange", renderSalir);
