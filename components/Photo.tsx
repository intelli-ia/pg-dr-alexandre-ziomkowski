import Image from "next/image";

type Props = {
  src: string | null;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Descrição curta mostrada no placeholder enquanto a foto não chega. */
  hint?: string;
};

/** Foto com fallback elegante: enquanto `src` for null, mostra um placeholder da identidade visual. */
export default function Photo({ src, alt, sizes, className = "", priority, hint = "Foto do Dr. Alexandre" }: Props) {
  if (src) {
    return <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={`object-cover ${className}`} />;
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className="absolute inset-0 flex flex-col items-center justify-end overflow-hidden bg-gradient-to-b from-[#dcecf7] via-[#bcd9ec] to-[#54A4D1]"
    >
      <svg viewBox="0 0 200 240" className="w-[78%] text-white/80" fill="currentColor" aria-hidden>
        <circle cx="100" cy="78" r="44" />
        <path d="M10 240c4-62 40-96 90-96s86 34 90 96z" />
      </svg>
      <span className="absolute bottom-3 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium tracking-wide text-[#21547C] backdrop-blur">
        {hint}
      </span>
    </div>
  );
}
