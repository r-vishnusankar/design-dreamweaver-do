import { BRAND_NAME } from "@/lib/site-config";

type BrandMarkProps = {
  className?: string;
  showWordmark?: boolean;
  inverted?: boolean;
};

/** The Virtual Invite mark — burgundy seal + optional wordmark. */
export function BrandMark({ className = "", showWordmark = true, inverted = false }: BrandMarkProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/brand/tvi-mark.svg"
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 shrink-0 rounded-[9px]"
      />
      {showWordmark && (
        <span
          className={`font-display tracking-tight leading-none ${
            inverted ? "text-on-primary" : "text-primary"
          } text-[20px] md:text-[22px]`}
        >
          {BRAND_NAME}
        </span>
      )}
    </span>
  );
}
