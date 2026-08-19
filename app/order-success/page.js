import { Suspense } from "react";
import OrderSuccessClient from "../../components/OrderSuccessClient";

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="shell py-16 text-center text-muted">Loading…</div>}>
      <OrderSuccessClient />
    </Suspense>
  );
}
