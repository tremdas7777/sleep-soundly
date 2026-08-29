import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect width="64" height="64" rx="16" fill="#C8F542" />
      <path
        fill="#0B0D10"
        d="M26.5 8.5c-8.2 0-14.8 6.4-14.8 14.3 0 10.4 12.4 26.7 14.4 29.2a.6.6 0 0 0 .9 0c2-2.5 14.4-18.8 14.4-29.2 0-7.9-6.6-14.3-14.9-14.3Z"
      />
      <circle cx="26.5" cy="22.2" r="6.2" fill="#C8F542" />
      <circle cx="26.5" cy="22.2" r="2.35" fill="#0B0D10" />
      <path
        d="M41.2 15.6a13.4 13.4 0 0 1 0 18.8"
        stroke="#0B0D10"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M48.6 11.2a20.2 20.2 0 0 1 0 27.6"
        stroke="#0B0D10"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  markClassName?: string;
  wordmark?: boolean;
  invert?: boolean;
};

export function Logo({ className, markClassName, wordmark = true, invert = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn("h-8 w-8", markClassName)} />
      {wordmark ? (
        <span className="flex items-baseline gap-1.5 leading-none">
          <span
            className={cn(
              "text-[1.35rem] font-extrabold tracking-[-0.055em]",
              invert ? "text-[#0B0D10]" : "text-white",
            )}
          >
            LiveTag
          </span>
          <span className="translate-y-[-1px] rounded-[5px] bg-[#C8F542] px-1.5 py-[3px] text-[9px] font-black tracking-[0.14em] text-[#0B0D10]">
            PRO
          </span>
        </span>
      ) : null}
      <span className="sr-only">LiveTag Pro</span>
    </span>
  );
}
