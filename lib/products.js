// Central product catalog for Colors Dress.
// Product images are generated as built-in inline SVGs (see lib/placeholder.js)
// so they always load instantly. To use your own photos, set each product's
// `images` to files you place in /public (e.g. "/products/kurti-1.jpg").

import { productImage, categoryImage, bannerImage } from "./placeholder";

export const categories = [
  { slug: "dresses", name: "Dresses", tagline: "Kurtis, Gowns & more" },
  { slug: "inners-lingerie", name: "Inners & Lingerie", tagline: "Bra, Panties & more" },
  { slug: "bottoms", name: "Bottoms", tagline: "Leggings, Pants & more" },
  { slug: "accessories", name: "Accessories", tagline: "Bags, Jewellery & more" },
  { slug: "all-stock", name: "All Stock", tagline: "Explore Everything" },
];

export const products = [
  {
    slug: "floral-printed-kurti",
    name: "Floral Printed Kurti",
    category: "dresses",
    price: 699, mrp: 1299, rating: 4.4, ratingCount: 512,
    colors: ["#F48FB1", "#E57373", "#F5CBA7", "#90A4AE", "#B0BEC5"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "100% Cotton",
    description: "Flared floral printed kurti in pure cotton with a beautiful print. Perfect for casual and festive occasions.",
    details: ["Fabric: 100% Cotton", "Sleeve: 3/4th Sleeve", "Pattern: Floral Print", "Neck: Round Neck"],
    bestseller: true,
  },
  {
    slug: "embroidered-anarkali-gown",
    name: "Embroidered Anarkali Gown",
    category: "dresses",
    price: 1299, mrp: 2499, rating: 4.6, ratingCount: 340,
    colors: ["#8E24AA", "#5E35B1", "#C2185B"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Georgette",
    description: "Floor-length embroidered Anarkali gown with intricate thread work. A stunning pick for weddings and parties.",
    details: ["Fabric: Georgette", "Sleeve: Full Sleeve", "Pattern: Embroidered", "Length: Floor Length"],
    bestseller: true,
  },
  {
    slug: "party-wear-frock",
    name: "Party Wear Frock",
    category: "dresses",
    price: 899, mrp: 1599, rating: 4.3, ratingCount: 210,
    colors: ["#EC407A", "#AB47BC", "#26A69A"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Crepe",
    description: "Flowy party wear frock with a flattering silhouette, ideal for evening celebrations.",
    details: ["Fabric: Crepe", "Sleeve: Sleeveless", "Pattern: Solid", "Fit: Flared"],
  },
  {
    slug: "cotton-anarkali-kurti",
    name: "Cotton Anarkali Kurti",
    category: "dresses",
    price: 799, mrp: 1499, rating: 4.2, ratingCount: 178,
    colors: ["#FBC02D", "#F57C00", "#7CB342"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "Cotton Blend",
    description: "Everyday cotton Anarkali kurti that keeps you comfortable and stylish all day.",
    details: ["Fabric: Cotton Blend", "Sleeve: 3/4th Sleeve", "Pattern: Printed", "Fit: Anarkali"],
  },
  {
    slug: "floral-maxi-dress",
    name: "Floral Maxi Dress",
    category: "dresses",
    price: 999, mrp: 1899, rating: 4.5, ratingCount: 289,
    colors: ["#F06292", "#4DB6AC", "#FF8A65"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Rayon",
    description: "Breezy floral maxi dress with a relaxed fit — perfect for brunches and vacations.",
    details: ["Fabric: Rayon", "Sleeve: Short Sleeve", "Pattern: Floral", "Length: Ankle Length"],
    bestseller: true,
  },
  {
    slug: "printed-a-line-frock",
    name: "Printed A-Line Frock",
    category: "dresses",
    price: 599, mrp: 1099, rating: 4.1, ratingCount: 143,
    colors: ["#BA68C8", "#4FC3F7", "#AED581"],
    sizes: ["S", "M", "L"],
    fabric: "Cotton",
    description: "A-line printed frock with side pockets, a wardrobe essential for casual days.",
    details: ["Fabric: Cotton", "Sleeve: Sleeveless", "Pattern: Geometric Print", "Fit: A-Line"],
  },
  {
    slug: "seamless-everyday-bra",
    name: "Seamless Everyday Bra",
    category: "inners-lingerie",
    price: 499, mrp: 799, rating: 4.4, ratingCount: 621,
    colors: ["#E0C9A6", "#212121", "#EC407A"],
    sizes: ["32B", "34B", "36B", "38C"],
    fabric: "Nylon Spandex",
    description: "Wire-free seamless bra with soft padded cups for all-day comfort under any outfit.",
    details: ["Fabric: Nylon Spandex", "Type: Seamless", "Padding: Lightly Padded", "Wire: Wire-Free"],
    bestseller: true,
  },
  {
    slug: "cotton-panty-pack",
    name: "Cotton Panty (Pack of 3)",
    category: "inners-lingerie",
    price: 399, mrp: 699, rating: 4.3, ratingCount: 455,
    colors: ["#F8BBD0", "#B39DDB", "#4DB6AC"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Cotton",
    description: "Breathable cotton hipster panties in a value pack of three soft everyday colours.",
    details: ["Fabric: Cotton", "Pack: 3 Pieces", "Rise: Mid Rise", "Style: Hipster"],
  },
  {
    slug: "satin-nightwear-set",
    name: "Satin Nightwear Set",
    category: "inners-lingerie",
    price: 899, mrp: 1699, rating: 4.5, ratingCount: 312,
    colors: ["#CE93D8", "#EC407A", "#80CBC4"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Satin",
    description: "Smooth satin nightwear set — a top and shorts combo for a comfortable, luxurious sleep.",
    details: ["Fabric: Satin", "Set: Top + Shorts", "Pattern: Solid", "Care: Machine Wash"],
    bestseller: true,
  },
  {
    slug: "camisole-slip",
    name: "Camisole Slip",
    category: "inners-lingerie",
    price: 299, mrp: 549, rating: 4.2, ratingCount: 198,
    colors: ["#90A4AE", "#212121", "#E0C9A6"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Modal",
    description: "Soft modal camisole slip that layers smoothly under kurtis and sheer tops.",
    details: ["Fabric: Modal", "Strap: Adjustable", "Style: Camisole", "Fit: Regular"],
  },
  {
    slug: "cotton-leggings",
    name: "Cotton Leggings",
    category: "bottoms",
    price: 399, mrp: 599, rating: 4.4, ratingCount: 733,
    colors: ["#212121", "#5D4037", "#455A64", "#C2185B"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "Cotton Lycra",
    description: "Ankle-length cotton lycra leggings with a wide comfort waistband. Pairs with every kurti.",
    details: ["Fabric: Cotton Lycra", "Length: Ankle Length", "Waist: Elasticated", "Fit: Skinny"],
    bestseller: true,
  },
  {
    slug: "palazzo-pants",
    name: "Printed Palazzo Pants",
    category: "bottoms",
    price: 599, mrp: 1099, rating: 4.3, ratingCount: 267,
    colors: ["#7E57C2", "#26A69A", "#EF5350"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Rayon",
    description: "Flowy printed palazzo pants with a comfortable elastic waist — effortless everyday style.",
    details: ["Fabric: Rayon", "Length: Full Length", "Waist: Elasticated", "Fit: Wide Leg"],
  },
  {
    slug: "denim-jeggings",
    name: "Denim Jeggings",
    category: "bottoms",
    price: 799, mrp: 1499, rating: 4.2, ratingCount: 189,
    colors: ["#1565C0", "#212121", "#455A64"],
    sizes: ["28", "30", "32", "34", "36"],
    fabric: "Denim Stretch",
    description: "Stretchable denim jeggings that give a jeans look with legging comfort.",
    details: ["Fabric: Denim Stretch", "Length: Ankle", "Rise: Mid Rise", "Fit: Skinny"],
  },
  {
    slug: "tote-handbag",
    name: "Structured Tote Handbag",
    category: "accessories",
    price: 899, mrp: 1999, rating: 4.5, ratingCount: 421,
    colors: ["#8D6E63", "#212121", "#C2185B"],
    sizes: ["Free"],
    fabric: "Faux Leather",
    description: "Roomy structured tote in premium faux leather — carries your day from work to weekend.",
    details: ["Material: Faux Leather", "Compartments: 2", "Closure: Zip", "Strap: Dual Handle"],
    bestseller: true,
  },
  {
    slug: "jhumka-earrings",
    name: "Oxidized Jhumka Earrings",
    category: "accessories",
    price: 249, mrp: 599, rating: 4.4, ratingCount: 356,
    colors: ["#90A4AE", "#8D6E63"],
    sizes: ["Free"],
    fabric: "Alloy",
    description: "Traditional oxidized silver-tone jhumka earrings that elevate ethnic and fusion looks.",
    details: ["Material: Alloy", "Finish: Oxidized", "Type: Jhumka", "Closure: Push Back"],
  },
  {
    slug: "silk-scarf",
    name: "Printed Silk Scarf",
    category: "accessories",
    price: 349, mrp: 799, rating: 4.1, ratingCount: 98,
    colors: ["#EC407A", "#26C6DA", "#FFA726"],
    sizes: ["Free"],
    fabric: "Satin Silk",
    description: "Lightweight printed silk scarf that adds a pop of colour to any outfit.",
    details: ["Material: Satin Silk", "Shape: Square", "Pattern: Printed", "Care: Hand Wash"],
  },

  // --- Dresses ---
  {
    slug: "a-line-midi-dress",
    name: "A-Line Midi Dress",
    category: "dresses",
    price: 749, mrp: 1499, rating: 4.3, ratingCount: 221,
    colors: ["#7E57C2", "#EC407A", "#26A69A"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Poly Crepe",
    description: "Elegant A-line midi dress with a cinched waist — a versatile pick for work and evenings.",
    details: ["Fabric: Poly Crepe", "Sleeve: Short Sleeve", "Length: Midi", "Fit: A-Line"],
  },
  {
    slug: "chikankari-kurti",
    name: "Chikankari Cotton Kurti",
    category: "dresses",
    price: 899, mrp: 1799, rating: 4.6, ratingCount: 402,
    colors: ["#FFFFFF", "#B3E5FC", "#F8BBD0"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "Cotton",
    description: "Hand-inspired chikankari embroidery on breathable cotton for an effortlessly graceful look.",
    details: ["Fabric: Cotton", "Work: Chikankari", "Sleeve: 3/4th Sleeve", "Neck: Round"],
    bestseller: true,
  },
  {
    slug: "wrap-dress",
    name: "Solid Wrap Dress",
    category: "dresses",
    price: 999, mrp: 1999, rating: 4.2, ratingCount: 156,
    colors: ["#C2185B", "#212121", "#00897B"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Rayon",
    description: "Flattering wrap dress that ties at the waist — a timeless silhouette for every body type.",
    details: ["Fabric: Rayon", "Sleeve: Full Sleeve", "Closure: Wrap Tie", "Length: Knee"],
  },
  {
    slug: "banarasi-silk-gown",
    name: "Banarasi Silk Gown",
    category: "dresses",
    price: 1899, mrp: 3999, rating: 4.7, ratingCount: 288,
    colors: ["#AD1457", "#4A148C", "#1A237E"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Banarasi Silk",
    description: "Regal Banarasi silk gown with woven zari motifs — the showstopper for weddings and receptions.",
    details: ["Fabric: Banarasi Silk", "Work: Zari Woven", "Sleeve: Full Sleeve", "Length: Floor"],
    bestseller: true,
  },
  {
    slug: "printed-kaftan-dress",
    name: "Printed Kaftan Dress",
    category: "dresses",
    price: 649, mrp: 1299, rating: 4.1, ratingCount: 134,
    colors: ["#26C6DA", "#FF7043", "#9CCC65"],
    sizes: ["Free"],
    fabric: "Rayon",
    description: "Relaxed kaftan dress with vibrant prints — the comfiest way to stay stylish at home or on holiday.",
    details: ["Fabric: Rayon", "Fit: Relaxed", "Sleeve: Kimono", "Length: Ankle"],
  },

  // --- Inners & Lingerie ---
  {
    slug: "padded-sports-bra",
    name: "Padded Sports Bra",
    category: "inners-lingerie",
    price: 549, mrp: 999, rating: 4.4, ratingCount: 512,
    colors: ["#212121", "#C2185B", "#455A64"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Poly Spandex",
    description: "High-support padded sports bra with moisture-wicking fabric for workouts and yoga.",
    details: ["Fabric: Poly Spandex", "Support: High", "Padding: Removable", "Style: Racerback"],
    bestseller: true,
  },
  {
    slug: "tummy-tucker-shapewear",
    name: "Tummy Tucker Shapewear",
    category: "inners-lingerie",
    price: 699, mrp: 1399, rating: 4.2, ratingCount: 267,
    colors: ["#E0C9A6", "#212121"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "Nylon Spandex",
    description: "Seamless tummy-tucker shapewear that smooths your silhouette under sarees and dresses.",
    details: ["Fabric: Nylon Spandex", "Control: Firm", "Style: Mid-Thigh", "Waist: High Rise"],
  },
  {
    slug: "thermal-top",
    name: "Winter Thermal Top",
    category: "inners-lingerie",
    price: 399, mrp: 799, rating: 4.3, ratingCount: 189,
    colors: ["#8D6E63", "#212121", "#B0BEC5"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Cotton Blend",
    description: "Soft brushed thermal top that keeps you warm without the bulk this winter.",
    details: ["Fabric: Cotton Blend", "Warmth: Medium", "Sleeve: Full", "Fit: Slim"],
  },

  // --- Bottoms ---
  {
    slug: "high-waist-jeans",
    name: "High-Waist Skinny Jeans",
    category: "bottoms",
    price: 1099, mrp: 2199, rating: 4.4, ratingCount: 341,
    colors: ["#1565C0", "#212121", "#5D4037"],
    sizes: ["28", "30", "32", "34", "36"],
    fabric: "Denim Stretch",
    description: "High-rise skinny jeans with just-right stretch to hold their shape all day.",
    details: ["Fabric: Denim Stretch", "Rise: High", "Fit: Skinny", "Length: Ankle"],
    bestseller: true,
  },
  {
    slug: "cigarette-pants",
    name: "Cigarette Trousers",
    category: "bottoms",
    price: 699, mrp: 1399, rating: 4.2, ratingCount: 176,
    colors: ["#212121", "#455A64", "#8D6E63"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Poly Viscose",
    description: "Tailored cigarette trousers with a clean, slim line — perfect for a smart office look.",
    details: ["Fabric: Poly Viscose", "Fit: Slim", "Waist: Mid Rise", "Length: Ankle"],
  },
  {
    slug: "dhoti-pants",
    name: "Printed Dhoti Pants",
    category: "bottoms",
    price: 599, mrp: 1199, rating: 4.1, ratingCount: 143,
    colors: ["#AB47BC", "#26A69A", "#FF7043"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Rayon",
    description: "Draped dhoti-style pants that pair beautifully with short kurtis and crop tops.",
    details: ["Fabric: Rayon", "Style: Dhoti", "Waist: Elasticated", "Fit: Relaxed"],
  },

  // --- Accessories ---
  {
    slug: "embroidered-potli-bag",
    name: "Embroidered Potli Bag",
    category: "accessories",
    price: 449, mrp: 999, rating: 4.5, ratingCount: 231,
    colors: ["#AD1457", "#4A148C", "#FF8F00"],
    sizes: ["Free"],
    fabric: "Silk Blend",
    description: "Hand-embroidered potli bag with a drawstring closure — the perfect ethnic-wear companion.",
    details: ["Material: Silk Blend", "Closure: Drawstring", "Work: Embroidered", "Occasion: Festive"],
  },
  {
    slug: "traditional-bangles-set",
    name: "Traditional Bangles Set",
    category: "accessories",
    price: 299, mrp: 699, rating: 4.3, ratingCount: 198,
    colors: ["#FFD54F", "#C2185B", "#26A69A"],
    sizes: ["2.4", "2.6", "2.8"],
    fabric: "Metal & Glass",
    description: "Set of 12 traditional bangles with kundan detailing to complete your festive look.",
    details: ["Material: Metal & Glass", "Set: 12 Pieces", "Work: Kundan", "Occasion: Festive"],
  },
  {
    slug: "hair-accessory-set",
    name: "Hair Clips & Band Set",
    category: "accessories",
    price: 199, mrp: 499, rating: 4.2, ratingCount: 156,
    colors: ["#F48FB1", "#CE93D8", "#80DEEA"],
    sizes: ["Free"],
    fabric: "Acrylic",
    description: "Assorted hair clips and bands set to style your everyday looks with ease.",
    details: ["Material: Acrylic", "Set: 6 Pieces", "Type: Clips & Bands", "Care: Wipe Clean"],
  },
];

// Premium primary photos from Unsplash (free, commercial-use, no attribution),
// with LoremFlickr (Flickr Creative Commons) and a built-in SVG silhouette as
// automatic fallbacks so an image always resolves to something real & on-brand.
const uns = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;
const flk = (tags, lock) => `https://loremflickr.com/600/800/${tags}?lock=${lock}`;

// Curated Unsplash photo-id pools per category.
const UNS = {
  dresses: [
    "1595777457583-95e059d581b8", "1583391733956-6c78276477e2",
    "1594633312681-425c7b97ccd1", "1566174053879-31528523f8ae",
    "1610030469983-98e550d6193c", "1596783074918-c84cb06531ca",
  ],
  "inners-lingerie": [
    "1571945153237-4929e783af4a", "1522337660859-02fbefca4702",
    "1560243563-062bfc001d68", "1618354691373-d851c5c3a990",
  ],
  bottoms: [
    "1541099649105-f69ad21f3246", "1584370848010-d7fe6bc767ec",
    "1542272604-787c3835535d", "1475178626620-a4d074967452",
  ],
  accessories: [
    "1524498250077-390f9e378fc0", "1584917865442-de89df76afd3",
    "1535632066927-ab7c9ab60908", "1601924994987-69e26d50dc26",
  ],
};
// Keyword per product for the LoremFlickr fallback.
const KW = {
  "floral-printed-kurti": "kurta,woman", "embroidered-anarkali-gown": "gown,fashion",
  "party-wear-frock": "dress,party", "cotton-anarkali-kurti": "kurta,fashion",
  "floral-maxi-dress": "dress,summer", "printed-a-line-frock": "dress,woman",
  "seamless-everyday-bra": "clothing,cotton", "cotton-panty-pack": "cotton,clothing",
  "satin-nightwear-set": "pajamas,silk", "camisole-slip": "clothing,textile",
  "cotton-leggings": "leggings,fashion", "palazzo-pants": "trousers,fashion",
  "denim-jeggings": "jeans,denim", "tote-handbag": "handbag,leather",
  "jhumka-earrings": "earrings,jewelry", "silk-scarf": "scarf,silk",
  "a-line-midi-dress": "dress,fashion", "chikankari-kurti": "kurta,white",
  "wrap-dress": "dress,woman", "banarasi-silk-gown": "saree,silk",
  "printed-kaftan-dress": "kaftan,dress", "padded-sports-bra": "sportswear,clothing",
  "tummy-tucker-shapewear": "clothing,cotton", "thermal-top": "clothing,knit",
  "high-waist-jeans": "jeans,denim", "cigarette-pants": "trousers,fashion",
  "dhoti-pants": "trousers,ethnic", "embroidered-potli-bag": "handbag,ethnic",
  "traditional-bangles-set": "bangles,jewelry", "hair-accessory-set": "hair,accessory",
};

products.forEach((p, i) => {
  const pool = UNS[p.category] || UNS.dresses;
  const kw = KW[p.slug] || "fashion,dress";
  const base = 400 + i * 3;
  p.images = [0, 1, 2].map((v) => uns(pool[(i + v) % pool.length]));
  // Each image falls back: Unsplash -> LoremFlickr photo -> built-in silhouette.
  p.imageFallbacks = [0, 1, 2].map((v) => [flk(kw, base + v), productImage(p, v + i)]);
});

const CAT_KW = {
  dresses: "dress,fashion", "inners-lingerie": "clothing,cotton",
  bottoms: "leggings,jeans", accessories: "handbag,fashion", "all-stock": "boutique,fashion",
};
categories.forEach((c, i) => {
  const cat = c.slug === "all-stock" ? "dresses" : c.slug;
  const pool = UNS[cat] || UNS.dresses;
  c.image = uns(pool[i % pool.length]);
  c.imageFallbacks = [flk(CAT_KW[c.slug] || "fashion", 700 + i), categoryImage(cat, i)];
});

export { bannerImage };

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export function getByCategory(slug) {
  if (!slug || slug === "all-stock") return products;
  return products.filter((p) => p.category === slug);
}

export function discountPct(p) {
  return Math.round(((p.mrp - p.price) / p.mrp) * 100);
}

export function categoryName(slug) {
  return categories.find((c) => c.slug === slug)?.name || "All Stock";
}
