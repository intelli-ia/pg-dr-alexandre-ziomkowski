const WHATSAPP_PHONE = "5571999383894";
export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
  "Olá! Vim do site e gostaria de agendar minha consulta",
)}`;

export type Location = {
  name: string;
  lines: string[];
  /** Dias e horários de atendimento; `null` quando ainda a confirmar pelo WhatsApp */
  hours: string[] | null;
  /** Texto usado para buscar o endereço no Google Maps */
  query: string;
};

export const LOCATIONS: Location[] = [
  {
    name: "Uroclínica da Bahia",
    lines: ["Av. Anita Garibaldi, 1815", "Centro Empresarial Garibaldi, sala 219 B", "Ondina, Salvador/BA · CEP 40170-130"],
    hours: ["Terças, 14h às 18h", "Quintas, 8h às 12h"],
    query: "Centro Empresarial Garibaldi, Av. Anita Garibaldi, 1815, Ondina, Salvador - BA",
  },
  {
    name: "Clínica Uro",
    lines: ["Av. Anita Garibaldi, 1051", "Edf. Garibaldi Clinical Center, 3º andar, sala 308", "Federação, Salvador/BA · CEP 40170-130"],
    hours: ["Terças, 8h às 12h", "Quartas, 14h às 18h"],
    query: "Garibaldi Clinical Center, Av. Anita Garibaldi, 1051, Federação, Salvador - BA",
  },
  {
    name: "Centro Médico Mater Dei",
    lines: ["R. Dr. Rômulo Serrano, 224", "Rio Vermelho, Salvador/BA · CEP 40220-005"],
    hours: null,
    query: "Centro Médico Mater Dei, R. Dr. Rômulo Serrano, 224, Rio Vermelho, Salvador - BA",
  },
  {
    name: "Hospital Dia Itaigara Memorial",
    lines: ["R. Altino Serbeto de Barros, 119", "Edf. Linus Pauling, 7º andar", "Itaigara, Salvador/BA · CEP 41820-460"],
    hours: null,
    query: "Edifício Linus Pauling, R. Altino Serbeto de Barros, 119, Itaigara, Salvador - BA",
  },
];

export const mapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
export const mapsEmbed = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

export const IMAGES = {
  hero: "/foto-hero.webp",
  about: "/foto-sobre.webp",
  clinic: "/foto-fachada.webp",
  consultation: "/foto-consulta.jpg",
  surgery: "/foto-cirurgia.jpg",
  exam: "/foto-exame.jpg",
  portrait: "/foto-retrato.jpg",
};
