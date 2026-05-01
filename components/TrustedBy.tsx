import Image from "next/image";

const companyLogoPaths = [
  "/empresas/empresa-1.JPG",
  "/empresas/empresa-2.JPG",
  "/empresas/empresa-3.JPG",
  "/empresas/empresa-4.JPG",
  "/empresas/empresa-5.JPG",
  "/empresas/empresa-6.PNG",
  "/empresas/empresa-7.JPG",
  "/empresas/empresa-8.JPG",
  "/empresas/empresa-9.JPG",
] as const;

function LogoCard({ src }: { src: string }) {
  return (
    <div className="relative flex h-[100px] w-[172px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-white px-6 py-5 shadow-sm md:h-[108px] md:w-[192px] md:px-7 md:py-6">
      <Image
        src={src}
        alt=""
        width={200}
        height={80}
        className="max-h-14 w-auto max-w-[148px] object-contain md:max-w-[168px]"
        sizes="(max-width: 768px) 148px, 168px"
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
}

export function TrustedBy() {
  return (
    <section className="section-surface-light border-b border-slate-200/70 border-t border-slate-200/80 py-20 md:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-primary">
          QUEM CONFIA NA NOSSA ASSESSORIA
        </p>
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 md:text-[40px]">
          Mais de 500 empresas atendidas
        </h2>
        <p className="text-lg text-slate-500">
          De varejo, eventos e instituições a operações corporativas. Operamos como extensão do time de marketing dos
          nossos clientes.
        </p>
      </div>

      <div className="group relative mt-16 flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee group-hover:[animation-play-state:paused] flex shrink-0 gap-4 px-2 md:gap-6 md:px-3">
          {companyLogoPaths.map((src) => (
            <LogoCard key={`track-1-${src}`} src={src} />
          ))}
        </div>
        <div className="animate-marquee group-hover:[animation-play-state:paused] flex shrink-0 gap-4 px-2 md:gap-6 md:px-3">
          {companyLogoPaths.map((src) => (
            <LogoCard key={`track-2-${src}`} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
}
