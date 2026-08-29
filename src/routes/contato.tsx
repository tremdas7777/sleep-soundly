import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { SiteShell } from "@/components/livetag/site-shell";

export const Route = createFileRoute("/contato")({
  component: ContatoPage,
  head: () => ({
    meta: [{ title: "Contato | LiveTag Pro" }],
  }),
});

function ContatoPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-lg px-4 py-16">
        <h1 className="text-3xl font-black">Contato</h1>
        <p className="mt-2 text-[#0B0D10]/65">Segunda a sábado, 9h às 18h · contato@livetag.pro</p>
        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Mensagem enviada. Retornamos no e-mail.");
          }}
        >
          <input name="name" required placeholder="Nome" className="h-12 w-full rounded-xl border border-black/10 px-4" />
          <input
            name="email"
            type="email"
            required
            placeholder="E-mail"
            className="h-12 w-full rounded-xl border border-black/10 px-4"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Sua mensagem"
            className="w-full rounded-xl border border-black/10 px-4 py-3"
          />
          <button type="submit" className="h-12 w-full rounded-xl bg-[#0B0D10] font-bold text-white">
            Enviar
          </button>
        </form>
      </main>
    </SiteShell>
  );
}
