// TODO: substituir pelo número oficial da equipe (DDI + DDD + número, só dígitos)
const WHATSAPP_PHONE = "5571900000000";
export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
  "Olá! Gostaria de agendar uma consulta com o Dr. Alexandre.",
)}`;

export const CLINIC = "Uroclínica da Bahia";
export const ADDRESS_LINES = [
  "Av. Anita Garibaldi, 1815",
  "Centro Empresarial Garibaldi, sala 219 B",
  "Ondina, Salvador/BA",
];
const MAP_QUERY = encodeURIComponent("Centro Empresarial Garibaldi, Av. Anita Garibaldi, 1815, Ondina, Salvador - BA");
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
export const MAPS_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;

// Fotos do Dr. Alexandre e da clínica. Quando o arquivo chegar, é só colocar em /public
// e trocar o `null` pelo caminho (ex.: "/hero.webp"). Enquanto for null, aparece um placeholder.
export const IMAGES = {
  hero: "/dr-alexandre.webp" as string | null,
  consulta: "/dr-alexandre.webp" as string | null,
  sobre: "/dr-alexandre.webp" as string | null,
  clinica: "/uroclinica-fachada.webp" as string | null,
  final: "/dr-alexandre.webp" as string | null,
};
