import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/livetag/legal-page";

export const Route = createFileRoute("/termos")({
  component: Page,
  head: () => ({ meta: [{ title: "Termos de uso | LiveTag Pro" }] }),
});

function Page() {
  return (
    <LegalPage title="Termos de uso">
      <p>
        Ao comprar, você concorda em usar o LiveTag Pro em veículos, pets e objetos seus, ou com consentimento de quem
        for acompanhado.
      </p>
      <p>
        É proibido rastrear ou captar áudio de terceiros sem autorização. O uso ilegal é de responsabilidade exclusiva
        do comprador.
      </p>
    </LegalPage>
  );
}
