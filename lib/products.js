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
];

// Real, open-source (Flickr Creative Commons) photos via LoremFlickr — keyword
// matched and pinned with a `lock` seed so each product keeps the same photo.
const real = (tags, lock) => `https://loremflickr.com/600/800/${tags}?lock=${lock}`;

// Keyword per product for relevant photography.
const KW = {
  "floral-printed-kurti": "kurta,woman",
  "embroidered-anarkali-gown": "gown,fashion",
  "party-wear-frock": "dress,party",
  "cotton-anarkali-kurti": "kurta,fashion",
  "floral-maxi-dress": "dress,summer",
  "printed-a-line-frock": "dress,woman",
  "seamless-everyday-bra": "clothing,cotton",
  "cotton-panty-pack": "cotton,clothing",
  "satin-nightwear-set": "pajamas,silk",
  "camisole-slip": "clothing,textile",
  "cotton-leggings": "leggings,fashion",
  "palazzo-pants": "trousers,fashion",
  "denim-jeggings": "jeans,denim",
  "tote-handbag": "handbag,leather",
  "jhumka-earrings": "earrings,jewelry",
  "silk-scarf": "scarf,silk",
};

// Attach imagery: real photos as primary, built-in SVG silhouettes as fallback.
products.forEach((p, i) => {
  const kw = KW[p.slug] || "fashion,dress";
  const base = 400 + i * 3;
  p.images = [0, 1, 2].map((v) => real(kw, base + v));
  p.imageFallbacks = [0, 1, 2].map((v) => productImage(p, v + i));
});
const CAT_KW = {
  dresses: "dress,fashion",
  "inners-lingerie": "clothing,cotton",
  bottoms: "leggings,jeans",
  accessories: "handbag,fashion",
  "all-stock": "boutique,fashion",
};
categories.forEach((c, i) => {
  const cat = c.slug === "all-stock" ? "dresses" : c.slug;
  c.image = real(CAT_KW[c.slug] || "fashion", 700 + i);
  c.imageFallback = categoryImage(cat, i);
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
