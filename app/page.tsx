import CTAButton from "@/components/CTAButton";
import Counter from "@/components/Counter";
import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import { Check, Cross, Icon, type IconName } from "@/components/Icons";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SpotCard from "@/components/SpotCard";
import Testimonials from "@/components/Testimonials";
import { ADDRESS_LINES, CLINIC, IMAGES, MAPS_EMBED, MAPS_URL } from "@/lib/config";

const differentials: [string, string, IconName][] = [
  [
    "Indicação de cirurgia com critério",
    "Explico quando há necessidade de operar e quando o caso pode ser acompanhado ou tratado de outra forma. Você participa da decisão sabendo o motivo de cada orientação.",
    "shield",
  ],
  [
    "Avaliação com quem também realiza a cirurgia",
    "Quando o procedimento é indicado e faz parte da minha atuação, também sou eu quem opera. Assim, você pode seguir com o médico que já conhece sua história e seus exames.",
    "scalpel",
  ],
  [
    "Atenção à criança e à família",
    "Na consulta infantil, escuto as preocupações dos responsáveis, avalio a criança e esclareço os cuidados necessários. A família acompanha e entende os próximos passos.",
    "family",
  ],
];

const areas: [string, string, IconName, string][] = [
  [
    "Urologia do adulto",
    "Avalio sintomas urinários, alterações em exames e dúvidas sobre a saúde urológica. Realizo o acompanhamento clínico e, quando necessário, o tratamento cirúrgico dentro da minha atuação.",
    "user",
    "md:col-span-2",
  ],
  [
    "Urologia infantil",
    "Atendo crianças com fimose, testículo que não desceu, hipospádia e outras condições urológicas. Explico aos responsáveis o que pode ser acompanhado e quando há indicação de tratamento.",
    "child",
    "md:col-span-2",
  ],
  [
    "Cálculos renais",
    "Avalio e trato pedras nos rins. Quando há necessidade de cirurgia, trabalho com procedimentos endoscópicos e laser, conforme as características de cada caso.",
    "kidney",
    "md:col-span-2",
  ],
  [
    "Próstata aumentada",
    "Investigo dificuldades para urinar e outros sintomas relacionados à próstata. Entre os procedimentos que realizo estão RTUP, Rezum e UroLift, com indicação individualizada.",
    "prostate",
    "md:col-span-3",
  ],
  [
    "Cirurgia robótica oncológica",
    "Atuo em cirurgias robóticas para casos selecionados de câncer de próstata, rim e bexiga. Avalio os exames e explico as opções de abordagem cirúrgica.",
    "robot",
    "md:col-span-3",
  ],
];

const steps: [string, string, IconName][] = [
  ["Clique no botão desta página", "Você será direcionado ao WhatsApp da minha equipe.", "click"],
  [
    "Converse e confirme seu agendamento",
    "Consulte valores, convênios e horários. Escolha a melhor opção e receba a confirmação do local e da data.",
    "calendar",
  ],
  [
    "Faça sua avaliação comigo",
    "Na consulta, escuto sua história, avalio os sintomas e os exames disponíveis. Se necessário, solicito exames para complementar a investigação.",
    "stetho",
  ],
  [
    "Entenda as opções para seu caso",
    "Explico as possibilidades de acompanhamento ou tratamento. Quando há indicação de cirurgia dentro da minha atuação, também posso realizar o procedimento.",
    "route",
  ],
];

