import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/livetag/legal-page";

export const Route = createFileRoute("/trocas")({
  component: Page,
  head: () => ({ meta: [{ title: "Trocas e devoluções | LiveTag Pro" }] }),
});

function Page() {
  return (
    <LegalPage title="Trocas e devoluções">
      <p>
        Você tem 7 dias corridos após o recebimento para testar o LiveTag Pro. Se não for o que esperava, entre em
        contato para reembolso ou troca, com o produto em condições de revenda.
      </p>
      <p>O direito de arrependimento segue o Código de Defesa do Consumidor para compras online.</p>
    </LegalPage>
  );
}
