"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Como marcar uma consulta com urologista em Salvador?",
    a: "Clique no botão desta página para falar com minha equipe pelo WhatsApp. O atendimento está disponível 24 horas por dia, todos os dias, para esclarecer dúvidas e ajudar no agendamento.",
  },
  {
    q: "Qual é o valor da consulta particular?",
    a: "Minha equipe informa o valor e os horários disponíveis pelo WhatsApp. Você pode tirar suas dúvidas antes de confirmar a consulta.",
  },
  {
    q: "O Dr. Alexandre atende por convênios?",
    a: "Sim, além das consultas particulares, também atendo por convênios. Informe seu plano à equipe para confirmar a disponibilidade e o local de atendimento.",
  },
  {
    q: "O Dr. Alexandre também atende como urologista infantil?",
    a: "Sim. Atendo crianças com fimose, testículo que não desceu, hipospádia e outras condições urológicas, com orientação aos responsáveis durante a avaliação e o tratamento.",
  },
  {
    q: "Se eu precisar de cirurgia, o mesmo médico pode realizá-la?",
    a: "Sim. Quando a cirurgia é indicada e faz parte da minha atuação, também realizo o procedimento. Na consulta, explico as opções, o preparo e os cuidados necessários.",
  },
  {
    q: "Já recebi uma indicação de cirurgia robótica. Posso agendar uma avaliação?",
    a: "Sim. Atuo em cirurgia robótica oncológica da próstata, do rim e da bexiga. Na avaliação, analiso seu histórico e os exames disponíveis para discutir a indicação e as possibilidades de tratamento.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={f.q}
            className={`rounded-2xl border bg-white transition-all duration-300 ${
              isOpen
                ? "border-[#54A4D1]/60 shadow-[0_20px_40px_-28px_rgba(33,84,124,0.55)]"
                : "border-[#21547C]/10 hover:border-[#54A4D1]/50"
            }`}
          >
            <button
              type="button"
              id={`faq-btn-${i}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7"
            >
              <span className="font-serif text-lg font-medium leading-snug text-[#21547C] md:text-xl">{f.q}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen ? "rotate-45 bg-[#21547C] text-white" : "bg-[#EEF6FB] text-[#21547C] group-hover:bg-[#54A4D1] group-hover:text-white"
                }`}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 text-sm leading-relaxed text-[#35516a] md:px-7 md:text-base">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
