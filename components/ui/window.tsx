import { cn } from "@/lib/utils";

export function Window({
  title,
  icon,
  right,
  className,
  headerClassName,
  bodyClassName,
  children,
}: {
  title?: React.ReactNode;
  icon?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_1px_2px_rgba(24,24,27,0.04),0_12px_32px_-16px_rgba(24,24,27,0.12)]",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 border-b border-zinc-200/80 bg-zinc-50 px-4 py-2.5",
          headerClassName
        )}
      >
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full border border-zinc-200 bg-white" />
          <span className="h-2.5 w-2.5 rounded-full border border-zinc-200 bg-white" />
          <span className="h-2.5 w-2.5 rounded-full border border-zinc-200 bg-white" />
        </div>
        {title && (
          <div className="flex min-w-0 items-center gap-1.5 text-xs font-medium text-zinc-500">
            {icon}
            <span className="truncate">{title}</span>
          </div>
        )}
        {right && <div className="ml-auto flex items-center">{right}</div>}
      </div>
      {children ? (
        <div className={cn("text-sm", bodyClassName)}>{children}</div>
      ) : null}
    </div>
  );
}
