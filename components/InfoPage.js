import Link from "next/link";

export default function InfoPage({ title, intro, sections = [] }) {
  return (
    <div className="shell py-8">
      <div className="mx-auto max-w-3xl rounded-md bg-white p-6 shadow-card sm:p-8">
        <nav className="mb-2 text-xs text-muted">
          <Link href="/" className="hover:text-brand">Home</Link> / <span className="text-ink">{title}</span>
        </nav>
        <h1 className="font-display text-2xl font-bold text-ink">{title}</h1>
        {intro && <p className="mt-2 text-sm text-ink/80">{intro}</p>}
        <div className="mt-6 space-y-6">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="mb-1.5 text-base font-semibold text-ink">{s.h}</h2>
              <p className="text-sm leading-relaxed text-ink/80">{s.p}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
