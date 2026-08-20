// Built-in product imagery — generated as inline SVG data URIs.
// Zero network requests, so images always load instantly on any host.
// Each category has a garment silhouette; colour + soft gradient give variety.

const SIL = {
  dresses:
    '<polygon points="60,24 71,29 85,44 71,52 68,72 88,126 32,126 52,72 49,52 35,44 49,29"/>',
  "inners-lingerie":
    '<g><path d="M32 58 L46 74 M88 58 L74 74" fill="none" stroke-width="4"/><ellipse cx="46" cy="76" rx="17" ry="15"/><ellipse cx="74" cy="76" rx="17" ry="15"/><rect x="29" y="86" width="62" height="7" rx="3"/></g>',
  bottoms:
    '<g><rect x="42" y="40" width="36" height="13" rx="3"/><polygon points="43,51 58,51 56,126 46,126"/><polygon points="62,51 77,51 74,126 64,126"/></g>',
  accessories:
    '<g><path d="M47 64 Q60 40 73 64" fill="none" stroke-width="5"/><rect x="37" y="64" width="46" height="48" rx="8"/></g>',
};

const BGS = [
  ["#FCE4EC", "#FFFFFF"],
  ["#F3E5F5", "#FFFFFF"],
  ["#E8F5E9", "#FFFFFF"],
  ["#FFF3E0", "#FFFFFF"],
  ["#E8EAF6", "#FFFFFF"],
  ["#FCE4F1", "#FFFFFF"],
];

function safeColor(hex) {
  if (!hex || typeof hex !== "string" || hex[0] !== "#") return "#E91E63";
  const h = hex.length === 4
    ? "#" + hex.slice(1).split("").map((c) => c + c).join("")
    : hex;
  const r = parseInt(h.slice(1, 3), 16);
  const g = parseInt(h.slice(3, 5), 16);
  const b = parseInt(h.slice(5, 7), 16);
  if ((r + g + b) / 3 > 218) return "#E91E63"; // too light to read on a light bg
  return h;
}

export function productImage({ category = "dresses", colors = [] } = {}, variant = 0) {
  const sil = SIL[category] || SIL.dresses;
  const color = safeColor(colors[variant % (colors.length || 1)] || colors[0]);
  const [b0, b1] = BGS[variant % BGS.length];
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 150' width='480' height='600'>` +
    `<defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='${b0}'/><stop offset='1' stop-color='${b1}'/></linearGradient></defs>` +
    `<rect width='120' height='150' fill='url(#g)'/>` +
    `<g fill='${color}' stroke='${color}' stroke-linejoin='round' stroke-linecap='round' opacity='0.92'>${sil}</g>` +
    `<text x='60' y='143' text-anchor='middle' font-family='Poppins,Arial,sans-serif' font-size='6.5' font-weight='700' fill='#C2185B' opacity='0.7'>COLORS DRESS</text>` +
    `</svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

export function categoryImage(slug, i = 0) {
  return productImage({ category: slug, colors: ["#E91E63"] }, i);
}

export function bannerImage(category, color, i) {
  // wider illustration for hero / promo banners
  const sil = SIL[category] || SIL.dresses;
  const [b0, b1] = BGS[i % BGS.length];
  const c = safeColor(color);
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 150' width='600' height='750'>` +
    `<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${b0}'/><stop offset='1' stop-color='${b1}'/></linearGradient></defs>` +
    `<rect width='120' height='150' fill='url(#g)'/>` +
    `<g fill='${c}' stroke='${c}' stroke-linejoin='round' stroke-linecap='round' opacity='0.9' transform='translate(0,4)'>${sil}</g>` +
    `</svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg);
}
