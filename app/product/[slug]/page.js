import { notFound } from "next/navigation";
import ProductDetail from "../../../components/ProductDetail";
import ProductCard from "../../../components/ProductCard";
import { getProduct, getByCategory, products } from "../../../lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product not found — Colors Dress" };
  return {
    title: `${product.name} — Colors Dress`,
    description: product.description,
  };
}

export default function ProductPage({ params }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = getByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 6);

  return (
    <div className="pb-6">
      <ProductDetail product={product} />

      {related.length > 0 && (
        <section className="shell mt-8">
          <h2 className="mb-4 font-display text-xl font-bold text-ink">Similar Products</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
