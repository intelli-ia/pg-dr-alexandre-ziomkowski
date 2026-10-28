"use client";
import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/config";

// Pílula flutuante (após a hero) + barra de progresso de leitura + botão flutuante no mobile
export default function Header() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) setVisible(hero.getBoundingClientRect().bottom <= 0);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="fixed left-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[#54A4D1] to-[#21547C]"
        style={{ transform: `scaleX(${progress})`, width: "100%" }}
      />

      <header
        className={`fixed left-0 right-0 top-5 z-50 flex justify-center px-4 transition-[opacity,transform] duration-500 ease-out ${
          visible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div
          style={{ WebkitBackdropFilter: "blur(16px)", backdropFilter: "blur(16px)" }}
          className="flex w-full max-w-xl transform-gpu items-center justify-between gap-6 rounded-full border border-[#21547C]/10 bg-white/75 py-1.5 pl-6 pr-1.5 shadow-[0_12px_40px_-12px_rgba(33,84,124,0.35)]"
        >
          <span className="font-serif text-lg font-medium text-[#21547C] sm:text-xl">
            Dr. Alexandre <span className="italic text-[#54A4D1]">Ziomkowski</span>
          </span>
          <CTAButton size="sm" label="Agendar" />
        </div>
      </header>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className={`pulse-ring fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#21547C] text-white shadow-[0_12px_30px_-6px_rgba(33,84,124,0.7)] transition-all duration-500 md:hidden ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  );
}
