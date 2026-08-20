import Link from "next/link";
import ProductCard from "./ProductCard";

// Horizontal-scrolling product row (mobile-commerce style).
export default function ProductRail({ title, products, href, accent }) {
  if (!products?.length) return null;
  return (
    <section className="shell mt-8">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-display text-lg font-bold text-ink">
          {title}
          {accent && <span className="ml-2 text-sm font-semibold text-cta">{accent}</span>}
        </h2>
        {href && (
          <Link href={href} className="text-sm font-semibold text-brand hover:underline">
            View All →
          </Link>
        )}
      </div>
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
        {products.map((p) => (
          <div key={p.slug} className="w-40 shrink-0 sm:w-44">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
