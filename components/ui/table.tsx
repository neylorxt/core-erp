import { cn } from "@/lib/utils";

export type DataColumn = {
  header: string;
  align?: "left" | "right";
  hideOnMobile?: boolean;
  className?: string;
};

export function DataTable({
  columns,
  rows,
  className,
}: {
  columns: DataColumn[];
  rows: React.ReactNode[][];
  className?: string;
}) {
  return (
    <table className={cn("rt-table w-full text-sm", className)}>
      <thead>
        <tr className="border-b border-zinc-200 bg-zinc-50/60">
          {columns.map((c) => (
            <th
              key={c.header}
              scope="col"
              className={cn(
                "px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-zinc-500",
                c.align === "right" && "text-right",
                c.hideOnMobile && "hide-on-mobile",
                c.className
              )}
            >
              {c.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((cells, rowIndex) => (
          <tr
            key={rowIndex}
            className="border-b border-zinc-100 last:border-b-0"
          >
            {cells.map((cell, colIndex) => (
              <td
                key={colIndex}
                data-label={columns[colIndex].header}
                className={cn(
                  "px-4 py-3 align-middle",
                  columns[colIndex].align === "right" && "text-right",
                  columns[colIndex].hideOnMobile && "hide-on-mobile",
                  columns[colIndex].className
                )}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
