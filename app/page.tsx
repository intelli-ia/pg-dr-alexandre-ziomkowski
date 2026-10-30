import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import GoogleRating from "@/components/GoogleRating";
import Header from "@/components/Header";
import { Check, Icon, type IconName } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import Roadmap from "@/components/Roadmap";
import Testimonials from "@/components/Testimonials";
import Texture from "@/components/Texture";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { IMAGES, LOCATIONS, mapsEmbed } from "@/lib/config";

// `short` é a versão reduzida exibida só no mobile
const heroHighlights: { text: string; short?: string }[] = [
  { text: "Atendimento particular com preço justo." },
  {
    text: "Da consulta à cirurgia, quando indicada, com o mesmo médico.",
    short: "Da consulta à cirurgia com o mesmo médico.",
  },
  { text: "Mais de 200 avaliações no Google e na Doctoralia." },
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

const differentials: { title: string; text: string; image: string; position: string; alt: string }[] = [
  {
    title: "Indicação de cirurgia com critério",
    text: "Explico quando há necessidade de operar e quando o caso pode ser acompanhado ou tratado de outra forma. Você participa da decisão sabendo o motivo de cada orientação.",
    image: IMAGES.exam,
    position: "object-[60%_40%]",
    alt: "Dr. Alexandre mostrando a um paciente um exame de imagem dos rins",
  },
  {
    title: "Avaliação com quem também realiza a cirurgia",
    text: "Quando o procedimento é indicado e faz parte da minha atuação, também sou eu quem opera. Assim, você pode seguir com o médico que já conhece sua história e seus exames.",
    image: IMAGES.surgery,
    position: "object-[50%_32%]",
    alt: "Dr. Alexandre no centro cirúrgico, acompanhando um procedimento",
  },
  {
    title: "Atenção à criança e à família",
    text: "Na consulta infantil, escuto as preocupações dos responsáveis, avalio a criança e esclareço os cuidados necessários. A família acompanha e entende os próximos passos.",
    image: IMAGES.about,
    position: "object-[50%_8%]",
    alt: "Dr. Alexandre na recepção acolhedora do consultório",
  },
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

const comforts: { icon: IconName | "whatsapp"; label: string }[] = [
  { icon: "pin", label: "4 locais de atendimento em Salvador" },
  { icon: "whatsapp", label: "Agendamento prático via WhatsApp" },
  { icon: "shield", label: "Diagnóstico explicado em linguagem clara" },
  { icon: "scalpel", label: "Cirurgia nos principais hospitais de Salvador" },
];

function Eyebrow({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <span
      className={`mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${
        dark ? "text-[#9ACBE8]" : "text-[#3F8DBB]"
      }`}
    >
      <span className={`h-px w-8 ${dark ? "bg-[#9ACBE8]" : "bg-[#3F8DBB]"}`} />
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Header />

      {/* DOBRA 01 — HERO */}
      <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-[#21547C] text-white">
        <Texture />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 pb-32 pt-8 md:grid-cols-12 md:items-stretch md:gap-x-16 md:gap-y-8 md:py-24">
          <div className="order-first flex justify-center md:col-span-7 md:col-start-1 md:row-start-1 md:justify-start">
            <Image
              src="/logo-negativo.svg"
              alt="Alexandre Ziomkowski, cirurgia urológica"
              width={1759}
              height={418}
              className="h-11 w-auto md:h-14"
            />
          </div>
          <div className="order-2 text-center md:order-1 md:col-span-7 md:col-start-1 md:row-start-2 md:text-left">
            <h1 className="font-serif type-section font-medium max-md:mb-5 max-md:text-[2.5rem] max-md:leading-[1.08]">
              Urologista em Salvador <span className="italic text-[#9ACBE8]">para adultos e crianças.</span>
            </h1>
            <div className="mx-auto my-6 hidden h-px w-24 bg-[#9ACBE8] md:mx-0 md:block" />
            <h2 className="mx-auto max-w-xl text-base font-light leading-relaxed text-white/90 md:mx-0 md:text-lg">
              Avalio seu caso, explico as opções de tratamento e, quando indicada, também realizo sua cirurgia. Você
              pode seguir com o mesmo médico, da consulta ao tratamento cirúrgico.
            </h2>
            <ul className="mt-6 space-y-3">
              {heroHighlights.map((h) => (
                <li key={h.text} className="flex items-start justify-center gap-3 text-sm text-white/90 md:justify-start md:text-base">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#9ACBE8]" />
                  {h.short ? (
                    <>
                      <span className="md:hidden">{h.short}</span>
                      <span className="hidden md:inline">{h.text}</span>
                    </>
                  ) : (
                    h.text
                  )}
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
              <div className="absolute -bottom-4 -right-4 left-4 top-4 rounded-[2rem] border border-[#9ACBE8]/60" />
              <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#173d5c] md:aspect-auto md:h-full md:min-h-[28rem]">
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

      {/* FAIXA DE CONFORTOS */}
      <div className="relative z-10 -mt-14 bg-[linear-gradient(to_bottom,transparent_50%,#DDEBF5_50%)] px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-8 rounded-[2rem] bg-white px-6 py-8 shadow-[0_30px_60px_-30px_rgba(33,84,124,0.45)] md:grid-cols-4 md:gap-y-0 md:px-4 md:py-10">
          {comforts.map((c, i) => (
            <div
              key={c.label}
              className={`flex flex-col items-center px-4 text-center ${i > 0 ? "md:border-l md:border-[#C5DAE9]" : ""}`}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DDEBF5] text-[#21547C]">
                {c.icon === "whatsapp" ? <WhatsAppIcon className="h-7 w-7" /> : <Icon name={c.icon} className="h-8 w-8" />}
              </span>
              <p className="mt-4 max-w-[15rem] text-sm font-medium leading-snug text-[#21547C] md:text-[15px]">{c.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DOBRA 02 — DEPOIMENTOS */}
      <section id="depoimentos" className="relative overflow-hidden bg-[#DDEBF5] pb-40 pt-16 md:pb-44 md:pt-24">
        <Reveal className="mb-8 px-6 text-center md:mb-10">
          <h2 className="mx-auto max-w-5xl font-serif type-section font-medium text-[#21547C]">
            Alguns depoimentos <span className="italic text-[#3F8DBB]">dos meus pacientes</span>
          </h2>
        </Reveal>
        <Reveal className="mb-8 px-6 md:mb-10" delay={120}>
          <GoogleRating />
        </Reveal>
        <Testimonials />
      </section>

      {/* DOBRA 03 — CONEXÃO */}
      <section className="relative -mt-16 overflow-hidden rounded-t-[4rem] bg-[#21547C] pb-44 pt-24 text-white md:pb-52 md:pt-32">
        <Texture flip />
        <div className="relative mx-auto max-w-5xl px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif type-section font-medium">
              Entenda seu caso <span className="italic text-[#9ACBE8]">antes de decidir</span> o tratamento.
            </h2>
          </Reveal>

          <Reveal className="mx-auto mt-10 max-w-4xl md:mt-14" delay={120}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-[#173d5c] md:aspect-[21/9] md:rounded-[2.5rem]">
              <Image
                src={IMAGES.consultation}
                unoptimized
                alt="Dr. Alexandre Ziomkowski ouvindo uma paciente durante a consulta"
                fill
                sizes="(min-width: 896px) 896px, 92vw"
                className="object-cover object-[50%_10%]"
              />
            </div>
          </Reveal>

          <Reveal className="mx-auto mt-12 max-w-3xl text-center md:mt-16" delay={80}>
            <div className="space-y-4 text-base leading-[1.7] text-white/85 md:text-lg">
              <p>
                Um exame alterado, um sintoma ou uma preocupação com seu filho podem trazer muitas dúvidas. Meu trabalho
                é avaliar o que está acontecendo e explicar as possibilidades de cuidado.
              </p>
              <p>
                Sei que uma consulta pode começar com receio de um exame, preocupação com um diagnóstico ou dúvidas
                sobre a saúde de um filho. Por isso, procuro ouvir com atenção e explicar cada orientação com calma.
              </p>
              <p className="mt-8 border-t border-white/20 pt-8 font-serif text-2xl italic leading-snug text-[#9ACBE8] md:text-3xl">
                No consultório, quero que você se sinta à vontade para perguntar e conversar sobre o que preocupa.
              </p>
            </div>
            <div className="mt-9">
              <CTAButton variant="light" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DOBRA 04 — ÁREAS DE ATUAÇÃO */}
      <section id="areas" className="relative -mt-16 overflow-hidden rounded-t-[4rem] bg-[#DDEBF5] pb-40 pt-20 md:pb-44 md:pt-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 max-w-3xl text-center md:text-left">
            <Eyebrow>Áreas de atuação</Eyebrow>
            <h2 className="font-serif type-section font-medium text-[#21547C]">
              Consultas e tratamentos urológicos para <span className="italic">adultos e crianças</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#35516a] md:text-lg">
              Conheça algumas das questões que avalio e trato. A consulta permite entender seu caso e definir as
              possibilidades de acompanhamento ou tratamento.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-6">
            {areas.map(([t, d, icon], i) => {
              const featured = i === 0;
              return (
                <Reveal key={t} className={`h-full ${i < 2 ? "md:col-span-3" : "md:col-span-2"}`} delay={(i % 3) * 110}>
                  <article
                    className={`relative h-full overflow-hidden rounded-3xl border p-8 text-center md:p-9 md:text-left ${
                      featured ? "border-[#21547C] bg-[#21547C] text-white" : "border-[#C5DAE9] bg-[#EEF6FB]"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`num-outline pointer-events-none absolute -right-2 -top-4 font-serif text-8xl font-medium md:text-9xl ${
                        featured ? "text-white/15" : "text-[#21547C]/10"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl md:mx-0 ${
                        featured ? "bg-[#9ACBE8] text-[#21547C]" : "bg-[#C9E1F1] text-[#21547C]"
                      }`}
                    >
                      <Icon name={icon} className="h-10 w-10" />
                    </span>
                    <h3 className="relative mt-5 font-serif type-card font-medium">{t}</h3>
                    <p className={`relative mt-2 leading-relaxed ${featured ? "text-white/85" : "text-[#35516a]"}`}>{d}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-12 text-center">
            <CTAButton />
          </Reveal>
        </div>
      </section>

      {/* DOBRA 04b — DIFERENCIAIS */}
      <section
        id="diferenciais"
        className="relative -mt-16 overflow-clip rounded-t-[4rem] bg-[#21547C] pb-44 pt-24 text-white md:pb-52 md:pt-28"
      >
        {/* mosaico do monograma como textura: a camada fica fixa na tela (sticky) enquanto a seção rola por cima */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="sticky top-0 h-screen bg-[length:320px_320px] opacity-[0.09] mix-blend-overlay blur-[4px]"
            style={{ backgroundImage: "url(/textura-monograma.webp)" }}
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Image
              src="/monograma-negativo.webp"
              alt=""
              aria-hidden
              width={2000}
              height={896}
              className="mx-auto mb-6 h-auto w-20 md:w-24"
            />
            <h2 className="font-serif type-section font-medium">
              Da consulta ao tratamento, <span className="italic text-[#9ACBE8]">com o mesmo médico</span>
            </h2>
            <div className="mx-auto my-7 h-px w-24 bg-[#9ACBE8]" />
            <p className="text-base leading-[1.7] text-white/90 md:text-lg">
              Avalio seu caso, explico as opções de tratamento e, quando indicada, também realizo sua cirurgia.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {differentials.map((d, i) => (
              <Reveal key={d.title} className="h-full" delay={i * 120}>
                <article className="h-full rounded-3xl border border-[#3E78A3] bg-[#2B6089]/80 p-4 text-center backdrop-blur-sm md:text-left">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#173d5c]">
                    <Image
                      src={d.image}
                      unoptimized
                      alt={d.alt}
                      fill
                      sizes="(min-width: 768px) 30vw, 90vw"
                      className={`object-cover ${d.position}`}
                    />
                  </div>
                  <div className="px-3 pb-3 pt-6">
                    <h3 className="font-serif type-card font-medium">{d.title}</h3>
                    <p className="mt-2 leading-relaxed text-white/80">{d.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <CTAButton variant="light" label="Agendar minha avaliação pelo WhatsApp" />
          </Reveal>
        </div>
      </section>

      {/* DOBRA 05 — COMO FUNCIONA O ATENDIMENTO */}
      <section id="como-funciona" className="relative -mt-16 rounded-t-[4rem] bg-[#EEF6FB] pb-40 pt-20 md:pb-44 md:pt-28">
        <Reveal className="mx-auto mb-14 max-w-3xl px-6 text-center">
          <Eyebrow>Passo a passo</Eyebrow>
          <h2 className="font-serif type-section font-medium text-[#21547C]">
            Veja como é <span className="italic text-[#3F8DBB]">fácil marcar</span> sua consulta.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#35516a] md:text-lg">
            Minha equipe atende pelo WhatsApp. Você tira suas dúvidas e agenda sua consulta diretamente pela
            conversa.
          </p>
        </Reveal>
        <div className="mx-auto max-w-6xl px-6">
          <Roadmap steps={steps} />
          <Reveal className="mt-12 text-center">
            <CTAButton />
          </Reveal>
        </div>
      </section>

      {/* DOBRA 06 — SOBRE O DR. ALEXANDRE */}
      <section id="sobre" className="relative -mt-16 overflow-hidden bg-[#DDEBF5] pb-40 pt-20 md:pb-44 md:pt-28">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-12 md:items-stretch md:gap-x-16 md:gap-y-0">
          <Reveal className="md:col-span-7 md:col-start-6 md:row-start-1" delay={140}>
            <h2 className="font-serif type-section font-medium text-[#21547C]">
              Dr. Alexandre Ziomkowski
              <span className="mt-3 block font-sans text-base font-normal tracking-wide text-[#3F8DBB] md:text-lg">
                CRM-BA 25959 | RQE 20028
              </span>
            </h2>
            <div className="mt-6 h-px w-16 bg-[#3F8DBB]" />
          </Reveal>

          <Reveal className="md:col-span-5 md:col-start-1 md:row-span-2 md:row-start-1 md:h-full">
            <div className="relative mx-auto max-w-sm md:h-full md:max-w-none">
              <div className="absolute -bottom-4 -right-4 left-4 top-4 rounded-[2rem] border border-[#3F8DBB]/60" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#21547C] md:aspect-auto md:h-full md:min-h-[28rem]">
                <Image
                  src={IMAGES.portrait}
                  unoptimized
                  alt="Dr. Alexandre Ziomkowski, médico urologista, de jaleco e estetoscópio"
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover object-[50%_20%]"
                />
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-7 md:col-start-6 md:row-start-2 md:mt-6" delay={140}>
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

            <div className="mt-8 text-center md:text-left">
              <CTAButton />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DOBRA 07 — LOCALIZAÇÃO */}
      <section
        id="localizacao"
        className="relative -mt-16 overflow-hidden rounded-t-[4rem] bg-[#21547C] pb-44 pt-24 text-white md:pb-52 md:pt-28"
      >
        <Texture flip />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Eyebrow dark>Localização</Eyebrow>
            <h2 className="font-serif type-section font-medium">
              Sua consulta com <span className="italic text-[#9ACBE8]">urologista em Salvador.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
              Atendo adultos e crianças em 4 locais de Salvador. Minha equipe confirma o local, o dia e o horário ao
              agendar sua consulta pelo WhatsApp.
            </p>
          </div>

          <div className="mx-auto flex max-w-4xl flex-col gap-4">
            {LOCATIONS.map((loc, i) => (
              <div key={loc.name}>
                <article className={`grid gap-4 rounded-3xl border border-[#3E78A3] bg-[#2B6089] p-3 sm:p-4 ${
                    i % 2 === 0 ? "md:grid-cols-[1fr_20rem]" : "md:grid-cols-[20rem_1fr]"
                  } md:items-stretch md:gap-6`}>
                  <div className="flex items-center gap-4 px-2 py-2 md:px-4">
                    <address className="not-italic">
                      <h3 className="font-serif text-xl font-medium md:text-2xl">{loc.name}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/85 md:text-base">
                        {loc.lines.map((l) => (
                          <span key={l} className="block">
                            {l}
                          </span>
                        ))}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/80">
                        {loc.hours ? (
                          <>
                            <span className="font-semibold text-white">Atendimento:</span> {loc.hours.join(" · ")}
                          </>
                        ) : (
                          <>
                            <span className="font-semibold text-white">Horários:</span> consulte pelo WhatsApp
                          </>
                        )}
                      </p>
                    </address>
                  </div>
                  {/* o iframe é maior que o quadro e fica recortado: esconde o cartão "Ver mapa ampliado" e os créditos do Google */}
                  <div
                    className={`relative h-48 overflow-hidden rounded-2xl bg-[#173d5c] md:h-full md:min-h-[11rem] ${
                      i % 2 === 1 ? "md:order-first" : ""
                    }`}
                  >
                    <iframe
                      title={`Mapa: ${loc.name}`}
                      src={mapsEmbed(loc.query)}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      tabIndex={-1}
                      className="pointer-events-none absolute -top-28 left-0 h-[calc(100%+14rem)] w-full border-0"
                    />
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <CTAButton variant="light" label="Agendar minha consulta pelo WhatsApp" />
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
      <section id="contato" className="relative -mt-16 overflow-hidden bg-[#21547C] pb-28 pt-24 text-white md:pb-16 md:pt-32">
        <Texture />
        <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl font-medium leading-[1.1] md:text-6xl">
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
        </Reveal>

        <footer className="relative mx-auto mt-20 flex max-w-6xl flex-col items-center gap-8 border-t border-white/15 px-6 pt-12 text-center text-sm text-white/60">
          <Image
            src="/logo-negativo.svg"
            alt="Alexandre Ziomkowski, cirurgia urológica"
            width={1759}
            height={418}
            className="h-auto w-3/4 max-w-md md:max-w-lg"
          />
          <span>© 2026 Dr. Alexandre Ziomkowski · CRM-BA 25959 | RQE 20028 · Urologia · Salvador - BA</span>
        </footer>
      </section>
    </main>
  );
}
