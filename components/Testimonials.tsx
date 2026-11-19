import Image from "next/image";

type Variant = "light" | "dark" | "blue";
// text: só texto · full: foto preenchendo o card · inset: foto num quadro no topo · inset-bottom: texto, nome e foto num quadro embaixo
type Layout = "text" | "full" | "inset" | "inset-bottom";
type Review = {
  name: string;
  quote: string;
  variant: Variant;
  layout?: Layout;
  /** arquivo em /public/depoimentos e posição do recorte */
  image?: { file: string; position: string };
};

// Avaliações do Google (trechos originais; a de Miguel Damasio foi resumida).
// As fotos são ilustrativas do atendimento e não retratam quem escreveu a avaliação.
const testimonials: Review[] = [
  {
    name: "Luiz Pinho",
    quote:
      "Fui muito bem atendido, desde o estacionamento, na recepção da clínica também, com as atendentes muito atenciosas e educadas, e o Doutor Alexandre Ziomkowski simplesmente show, com explicação detalhada do meu quadro, possibilidades, muita clareza demostrando domínio absoluto. Ao final fiquei ultra satisfeito e tranquilo com meu atendimento. Muito obrigado a equipe Uroclínica da Bahia.",
    variant: "dark",
    layout: "text",
  },
  {
    name: "Miguel Damasio",
    quote:
      "Médico excelente! Me acompanhou durante o período que estava tentando engravidar minha esposa e, por meio de sua intervenção, consegui. Dr. Alexandre é extremamente humano, atencioso, dedicado e atualizado. Um profissional muito acima da média.",
    variant: "light",
    layout: "inset",
    image: { file: "consulta-conversa", position: "object-[50%_20%]" },
  },
  {
    name: "Gabriel F.Santos",
    quote:
      "O Dr. é excelente! O atendimento é sempre claro e objetivo, não saio com dúvidas, o tratamento com foco no que minha criança precisa e as atendentes do consultório são maravilhosas.",
    variant: "blue",
    layout: "full",
    image: { file: "acolhimento", position: "object-[40%_20%]" },
  },
  {
    name: "Katia Valeria Jatoba",
    quote:
      "Passando para elogiar o atendimento com Dr.Alexandre. Médico muito competente e humano, trata o paciente com muito carinho, transmitindo muita segurança e tranquilidade, profissional diferenciado.",
    variant: "light",
    layout: "inset-bottom",
    image: { file: "escrevendo-prontuario", position: "object-[50%_65%]" },
  },
  {
    name: "julia de carli da luz",
    quote:
      "A consulta do Dr. Alexandre é excelente, a anamnese é estruturada, adequada ao perfil do paciente. No exame físico consegue surpreender, nota-se ampla experiência com bebê, recomendo a todas as mães.",
    variant: "dark",
    layout: "inset",
    image: { file: "consulta-exame-imagem", position: "object-[50%_25%]" },
  },
  {
    name: "Val",
    quote:
      "Fomos para Dr. Alexandre indicados por um médico pediatra do interior. Fomos em busca de uma solução de algo que estava nos deixando sem sono, muito preocupados. Solicitou os exames, e indicações tivemos uma evolução incrível. Excelente profissional, atencioso aos detalhes e muito explicativo de forma simples e humanizada.",
    variant: "light",
    layout: "text",
  },
  {
    name: "Amanda Bispo",
    quote:
      "Dr. Alexandre é um profissional de excelência, realizou a cirurgia do meu filho e ocorreu tudo com muita tranquilidade. Super atencioso e explica muito bem as principais necessidades dos cuidados urologicos. Excelente profissional",
    variant: "blue",
    layout: "full",
    image: { file: "exame-fisico", position: "object-[50%_30%]" },
  },
  {
    name: "Monique Ribeiro",
    quote:
      "Dr. Alexandre além de mt gentil é um profissional competente, minucioso e explicativo que te passa total segurança. Excelente médico urologista pediatrico. Recomendo ⭐️⭐️⭐️⭐️⭐️",
    variant: "light",
    layout: "inset-bottom",
    image: { file: "analise-exames-papel", position: "object-[50%_55%]" },
  },
];

// Paleta do projeto por variante
const tones = {
  light: { box: "bg-white border-[#21547C]/10", text: "text-[#21547C]/90", name: "text-[#21547C]" },
  dark: { box: "bg-[#21547C] border-[#21547C]", text: "text-white/95", name: "text-[#9ACBE8]" },
  blue: { box: "bg-[#3E78A3] border-[#3E78A3]", text: "text-white", name: "text-white" },
} as const;

