import {
  ArrowUpRight,
  Briefcase,
  Calculator,
  ChartNoAxesCombined,
  Kanban,
  Package,
  Receipt,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BarChart, LineChart } from "@/components/ui/charts";
import { cn } from "@/lib/utils";

function MiniApp({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white">
      <div className="flex items-center justify-between border-b border-zinc-100 px-2.5 py-1.5">
        <span className="text-[10px] font-medium text-zinc-500">{label}</span>
        <span className="flex gap-1" aria-hidden>
          <span className="h-1 w-1 rounded-full bg-zinc-300" />
          <span className="h-1 w-1 rounded-full bg-zinc-300" />
          <span className="h-1 w-1 rounded-full bg-zinc-300" />
        </span>
      </div>
      <div className="p-2.5">{children}</div>
    </div>
  );
}

const contacts = [
  { name: "Anna Keller", company: "Nordwind GmbH", status: "Customer", tone: "green" as const },
  { name: "Tom Becker", company: "Vertex Retail", status: "Lead", tone: "blue" as const },
  { name: "Sara Miles", company: "Alpina Foods", status: "Customer", tone: "green" as const },
];

const stages = [
  { name: "Qualified", count: 4, color: "#a1a1aa" },
  { name: "Proposal", count: 6, color: "#93c5fd" },
  { name: "Closed", count: 3, color: "#34d399" },
];

const stock = [
  { name: "Laptops", level: 82, tone: "bg-emerald-500" },
  { name: "USB-C cables", level: 14, tone: "bg-amber-500" },
  { name: "Monitors", level: 31, tone: "bg-blue-500" },
];

const purchases = [
  { id: "PO-1024", supplier: "Nordwind", status: "Received", tone: "green" as const },
  { id: "PO-1023", supplier: "Alpina", status: "Shipped", tone: "blue" as const },
  { id: "PO-1022", supplier: "Vertex", status: "Draft", tone: "gray" as const },
];

const invoiceRows = [
  { id: "INV-2042", amount: "€4,120", status: "Paid", tone: "green" as const },
  { id: "INV-2040", amount: "€2,360", status: "Overdue", tone: "red" as const },
  { id: "INV-2039", amount: "€980", status: "Pending", tone: "amber" as const },
];

const people = [
  { name: "Lena Weber", role: "Sales" },
  { name: "Omar Haddad", role: "Ops" },
  { name: "Ingrid Meyer", role: "Finance" },
];

const tasks = [
  { name: "ERP rollout", progress: 72 },
  { name: "Rebrand", progress: 45 },
  { name: "Onboarding", progress: 90 },
];

