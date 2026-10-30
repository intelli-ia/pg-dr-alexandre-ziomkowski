import { WHATSAPP_URL } from "@/lib/config";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

type Props = {
  label?: string;
  href?: string;
  /** solid: fundos claros · light: fundos escuros · outline: contorno, fundos escuros · green: WhatsApp */
  variant?: "solid" | "light" | "outline" | "green";
  size?: "sm" | "default";
  external?: boolean;
  icon?: "whatsapp" | "arrow" | "none";
  /** ocupa toda a largura do contêiner */
  full?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full md:gap-2.5 text-center font-semibold leading-tight transition-all duration-200 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#54A4D1]";

const variants = {
  solid: "bg-[#21547C] text-white hover:bg-[#173d5c]",
  light: "bg-white text-[#21547C] hover:bg-[#DDEBF5]",
  outline: "border-2 border-[#9ACBE8] text-[#9ACBE8] hover:bg-[#9ACBE8] hover:text-[#173d5c]",
  green: "bg-[#25D366] text-[#0F2E45] hover:bg-[#1fb857]",
};

const sizes = {
  default:
    "whitespace-nowrap px-4 py-3 text-[clamp(10px,calc((100vw-112px)/24),15px)] sm:px-6 sm:py-3.5 md:px-8 md:py-4 md:text-base",
  sm: "whitespace-nowrap px-5 py-2.5 text-sm",
};

export default function CTAButton({
  label = "Agendar minha consulta pelo WhatsApp",
  href = WHATSAPP_URL,
  variant = "solid",
  size = "default",
  external = true,
  icon = "whatsapp",
  full = false,
}: Props) {
  const iconSize = size === "sm" ? "h-4 w-4" : "h-4 w-4 md:h-5 md:w-5";
  // Botões que levam ao WhatsApp ganham a borda de laser girando; os demais só sobem no hover
  const laser = href === WHATSAPP_URL;
  const lift = "hover:-translate-y-0.5 hover:shadow-lg";
  const button = (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${variants[variant]} ${sizes[size]} ${full ? "flex w-full" : "w-full sm:w-auto"} ${laser ? "" : lift}`}
    >
      {icon === "whatsapp" && <WhatsAppIcon className={`${iconSize} shrink-0`} />}
      {label}
      {icon === "arrow" && (
        <svg className={`${iconSize} shrink-0`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      )}
    </a>
  );

  if (!laser) return button;
  return (
    <span
      className={`laser-border ${lift} ${full ? "flex w-full" : "flex w-full sm:inline-flex sm:w-auto"} ${
        variant === "solid" ? "laser-on-light" : ""
      }`}
    >
      <span className="laser-beam" aria-hidden />
      {button}
    </span>
  );
}
