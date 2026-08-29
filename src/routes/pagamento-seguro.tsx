import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/livetag/legal-page";

export const Route = createFileRoute("/pagamento-seguro")({
  component: Page,
  head: () => ({ meta: [{ title: "Pagamento seguro | LiveTag Pro" }] }),
});

function Page() {
  return (
    <LegalPage title="Pagamento seguro">
      <p>
        Os pagamentos nesta loja usam ambiente com criptografia SSL. Aceitamos Pix (10% OFF), cartões e boleto conforme
        as opções no checkout.
      </p>
      <p>Não pedimos senha de banco nem código de cartão por WhatsApp.</p>
    </LegalPage>
  );
}
