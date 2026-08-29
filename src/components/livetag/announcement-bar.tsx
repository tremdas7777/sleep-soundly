export function AnnouncementBar() {
  return (
    <div className="bg-[#0B0D10] text-white">
      <div className="flex overflow-hidden py-2 text-[11px] font-semibold uppercase tracking-[0.18em] sm:text-xs">
        <div className="livetag-marquee flex w-max gap-10 whitespace-nowrap">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex items-center gap-10">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="flex items-center gap-10">
                  <span className="text-[#C8F542]">Frete grátis para todo o Brasil</span>
                  <span className="text-white/35">•</span>
                  <span>Promoção válida hoje</span>
                  <span className="text-white/35">•</span>
                  <span>Grava áudio do ambiente</span>
                  <span className="text-white/35">•</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
