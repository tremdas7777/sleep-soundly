export type VariantId = "one" | "two" | "three";

export type Variant = {
  id: VariantId;
  label: string;
  qtyLabel: string;
  qty: number;
  price: number;
  compareAt: number;
  pixPrice: number;
  badge?: string;
  highlight?: boolean;
  imageIndex: number;
  installments: { n: number; value: number; interestFree?: boolean }[];
};

const CARD_FACTOR = (19.76 * 12) / 197.9;

function pix(price: number) {
  return Math.round(price * 0.9 * 100) / 100;
}

function installments(price: number, preset?: Variant["installments"]): Variant["installments"] {
  if (preset) return preset;
  return Array.from({ length: 12 }, (_, i) => {
    const n = i + 1;
    if (n === 1) return { n, value: price, interestFree: true };
    return { n, value: Math.round((price * CARD_FACTOR) / n * 100) / 100 };
  });
}

export const PRODUCT = {
  brand: "LiveTag",
  name: "LiveTag Pro™",
  shortName: "LiveTag Pro",
  tagline: "GPS + gravação de áudio em tempo real",
  images: [
    {
      src: "/livetag/hero.jpg",
      alt: "LiveTag Pro com caixa, app no celular e rastreador GPS",
    },
    {
      src: "/livetag/product.png",
      alt: "LiveTag Pro — frente e suporte para coleira",
    },
    {
      src: "/livetag/faces.png",
      alt: "LiveTag Pro — frente e verso do rastreador",
    },
    {
      src: "/livetag/kit.png",
      alt: "LiveTag Pro — kit com unidades e suportes",
    },
  ],
  variants: [
    {
      id: "one" as const,
      label: "1 unidade",
      qtyLabel: "Uma unidade",
      qty: 1,
      price: 197.9,
      compareAt: 249.9,
      pixPrice: pix(197.9),
      imageIndex: 0,
      installments: installments(197.9, [
        { n: 1, value: 197.9, interestFree: true },
        { n: 2, value: 104.3 },
        { n: 3, value: 69.9 },
        { n: 4, value: 53.56 },
        { n: 5, value: 43.4 },
        { n: 6, value: 36.62 },
        { n: 7, value: 31.73 },
        { n: 8, value: 28.16 },
        { n: 9, value: 25.38 },
        { n: 10, value: 23.07 },
        { n: 11, value: 21.26 },
        { n: 12, value: 19.76 },
      ]),
    },
    {
      id: "two" as const,
      label: "2 unidades",
      qtyLabel: "Duas unidades",
      qty: 2,
      price: 329.9,
      compareAt: 499.8,
      pixPrice: pix(329.9),
      badge: "Mais vendido",
      highlight: true,
      imageIndex: 3,
      installments: installments(329.9),
    },
    {
      id: "three" as const,
      label: "3 unidades",
      qtyLabel: "Três unidades",
      qty: 3,
      price: 419.9,
      compareAt: 749.7,
      pixPrice: pix(419.9),
      badge: "Melhor custo",
      imageIndex: 3,
      installments: installments(419.9),
    },
  ] satisfies Variant[],
};

export function brl(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function discountPct(variant: Variant) {
  return Math.round((1 - variant.price / variant.compareAt) * 100);
}

export function unitPrice(variant: Variant) {
  return variant.price / variant.qty;
}

export function getVariant(id: VariantId) {
  return PRODUCT.variants.find((v) => v.id === id) ?? PRODUCT.variants[0];
}
