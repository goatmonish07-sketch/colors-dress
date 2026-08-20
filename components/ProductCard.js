import Link from "next/link";
import { discountPct } from "../lib/products";
import { StarIcon } from "./icons";
import SmartImage from "./SmartImage";
import WishlistButton from "./WishlistButton";

export default function ProductCard({ product }) {
  const off = discountPct(product);
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-md bg-white shadow-card transition-shadow hover:shadow-hover"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-page">
        <SmartImage
          src={product.images[0]}
          fallbacks={product.imageFallbacks?.[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <WishlistButton slug={product.slug} className="absolute right-2 top-2 h-8 w-8" />
        {product.bestseller && (
          <span className="absolute left-2 top-2 rounded-sm bg-brand px-2 py-0.5 text-[10px] font-bold uppercase text-white">
            Bestseller
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-3">
        <h3 className="line-clamp-1 text-sm font-medium text-ink">{product.name}</h3>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="flex items-center gap-1 rounded-sm bg-success px-1.5 py-0.5 text-[11px] font-semibold text-white">
            {product.rating.toFixed(1)} <StarIcon className="h-2.5 w-2.5" />
          </span>
          <span className="text-xs text-muted">({product.ratingCount})</span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-base font-semibold text-ink">₹{product.price}</span>
          <span className="text-xs text-muted line-through">₹{product.mrp}</span>
          <span className="text-xs font-semibold text-success">{off}% off</span>
        </div>
      </div>
    </Link>
  );
}
