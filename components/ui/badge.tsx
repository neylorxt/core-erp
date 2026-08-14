import { cn } from "@/lib/utils";

export type BadgeTone =
  | "neutral"
  | "blue"
  | "green"
  | "amber"
  | "red"
  | "gray";

const tones: Record<BadgeTone, { pill: string; dot: string }> = {
  neutral: { pill: "bg-zinc-100 text-zinc-600 ring-zinc-200", dot: "bg-zinc-400" },
  blue: { pill: "bg-blue-50 text-blue-700 ring-blue-200", dot: "bg-blue-500" },
  green: { pill: "bg-emerald-50 text-emerald-700 ring-emerald-200", dot: "bg-emerald-500" },
  amber: { pill: "bg-amber-50 text-amber-700 ring-amber-200", dot: "bg-amber-500" },
  red: { pill: "bg-red-50 text-red-700 ring-red-200", dot: "bg-red-500" },
  gray: { pill: "bg-zinc-50 text-zinc-500 ring-zinc-200", dot: "bg-zinc-300" },
};

export function Badge({
  tone = "neutral",
  dot = false,
  className,
  children,
}: {
  tone?: BadgeTone;
  dot?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset",
        tones[tone].pill,
        className
      )}
    >
      {dot && (
        <span
          className={cn("h-1.5 w-1.5 rounded-full", tones[tone].dot)}
          aria-hidden
        />
      )}
      {children}
    </span>
  );
}
