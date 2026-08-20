"use client";

const APPAREL = [
  ["S", "34", "28", "36"],
  ["M", "36", "30", "38"],
  ["L", "38", "32", "40"],
  ["XL", "40", "34", "42"],
  ["XXL", "42", "36", "44"],
];

export default function SizeChart({ onClose }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 sm:items-center" onClick={onClose}>
      <div className="w-full max-w-md rounded-t-xl bg-white p-5 sm:rounded-xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-display text-lg font-bold text-ink">Size Guide</h3>
          <button onClick={onClose} aria-label="Close" className="grid h-8 w-8 place-items-center rounded-full text-muted hover:bg-page">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>
        <p className="mb-3 text-xs text-muted">All measurements in inches. Body measurements, not garment.</p>
        <div className="overflow-hidden rounded-md border border-line">
          <table className="w-full text-center text-sm">
            <thead>
              <tr className="bg-brand-light text-brand">
                <th className="py-2 font-semibold">Size</th>
                <th className="py-2 font-semibold">Bust</th>
                <th className="py-2 font-semibold">Waist</th>
                <th className="py-2 font-semibold">Hip</th>
              </tr>
            </thead>
            <tbody>
              {APPAREL.map(([s, b, w, h], idx) => (
                <tr key={s} className={idx % 2 ? "bg-page" : "bg-white"}>
                  <td className="py-2 font-semibold text-ink">{s}</td>
                  <td className="py-2 text-ink/80">{b}"</td>
                  <td className="py-2 text-ink/80">{w}"</td>
                  <td className="py-2 text-ink/80">{h}"</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted">
          Tip: If you're between sizes, we recommend choosing the larger size for a relaxed fit.
        </p>
      </div>
    </div>
  );
}
