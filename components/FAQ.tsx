"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Como marcar uma consulta com o Dr. Alexandre Ziomkowski?",
    a: "Clique no botão desta página para falar com minha equipe pelo WhatsApp. A equipe esclarece dúvidas, confirma data, horário e local e ajuda no agendamento.",
  },
  {
    q: "Qual é o valor da consulta particular?",
    a: "Minha equipe informa o valor e os horários disponíveis pelo WhatsApp. Você pode tirar suas dúvidas antes de confirmar a consulta.",
  },
  {
    q: "O Dr. Alexandre atende por convênios?",
    a: "Sim, além das consultas particulares, também atendo por convênios, mas são convênios limitados. Minha equipe informa quais são e confirma a disponibilidade do seu plano e o local de atendimento pelo WhatsApp.",
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
    <div>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-b border-[#21547C]/15">
            <button
              type="button"
              id={`faq-btn-${i}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-3 py-5 text-left"
            >
              <span className="font-serif text-lg font-medium leading-snug text-[#21547C] transition-colors duration-200 group-hover:text-[#3F8DBB] md:text-xl">
                {f.q}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                  isOpen ? "bg-[#21547C] text-white" : "bg-[#21547C]/10 text-[#21547C]/70"
                }`}
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M5 12h14" : "M12 4v16m8-8H4"} />
                </svg>
              </span>
            </button>
            <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!isOpen}>
              <p className="pb-5 text-sm leading-relaxed text-[#35516a] md:text-base">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