const formation: [string, string][] = [
  ["Medicina", "Universidade Federal da Bahia"],
  ["Residência em Cirurgia Geral", "Hospital Universitário Professor Edgard Santos"],
  ["Residência em Urologia", "Hospital São Rafael, Rede D’Or"],
  ["Cirurgia robótica", "Certificação CETEC/Einstein"],
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* DOBRA 01 — HERO */}
      <section id="hero" className="relative overflow-hidden bg-white pb-28 pt-12 md:pb-36 md:pt-20">
        <div className="drift pointer-events-none absolute -right-48 -top-40 h-[620px] w-[620px] rounded-full bg-[#54A4D1]/20 blur-3xl" />
        <div className="drift pointer-events-none absolute -bottom-48 -left-40 h-[520px] w-[520px] rounded-full bg-[#21547C]/10 blur-3xl [animation-delay:-6s]" />
        <Cross className="float-slow pointer-events-none absolute left-[5%] top-24 hidden w-5 text-[#54A4D1]/60 md:block" />
        <Cross className="float-slow pointer-events-none absolute bottom-48 right-[44%] hidden w-4 text-[#21547C]/20 [animation-delay:-3s] md:block" />

        <div className="relative mx-auto grid grid-cols-[minmax(0,1fr)] w-full max-w-6xl gap-12 px-6 md:grid-cols-12 md:items-stretch md:gap-x-16 md:gap-y-10 lg:gap-x-24">
          <div className="order-2 md:order-1 md:col-span-7">
            <Reveal>
              <h1 className="type-hero font-serif font-medium italic text-[#21547C]">
                Urologista em Salvador para adultos e crianças.
              </h1>
              <div className="my-7 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#54A4D1] to-[#21547C]" />
              <h2 className="max-w-xl text-base font-light leading-relaxed text-[#35516a] md:text-lg">
                Avalio seu caso, explico as opções de tratamento e, quando indicada, também realizo sua cirurgia. Você
                pode seguir com o mesmo médico, da consulta ao tratamento cirúrgico.
              </h2>
              <p className="mt-4 flex items-start gap-2.5 text-sm font-medium text-[#21547C]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#54A4D1]" />
                Atendimento particular e por convênios. Consulte seu plano com a equipe.
              </p>
              <div className="mt-9">
                <CTAButton size="lg" />
              </div>
              <p className="mt-5 text-xs tracking-wide text-[#35516a]/80">CRM-BA 25959 · RQE 20028</p>
            </Reveal>
          </div>

          <div className="order-1 md:order-2 md:col-span-5 md:h-full">
            <Reveal delay={150} className="md:h-full">
              <div className="relative mx-auto w-[72%] max-w-sm md:h-full md:w-full md:max-w-md">
                <div className="absolute -bottom-4 -right-4 left-4 top-4 rounded-t-[999px] rounded-b-[2rem] border border-[#54A4D1]/70" />
                <div className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:h-full md:min-h-[28rem] rounded-t-[999px] rounded-b-[2rem] bg-[#EEF6FB] shadow-[0_40px_80px_-30px_rgba(33,84,124,0.55)]">
                  <Photo
                    src={IMAGES.hero}
                    className="object-[50%_12%]"
                    alt="Dr. Alexandre Ziomkowski, urologista em Salvador, em seu consultório"
                    priority
                    sizes="(min-width: 768px) 40vw, 82vw"
                    hint="Foto do Dr. Alexandre no consultório"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#21547C]/25 via-transparent to-transparent" />
                </div>
                <div className="float-slow absolute -left-4 bottom-12 z-10 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-[0_20px_40px_-18px_rgba(33,84,124,0.55)] backdrop-blur md:-left-10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#21547C] text-white">
                    <Icon name="star" className="h-5 w-5" />
                  </span>
                  <span className="leading-tight">
                    <span className="block font-serif text-xl italic text-[#21547C]">+200</span>
                    <span className="block text-[11px] text-[#35516a]">avaliações de pacientes</span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Faixa de autoridade */}
        <Reveal delay={200} className="relative mx-auto mt-16 w-full max-w-6xl px-6 md:mt-20">
          <div className="grain relative grid grid-cols-[minmax(0,1fr)] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#21547C] to-[#173d5c] text-white shadow-[0_40px_80px_-40px_rgba(33,84,124,0.9)] md:grid-cols-3">
            {[
              { icon: "star" as IconName, big: <Counter to={200} />, text: "avaliações no Google e na Doctoralia." },
              {
                icon: "award" as IconName,
                big: <span className="font-serif italic">CETEC/Einstein</span>,
                text: "Certificação em cirurgia robótica.",
              },
              {
                icon: "robot" as IconName,
                big: <Counter to={2000} />,
                text: "procedimentos robóticos urológicos realizados pela equipe da qual faço parte.",
              },
            ].map((s, i) => (
              <div
                key={s.text}
                className={`relative flex items-center gap-5 px-7 py-7 md:flex-col md:items-start md:gap-3 md:px-9 md:py-9 ${
                  i > 0 ? "border-t border-white/12 md:border-l md:border-t-0" : ""
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#54A4D1]">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <div>
                  <div className="font-serif text-3xl font-medium md:text-4xl">{s.big}</div>
                  <p className="mt-1 text-sm leading-snug text-white/80">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* DOBRA 02 — DEPOIMENTOS */}
      <section
        id="depoimentos"
        className="relative -mt-16 overflow-hidden rounded-t-[4rem] bg-[#EEF6FB] pb-40 pt-20 md:pb-44 md:pt-28"
      >
        <Cross className="float-slow pointer-events-none absolute left-[8%] top-16 w-5 text-[#54A4D1]/50" />
        <Cross className="float-slow pointer-events-none absolute right-[10%] top-24 w-4 text-[#21547C]/20 [animation-delay:-2s]" />
        <Reveal className="mb-12 px-6 text-center md:mb-16">
          <h2 className="mx-auto max-w-4xl font-serif type-section font-medium text-[#21547C]">
            Quem já passou por consulta <span className="hl">fala por mim</span>
          </h2>
        </Reveal>
        <Testimonials />
      </section>

      {/* DOBRA 03 — POR QUE CONSULTAR COMIGO */}
      <section
        id="diferenciais"
        className="grain relative -mt-16 overflow-hidden rounded-t-[4rem] bg-[#21547C] pb-44 pt-24 text-white md:pb-52 md:pt-32"
      >
        <div className="drift pointer-events-none absolute -left-40 top-20 h-[460px] w-[460px] rounded-full bg-[#54A4D1]/25 blur-3xl" />
        <Cross className="float-slow pointer-events-none absolute right-[6%] top-28 w-5 text-[#54A4D1]/70" />
        <div className="relative mx-auto grid grid-cols-[minmax(0,1fr)] max-w-6xl gap-14 px-6 md:grid-cols-12 md:items-stretch md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          <Reveal className="md:col-span-5 md:h-full">
            <div className="relative mx-auto max-w-sm md:h-full md:max-w-none">
              <div className="absolute -bottom-4 -left-4 right-4 top-4 rounded-t-[999px] rounded-b-[2rem] border border-[#54A4D1]/70" />
              <div className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:h-full md:min-h-[28rem] rounded-t-[999px] rounded-b-[2rem] bg-[#173d5c] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
                <Photo
                  src={IMAGES.consulta}
                  className="object-[50%_12%]"
                  alt="Dr. Alexandre Ziomkowski em consulta com paciente"
                  sizes="(min-width: 768px) 40vw, 90vw"
                  hint="Foto do Dr. Alexandre em consulta"
                />
              </div>
            </div>
          </Reveal>

          <div className="md:col-span-7">
            <Reveal>
              <h2 className="font-serif type-section font-medium">
                Entenda seu caso <span className="italic text-[#54A4D1]">antes de decidir</span> o tratamento.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                Um exame alterado, um sintoma ou uma preocupação com seu filho podem trazer muitas dúvidas. Meu
                trabalho é avaliar o que está acontecendo e explicar as possibilidades de cuidado.
              </p>
            </Reveal>

            <div className="mt-9 space-y-4">
              {differentials.map(([t, d, icon], i) => (
                <Reveal key={t} delay={i * 90}>
                  <SpotCard className="flex gap-5 rounded-3xl border border-white/12 bg-white/[0.06] p-6 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-[#54A4D1]/50 md:p-7">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#54A4D1] text-white">
                      <Icon name={icon} className="h-8 w-8" />
                    </span>
                    <div>
                      <h3 className="font-serif type-card font-medium">{t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/80 md:text-base">{d}</p>
                    </div>
                  </SpotCard>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200} className="mt-10">
              <CTAButton variant="light" label="Agendar minha avaliação pelo WhatsApp" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* DOBRA 04 — ÁREAS DE ATUAÇÃO */}
      <section
        id="areas"
        className="relative -mt-16 overflow-hidden rounded-t-[4rem] bg-white pb-40 pt-20 md:pb-44 md:pt-28"
      >
        <div className="drift pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-[#54A4D1]/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 max-w-3xl">
            <h2 className="font-serif type-section font-medium text-[#21547C]">
              Consultas e tratamentos urológicos para <span className="hl">adultos e crianças.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#35516a] md:text-lg">
              Conheça algumas das questões que avalio e trato. A consulta permite entender seu caso e definir as
              possibilidades de acompanhamento ou tratamento.
            </p>
          </Reveal>

          <div className="grid grid-cols-[minmax(0,1fr)] gap-5 md:grid-cols-6">
            {areas.map(([t, d, icon, span], i) => (
              <Reveal key={t} delay={(i % 3) * 80} className={span}>
                <SpotCard className="group h-full rounded-3xl border border-[#21547C]/10 bg-[#EEF6FB] p-8 transition duration-500 hover:-translate-y-1.5 hover:border-[#54A4D1]/60 hover:shadow-[0_30px_60px_-30px_rgba(33,84,124,0.5)]">
                  <div className="flex items-start justify-between">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#21547C] shadow-sm transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#21547C] group-hover:text-white">
                      <Icon name={icon} className="h-9 w-9" />
                    </span>
                    <span className="font-serif text-3xl italic text-[#54A4D1]/60">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-serif type-card font-medium text-[#21547C]">{t}</h3>
                  <p className="mt-2.5 leading-relaxed text-[#35516a]">{d}</p>
                </SpotCard>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <CTAButton />
          </Reveal>
        </div>
      </section>

      {/* DOBRA 05 — COMO FUNCIONA O ATENDIMENTO */}
      <section
        id="como-funciona"
        className="relative -mt-16 overflow-hidden rounded-t-[4rem] bg-[#EEF6FB] pb-44 pt-24 md:pb-52 md:pt-28"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-14 max-w-3xl">
            <h2 className="font-serif type-section font-medium text-[#21547C]">
              Veja como é <span className="hl">fácil marcar</span> sua consulta.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#35516a] md:text-lg">
              Minha equipe está disponível no WhatsApp 24 horas por dia, todos os dias. Você tira suas dúvidas e agenda
              sua consulta diretamente pela conversa.
            </p>
          </Reveal>

          <ol className="relative grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-4">
            <span
              aria-hidden
              className="absolute left-[12%] right-[12%] top-[2.1rem] hidden h-px border-t-2 border-dashed border-[#54A4D1]/60 md:block"
            />
            {steps.map(([t, d, icon], i) => (
              <Reveal key={t} delay={i * 100}>
                <li className="relative h-full rounded-3xl bg-white p-7 shadow-[0_24px_50px_-34px_rgba(33,84,124,0.5)] transition duration-500 hover:-translate-y-1.5">
                  <div className="relative z-10 mb-5 flex items-center gap-3">
                    <span className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-[#21547C] font-serif text-xl italic text-white ring-8 ring-[#EEF6FB]">
                      {i + 1}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF6FB] text-[#21547C]">
                      <Icon name={icon} className="h-7 w-7" />
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-medium leading-snug text-[#21547C]">{t}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#35516a] md:text-[15px]">{d}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-12 text-center">
            <CTAButton />
          </Reveal>
        </div>
      </section>

      {/* DOBRA 06 — SOBRE O DR. ALEXANDRE */}
      <section
        id="sobre"
        className="relative -mt-16 overflow-hidden rounded-t-[4rem] bg-white pb-40 pt-20 md:pb-44 md:pt-28"
      >
        <div className="mx-auto grid grid-cols-[minmax(0,1fr)] max-w-6xl gap-16 px-6 md:grid-cols-12 md:items-stretch md:gap-x-16 md:gap-y-14 lg:gap-x-24">
          <Reveal className="md:col-span-5 md:h-full">
            <div className="relative mx-auto max-w-sm md:h-full md:max-w-none">
              <div className="absolute -bottom-4 -right-4 left-4 top-4 rounded-t-[999px] rounded-b-[2rem] border border-[#54A4D1]/70" />
              <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-[#54A4D1]/30 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:h-full md:min-h-[28rem] rounded-t-[999px] rounded-b-[2rem] bg-[#EEF6FB] shadow-[0_40px_80px_-30px_rgba(33,84,124,0.55)]">
                <Photo
                  src={IMAGES.sobre}
                  alt="Dr. Alexandre Ziomkowski, médico urologista"
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-[50%_12%] transition-transform duration-[1500ms] ease-out hover:scale-105"
                  hint="Foto acolhedora do Dr. Alexandre"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#21547C]/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#21547C] px-6 py-3 text-sm font-medium text-white shadow-xl md:-right-6 md:left-auto md:translate-x-0">
                <span className="font-serif text-2xl italic text-[#54A4D1]">+2.000</span> procedimentos robóticos na equipe
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="md:col-span-7">
            <h2 className="font-serif type-section font-medium text-[#21547C]">
              Conheça o <span className="hl">Dr. Alexandre Ziomkowski.</span>
            </h2>
            <p className="mt-3 text-sm font-medium tracking-wide text-[#54A4D1]">
              <span className="text-[#21547C]">Médico urologista · CRM-BA 25959 · RQE 20028</span>
            </p>
            <div className="my-6 h-px w-16 bg-[#54A4D1]" />
            <div className="space-y-4 text-base leading-[1.7] text-[#35516a] md:text-lg">
              <p>
                Sou médico urologista e cirurgião, com atendimento de adultos e crianças em Salvador. Sei que uma
                consulta pode começar com receio de um exame, preocupação com um diagnóstico ou dúvidas sobre a saúde
                de um filho. Por isso, procuro ouvir com atenção e explicar cada orientação com calma.
              </p>
              <p>
                Minha formação começou em Medicina na Universidade Federal da Bahia. Depois, fiz residência em Cirurgia
                Geral no Hospital Universitário Professor Edgard Santos e em Urologia no Hospital São Rafael, da Rede
                D’Or.
              </p>
              <p>
                Tenho certificação em cirurgia robótica pelo CETEC/Einstein e integro uma equipe com mais de 2.000
                procedimentos robóticos urológicos realizados. Também participo da formação de outros médicos como
                preceptor em urologia e cirurgia robótica.
              </p>
              <p>
                No consultório, quero que você se sinta à vontade para perguntar e conversar sobre o que preocupa.
                Quando atendo uma criança, esse cuidado inclui acolher a família e ajudá-la a compreender os próximos
                passos.
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2">
              {formation.map(([t, d]) => (
                <li key={t} className="flex items-start gap-3 rounded-2xl border border-[#21547C]/10 bg-[#EEF6FB] p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#21547C] text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-snug">
                    <span className="block text-sm font-semibold text-[#21547C]">{t}</span>
                    <span className="block text-xs text-[#35516a]">{d}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <CTAButton />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DOBRA 07 — LOCALIZAÇÃO */}
      <section
        id="localizacao"
        className="grain relative -mt-16 overflow-hidden rounded-t-[4rem] bg-[#21547C] pb-44 pt-24 text-white md:pb-52 md:pt-28"
      >
        <div className="drift pointer-events-none absolute -right-40 top-10 h-[460px] w-[460px] rounded-full bg-[#54A4D1]/25 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mx-0 md:text-left">
            <h2 className="font-serif type-section font-medium">
              Sua consulta com <span className="italic text-[#54A4D1]">urologista em Salvador.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
              Atendo adultos e crianças na {CLINIC}, na região da Garibaldi. Minha equipe confirma o local e os detalhes
              do atendimento ao agendar sua consulta pelo WhatsApp.
            </p>
          </Reveal>

          <div className="grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-12">
            <Reveal className="md:col-span-6">
              <div className="flex h-full flex-col gap-6">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-[#173d5c] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
                  <Photo
                    src={IMAGES.clinica}
                    className="object-[50%_62%]"
                    alt={`Fachada e recepção da ${CLINIC}`}
                    sizes="(min-width: 768px) 38vw, 90vw"
                    hint="Foto da clínica"
                  />
                </div>
                <SpotCard className="rounded-3xl border border-white/12 bg-white/[0.06] p-4 backdrop-blur sm:p-7">
                  <div className="flex flex-col items-center gap-3 text-center md:flex-row md:items-start md:gap-4 md:text-left">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#54A4D1] text-white">
                      <Icon name="pin" className="h-7 w-7" />
                    </span>
                    <address className="not-italic">
                      <p className="font-serif text-2xl font-medium">{CLINIC}</p>
                      <p className="mt-2 leading-relaxed text-white/85">
                        {ADDRESS_LINES.map((l) => (
                          <span key={l} className="block">
                            {l}
                          </span>
                        ))}
                      </p>
                    </address>
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:mt-7">
                    <CTAButton full variant="light" label="Agendar minha consulta pelo WhatsApp" />
                    <CTAButton full variant="outlineLight" label="Ver como chegar" href={MAPS_URL} icon="arrow" />
                  </div>
                </SpotCard>
              </div>
            </Reveal>

            <Reveal delay={150} className="md:col-span-6">
              <iframe
                title={`Mapa da ${CLINIC} em Salvador`}
                src={MAPS_EMBED}
                loading="lazy"
                className="h-96 w-full rounded-3xl border-0 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] md:h-full md:min-h-[26rem]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* DOBRA 08 — PERGUNTAS FREQUENTES */}
      <section
        id="faq"
        className="relative -mt-16 overflow-hidden rounded-t-[4rem] bg-[#EEF6FB] pb-40 pt-24 md:pb-44 md:pt-28"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:gap-16">
          <Reveal className="shrink-0 md:w-[46%]">
            <div className="flex flex-col gap-7 md:sticky md:top-28">
              <div>
                <h2 className="font-serif type-section font-medium text-[#21547C]">
                  Tire suas dúvidas <span className="hl">antes de agendar.</span>
                </h2>
              </div>
              <CTAButton full label="Tirar dúvidas e agendar pelo WhatsApp" />
            </div>
          </Reveal>
          <Reveal delay={100} className="md:flex-1">
            <FAQ />
          </Reveal>
        </div>
      </section>

      {/* DOBRA 09 — CTA FINAL */}
      <section
        id="contato"
        className="grain relative -mt-16 overflow-hidden rounded-t-[4rem] bg-gradient-to-br from-[#21547C] via-[#1c4a6e] to-[#173d5c] pb-24 pt-24 text-white md:pb-28 md:pt-32"
      >
        <div className="drift pointer-events-none absolute -left-32 -top-20 h-[480px] w-[480px] rounded-full bg-[#54A4D1]/30 blur-3xl" />
        <Cross className="float-slow pointer-events-none absolute right-[8%] top-24 w-6 text-[#54A4D1]/70" />
        <Cross className="float-slow pointer-events-none absolute bottom-32 left-[6%] w-4 text-white/20 [animation-delay:-3s]" />
        <div className="relative mx-auto grid grid-cols-[minmax(0,1fr)] max-w-6xl gap-14 px-6 md:grid-cols-12 md:items-stretch md:gap-x-16 md:gap-y-10 lg:gap-x-24">
          <Reveal className="md:col-span-7">
            <h2 className="type-hero font-serif font-medium italic">Vamos conversar sobre o que preocupa você?</h2>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/85 md:text-lg">
              Seja para cuidar da sua saúde ou da saúde do seu filho, estou aqui para ouvir, avaliar o caso e explicar
              as possibilidades de acompanhamento ou tratamento.
            </p>
            <p className="mt-3 max-w-xl text-base font-medium text-white md:text-lg">
              Clique no botão abaixo e agende sua consulta comigo em Salvador.
            </p>
            <div className="mt-9">
              <CTAButton variant="light" size="lg" />
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Minha equipe está disponível 24 horas por dia, todos os dias. Atendimento particular e por convênios,
              mediante confirmação do plano.
            </p>
          </Reveal>

          <Reveal delay={150} className="md:col-span-5 md:h-full">
            <div className="relative mx-auto w-[82%] max-w-sm md:h-full md:w-full md:max-w-md">
              <div className="absolute -bottom-4 -left-4 right-4 top-4 rounded-t-[999px] rounded-b-[2rem] border border-[#54A4D1]/70" />
              <div className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:h-full md:min-h-[28rem] rounded-t-[999px] rounded-b-[2rem] bg-[#173d5c] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.65)]">
                <Photo
                  src={IMAGES.final}
                  className="object-[50%_12%]"
                  alt="Dr. Alexandre Ziomkowski, urologista em Salvador"
                  sizes="(min-width: 768px) 40vw, 82vw"
                  hint="Foto acolhedora do Dr. Alexandre"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <footer className="relative mx-auto mt-20 max-w-6xl border-t border-white/12 px-6 pt-8 text-center text-sm text-white/55">
          © 2026 Dr. Alexandre Ziomkowski · CRM-BA 25959 | RQE 20028 · Urologia · Salvador - BA
        </footer>
      </section>
    </main>
  );
}
