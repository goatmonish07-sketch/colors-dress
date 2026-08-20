import Link from "next/link";
import { categories } from "../lib/products";
import SmartImage from "./SmartImage";

// Round category shortcuts, horizontally scrollable (AJIO/Meesho style).
export default function CategoryCircles() {
  return (
    <section className="shell mt-4">
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-1">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/products?category=${c.slug}`}
            className="flex w-16 shrink-0 flex-col items-center gap-1.5"
          >
            <span className="grid h-16 w-16 place-items-center overflow-hidden rounded-full border-2 border-brand-light bg-white">
              <SmartImage src={c.image} fallbacks={c.imageFallbacks} alt={c.name} className="h-full w-full object-cover" />
            </span>
            <span className="line-clamp-1 text-center text-[11px] font-medium text-ink">{c.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
