import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { brl, getVariant, PRODUCT } from "@/lib/product";
import { useOffer } from "@/components/livetag/offer-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function CheckoutSheet() {
  const { checkoutOpen, setCheckoutOpen, variantId } = useOffer();
  const variant = getVariant(variantId);
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    toast.success("Pedido registrado. Enviamos os dados de pagamento no e-mail.");
  }

  return (
    <Sheet
      open={checkoutOpen}
      onOpenChange={(open) => {
        setCheckoutOpen(open);
        if (!open) setSent(false);
      }}
    >
      <SheetContent className="w-full overflow-y-auto sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Finalizar compra</SheetTitle>
          <SheetDescription>Pagamento via Pix com 10% OFF ou cartão em até 12x.</SheetDescription>
        </SheetHeader>

        <div className="mt-6 flex gap-3 rounded-2xl bg-[#F6F4EF] p-3">
          <img src={PRODUCT.images[0].src} alt="" className="h-16 w-16 rounded-xl object-cover" />
          <div className="min-w-0">
            <p className="font-bold">{PRODUCT.shortName}</p>
            <p className="text-sm text-muted-foreground">{variant.qtyLabel}</p>
            <p className="mt-1 text-sm font-semibold">{brl(variant.pixPrice)} no Pix</p>
          </div>
        </div>

        {sent ? (
          <div className="mt-8 rounded-2xl bg-[#C8F542]/30 p-5 text-sm leading-relaxed">
            <p className="font-bold">Pedido recebido.</p>
            <p className="mt-2">
              Esta é a vitrine da oferta. Integre o checkout (Shopify, Stripe ou Pix) para receber o pagamento de
              verdade.
            </p>
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={submit}>
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" name="name" required placeholder="Seu nome" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" name="email" type="email" required placeholder="voce@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">WhatsApp</Label>
              <Input id="phone" name="phone" required placeholder="(11) 99999-9999" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cep">CEP</Label>
              <Input id="cep" name="cep" required placeholder="00000-000" />
            </div>
            <Button
              type="submit"
              className="h-12 w-full rounded-xl bg-[#0B0D10] font-bold text-white hover:bg-black"
            >
              Pagar {brl(variant.pixPrice)} no Pix
            </Button>
          </form>
        )}
      </SheetContent>
    </Sheet>
  );
}
