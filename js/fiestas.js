/* Fiestas del Apóstol — lista de días */

function renderFiestas() {
  const wrap = document.getElementById("fiestas-list");
  if (!wrap) return;
  const lang = getLang();

  wrap.innerHTML = FIESTAS_ITEMS.map((day, i) => {
    const isWeddingEve = i === FIESTAS_ITEMS.length - 1;
    return `
      <div class="card" style="${isWeddingEve ? "border-color:var(--gold);" : ""}display:flex;gap:18px;align-items:flex-start;">
        <span class="stamp ${isWeddingEve ? "stamp-earned" : "stamp-locked"}" style="width:56px;height:56px;flex-shrink:0;">
          ${ICONS.fireworks()}
        </span>
        <div>
          ${isWeddingEve ? `<span class="tag" style="color:var(--gold);border-color:var(--gold);margin-bottom:8px;">${UI_TEXT.fiestas_wedding_eve[lang]}</span>` : ""}
          <p class="eyebrow" style="color:var(--rust);">${day.date[lang]}</p>
          <h3>${day.title[lang]}</h3>
          <p>${day.description[lang]}</p>
        </div>
      </div>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderFiestas);
document.addEventListener("langchange", renderFiestas);
