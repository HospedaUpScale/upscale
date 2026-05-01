import type { SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function Linkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width={4} height={12} x={2} y={9} />
      <circle cx={4} cy={4} r={2} />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white pb-10 pt-20">
      <div className="mx-auto mb-20 grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-4">
        <div className="text-left">
          <Link href="/" className="inline-block">
            <Image
              src="/logo-upscale.svg"
              alt="UpScale Logo"
              width={150}
              height={40}
              priority
              className="mb-6 h-8 w-auto object-contain object-left"
            />
          </Link>
          <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-500">
            Assessoria especializada em WhatsApp Marketing. Estratégia, execução e relatórios conduzidos por nosso time.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-400 transition-colors hover:text-slate-600" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 transition-colors hover:text-slate-600" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 transition-colors hover:text-slate-600" aria-label="Link">
              <LinkIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="hidden md:block" aria-hidden="true" />

        <div>
          <p className="mb-4 text-sm font-bold text-slate-900">Assessoria</p>
          <nav className="flex flex-col gap-3">
            {["Serviços", "Método", "Entregas", "Clientes", "FAQ"].map((label) => (
              <a key={label} href="#" className="text-sm text-slate-500 transition-colors hover:text-slate-900">
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold text-slate-900">Empresa</p>
          <nav className="flex flex-col gap-3">
            <a href="#cta" className="text-sm text-slate-500 transition-colors hover:text-slate-900">
              Falar com especialista
            </a>
            <a href="#" className="text-sm text-slate-500 transition-colors hover:text-slate-900">
              Termos de Uso
            </a>
            <a href="#" className="text-sm text-slate-500 transition-colors hover:text-slate-900">
              Privacidade
            </a>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-slate-100 px-4 pt-10">
        <div className="flex flex-col items-center justify-between gap-4 text-xs font-medium text-slate-400 md:flex-row">
          <p>© 2026 UpScale. Todos os direitos reservados.</p>
          <p>Assessoria de WhatsApp Marketing · API oficial Meta Business</p>
        </div>
      </div>
    </footer>
  );
}
