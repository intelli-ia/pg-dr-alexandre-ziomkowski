"use client";
import type { PointerEvent } from "react";
import { WHATSAPP_URL } from "@/lib/config";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

type Props = {
  label?: string;
  href?: string;
  /** solid: navy (fundos claros) · light: branco (fundos escuros) · outline: contorno navy · outlineLight: contorno branco */
  variant?: "solid" | "light" | "outline" | "outlineLight";
  size?: "sm" | "default" | "lg";
  external?: boolean;
  icon?: "whatsapp" | "arrow" | "none";
  className?: string;
  /** ocupa toda a largura do contêiner, com o texto em uma linha só */
  full?: boolean;
};

const base =
  "cta group relative inline-flex w-full items-center justify-center gap-2 rounded-full sm:gap-3 font-semibold outline-offset-4 transition-[translate,scale,box-shadow,background-color,color,border-color] duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#54A4D1] hover:-translate-y-0.5 active:scale-[0.97] sm:w-auto";

const variants = {
  solid:
    "cta-ring bg-gradient-to-br from-[#2d6c9c] via-[#21547C] to-[#173d5c] text-white shadow-[0_14px_34px_-12px_rgba(33,84,124,0.8),inset_0_1px_0_rgba(255,255,255,0.22)] hover:shadow-[0_22px_44px_-12px_rgba(33,84,124,0.95),inset_0_1px_0_rgba(255,255,255,0.3)]",
  light:
    "cta-ring cta-ring-sky bg-gradient-to-b from-white to-[#e4f0f8] text-[#21547C] shadow-[0_14px_34px_-12px_rgba(0,0,0,0.55),inset_0_1px_0_#fff] hover:shadow-[0_22px_46px_-12px_rgba(84,164,209,0.8),inset_0_1px_0_#fff]",
  outline:
    "border-2 border-[#21547C] text-[#21547C] hover:bg-[#21547C] hover:text-white hover:shadow-[0_18px_36px_-14px_rgba(33,84,124,0.7)]",
  outlineLight:
    "border-2 border-white/70 text-white backdrop-blur hover:border-white hover:bg-white hover:text-[#21547C] hover:shadow-[0_18px_36px_-14px_rgba(255,255,255,0.45)]",
};

// Selo circular do ícone: contraste conforme a variante
const chip = {
  solid: "bg-white/15 text-white group-hover:bg-white group-hover:text-[#21547C]",
  light: "bg-[#21547C] text-white group-hover:bg-[#54A4D1]",
  outline: "bg-[#21547C]/10 text-[#21547C] group-hover:bg-white/20 group-hover:text-white",
  outlineLight: "bg-white/15 text-white group-hover:bg-[#21547C]/10 group-hover:text-[#21547C]",
};

const sizes = {
  sm: { pad: "py-1.5 pl-2 pr-4 text-xs", chip: "h-7 w-7", icon: "h-4 w-4" },
  default: { pad: "py-2 pl-2 pr-3.5 text-[clamp(9.5px,2.9vw,13px)] sm:py-2.5 sm:pl-2.5 sm:pr-6 sm:text-sm md:pr-7", chip: "h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10", icon: "h-4 w-4 sm:h-5 sm:w-5" },
  lg: { pad: "py-2 pl-2 pr-3.5 text-[clamp(9.5px,2.9vw,13px)] sm:py-2.5 sm:pl-3 sm:pr-7 sm:text-sm md:py-3 md:pr-9 md:text-base", chip: "h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12", icon: "h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" },
};

const glow = {
  solid: "from-[#54A4D1] to-[#21547C]",
  light: "from-white to-[#54A4D1]",
  outline: "from-[#54A4D1] to-[#21547C]",
  outlineLight: "from-white to-[#54A4D1]",
};

// Efeito magnético leve (só mouse) + spotlight que segue o cursor
function onMove(e: PointerEvent<HTMLAnchorElement>) {
  if (e.pointerType !== "mouse") return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;
  el.style.setProperty("--mx", `${x}px`);
  el.style.setProperty("--my", `${y}px`);
  el.style.transform = `translate(${((x / r.width - 0.5) * 8).toFixed(1)}px, ${((y / r.height - 0.5) * 6).toFixed(1)}px)`;
}
function onLeave(e: PointerEvent<HTMLAnchorElement>) {
  e.currentTarget.style.transform = "";
}

export default function CTAButton({
  label = "Agendar minha consulta pelo WhatsApp",
  href = WHATSAPP_URL,
  variant = "solid",
  size = "default",
  external = true,
  icon = "whatsapp",
  className = "",
  full = false,
}: Props) {
  const s = sizes[size];
  const filled = variant === "solid" || variant === "light";
  return (
    <span className={`group relative max-w-full ${full ? "flex w-full" : "inline-flex sm:w-auto"} ${className}`}>
      {filled && (
        <span
          aria-hidden
          className={`cta-halo pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r ${glow[variant]} opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-80`}
        />
      )}
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={`${base} ${variants[variant]} ${s.pad} ${full ? "sm:w-full" : ""}`}
      >
        {/* halo atrás do botão acende no hover */}
        <span aria-hidden className="cta-spot pointer-events-none absolute inset-0 rounded-full" />
        {filled && <span aria-hidden className="cta-shine pointer-events-none absolute inset-0 overflow-hidden rounded-full" />}

        {icon !== "none" && (
          <span
            className={`relative flex shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-[-8deg] group-hover:scale-110 ${s.chip} ${chip[variant]}`}
          >
            {icon === "whatsapp" ? (
              <WhatsAppIcon className={s.icon} />
            ) : (
              <svg className={s.icon} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            )}
          </span>
        )}

        <span className="relative whitespace-nowrap text-center leading-tight">{label}</span>

        {icon === "whatsapp" && (
          <svg
            className="relative -ml-1 hidden h-4 w-4 shrink-0 sm:block -translate-x-1 opacity-60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        )}
      </a>
    </span>
  );
}
