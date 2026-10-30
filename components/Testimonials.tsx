type Variant = "light" | "dark" | "blue";
type Review = { name: string; quote: string; variant: Variant; bottom?: boolean };

// Avaliações do Google (trechos originais; a de Miguel Damasio foi resumida)
const testimonials: Review[] = [
  {
    name: "Luiz Pinho",
    quote:
      "Fui muito bem atendido, desde o estacionamento, na recepção da clínica também, com as atendentes muito atenciosas e educadas, e o Doutor Alexandre Ziomkowski simplesmente show, com explicação detalhada do meu quadro, possibilidades, muita clareza demostrando domínio absoluto. Ao final fiquei ultra satisfeito e tranquilo com meu atendimento. Muito obrigado a equipe Uroclínica da Bahia.",
    variant: "dark",
  },
  {
    name: "Miguel Damasio",
    quote:
      "Médico excelente! Me acompanhou durante o período que estava tentando engravidar minha esposa e, por meio de sua intervenção, consegui. Dr. Alexandre é extremamente humano, atencioso, dedicado e atualizado. Um profissional muito acima da média.",
    variant: "light",
    bottom: true,
  },
  {
    name: "Gabriel F.Santos",
    quote:
      "O Dr. é excelente! O atendimento é sempre claro e objetivo, não saio com dúvidas, o tratamento com foco no que minha criança precisa e as atendentes do consultório são maravilhosas.",
    variant: "blue",
  },
  {
    name: "Katia Valeria Jatoba",
    quote:
      "Passando para elogiar o atendimento com Dr.Alexandre. Médico muito competente e humano, trata o paciente com muito carinho, transmitindo muita segurança e tranquilidade, profissional diferenciado.",
    variant: "light",
  },
  {
    name: "julia de carli da luz",
    quote:
      "A consulta do Dr. Alexandre é excelente, a anamnese é estruturada, adequada ao perfil do paciente. No exame físico consegue surpreender, nota-se ampla experiência com bebê, recomendo a todas as mães.",
    variant: "dark",
    bottom: true,
  },
  {
    name: "Val",
    quote:
      "Fomos para Dr. Alexandre indicados por um médico pediatra do interior. Fomos em busca de uma solução de algo que estava nos deixando sem sono, muito preocupados. Solicitou os exames, e indicações tivemos uma evolução incrível. Excelente profissional, atencioso aos detalhes e muito explicativo de forma simples e humanizada.",
    variant: "light",
  },
  {
    name: "Amanda Bispo",
    quote:
      "Dr. Alexandre é um profissional de excelência, realizou a cirurgia do meu filho e ocorreu tudo com muita tranquilidade. Super atencioso e explica muito bem as principais necessidades dos cuidados urologicos. Excelente profissional",
    variant: "blue",
    bottom: true,
  },
  {
    name: "Monique Ribeiro",
    quote:
      "Dr. Alexandre além de mt gentil é um profissional competente, minucioso e explicativo que te passa total segurança. Excelente médico urologista pediatrico. Recomendo ⭐️⭐️⭐️⭐️⭐️",
    variant: "light",
  },
];

// Paleta do projeto por variante
const tones = {
  light: { box: "bg-white border-[#21547C]/10", text: "text-[#21547C]/90", name: "text-[#21547C]" },
  dark: { box: "bg-[#21547C] border-[#21547C]", text: "text-white/95", name: "text-[#9ACBE8]" },
  blue: { box: "bg-[#3E78A3] border-[#3E78A3]", text: "text-white", name: "text-white" },
} as const;

function Card({ t }: { t: Review }) {
  const tone = tones[t.variant];
  // Texto o maior possível: só os depoimentos muito longos reduzem a fonte, para caber sem cortar
  const len = t.quote.length;
  const size =
    len > 450 ? "text-sm sm:text-base" : len > 300 ? "text-base sm:text-lg" : len > 180 ? "text-lg sm:text-xl" : "text-xl sm:text-2xl";
  return (
    <div
      className={`mx-1 flex h-[30rem] w-72 shrink-0 flex-col ${t.bottom ? "justify-end" : "justify-between"} overflow-hidden rounded-3xl border p-6 sm:mx-2 sm:h-[32rem] sm:w-[23rem] sm:p-9 ${tone.box}`}
    >
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
