const WHATSAPP_PHONE = "5571999383894";
export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
  "Olá! Vim do site e gostaria de agendar minha consulta",
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

export const IMAGES = {
  hero: "/hero-a6.webp",
  about: "/sobre-alexandre.webp",
  clinic: "/predio-uroclinica.webp",
};
