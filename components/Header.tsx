"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";

// Barra fixa que aparece depois da hero (embaixo no mobile, no topo no desktop)
export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) setVisible(hero.getBoundingClientRect().bottom <= 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-0 right-0 z-50 flex justify-center px-4 transition-opacity duration-300 md:bottom-auto md:top-5 ${
        visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex w-full max-w-xl items-center justify-between gap-6 rounded-full border border-[#21547C]/15 bg-white py-1.5 pl-6 pr-1.5 shadow-lg shadow-[#21547C]/15">
        <Image
          src="/logo-positivo.svg"
          alt="Alexandre Ziomkowski, cirurgia urológica"
          width={1759}
          height={418}
          className="h-8 w-auto sm:h-9"
        />
        <CTAButton size="sm" label="Agendar" />
      </div>
    </header>
  );
}
