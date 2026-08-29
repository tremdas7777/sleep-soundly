import { createFileRoute } from "@tanstack/react-router";
import { ProductOffer } from "@/components/livetag/product-offer";
import { SalesSections } from "@/components/livetag/sales-sections";
import { SiteShell } from "@/components/livetag/site-shell";
import { PRODUCT } from "@/lib/product";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: `${PRODUCT.name} — Rastreador GPS que grava áudio` },
      {
        name: "description",
        content:
          "LiveTag Pro: GPS global e gravação de áudio ao vivo. Bateria de até 1 ano, app grátis, sem mensalidade. Frete grátis.",
      },
      { property: "og:title", content: `${PRODUCT.name} — localiza e grava áudio em tempo real` },
      {
        property: "og:description",
        content: "Mini rastreador GPS com microfone. Veja no mapa, ouça ao vivo e grave o ambiente no celular.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <SiteShell>
      <ProductOffer />
      <SalesSections />
    </SiteShell>
  );
}