const cardBase =
  "relative mx-1 flex h-[30rem] w-72 shrink-0 flex-col overflow-hidden rounded-3xl border sm:mx-2 sm:h-[32rem] sm:w-[23rem]";

function Photo({ t, className = "" }: { t: Review; className?: string }) {
  if (!t.image) return null;
  return (
    <Image
      src={`/depoimentos/${t.image.file}.webp`}
      unoptimized
      alt=""
      aria-hidden
      fill
      sizes="(min-width: 640px) 368px, 288px"
      className={`object-cover ${t.image.position} ${className}`}
    />
  );
}

function Card({ t }: { t: Review }) {
  const len = t.quote.length;

  // Foto preenchendo o card: texto branco sobre degradê escuro, no rodapé
  if (t.layout === "full" && t.image) {
    const size = len > 200 ? "text-base sm:text-lg" : "text-lg sm:text-xl";
    return (
      <div className={`${cardBase} justify-end border-[#21547C]/20 bg-[#173d5c] p-6 sm:p-8`}>
        <Photo t={t} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E45] via-[#0F2E45]/75 to-[#0F2E45]/5" />
        <blockquote className={`relative leading-relaxed text-white ${size}`}>{t.quote}</blockquote>
        <p className="relative mt-4 text-base font-semibold text-[#9ACBE8]">{t.name}</p>
      </div>
    );
  }

  const tone = tones[t.variant];

  // Texto e nome no topo, foto contida num quadro arredondado embaixo
  if (t.layout === "inset-bottom" && t.image) {
    const size = len > 220 ? "text-[15px] leading-snug sm:text-base sm:leading-relaxed" : "text-[15px] leading-relaxed sm:text-lg";
    return (
      <div className={`${cardBase} p-3 sm:p-4 ${tone.box}`}>
        <div className="flex flex-1 flex-col px-3 pt-4 sm:px-4 sm:pt-5">
          <blockquote className={`${tone.text} ${size}`}>{t.quote}</blockquote>
          <p className={`mt-3 text-base font-semibold ${tone.name}`}>{t.name}</p>
        </div>
        <div className="relative mt-3 h-36 shrink-0 overflow-hidden rounded-2xl bg-[#173d5c] sm:h-52">
          <Photo t={t} />
        </div>
      </div>
    );
  }

  // Foto contida num quadro arredondado no topo, texto embaixo
  if (t.layout === "inset" && t.image) {
    const size = len > 220 ? "text-[15px] leading-snug sm:text-base sm:leading-relaxed" : "text-[15px] sm:text-lg";
    return (
      <div className={`${cardBase} justify-between p-3 sm:p-4 ${tone.box}`}>
        <div className="relative h-36 shrink-0 overflow-hidden rounded-2xl bg-[#173d5c] sm:h-52">
          <Photo t={t} />
        </div>
        <div className="flex flex-1 flex-col justify-between px-3 pb-3 pt-4 sm:px-4 sm:pt-5">
          <blockquote className={`${size.includes("leading") ? "" : "leading-relaxed"} ${tone.text} ${size}`}>{t.quote}</blockquote>
          <p className={`mt-3 text-base font-semibold ${tone.name}`}>{t.name}</p>
        </div>
      </div>
    );
  }

  // Só texto: o maior possível; só os muito longos reduzem a fonte para caber sem cortar
  const size =
    len > 450 ? "text-sm sm:text-base" : len > 300 ? "text-base sm:text-lg" : len > 180 ? "text-lg sm:text-xl" : "text-xl sm:text-2xl";
  return (
    <div className={`${cardBase} justify-between p-6 sm:p-9 ${tone.box}`}>
      <blockquote className={`leading-relaxed ${tone.text} ${size}`}>{t.quote}</blockquote>
      <p className={`mt-5 text-base font-semibold ${tone.name}`}>{t.name}</p>
    </div>
  );
}

// Duas metades iguais: o loop (-50%) é contínuo e a cópia fica oculta aos leitores de tela
function Half({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex" aria-hidden={hidden || undefined}>
      {testimonials.map((t) => (
        <Card key={t.name} t={t} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="marquee-row relative flex overflow-hidden">
      <div className="marquee-track flex">
        <Half />
        <Half hidden />
      </div>
    </div>
  );
}
