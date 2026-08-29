import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { type VariantId } from "@/lib/product";

type OfferContextValue = {
  variantId: VariantId;
  setVariantId: (id: VariantId) => void;
  checkoutOpen: boolean;
  setCheckoutOpen: (open: boolean) => void;
  openCheckout: () => void;
};

const OfferContext = createContext<OfferContextValue | null>(null);

export function OfferProvider({ children }: { children: ReactNode }) {
  const [variantId, setVariantId] = useState<VariantId>("one");
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const value = useMemo(
    () => ({
      variantId,
      setVariantId,
      checkoutOpen,
      setCheckoutOpen,
      openCheckout: () => setCheckoutOpen(true),
    }),
    [variantId, checkoutOpen],
  );

  return <OfferContext.Provider value={value}>{children}</OfferContext.Provider>;
}

export function useOffer() {
  const ctx = useContext(OfferContext);
  if (!ctx) throw new Error("useOffer must be used within OfferProvider");
  return ctx;
}
