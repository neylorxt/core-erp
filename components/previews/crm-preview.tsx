import { Download, Plus } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/ui/table";
import { Window } from "@/components/ui/window";

const customers = [
  {
    name: "Anna Keller",
    company: "Nordwind GmbH",
    email: "a.keller@nordwind.de",
    status: "Customer",
    tone: "green" as const,
    revenue: "€38,400",
    interaction: "2h ago",
  },
  {
    name: "Tom Becker",
    company: "Vertex Retail",
    email: "t.becker@vertex.io",
    status: "Lead",
    tone: "blue" as const,
    revenue: "—",
    interaction: "Today",
  },
  {
    name: "Sara Miles",
    company: "Alpina Foods",
    email: "s.miles@alpina.eu",
    status: "Customer",
    tone: "green" as const,
    revenue: "€22,150",
    interaction: "Yesterday",
  },
  {
    name: "Jonas Wolf",
    company: "Meridian Studio",
    email: "j.wolf@meridian.studio",
    status: "Lead",
    tone: "blue" as const,
    revenue: "—",
    interaction: "2 days ago",
  },
  {
    name: "Ingrid Meyer",
    company: "Halcyon Logistics",
    email: "i.meyer@halcyon.net",
    status: "Customer",
    tone: "green" as const,
    revenue: "€54,700",
    interaction: "3 days ago",
  },
  {
    name: "Lukas Peters",
    company: "Crestline AG",
    email: "l.peters@crestline.ch",
    status: "Churned",
    tone: "red" as const,
    revenue: "€8,900",
    interaction: "3 weeks ago",
  },
];

export function CrmPreview() {
  return (
    <Window
      title="CRM — Customers"
      right={
        <>
          <span className="hidden items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2 py-1 text-[11px] font-medium text-zinc-600 sm:inline-flex">
            <Download size={11} /> Export
          </span>
          <span className="ml-2 inline-flex items-center gap-1.5 rounded-md bg-brand-600 px-2 py-1 text-[11px] font-medium text-white">
            <Plus size={11} /> New customer
          </span>
        </>
      }
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-zinc-900">Customers</p>
          <p className="text-xs text-zinc-500">1,284 contacts · 96.2k pipeline</p>
        </div>
        <div className="flex gap-1.5">
          {["All", "Leads", "Customers", "Churned"].map((f, i) => (
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
          { header: "Customer" },
          { header: "Company" },
          { header: "Email", hideOnMobile: true },
          { header: "Status" },
          { header: "Revenue", align: "right" },
          { header: "Last interaction", align: "right" },
        ]}
        rows={customers.map((c) => [
          <span key="c" className="flex items-center gap-2.5">
            <Avatar name={c.name} />
            <span className="font-medium text-zinc-900">{c.name}</span>
          </span>,
          <span key="co" className="text-zinc-600">{c.company}</span>,
          <span key="e" className="text-zinc-500">{c.email}</span>,
          <Badge key="s" tone={c.tone} dot>
            {c.status}
          </Badge>,
          <span key="r" className="font-medium text-zinc-900">{c.revenue}</span>,
          <span key="i" className="text-zinc-500">{c.interaction}</span>,
        ])}
      />
    </Window>
  );
}
