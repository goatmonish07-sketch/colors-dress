import Link from "next/link";
import HeroBanner from "../components/HeroBanner";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../lib/products";
import { TruckIcon, ShieldIcon, RefreshIcon, TagIcon } from "../components/icons";
import SmartImage from "../components/SmartImage";

const features = [
  { icon: TagIcon, title: "Wide Range", sub: "Trendy Collections" },
  { icon: ShieldIcon, title: "Best Quality", sub: "Premium Fabric" },
  { icon: RefreshIcon, title: "Easy Returns", sub: "Hassle Free" },
  { icon: TruckIcon, title: "Secure Payment", sub: "100% Safe" },
];

export default function HomePage() {
  const deals = products.filter((p) => p.bestseller).concat(products).slice(0, 6);

  return (
    <div className="pb-6">
      <HeroBanner />

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

      {/* Shop by category */}
      <section className="shell mt-8">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="font-display text-xl font-bold text-ink">Shop By Category</h2>
          <Link href="/products?category=all-stock" className="text-sm font-semibold text-brand hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/products?category=${c.slug}`}
              className="group overflow-hidden rounded-md bg-white text-center shadow-card transition-shadow hover:shadow-hover"
            >
              <div className="aspect-square overflow-hidden bg-page">
                <SmartImage
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <div className="text-sm font-semibold text-ink">{c.name}</div>
                <div className="text-xs text-muted">{c.tagline}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Deals of the day */}
      <section className="shell mt-10">
        <div className="mb-4 flex items-center justify-between rounded-md bg-brand px-4 py-3 text-white">
          <h2 className="font-display text-lg font-bold">Deals of the Day</h2>
          <Link href="/products?offers=1" className="text-sm font-semibold hover:underline">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {deals.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="shell mt-10">
        <h2 className="mb-4 font-display text-xl font-bold text-ink">Trending Now</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {products.slice(6, 12).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
