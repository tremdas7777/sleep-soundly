import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/livetag/legal-page";

export const Route = createFileRoute("/prazo-entrega")({
  component: Page,
  head: () => ({ meta: [{ title: "Prazo de entrega | LiveTag Pro" }] }),
});

function Page() {
  return (
    <LegalPage title="Prazo de entrega">
      <p>Enviamos para todo o Brasil com código de rastreio. Frete grátis nesta oferta.</p>
      <p>
        Após a confirmação do pagamento, o pedido é separado em 1 a 3 dias úteis. A entrega costuma ocorrer entre 8 e
        20 dias úteis, conforme a região e a transportadora (Correios ou parceira).
      </p>
    </LegalPage>
  );
}
