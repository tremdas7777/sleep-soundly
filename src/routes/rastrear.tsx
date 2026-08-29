import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { SiteShell } from "@/components/livetag/site-shell";

export const Route = createFileRoute("/rastrear")({
  component: RastrearPage,
  head: () => ({
    meta: [{ title: "Rastrear pedido | LiveTag Pro" }],
  }),
});

function RastrearPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-lg px-4 py-16">
        <h1 className="text-3xl font-black">Rastrear pedido</h1>
        <p className="mt-2 text-[#0B0D10]/65">Insira o código de rastreio enviado no e-mail.</p>
        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            toast.message("Rastreio disponível após integrar a transportadora.");
          }}
        >
          <input
            name="code"
            required
            placeholder="AA123456789BR"
            className="h-12 w-full rounded-xl border border-black/10 px-4"
          />
          <button
            type="submit"
            className="h-12 w-full rounded-xl bg-[#0B0D10] font-bold text-white"
          >
            Consultar
          </button>
        </form>
        <p className="mt-6 text-sm text-[#0B0D10]/50">
          Sem código?{" "}
          <Link to="/contato" className="font-semibold underline">
            Fale com o suporte
          </Link>
          .
        </p>
      </main>
    </SiteShell>
  );
}
