import { Suspense } from "react";
import ProductsClient from "../../components/ProductsClient";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="shell py-10 text-center text-muted">Loading…</div>}>
      <ProductsClient />
    </Suspense>
  );
}
