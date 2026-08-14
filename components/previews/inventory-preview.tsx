import { CircleAlert, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/ui/table";
import { Window } from "@/components/ui/window";
import { cn } from "@/lib/utils";

const products = [
  { name: "Wireless Mouse", sku: "HW-204", stock: 240, max: 400, warehouse: "Berlin", status: "In stock", tone: "green" as const },
  { name: "USB-C Cable 1m", sku: "ACC-118", stock: 14, max: 400, warehouse: "Amsterdam", status: "Low stock", tone: "amber" as const },
  { name: "27\" Monitor", sku: "HW-210", stock: 9, max: 150, warehouse: "Berlin", status: "Low stock", tone: "amber" as const },
  { name: "Thermal Paper Roll", sku: "SUP-032", stock: 0, max: 200, warehouse: "Amsterdam", status: "Out of stock", tone: "red" as const },
  { name: "Laptop Stand", sku: "ACC-119", stock: 312, max: 400, warehouse: "Barcelona", status: "In stock", tone: "green" as const },
  { name: "Mechanical Keyboard", sku: "HW-207", stock: 178, max: 400, warehouse: "Madrid", status: "In stock", tone: "green" as const },
];

function stockPct(stock: number, max: number) {
  return Math.round((stock / max) * 100);
}

export function InventoryPreview() {
  return (
    <Window
      title="Inventory — Products"
      right={
        <span className="inline-flex items-center gap-1.5 rounded-md bg-brand-600 px-2 py-1 text-[11px] font-medium text-white">
          <Plus size={11} /> New product
        </span>
      }
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 px-4 py-3">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-zinc-900">Products</p>
          <Badge tone="amber" className="gap-1">
            <CircleAlert size={11} /> 5 need reordering
          </Badge>
        </div>
        <div className="flex gap-1.5">
          {["All", "In stock", "Low stock", "Out of stock"].map((f, i) => (
            <span
              key={f}
              className={
                i === 0
                  ? "rounded-md bg-zinc-900 px-2 py-1 text-[11px] font-medium text-white"
                  : "rounded-md border border-zinc-200 px-2 py-1 text-[11px] font-medium text-zinc-500"
              }
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      <DataTable
        columns={[
          { header: "Product" },
          { header: "SKU", hideOnMobile: true },
          { header: "Stock" },
          { header: "Warehouse", hideOnMobile: true },
          { header: "Status" },
        ]}
        rows={products.map((p) => {
          const pct = stockPct(p.stock, p.max);
          return [
            <span key="n" className="font-medium text-zinc-900">{p.name}</span>,
            <span key="s" className="font-mono text-xs text-zinc-500">{p.sku}</span>,
            <span key="st" className="block w-28">
              <span className="flex items-center justify-between text-[13px]">
                <span className="font-medium text-zinc-800">{p.stock}</span>
                <span className="text-zinc-400">{pct}%</span>
              </span>
              <span className="mt-1 block h-1 w-full overflow-hidden rounded-full bg-zinc-100">
                <span
                  className={cn(
                    "block h-full rounded-full",
                    pct === 0 && "bg-red-500",
                    pct > 0 && pct <= 10 && "bg-red-500",
                    pct > 10 && pct < 40 && "bg-amber-500",
                    pct >= 40 && "bg-emerald-500"
                  )}
                  style={{ width: `${pct}%` }}
                />
              </span>
            </span>,
            <span key="w" className="text-zinc-600">{p.warehouse}</span>,
            <Badge key="b" tone={p.tone} dot>
              {p.status}
            </Badge>,
          ];
        })}
      />
    </Window>
  );
}
