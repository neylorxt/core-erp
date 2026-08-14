import {
  ArrowUpRight,
  Bell,
  Briefcase,
  Calculator,
  ChartNoAxesCombined,
  ChevronRight,
  CircleAlert,
  Download,
  Kanban,
  LayoutDashboard,
  Package,
  Plus,
  Receipt,
  Search,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { KpiCard } from "@/components/ui/kpi-card";
import { LineChart } from "@/components/ui/charts";
import { Window } from "@/components/ui/window";
import { cn } from "@/lib/utils";

const sidebar = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "CRM", icon: Users },
  { label: "Sales", icon: ShoppingCart },
  { label: "Inventory", icon: Package },
  { label: "Purchasing", icon: Truck },
  { label: "Invoices", icon: Receipt },
  { label: "Accounting", icon: Calculator },
  { label: "HR", icon: Briefcase },
  { label: "Projects", icon: Kanban },
  { label: "Analytics", icon: ChartNoAxesCombined },
];

const invoices = [
  { number: "INV-2042", customer: "Nordwind GmbH", amount: "€4,120", tone: "amber" as const, label: "Due in 3 days" },
  { number: "INV-2040", customer: "Vertex Retail", amount: "€2,360", tone: "amber" as const, label: "Due tomorrow" },
  { number: "INV-2036", customer: "Alpina Foods", amount: "€1,780", tone: "red" as const, label: "Overdue 5d" },
  { number: "INV-2031", customer: "Meridian Studio", amount: "€3,050", tone: "red" as const, label: "Overdue 9d" },
];

const alerts = [
  { product: "USB-C cables", sku: "ACC-118", stock: 14, max: 100 },
  { product: "Thermal paper", sku: "SUP-032", stock: 6, max: 100 },
  { product: "Monitor 27\"", sku: "HW-204", stock: 9, max: 100 },
  { product: "Office chairs", sku: "FUR-011", stock: 3, max: 100 },
];

const orders = [
  { id: "ORD-2041", customer: "Nordwind GmbH", date: "Today", amount: "€4,120", status: "Paid", tone: "green" as const },
  { id: "ORD-2040", customer: "Vertex Retail", date: "Today", amount: "€2,360", status: "Processing", tone: "blue" as const },
  { id: "ORD-2039", customer: "Alpina Foods", date: "Yesterday", amount: "€1,780", status: "Paid", tone: "green" as const },
  { id: "ORD-2038", customer: "Meridian Studio", date: "Yesterday", amount: "€3,050", status: "Pending", tone: "amber" as const },
  { id: "ORD-2037", customer: "Halcyon Logistics", date: "2 days ago", amount: "€920", status: "Paid", tone: "green" as const },
];

const revenueData = [34, 46, 41, 58, 52, 66, 61, 74, 70, 86, 92, 108];

