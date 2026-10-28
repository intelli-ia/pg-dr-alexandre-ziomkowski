import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  user: (
    <>
      <circle cx="24" cy="15" r="8" />
      <path d="M8 42c1-9 7-14 16-14s15 5 16 14" />
    </>
  ),
  child: (
    <>
      <circle cx="24" cy="16" r="9" />
      <path d="M20 15.500h.01M28 15.500h.01" strokeWidth="3.200" />
      <path d="M20.500 20c2 2 5 2 7 0" />
      <path d="M12 43c.8-7 5-10 12-10s11.200 3 12 10" />
      <path d="M24 7c0-2 1.500-3.500 3.500-3.500" />
    </>
  ),
  kidney: (
    <>
      <path d="M31 6c-8-2-15 3-16 12-.8 6 1 10 1 14 0 5-3 7-3 9 0 3 4 4 9 3 10-2 15-9 14-19C35 17 36 8 31 6z" />
      <path d="M22 22c3 0 5 1.500 5 4s-2 4-5 4" />
    </>
  ),
  prostate: (
    <>
      <path d="M24 8c9 0 15 6 15 14 0 7-6 12-15 12S9 29 9 22C9 14 15 8 24 8z" />
      <path d="M24 34v9M18 15c2-2 10-2 12 0" />
      <path d="M19 24c2 2 8 2 10 0" />
    </>
  ),
  robot: (
    <>
      <path d="M8 42h16M16 42V28" />
      <path d="M16 28l10-12 10 6" />
      <circle cx="26" cy="16" r="3.200" />
      <path d="M36 22l-2 9M36 22l5 6" />
      <circle cx="36" cy="22" r="2" />
    </>
  ),
  shield: (
    <>
      <path d="M24 5l15 6v11c0 10-6 17-15 21C15 39 9 32 9 22V11z" />
      <path d="M17 24l5 5 9-10" />
    </>
  ),
  scalpel: (
    <>
      <path d="M8 40L30 10c3-4 9-2 10 2-1 4-5 6-9 9L12 42" />
      <path d="M14 34l6 4" />
    </>
  ),
  family: (
    <>
      <circle cx="16" cy="14" r="6" />
      <circle cx="33" cy="20" r="4.500" />
      <path d="M5 40c.8-8 5-12 11-12s10.200 4 11 12" />
      <path d="M28 40c.6-5 2.500-8 5-8s5.500 3 6.500 8" />
    </>
  ),
  chat: (
    <>
      <path d="M6 10a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H20l-9 8v-8h-1a4 4 0 0 1-4-4z" />
      <path d="M15 15h18M15 22h12" />
    </>
  ),
  click: (
    <>
      <path d="M18 8v-3M9 14l-2-2M27 14l2-2M8 22H5" />
      <path d="M18 14c1.500 0 2.500 1 2.500 2.500V26l3-1c2-.7 4 1 3 3l-1 .5 4-.5c2-.2 3.500 1.500 3 3.500l-1.500 8c-.5 2.500-2.500 4-5 4h-7c-2 0-3.500-1-4.500-2.500L10 31c-.8-1.500 1-3 2.500-2l3 2.500v-14C15.500 15 16.500 14 18 14z" />
    </>
  ),
  calendar: (
    <>
      <rect x="6" y="9" width="36" height="33" rx="6" />
      <path d="M6 19h36M15 5v8M33 5v8" />
      <path d="M17 29l5 5 9-9" />
    </>
  ),
  stetho: (
    <>
      <path d="M12 6v10a8 8 0 0 0 16 0V6" />
      <path d="M10 6h4M26 6h4" />
      <path d="M20 24v6a8 8 0 0 0 16 0v-3" />
      <circle cx="36" cy="23" r="4" />
    </>
  ),
  route: (
    <>
      <circle cx="12" cy="12" r="5" />
      <circle cx="36" cy="36" r="5" />
      <path d="M17 12h12a7 7 0 0 1 0 14H19a7 7 0 0 0 0 14h12" />
    </>
  ),
  pin: (
    <>
      <path d="M24 44s14-12.500 14-24a14 14 0 0 0-28 0c0 11.500 14 24 14 24z" />
      <circle cx="24" cy="20" r="5" />
    </>
  ),
  star: <path d="M24 5l5.500 12.500L43 19l-10 9 3 14-12-7-12 7 3-14-10-9 13.500-1.500z" />,
  award: (
    <>
      <circle cx="24" cy="19" r="12" />
      <path d="M16 29l-4 14 12-6 12 6-4-14" />
      <path d="M19 19l4 4 6-7" />
    </>
  ),
  drop: <path d="M24 5c8 10 13 16 13 23a13 13 0 0 1-26 0c0-7 5-13 13-23z" />,
  clock: (
    <>
      <circle cx="24" cy="24" r="18" />
      <path d="M24 12v12l8 5" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export function Icon({ name, className = "h-8 w-8" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.200"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}

export function Check({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

/** Cruz médica + linha, usada como ornamento discreto. */
export function Cross({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor" aria-hidden>
      <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7z" />
    </svg>
  );
}
