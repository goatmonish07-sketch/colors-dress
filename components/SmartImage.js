"use client";

import { useState } from "react";

// Renders an <img> that walks a fallback chain: it starts with `src`, and on
// each load error advances to the next entry in `fallbacks` (an ordered array,
// e.g. [unsplash, loremflickr, builtin-svg]). `fallback` (single) is also
// accepted. When every source fails it shows an on-brand placeholder.
export default function SmartImage({ src, alt = "", className = "", fallback, fallbacks, ...rest }) {
  const chain = [src, ...(fallbacks || (fallback ? [fallback] : []))].filter(Boolean);
  const [idx, setIdx] = useState(0);

  if (idx >= chain.length) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-light via-white to-brand-light/60 p-3 text-center">
        <svg viewBox="0 0 24 24" className="h-9 w-9 text-brand/70" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a1.6 1.6 0 1 0 1.4 2.3L16 8l-4 3v10M12 11 8 8l2.6-2.7" />
          <path d="M8 21h8" />
        </svg>
        <span className="line-clamp-2 text-[11px] font-medium text-brand/80">{alt}</span>
      </div>
    );
  }

  return (
    <img
      key={idx}
      src={chain[idx]}
      alt={alt}
      onError={() => setIdx((i) => i + 1)}
      className={className}
      {...rest}
    />
  );
}
