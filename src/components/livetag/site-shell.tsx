import { AnnouncementBar } from "@/components/livetag/announcement-bar";
import { CheckoutSheet } from "@/components/livetag/checkout-sheet";
import { OfferProvider } from "@/components/livetag/offer-context";
import { SiteFooter } from "@/components/livetag/site-footer";
import { SiteHeader } from "@/components/livetag/site-header";
import type { ReactNode } from "react";

export function SiteShell({ children, stickyPad }: { children: ReactNode; stickyPad?: boolean }) {
  return (
    <OfferProvider>
      <div className={stickyPad ? "min-h-screen bg-white pb-20 lg:pb-0" : "min-h-screen bg-white"}>
        <AnnouncementBar />
        <SiteHeader />
        {children}
        <SiteFooter />
        <CheckoutSheet />
      </div>
    </OfferProvider>
  );
}
