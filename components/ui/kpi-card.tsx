import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function KpiCard({
  label,
  value,
  change,
  changeTone = "positive",
  icon: Icon,
  className,
}: {
  label: string;
  value: React.ReactNode;
  change?: React.ReactNode;
  changeTone?: "positive" | "negative" | "neutral";
  icon?: LucideIcon;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-zinc-200 bg-white p-4",
        className
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-[13px] text-zinc-500">{label}</p>
        {Icon && (
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-zinc-100 bg-zinc-50 text-zinc-500">
            <Icon size={14} strokeWidth={1.75} />
          </span>
        )}
      </div>
      <p className="mt-1.5 text-2xl font-semibold tracking-tight text-zinc-900">
        {value}
      </p>
      {change && (
        <p
          className={cn(
            "mt-1 text-xs font-medium",
            changeTone === "positive" && "text-emerald-600",
            changeTone === "negative" && "text-red-600",
            changeTone === "neutral" && "text-zinc-500"
          )}
        >
          {change}
        </p>
      )}
    </div>
  );
}