function Sidebar() {
  return (
    <aside className="hidden w-44 shrink-0 flex-col border-r border-zinc-100 bg-zinc-50/50 lg:flex">
      <nav className="flex flex-col gap-0.5 p-2">
        {sidebar.map((item) => (
          <span
            key={item.label}
            className={cn(
              "flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[13px]",
              item.active
                ? "bg-brand-50 font-medium text-brand-700"
                : "text-zinc-500"
            )}
          >
            <item.icon size={14} strokeWidth={1.75} />
            {item.label}
            {item.active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-600" />}
          </span>
        ))}
      </nav>
    </aside>
  );
}

export function DashboardPreview() {
  return (
    <Window
      title="CoreERP — Overview"
      className="text-left"
      headerClassName="text-zinc-600"
      right={
        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2 py-1 text-[11px] text-zinc-400 sm:flex">
            <Search size={11} />
            Search…
          </span>
          <span className="relative flex h-7 w-7 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-500">
            <Bell size={13} />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-brand-600" />
          </span>
          <Avatar name="Sophie Laurent" className="h-7 w-7 rounded-md text-[10px]" />
        </div>
      }
    >
      <div className="flex">
        <Sidebar />
        <div className="min-w-0 flex-1 bg-white p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[15px] font-semibold text-zinc-900">
                Good morning, Sophie
              </p>
              <p className="text-xs text-zinc-500">
                Here is what is happening across your business today.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden h-8 items-center gap-1.5 rounded-md border border-zinc-200 px-3 text-xs font-medium text-zinc-600 sm:inline-flex">
                <Download size={13} />
                Export
              </span>
              <span className="inline-flex h-8 items-center gap-1.5 rounded-md bg-brand-600 px-3 text-xs font-medium text-white">
                <Plus size={13} />
                New invoice
              </span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-5">
            <KpiCard label="Revenue" value="€124,850" change="+12.4% vs last month" icon={ArrowUpRight} />
            <KpiCard label="Orders" value="842" change="+8.1% vs last month" icon={ShoppingCart} />
            <KpiCard label="Customers" value="1,284" change="+5.2% vs last month" icon={Users} />
            <KpiCard label="Products" value="3,542" change="+2.9% vs last month" icon={Package} />
            <KpiCard
              label="Pending invoices"
              value="27"
              change="6 overdue"
              changeTone="neutral"
              icon={Receipt}
            />
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-3">
            <div className="rounded-lg border border-zinc-200 bg-white p-4 lg:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[13px] text-zinc-500">Revenue</p>
                  <p className="text-lg font-semibold tracking-tight text-zinc-900">
                    €124,850
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600">
                    This year
                  </span>
                  <span className="hidden items-center gap-1 text-[11px] font-medium text-emerald-600 sm:flex">
                    <ArrowUpRight size={12} /> 12.4%
                  </span>
                </div>
              </div>
              <div className="mt-4 h-36 sm:h-40">
                <LineChart data={revenueData} />
              </div>
              <div className="mt-2 hidden justify-between text-[10px] text-zinc-400 sm:flex">
                {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-[13px] font-medium text-zinc-700">Pending invoices</p>
                <Badge tone="amber">27</Badge>
              </div>
              <ul className="mt-3 divide-y divide-zinc-100">
                {invoices.map((inv) => (
                  <li key={inv.number} className="flex items-center gap-3 py-2.5">
                    <Badge tone={inv.tone} dot />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13px] font-medium text-zinc-800">{inv.number}</p>
                      <p className="truncate text-[11px] text-zinc-500">{inv.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[13px] font-medium text-zinc-900">{inv.amount}</p>
                      <p className="text-[11px] text-zinc-500">{inv.label}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-700"
              >
                View all invoices <ChevronRight size={13} />
              </button>
            </div>
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white lg:col-span-2">
              <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
                <p className="text-[13px] font-medium text-zinc-700">Recent orders</p>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-700"
                >
                  View all <ChevronRight size={13} />
                </button>
              </div>
              <table className="w-full text-left text-[13px]">
                <thead>
                  <tr className="border-b border-zinc-100 text-[11px] uppercase tracking-wide text-zinc-400">
                    <th className="px-4 py-2 font-medium">Order</th>
                    <th className="px-4 py-2 font-medium">Customer</th>
                    <th className="hidden px-4 py-2 font-medium md:table-cell">Date</th>
                    <th className="px-4 py-2 text-right font-medium">Amount</th>
                    <th className="px-4 py-2 text-right font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b border-zinc-100 last:border-0">
                      <td className="px-4 py-2.5 font-medium text-zinc-800">{order.id}</td>
                      <td className="px-4 py-2.5 text-zinc-600">{order.customer}</td>
                      <td className="hidden px-4 py-2.5 text-zinc-500 md:table-cell">{order.date}</td>
                      <td className="px-4 py-2.5 text-right font-medium text-zinc-900">{order.amount}</td>
                      <td className="px-4 py-2.5 text-right">
                        <Badge tone={order.tone}>{order.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-4">
              <div className="flex items-center gap-1.5">
                <CircleAlert size={14} className="text-amber-500" />
                <p className="text-[13px] font-medium text-zinc-700">Inventory alerts</p>
              </div>
              <ul className="mt-3 space-y-3">
                {alerts.map((alert) => (
                  <li key={alert.sku}>
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate text-[13px] font-medium text-zinc-800">{alert.product}</p>
                        <p className="text-[11px] text-zinc-400">{alert.sku}</p>
                      </div>
                      <Badge tone={alert.stock < 10 ? "red" : "amber"}>{alert.stock} left</Badge>
                    </div>
                    <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-zinc-100">
                      <div
                        className={cn(
                          "h-full rounded-full",
                          alert.stock < 10 ? "bg-red-500" : "bg-amber-500"
                        )}
                        style={{ width: `${(alert.stock / alert.max) * 100}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}
