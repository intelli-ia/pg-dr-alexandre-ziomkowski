type Review = { name: string; quote: string };

// Avaliações originais do Google (texto mantido sem edições)
const testimonials: Review[] = [
  {
    name: "Luiz Pinho",
    quote:
      "Fui muito bem atendido, desde o estacionamento, na recepção da clínica também, com as atendentes muito atenciosas e educadas, e o Doutor Alexandre Ziomkowski simplesmente show, com explicação detalhada do meu quadro, possibilidades, muita clareza demostrando domínio absoluto. Ao final fiquei ultra satisfeito e tranquilo com meu atendimento. Muito obrigado a equipe Uroclínica da Bahia.",
  },
  {
    name: "Miguel Damasio",
    quote:
      "Médico excelente! Me acompanhou durante o período que estava tentando engravidar minha esposa e, por meio de sua intervenção, consegui, mesmo tendo fatores que tornavam o processo mais complexo. Dr. Alexandre é extremamente humano, atencioso, dedicado e atualizado. Um profissional muito acima da média. Deus abençoe à toda a família dele e de todos os profissionais da equipe dele também. Fez um acompanhamento completo, indo muito além da urologia, recomendando outro profissionais para complementar o tratamento.",
  },
  {
    name: "Gabriel F.Santos",
    quote:
      "O Dr. é excelente! O atendimento é sempre claro e objetivo, não saio com dúvidas, o tratamento com foco no que minha criança precisa e as atendentes do consultório são maravilhosas.",
  },
  {
    name: "Katia Valeria Jatoba",
    quote:
      "Passando para elogiar o atendimento com Dr.Alexandre. Médico muito competente e humano, trata o paciente com muito carinho, transmitindo muita segurança e tranquilidade, profissional diferenciado.",
  },
  {
    name: "julia de carli da luz",
    quote:
      "A consulta do Dr. Alexandre é excelente, a anamnese é estruturada, adequada ao perfil do paciente. No exame físico consegue surpreender, nota-se ampla experiência com bebê, recomendo a todas as mães.",
  },
  {
    name: "Val",
    quote:
      "Fomos para Dr. Alexandre indicados por um médico pediatra do interior. Fomos em busca de uma solução de algo que estava nos deixando sem sono, muito preocupados. Solicitou os exames, e indicações tivemos uma evolução incrível. Excelente profissional, atencioso aos detalhes e muito explicativo de forma simples e humanizada.",
  },
  {
    name: "Amanda Bispo",
    quote:
      "Dr. Alexandre é um profissional de excelência, realizou a cirurgia do meu filho e ocorreu tudo com muita tranquilidade. Super atencioso e explica muito bem as principais necessidades dos cuidados urologicos. Excelente profissional",
  },
  {
    name: "Monique Ribeiro",
    quote:
      "Dr. Alexandre além de mt gentil é um profissional competente, minucioso e explicativo que te passa total segurança. Excelente médico urologista pediatrico. Recomendo ⭐️⭐️⭐️⭐️⭐️",
  },
];

function Card({ t }: { t: Review }) {
  // Depoimentos longos usam fonte menor para caber na altura fixa do card
  const size = t.quote.length > 300 ? "text-sm sm:text-[15px]" : t.quote.length > 180 ? "text-base" : "text-lg";
  return (
    <div className="mx-2 flex h-[26rem] w-72 shrink-0 flex-col justify-between rounded-3xl border border-[#21547C]/10 bg-white p-6 sm:mx-3 sm:w-80 sm:p-8">
      <blockquote className={`overflow-hidden leading-relaxed text-[#21547C]/90 ${size}`}>
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="mt-5">
        <p className="text-base font-semibold text-[#21547C]">{t.name}</p>
        <p className="text-sm text-[#35516a]">Avaliação no Google</p>
      </div>
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