export const moduleMinis: Record<string, React.ReactNode> = {
  crm: (
    <MiniApp label="CRM">
      <ul className="space-y-2">
        {contacts.map((c) => (
          <li key={c.name} className="flex items-center gap-2">
            <Avatar name={c.name} className="h-6 w-6 rounded text-[9px]" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-medium text-zinc-800">{c.name}</p>
              <p className="truncate text-[9px] text-zinc-400">{c.company}</p>
            </div>
            <Badge tone={c.tone} dot className="px-1.5 text-[9px]">
              {c.status}
            </Badge>
          </li>
        ))}
      </ul>
    </MiniApp>
  ),
  sales: (
    <MiniApp label="Sales pipeline">
      <div className="grid grid-cols-3 gap-2">
        {stages.map((s) => (
          <div key={s.name} className="rounded-md border border-zinc-100 p-1.5">
            <p className="text-[9px] text-zinc-400">{s.name}</p>
            <p className="text-sm font-semibold text-zinc-900">{s.count}</p>
            <div className="mt-1.5 h-1 rounded-full bg-zinc-100">
              <div className="h-full rounded-full" style={{ width: `${s.count * 12}%`, backgroundColor: s.color }} />
            </div>
          </div>
        ))}
      </div>
    </MiniApp>
  ),
  inventory: (
    <MiniApp label="Inventory">
      <ul className="space-y-2">
        {stock.map((s) => (
          <li key={s.name}>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-zinc-800">{s.name}</span>
              <span className="text-[10px] text-zinc-500">{s.level}%</span>
            </div>
            <div className="mt-1 h-1 w-full rounded-full bg-zinc-100">
              <div className={cn("h-full rounded-full", s.tone)} style={{ width: `${s.level}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </MiniApp>
  ),
  purchasing: (
    <MiniApp label="Purchasing">
      <ul className="space-y-1.5">
        {purchases.map((p) => (
          <li key={p.id} className="flex items-center justify-between rounded-md border border-zinc-100 px-2 py-1.5">
            <div>
              <p className="text-[11px] font-medium text-zinc-800">{p.id}</p>
              <p className="text-[9px] text-zinc-400">{p.supplier}</p>
            </div>
            <Badge tone={p.tone} className="px-1.5 text-[9px]">{p.status}</Badge>
          </li>
        ))}
      </ul>
    </MiniApp>
  ),
  invoices: (
    <MiniApp label="Invoices">
      <ul className="space-y-1.5">
        {invoiceRows.map((inv) => (
          <li key={inv.id} className="flex items-center justify-between rounded-md border border-zinc-100 px-2 py-1.5">
            <span className="text-[11px] font-medium text-zinc-800">{inv.id}</span>
            <span className="flex items-center gap-1.5">
              <span className="text-[11px] font-medium text-zinc-900">{inv.amount}</span>
              <Badge tone={inv.tone} className="px-1.5 text-[9px]">{inv.status}</Badge>
            </span>
          </li>
        ))}
      </ul>
    </MiniApp>
  ),
  accounting: (
    <MiniApp label="Accounting">
      <BarChart
        data={[
          { label: "Jan", value: 42 },
          { label: "Feb", value: 55 },
          { label: "Mar", value: 48 },
          { label: "Apr", value: 64 },
          { label: "May", value: 58 },
          { label: "Jun", value: 72 },
        ]}
        heightClassName="h-16"
        color="#2563eb"
      />
      <div className="mt-1.5 flex items-center justify-between border-t border-zinc-100 pt-1.5">
        <span className="text-[9px] text-zinc-400">Balance</span>
        <span className="text-[11px] font-semibold text-zinc-900">€38,240</span>
      </div>
    </MiniApp>
  ),
  hr: (
    <MiniApp label="HR">
      <ul className="space-y-2">
        {people.map((p) => (
          <li key={p.name} className="flex items-center gap-2">
            <Avatar name={p.name} className="h-6 w-6 rounded text-[9px]" />
            <div className="flex-1">
              <p className="text-[11px] font-medium text-zinc-800">{p.name}</p>
              <p className="text-[9px] text-zinc-400">{p.role}</p>
            </div>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </li>
        ))}
      </ul>
    </MiniApp>
  ),
  projects: (
    <MiniApp label="Projects">
      <ul className="space-y-2">
        {tasks.map((t) => (
          <li key={t.name}>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-zinc-800">{t.name}</span>
              <span className="text-[10px] text-zinc-500">{t.progress}%</span>
            </div>
            <div className="mt-1 h-1 w-full rounded-full bg-zinc-100">
              <div className="h-full rounded-full bg-brand-600" style={{ width: `${t.progress}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </MiniApp>
  ),
  analytics: (
    <MiniApp label="Analytics">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[9px] text-zinc-400">Revenue</p>
          <p className="text-sm font-semibold tracking-tight text-zinc-900">€124.8k</p>
        </div>
        <span className="inline-flex items-center gap-0.5 rounded-md bg-emerald-50 px-1.5 py-0.5 text-[9px] font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
          <ArrowUpRight size={9} /> 12.4%
        </span>
      </div>
      <div className="mt-2 h-10">
        <LineChart
          data={[20, 28, 24, 34, 30, 42, 38, 50]}
          color="#2563eb"
          gridlines={false}
        />
      </div>
      <div className="mt-1.5 flex items-center justify-between border-t border-zinc-100 pt-1.5">
        <span className="text-[9px] text-zinc-400">Gross margin</span>
        <span className="text-[11px] font-semibold text-zinc-900">32.4%</span>
      </div>
    </MiniApp>
  ),
};

export const moduleIcons: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  crm: Users,
  sales: ShoppingCart,
  inventory: Package,
  purchasing: Truck,
  invoices: Receipt,
  accounting: Calculator,
  hr: Briefcase,
  projects: Kanban,
  analytics: ChartNoAxesCombined,
};
