// TODO: substituir pelos depoimentos reais do Google e da Doctoralia (texto original, sem edições).
// Os itens abaixo são apenas marcadores de posição para o layout e NÃO devem ir ao ar.
type Review = { name: string; role: string; quote: string };

const testimonials: Review[] = [
  { name: "Nome do paciente", role: "Avaliação no Google", quote: "Inserir aqui o depoimento original do Google." },
  { name: "Nome do paciente", role: "Avaliação na Doctoralia", quote: "Inserir aqui o depoimento original da Doctoralia." },
  { name: "Nome do paciente", role: "Avaliação no Google", quote: "Inserir aqui o depoimento original do Google." },
  { name: "Nome do paciente", role: "Avaliação na Doctoralia", quote: "Inserir aqui o depoimento original da Doctoralia." },
];

function Stars() {
  return (
    <div className="mb-4 flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-4 w-4 text-[#54A4D1]" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t }: { t: Review }) {
  return (
    <div className="mx-2 flex h-[19rem] w-72 shrink-0 flex-col rounded-3xl border border-[#21547C]/10 bg-white p-6 shadow-[0_20px_40px_-30px_rgba(33,84,124,0.5)] sm:mx-3 sm:w-80 sm:p-7">
      <Stars />
      <blockquote className="flex-1 overflow-hidden text-sm leading-relaxed text-[#21547C]/80">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="mt-4 flex items-center gap-3 border-t border-[#21547C]/10 pt-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#54A4D1]/20">
          <span className="text-xs font-bold text-[#21547C]">{t.name.charAt(0)}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#21547C]">{t.name}</p>
          <p className="text-xs text-[#35516a]">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

function Row({ reverse = false }: { reverse?: boolean }) {
  const base = reverse ? [...testimonials].reverse() : testimonials;
  const half = [...base, ...base];
  return (
    <div className="marquee-row relative flex overflow-hidden">
      <div className={`marquee-track flex ${reverse ? "marquee-reverse" : ""}`}>
        {[...half, ...half].map((t, i) => (
          <Card key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="space-y-4 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <Row />
      <Row reverse />
    </div>
  );
}
