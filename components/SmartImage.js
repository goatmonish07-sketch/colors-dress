"use client";

import { useState } from "react";

// Renders a normal <img>. If the source fails to load (blocked host, invalid
// URL, offline) it swaps to `fallback` (a built-in SVG data URI that always
// loads). If no fallback is given it shows an on-brand placeholder.
export default function SmartImage({ src, alt = "", className = "", fallback, ...rest }) {
  const [failed, setFailed] = useState(false);

  if (failed && fallback) {
    return <img src={fallback} alt={alt} className={className} {...rest} />;
  }

  if (failed) {
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

  return <img src={src} alt={alt} onError={() => setFailed(true)} className={className} {...rest} />;
}
