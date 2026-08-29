import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/livetag/logo";
import { PRODUCT } from "@/lib/product";

const LINKS = [
  { to: "/pagamento-seguro", label: "Pagamento seguro" },
  { to: "/politica-privacidade", label: "Política de privacidade" },
  { to: "/trocas", label: "Trocas e devoluções" },
  { to: "/termos", label: "Termos de uso" },
  { to: "/prazo-entrega", label: "Prazo de entrega" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#0B0D10] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
            Mini rastreador GPS que localiza e grava áudio. Ouça o ambiente no celular — ao vivo.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Suporte</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Central de atendimento
          </p>
          <p className="mt-4 text-sm text-white/70">Segunda a sábado · 9h às 18h</p>
          <p className="mt-2 text-sm text-white/70">contato@livetag.pro</p>
          <p className="mt-6 text-xs leading-relaxed text-white/40">
            Use apenas em bens próprios ou com autorização da pessoa. Escuta e rastreio clandestinos de terceiros
            são ilegais.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {PRODUCT.brand}. Pagamento via Pix, cartão e boleto. Preços válidos neste site.
      </div>
    </footer>
  );
}
