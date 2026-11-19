"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mapa do Google em iframe que começa a carregar bem antes de entrar na tela (rootMargin),
 * para estar pronto quando o usuário chegar. O embed custa ~280 KB e uma cadeia de ~6 s por mapa.
 * O iframe é maior que o quadro e fica recortado: esconde o cartão "Ver mapa ampliado" e os créditos do Google.
 */
export default function LazyMap({ src, title, className = "" }: { src: string; title: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "1800px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden bg-[#173d5c] ${className}`}>
      {!load && <div aria-hidden className="absolute inset-0 animate-pulse bg-[#1d4a70]" />}
      {load && (
        <iframe
          title={title}
          src={src}
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
          className="pointer-events-none absolute -top-28 left-0 h-[calc(100%+14rem)] w-full border-0"
        />
      )}
    </div>
  );
}
