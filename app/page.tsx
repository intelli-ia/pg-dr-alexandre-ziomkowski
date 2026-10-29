import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import { Check, Icon, type IconName } from "@/components/Icons";
import Testimonials from "@/components/Testimonials";
import { ADDRESS_LINES, CLINIC, IMAGES, MAPS_EMBED, MAPS_URL } from "@/lib/config";

const heroHighlights = [
  "Atendimento particular e por convênios.",
  "Da consulta à cirurgia, quando indicada, com o mesmo médico.",
  "Mais de 200 avaliações no Google e na Doctoralia.",
];

const areaChips: [string, IconName][] = [
  ["Urologia do adulto", "user"],
  ["Urologia infantil", "child"],
  ["Cálculos renais", "kidney"],
  ["Próstata", "prostate"],
  ["Cirurgia robótica", "robot"],
];

const areas: [string, string, IconName][] = [
  [
    "Urologia do adulto",
    "Avalio sintomas urinários, alterações em exames e dúvidas sobre a saúde urológica. Realizo o acompanhamento clínico e, quando necessário, o tratamento cirúrgico dentro da minha atuação.",
    "user",
  ],
  [
    "Urologia infantil",
    "Atendo crianças com fimose, testículo que não desceu, hipospádia e outras condições urológicas. Explico aos responsáveis o que pode ser acompanhado e quando há indicação de tratamento.",
    "child",
  ],
  [
    "Cálculos renais",
    "Avalio e trato pedras nos rins. Quando há necessidade de cirurgia, trabalho com procedimentos endoscópicos e laser, conforme as características de cada caso.",
    "kidney",
  ],
  [
    "Próstata aumentada",
    "Investigo dificuldades para urinar e outros sintomas relacionados à próstata. Entre os procedimentos que realizo estão RTUP, Rezum e UroLift, com indicação individualizada.",
    "prostate",
  ],
  [
    "Cirurgia robótica oncológica",
    "Atuo em cirurgias robóticas para casos selecionados de câncer de próstata, rim e bexiga. Avalio os exames e explico as opções de abordagem cirúrgica.",
    "robot",
  ],
];

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

