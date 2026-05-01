"use client";

import type { ReactNode } from "react";

type CardBorderBeamProps = {
  /** Raio do cartão externo, ex: rounded-[2rem] ou rounded-3xl */
  outerRounded: string;
  /** Raio interno após o anel de 2px, ex: rounded-[calc(2rem-2px)] */
  innerRounded: string;
  className?: string;
  children: ReactNode;
};

/**
 * Fio de luz na borda (máscara + gradiente cônico). Opacidade baixa no estado normal;
 * intensifica no hover do ancestral com classe `group`. Animação só com transform no rotor.
 */
export function CardBorderBeam({ outerRounded, innerRounded, className = "", children }: CardBorderBeamProps) {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.07] transition-opacity duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-[0.95] motion-reduce:opacity-0 motion-reduce:transition-none"
        aria-hidden
      >
        <div className={`comparison-beam-ring-mask h-full w-full ${outerRounded}`}>
          <div className="service-card-beam-rotor" />
        </div>
      </div>
      <div className={`relative z-[2] m-[2px] min-h-0 flex-1 ${innerRounded} ${className}`}>{children}</div>
    </>
  );
}
