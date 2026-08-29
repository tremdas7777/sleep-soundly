import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/livetag/legal-page";

export const Route = createFileRoute("/politica-privacidade")({
  component: Page,
  head: () => ({ meta: [{ title: "Política de privacidade | LiveTag Pro" }] }),
});

function Page() {
  return (
    <LegalPage title="Política de privacidade">
      <p>
        Coletamos nome, e-mail, telefone e endereço só para processar pedidos e suporte. Não vendemos sua lista de
        clientes.
      </p>
      <p>
        Dados de localização e áudio do aparelho ficam na sua conta do aplicativo. Use o LiveTag Pro apenas em bens
        próprios ou com autorização.
      </p>
    </LegalPage>
  );
}