const steps: [string, string][] = [
  ["Clique no botão desta página", "Você será direcionado ao WhatsApp da minha equipe."],
  [
    "Converse e confirme seu agendamento",
    "Consulte valores, convênios e horários. Escolha a melhor opção e receba a confirmação do local e da data.",
  ],
  [
    "Faça sua avaliação comigo",
    "Na consulta, escuto sua história, avalio os sintomas e os exames disponíveis. Se necessário, solicito exames para complementar a investigação.",
  ],
  [
    "Entenda as opções para seu caso",
    "Explico as possibilidades de acompanhamento ou tratamento. Quando há indicação de cirurgia dentro da minha atuação, também posso realizar o procedimento.",
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
      <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-[#21547C] text-white">
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 pb-32 pt-8 md:grid-cols-12 md:items-stretch md:gap-x-16 md:gap-y-8 md:py-24">
          <div className="order-first md:col-span-7 md:col-start-1 md:row-start-1">
            <Image
              src="/logo-negativo.svg"
              alt="Alexandre Ziomkowski, cirurgia urológica"
              width={1759}
              height={418}
              className="h-11 w-auto md:h-14"
            />
          </div>
          <div className="order-2 md:order-1 md:col-span-7 md:col-start-1 md:row-start-2">
            <h1 className="font-serif type-section font-medium">
              Urologista em Salvador <span className="italic text-[#9ACBE8]">para adultos e crianças.</span>
            </h1>
            <div className="my-6 h-px w-24 bg-[#9ACBE8]" />
            <h2 className="max-w-xl text-base font-light leading-relaxed text-white/90 md:text-lg">
              Avalio seu caso, explico as opções de tratamento e, quando indicada, também realizo sua cirurgia. Você
              pode seguir com o mesmo médico, da consulta ao tratamento cirúrgico.
            </h2>
            <ul className="mt-6 space-y-3">
              {heroHighlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-white/90 md:text-base">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#9ACBE8]" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-9 grid gap-4 md:w-[90%]">
              <CTAButton full variant="light" />
              <CTAButton full variant="outline" label="Saiba mais" href="#depoimentos" external={false} icon="arrow" />
            </div>
            <p className="mt-6 text-xs tracking-wide text-white/70">CRM-BA 25959 · RQE 20028</p>
          </div>

          <div className="order-1 md:order-2 md:col-span-5 md:col-start-8 md:row-span-2 md:row-start-1 md:h-full">
            <div className="relative mx-auto w-[80%] max-w-sm md:h-full md:w-full md:max-w-md">
              <div className="absolute -bottom-4 -right-4 left-4 top-4 rounded-t-[999px] rounded-b-[2rem] border border-[#9ACBE8]/60" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-[#173d5c] md:aspect-auto md:h-full md:min-h-[28rem]">
                <Image
                  src={IMAGES.hero}
                  unoptimized
                  alt="Dr. Alexandre Ziomkowski, urologista em Salvador, caminhando pelo corredor da clínica"
                  fill
                  preload
                  fetchPriority="high"
                  sizes="(min-width: 768px) 40vw, 80vw"
                  className="object-cover object-[50%_50%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 02 — DEPOIMENTOS */}
      <section id="depoimentos" className="relative overflow-hidden bg-[#DDEBF5] pb-40 pt-20 md:pb-44 md:pt-28">
        <div className="mx-auto mb-14 flex max-w-4xl flex-col items-center gap-3 px-6 md:mb-20">
          {[areaChips.slice(0, 3), areaChips.slice(3)].map((row, r) => (
            <div key={r} className="flex flex-wrap items-center justify-center gap-3">
              {row.map(([label, icon]) => (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#21547C] md:text-base"
                >
                  <Icon name={icon} className="h-6 w-6" />
                  {label}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="mb-8 px-6 text-center md:mb-10">
          <h2 className="mx-auto max-w-5xl font-serif type-section font-medium text-[#21547C]">
            Quem já passou por consulta <span className="italic text-[#3F8DBB]">fala por mim</span>
          </h2>
          <div className="mx-auto mt-5 h-px w-24 bg-[#3F8DBB]" />
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[#35516a]">
            Conheça a experiência de pacientes e famílias que confiaram o cuidado a mim.
          </p>
        </div>
        <div className="mb-8 px-6 md:mb-10">
          <p className="mx-auto w-fit max-w-full rounded-full bg-white px-6 py-3 text-center text-sm text-[#35516a]">
            <strong className="font-semibold text-[#21547C]">+200 avaliações</strong> de pacientes no Google e na
            Doctoralia
          </p>
        </div>
        <Testimonials />
      </section>

      {/* DOBRA 03 — CONEXÃO */}
      <section className="relative -mt-16 overflow-hidden rounded-t-[4rem] bg-[#21547C] pb-44 pt-24 text-white md:pb-52 md:pt-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif type-section font-medium">
            Entenda seu caso <span className="italic text-[#9ACBE8]">antes de decidir</span> o tratamento.
          </h2>
          <div className="mx-auto my-7 h-px w-24 bg-[#9ACBE8]" />
          <div className="space-y-4 text-base leading-[1.7] text-white/85 md:text-lg">
            <p>
              Um exame alterado, um sintoma ou uma preocupação com seu filho podem trazer muitas dúvidas. Meu trabalho
              é avaliar o que está acontecendo e explicar as possibilidades de cuidado.
            </p>
            <p>
              Sei que uma consulta pode começar com receio de um exame, preocupação com um diagnóstico ou dúvidas sobre
              a saúde de um filho. Por isso, procuro ouvir com atenção e explicar cada orientação com calma.
            </p>
            <p className="mt-8 border-t border-white/20 pt-8 font-serif text-xl italic leading-snug text-[#9ACBE8] md:text-2xl">
              No consultório, quero que você se sinta à vontade para perguntar e conversar sobre o que preocupa.
            </p>
          </div>
          <div className="mt-9">
            <CTAButton variant="light" />
          </div>
        </div>
      </section>

      {/* DOBRA 04 — ÁREAS DE ATUAÇÃO */}
      <section id="areas" className="relative -mt-16 overflow-hidden rounded-t-[4rem] bg-[#DDEBF5] pb-40 pt-20 md:pb-44 md:pt-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="font-serif type-section font-medium text-[#21547C]">
              Consultas e tratamentos urológicos para <span className="italic">adultos e crianças</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#35516a] md:text-lg">
              Conheça algumas das questões que avalio e trato. A consulta permite entender seu caso e definir as
              possibilidades de acompanhamento ou tratamento.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {areas.map(([t, d, icon], i) => (
              <article
                key={t}
                className={`h-full rounded-3xl border border-[#C5DAE9] bg-[#EEF6FB] p-9 text-center md:text-left ${
                  i === areas.length - 1 && areas.length % 2 === 1 ? "md:col-span-2" : ""
                }`}
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9E1F1] text-[#21547C] md:mx-0">
                  <Icon name={icon} className="h-10 w-10" />
                </span>
                <h3 className="mt-5 font-serif type-card font-medium text-[#21547C]">{t}</h3>
                <p className="mt-2 leading-relaxed text-[#35516a]">{d}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* DOBRA 04b — DIFERENCIAIS */}
      <section
        id="diferenciais"
        className="relative -mt-16 overflow-hidden rounded-t-[4rem] bg-[#21547C] pb-44 pt-24 text-white md:pb-52 md:pt-28"
      >
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif type-section font-medium">
              Da consulta ao tratamento, <span className="italic text-[#9ACBE8]">com o mesmo médico</span>
            </h2>
            <div className="mx-auto my-7 h-px w-24 bg-[#9ACBE8]" />
            <p className="text-base leading-[1.7] text-white/90 md:text-lg">
              Avalio seu caso, explico as opções de tratamento e, quando indicada, também realizo sua cirurgia.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {differentials.map(([t, d, icon]) => (
              <article key={t} className="h-full rounded-3xl border border-[#3E78A3] bg-[#2B6089] p-8 text-center md:text-left">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#9ACBE8] text-[#21547C] md:mx-0">
                  <Icon name={icon} className="h-10 w-10" />
                </span>
                <h3 className="mt-5 font-serif type-card font-medium">{t}</h3>
                <p className="mt-2 leading-relaxed text-white/80">{d}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CTAButton variant="light" label="Agendar minha avaliação pelo WhatsApp" />
          </div>
        </div>
      </section>

      {/* DOBRA 05 — COMO FUNCIONA O ATENDIMENTO */}
      <section id="como-funciona" className="relative -mt-16 rounded-t-[4rem] bg-[#EEF6FB] pb-40 pt-20 md:pb-44 md:pt-28">
        <div className="mx-auto mb-12 max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif type-section font-medium text-[#21547C]">
              Veja como é <span className="italic text-[#3F8DBB]">fácil marcar</span> sua consulta.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#35516a] md:text-lg">
              Minha equipe está disponível no WhatsApp 24 horas por dia, todos os dias. Você tira suas dúvidas e agenda
              sua consulta diretamente pela conversa.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-6">
          <ol className="relative">
            {steps.map(([t, d], i) => (
              <li key={t} className={`relative flex gap-5 md:gap-8 ${i < steps.length - 1 ? "pb-10" : ""}`}>
                {i < steps.length - 1 && (
                  <span className="absolute left-[19px] top-10 h-[calc(100%-2.5rem)] w-px bg-[#3F8DBB]/40" aria-hidden />
                )}
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#21547C] bg-[#EEF6FB] text-sm font-semibold text-[#21547C]">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <h3 className="font-serif type-card font-medium text-[#21547C]">{t}</h3>
                  <p className="mt-2 leading-relaxed text-[#35516a]">{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-12 text-center">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* DOBRA 06 — SOBRE O DR. ALEXANDRE */}
      <section id="sobre" className="relative -mt-16 overflow-hidden bg-[#DDEBF5] pb-40 pt-20 md:pb-44 md:pt-28">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-12 md:items-stretch md:gap-x-16 md:gap-y-14">
          <div className="order-2 md:order-none md:col-span-5 md:h-full">
            <div className="relative mx-auto max-w-sm md:h-full md:max-w-none">
              <div className="absolute -bottom-4 -right-4 left-4 top-4 rounded-t-[999px] rounded-b-[2rem] border border-[#3F8DBB]/60" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-[#21547C] md:aspect-auto md:h-full md:min-h-[28rem]">
                <Image
                  src={IMAGES.about}
                  unoptimized
                  alt="Dr. Alexandre Ziomkowski, médico urologista, na recepção do consultório"
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover object-[50%_20%]"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#21547C] px-6 py-3 text-sm font-medium text-white shadow-lg md:-left-6 md:translate-x-0">
                <span className="font-serif text-2xl italic text-[#9ACBE8]">+2.000</span> procedimentos robóticos na equipe
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-serif type-section font-medium text-[#21547C]">
              Conheça o Dr. Alexandre Ziomkowski, <span className="italic">urologista em Salvador</span>
            </h2>
            <div className="my-6 h-px w-16 bg-[#3F8DBB]" />
            <div className="space-y-4 text-base leading-[1.7] text-[#35516a] md:text-lg">
              <p>Sou médico urologista e cirurgião, com atendimento de adultos e crianças em Salvador.</p>
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
                Quando atendo uma criança, o cuidado inclui acolher a família e ajudá-la a compreender os próximos
                passos.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {formation.map(([t, d]) => (
                <li key={t} className="flex items-start gap-3 rounded-2xl border border-[#C5DAE9] bg-[#EEF6FB] p-4">
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

            <p className="mt-8 text-center font-serif text-2xl text-[#21547C] md:text-left">Dr. Alexandre Ziomkowski</p>
            <p className="text-center text-sm tracking-wide text-[#35516a] md:text-left">
              Médico urologista · CRM-BA 25959 | RQE 20028
            </p>
            <div className="mt-8 text-center md:text-left">
              <CTAButton />
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 07 — LOCALIZAÇÃO */}
      <section
        id="localizacao"
        className="relative -mt-16 overflow-hidden rounded-t-[4rem] bg-[#21547C] pb-44 pt-24 text-white md:pb-52 md:pt-28"
      >
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mx-0 md:text-left">
            <h2 className="font-serif type-section font-medium">
              Sua consulta com <span className="italic text-[#9ACBE8]">urologista em Salvador.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
              Atendo adultos e crianças na {CLINIC}, na região da Garibaldi. Minha equipe confirma o local e os detalhes
              do atendimento ao agendar sua consulta pelo WhatsApp.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-6">
              <div className="flex h-full flex-col gap-6">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-[#173d5c]">
                  <Image
                    src={IMAGES.clinic}
                    unoptimized
                    alt={`Fachada do prédio da ${CLINIC}, no Centro Empresarial Garibaldi`}
                    fill
                    sizes="(min-width: 768px) 38vw, 90vw"
                    className="object-cover object-[50%_78%]"
                  />
                </div>
                <div className="rounded-3xl border border-[#3E78A3] bg-[#2B6089] p-4 sm:p-7">
                  <div className="flex flex-col items-center gap-3 text-center md:flex-row md:items-start md:gap-4 md:text-left">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#9ACBE8] text-[#21547C]">
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
                    <CTAButton full variant="outline" label="Ver como chegar" href={MAPS_URL} icon="arrow" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-6">
              <iframe
                title={`Mapa da ${CLINIC} em Salvador`}
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-96 w-full rounded-3xl border-0 md:h-full md:min-h-[26rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 08 — PERGUNTAS FREQUENTES */}
      <section id="faq" className="relative -mt-16 rounded-t-[4rem] bg-white pb-40 pt-24 text-[#21547C] md:pb-44 md:pt-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:flex-row md:gap-20">
          <div className="shrink-0 md:w-1/3">
            <div className="flex flex-col gap-6 md:sticky md:top-28 md:w-fit">
              <h2 className="text-center font-serif type-sub font-medium text-[#21547C] md:max-w-[7.9em] md:text-left">
                Tire suas dúvidas antes de agendar
              </h2>
              <div className="text-center md:text-left">
                <CTAButton full size="sm" variant="green" label="Tirar dúvidas pelo WhatsApp" />
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <FAQ />
          </div>
        </div>
      </section>

      {/* DOBRA 09 — CTA FINAL */}
      <section id="contato" className="relative -mt-16 overflow-hidden rounded-t-[4rem] bg-[#21547C] pb-28 pt-24 text-white md:pb-16 md:pt-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif type-section font-medium">
            Vamos conversar sobre o que <span className="italic text-[#9ACBE8]">preocupa você?</span>
          </h2>
          <div className="mx-auto my-7 h-px w-24 bg-[#9ACBE8]" />
          <p className="text-base leading-[1.7] text-white/85 md:text-lg">
            Seja para cuidar da sua saúde ou da saúde do seu filho, estou aqui para ouvir, avaliar o caso e explicar as
            possibilidades de acompanhamento ou tratamento.
          </p>
          <p className="mt-3 text-base font-medium text-white md:text-lg">
            Clique no botão abaixo e agende sua consulta comigo em Salvador.
          </p>
          <div className="mt-9">
            <CTAButton variant="green" />
          </div>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/70">
            Minha equipe está disponível 24 horas por dia, todos os dias. Atendimento particular e por convênios,
            mediante confirmação do plano.
          </p>
        </div>

        <footer className="mx-auto mt-20 flex max-w-6xl flex-col items-center gap-5 border-t border-white/15 px-6 pt-8 text-center text-sm text-white/60">
          <Image
            src="/logo-negativo.svg"
            alt="Alexandre Ziomkowski, cirurgia urológica"
            width={1759}
            height={418}
            className="h-10 w-auto"
          />
          <span>© 2026 Dr. Alexandre Ziomkowski · CRM-BA 25959 | RQE 20028 · Urologia · Salvador - BA</span>
        </footer>
      </section>
    </main>
  );
}
