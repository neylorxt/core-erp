import { Plus } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Window } from "@/components/ui/window";

const columns = [
  {
    name: "Qualified",
    count: 4,
    deals: [
      { title: "Laptop refresh", company: "Nordwind GmbH", amount: "€12,000", owner: "Anna Keller" },
      { title: "Warehouse setup", company: "Vertex Retail", amount: "€8,500", owner: "Tom Becker" },
      { title: "Brand redesign", company: "Alpina Foods", amount: "€6,000", owner: "Sara Miles" },
    ],
  },
  {
    name: "Proposal",
    count: 6,
    deals: [
      { title: "ERP migration", company: "Meridian Studio", amount: "€24,000", owner: "Jonas Wolf" },
      { title: "POS rollout", company: "Halcyon Logistics", amount: "€15,200", owner: "Ingrid Meyer" },
      { title: "Service plan", company: "Crestline AG", amount: "€3,600", owner: "Anna Keller" },
    ],
  },
  {
    name: "Won",
    count: 2,
    deals: [
      { title: "Fleet tracking", company: "Nordwind GmbH", amount: "€9,800", owner: "Lena Weber" },
      { title: "Office move", company: "Vertex Retail", amount: "€5,400", owner: "Omar Haddad" },
    ],
  },
];

export function SalesPreview() {
  return (
    <Window
      title="Sales — Pipeline"
      right={
        <span className="inline-flex items-center gap-1.5 rounded-md bg-brand-600 px-2 py-1 text-[11px] font-medium text-white">
          <Plus size={11} /> New deal
        </span>
      }
    >
      <div className="flex gap-3 overflow-x-auto bg-zinc-50/50 p-4">
        {columns.map((col) => (
          <div key={col.name} className="min-w-[200px] flex-1">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xs font-semibold text-zinc-700">{col.name}</span>
              <span className="rounded-md bg-zinc-200/70 px-1.5 py-0.5 text-[11px] font-medium text-zinc-600">
                {col.count}
              </span>
            </div>
            <div className="space-y-2">
              {col.deals.map((deal) => (
                <div key={deal.title} className="rounded-lg border border-zinc-200 bg-white p-3 shadow-sm">
                  <p className="text-[13px] font-semibold text-zinc-900">{deal.title}</p>
                  <p className="mt-0.5 text-xs text-zinc-500">{deal.company}</p>
                  <div className="mt-2.5 flex items-center justify-between">
                    <span className="text-sm font-semibold text-zinc-900">{deal.amount}</span>
                    <Avatar name={deal.owner} className="h-6 w-6 rounded text-[9px]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
}
