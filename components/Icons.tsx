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
  pin: (
    <>
      <path d="M24 44s14-12.500 14-24a14 14 0 0 0-28 0c0 11.500 14 24 14 24z" />
      <circle cx="24" cy="20" r="5" />
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
