import Link from "next/link";
import HeroBanner from "../components/HeroBanner";
import CategoryCircles from "../components/CategoryCircles";
import ProductCard from "../components/ProductCard";
import ProductRail from "../components/ProductRail";
import { categories, products, bannerImage } from "../lib/products";
import { TruckIcon, ShieldIcon, RefreshIcon, TagIcon } from "../components/icons";

const features = [
  { icon: TagIcon, title: "Wide Range", sub: "Trendy Collections" },
  { icon: ShieldIcon, title: "Best Quality", sub: "Premium Fabric" },
  { icon: RefreshIcon, title: "Easy Returns", sub: "7-Day Hassle Free" },
  { icon: TruckIcon, title: "Secure Payment", sub: "UPI · Cards · COD" },
];

const offers = [
  { title: "12% Instant Discount", sub: "On cards & UPI", bg: "#E3F2FD" },
  { title: "Free Delivery", sub: "On orders above ₹999", bg: "#E8F5E9" },
  { title: "Refer & Earn", sub: "Get ₹200 Colors Cash", bg: "#FFF3E0" },
  { title: "Cash on Delivery", sub: "Available everywhere", bg: "#F3E5F5" },
];

export default function HomePage() {
  const deals = products.filter((p) => p.bestseller).concat(products).slice(0, 8);
  const underValue = products.filter((p) => p.price <= 499).slice(0, 8);
  const dresses = products.filter((p) => p.category === "dresses");
  const inners = products.filter((p) => p.category === "inners-lingerie");

  const promos = [
    { title: "Crazy Price Drop", sub: "Dresses up to 60% OFF", cta: "Shop Dresses", href: "/products?category=dresses", cat: "dresses", color: "#EC407A", from: "#FCE4EC", to: "#F8BBD0" },
    { title: "Inner Wear Fest", sub: "Min 40% OFF on inners", cta: "Shop Inners", href: "/products?category=inners-lingerie", cat: "inners-lingerie", color: "#26A69A", from: "#E0F2F1", to: "#B2DFDB" },
  ];

  return (
    <div className="pb-6">
      <CategoryCircles />
      <HeroBanner />

      {/* Offer strip */}
      <section className="shell mt-4">
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {offers.map((o) => (
            <div
              key={o.title}
              className="flex min-w-[200px] flex-1 items-center gap-3 rounded-md p-3 shadow-card"
              style={{ background: o.bg }}
            >
              <div>
                <div className="text-sm font-bold text-ink">{o.title}</div>
                <div className="text-xs text-ink/70">{o.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature badges */}
      <section className="shell mt-4">
        <div className="grid grid-cols-2 gap-2 rounded-md bg-white p-3 shadow-card sm:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="flex items-center gap-3 px-2 py-1.5">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-light text-brand">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-ink">{f.title}</div>
                <div className="text-xs text-muted">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo banners */}
      <section className="shell mt-6">
        <div className="grid gap-3 sm:grid-cols-2">
          {promos.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="flex items-center justify-between overflow-hidden rounded-lg p-5 shadow-card"
              style={{ background: `linear-gradient(120deg, ${p.from}, ${p.to})` }}
            >
              <div>
                <div className="font-display text-xl font-bold text-ink">{p.title}</div>
                <div className="mt-1 text-sm text-ink/70">{p.sub}</div>
                <span className="btn-cta mt-3">{p.cta}</span>
              </div>
              <img src={bannerImage(p.cat, p.color, 0)} alt={p.title} className="h-28 w-24 rounded-md object-cover" />
            </Link>
          ))}
        </div>
      </section>

      {/* Deals of the day */}
      <section className="shell mt-8">
        <div className="mb-3 flex items-center justify-between rounded-md bg-brand px-4 py-3 text-white">
          <h2 className="font-display text-lg font-bold">Deals of the Day</h2>
          <Link href="/products?offers=1" className="text-sm font-semibold hover:underline">View All →</Link>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {deals.map((p) => (
            <div key={p.slug} className="w-40 shrink-0 sm:w-44">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {underValue.length > 0 && (
        <ProductRail title="Under ₹499 Store" accent="Budget Picks" products={underValue} href="/products?category=all-stock" />
      )}

      {/* Shop by category */}
      <section className="shell mt-8">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="font-display text-xl font-bold text-ink">Shop By Category</h2>
          <Link href="/products?category=all-stock" className="text-sm font-semibold text-brand hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/products?category=${c.slug}`}
              className="group overflow-hidden rounded-md bg-white text-center shadow-card transition-shadow hover:shadow-hover"
            >
              <div className="aspect-square overflow-hidden bg-page">
                <img src={c.image} alt={c.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-3">
                <div className="text-sm font-semibold text-ink">{c.name}</div>
                <div className="text-xs text-muted">{c.tagline}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ProductRail title="Best of Dresses" products={dresses} href="/products?category=dresses" />
      <ProductRail title="Trending in Inners & Lingerie" products={inners} href="/products?category=inners-lingerie" />

      {/* Full grid */}
      <section className="shell mt-10">
        <h2 className="mb-4 font-display text-xl font-bold text-ink">More To Explore</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
