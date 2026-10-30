/** Textura de fundo para seções escuras: luzes suaves, grade de pontos e grão. Posicione dentro de um pai `relative`. */
export default function Texture({ flip = false }: { flip?: boolean }) {
  return (
    <>
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 ${
          flip
            ? "bg-[radial-gradient(60%_60%_at_10%_0%,rgba(154,203,232,0.2),transparent_70%),radial-gradient(55%_55%_at_95%_100%,rgba(15,52,84,0.5),transparent_70%)]"
            : "bg-[radial-gradient(60%_60%_at_85%_10%,rgba(154,203,232,0.22),transparent_70%),radial-gradient(55%_55%_at_5%_100%,rgba(15,52,84,0.55),transparent_70%)]"
        }`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1.5px)] [background-size:26px_26px] ${
          flip
            ? "[mask-image:linear-gradient(to_bottom_right,black,transparent_75%)]"
            : "[mask-image:linear-gradient(to_bottom_left,black,transparent_75%)]"
        }`}
      />
      <div aria-hidden className="hero-grain pointer-events-none absolute inset-0" />
    </>
  );
}
