import { useState } from "react";
import { Check, ChevronDown, MapPin, Mic, ShieldCheck, Smartphone, Star, Truck } from "lucide-react";
import { brl, discountPct, getVariant, PRODUCT, unitPrice, type VariantId } from "@/lib/product";
import { useOffer } from "@/components/livetag/offer-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PAYMENTS = ["Pix", "Visa", "Mastercard", "Elo", "Amex", "Hipercard"];

export function ProductOffer() {
  const { variantId, setVariantId, openCheckout } = useOffer();
  const [imageIndex, setImageIndex] = useState(0);
  const [installmentsOpen, setInstallmentsOpen] = useState(false);
  const variant = getVariant(variantId);
  const off = discountPct(variant);

  function selectVariant(id: VariantId) {
    setVariantId(id);
  }

  function buy() {
    openCheckout();
  }

  return (
    <section id="oferta" className="scroll-mt-20 bg-[#F6F4EF]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-8 lg:grid-cols-2 lg:py-14">
        <div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
            <img
              src={PRODUCT.images[imageIndex]!.src}
              alt={PRODUCT.images[imageIndex]!.alt}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {PRODUCT.images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setImageIndex(i)}
                className={cn(
                  "overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 transition",
                  i === imageIndex ? "ring-2 ring-[#0B0D10]" : "hover:ring-black/20",
                )}
              >
                <img src={img.src} alt="" className="aspect-square w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-black tracking-tight text-[#0B0D10] sm:text-4xl">
            {PRODUCT.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B0D10] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#C8F542]">
              <Mic className="h-3.5 w-3.5" />
              Grava áudio
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B0D10] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#C8F542]">
              <MapPin className="h-3.5 w-3.5" />
              GPS global
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B0D10] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#C8F542]">
              <Smartphone className="h-3.5 w-3.5" />
              Ao vivo no app
            </span>
          </div>
          <p className="mt-2 text-lg text-[#0B0D10]/70">{PRODUCT.tagline}</p>

          <div className="mt-3 flex items-center gap-2 text-sm">
            <div className="flex text-[#E2B93B]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="font-medium text-[#0B0D10]/70">Localiza, ouve e grava o ambiente</span>
          </div>

          <p className="mt-4 text-sm text-[#0B0D10]/55">Vendido e entregue pela LiveTag</p>

          <div className="mt-6">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {PRODUCT.variants.map((item) => {
                const selected = item.id === variantId;
                const offItem = discountPct(item);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => selectVariant(item.id)}
                    className={cn(
                      "relative rounded-2xl border-2 px-2 py-3 text-left transition sm:px-3",
                      selected
                        ? "border-[#0B0D10] bg-white shadow-sm"
                        : item.highlight
                          ? "border-[#C8F542] bg-white/80 hover:bg-white"
                          : "border-transparent bg-white/60 hover:bg-white",
                    )}
                  >
                    {item.badge ? (
                      <span className="absolute -top-2 left-2 rounded-full bg-[#C8F542] px-2 py-0.5 text-[9px] font-black uppercase tracking-wide text-[#0B0D10]">
                        {item.badge}
                      </span>
                    ) : null}
                    <p className="text-xs font-bold sm:text-sm">{item.label}</p>
                    <p className="text-[11px] font-black text-[#0B0D10] sm:text-sm">{brl(item.price)}</p>
                    <p className="text-[10px] text-[#0B0D10]/50 line-through">{brl(item.compareAt)}</p>
                    <p className="mt-1 text-[11px] font-semibold text-[#5B6B1A]">
                      {offItem}% OFF · {brl(unitPrice(item))}/un
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-end gap-3">
            <span className="rounded-full bg-[#C8F542] px-3 py-1 text-sm font-black text-[#0B0D10]">
              {off}% OFF
            </span>
            <span className="text-lg text-[#0B0D10]/40 line-through">{brl(variant.compareAt)}</span>
            <span className="text-4xl font-black tracking-tight text-[#0B0D10]">{brl(variant.price)}</span>
          </div>

          <button
            type="button"
            className="mt-3 flex items-center gap-2 text-sm font-medium text-[#0B0D10]/70"
            onClick={() => setInstallmentsOpen((v) => !v)}
          >
            Parcelas
            <ChevronDown className={cn("h-4 w-4 transition", installmentsOpen && "rotate-180")} />
          </button>
          {installmentsOpen ? (
            <ul className="mt-2 rounded-2xl bg-white p-4 text-sm text-[#0B0D10]/80 ring-1 ring-black/5">
              {variant.installments.map((row) => (
                <li key={row.n} className="flex justify-between py-1">
                  <span>
                    {row.n}x de {brl(row.value)}
                  </span>
                  {row.interestFree ? <span className="font-semibold">sem juros</span> : null}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-1 text-sm text-[#0B0D10]/60">
              em <strong>12x</strong> de <strong>{brl(variant.installments[11]!.value)}</strong>
            </p>
          )}

          <p className="mt-4 text-lg font-bold text-[#0B0D10]">
            {brl(variant.pixPrice)} <span className="text-sm font-semibold text-[#5B6B1A]">no Pix</span>
          </p>
          <p className="text-sm text-[#0B0D10]/55">
            10% de desconto · economize {brl(variant.price - variant.pixPrice)}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#0B0D10]/60 ring-1 ring-black/5"
              >
                {p}
              </span>
            ))}
          </div>

          <Button
            onClick={buy}
            className="mt-6 h-14 w-full rounded-2xl bg-[#C8F542] text-base font-black uppercase tracking-wide text-[#0B0D10] shadow-none hover:bg-[#d7ff63]"
          >
            Comprar agora
          </Button>

          <a
            href="#como-funciona"
            className="mt-3 inline-flex h-12 items-center justify-center rounded-2xl border border-[#0B0D10]/15 bg-white text-sm font-bold text-[#0B0D10]"
          >
            Ver como funciona
          </a>

          <ul className="mt-6 space-y-3 text-sm text-[#0B0D10]/75">
            <li className="flex gap-2">
              <Truck className="mt-0.5 h-4 w-4 shrink-0" />
              Frete grátis com rastreio · Correios
            </li>
            <li className="flex gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />
              Compra garantida: 7 dias para testar ou devolvemos o dinheiro
            </li>
            <li className="flex gap-2">
              <Mic className="mt-0.5 h-4 w-4 shrink-0" />
              Microfone que grava e transmite o áudio do ambiente no celular
            </li>
            <li className="flex gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0" />
              App grátis no Android e iOS · sem mensalidade
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
