import { Download, Wallet, ArrowUpRight, TrendingUp } from "lucide-react";
import { DonutChart, GroupedBarChart } from "@/components/ui/charts";
import { Window } from "@/components/ui/window";

const expenses = [
  { label: "Payroll", value: 38, color: "#2563eb" },
  { label: "Inventory", value: 24, color: "#818cf8" },
  { label: "Software", value: 12, color: "#34d399" },
  { label: "Rent", value: 9, color: "#fbbf24" },
  { label: "Marketing", value: 7, color: "#f87171" },
  { label: "Other", value: 10, color: "#d4d4d8" },
];

const monthly = [
  { label: "Jan", values: [86, 52] as [number, number] },
  { label: "Feb", values: [92, 55] as [number, number] },
  { label: "Mar", values: [88, 58] as [number, number] },
  { label: "Apr", values: [96, 60] as [number, number] },
  { label: "May", values: [102, 63] as [number, number] },
  { label: "Jun", values: [110, 68] as [number, number] },
  { label: "Jul", values: [118, 72] as [number, number] },
  { label: "Aug", values: [125, 76] as [number, number] },
];

const kpis = [
  { label: "Monthly revenue", value: "€124,850", change: "+12.4%", icon: ArrowUpRight },
  { label: "Expenses", value: "€76,320", change: "+3.1%", icon: TrendingUp },
  { label: "Pending payments", value: "€18,940", change: "27 invoices", icon: Wallet },
  { label: "Cash flow", value: "€48,530", change: "+8.2%", icon: TrendingUp },
];

export function FinancePreview() {
  return (
    <Window
      title="Finance — August 2026"
      right={
        <span className="hidden items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2 py-1 text-[11px] font-medium text-zinc-600 sm:inline-flex">
          <Download size={11} /> Export
        </span>
      }
    >
      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-lg border border-zinc-200 bg-white p-3.5">
              <div className="flex items-center justify-between">
                <p className="text-[12px] text-zinc-500">{kpi.label}</p>
                <kpi.icon size={13} className="text-zinc-400" />
              </div>
              <p className="mt-1 text-lg font-semibold tracking-tight text-zinc-900">{kpi.value}</p>
              <p className="mt-0.5 text-[11px] font-medium text-emerald-600">{kpi.change}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-5">
          <div className="rounded-lg border border-zinc-200 bg-white p-4 lg:col-span-3">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-medium text-zinc-700">Revenue vs expenses</p>
              <div className="flex items-center gap-3 text-[11px] text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-sm bg-brand-600" /> Revenue
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-sm bg-zinc-400" /> Expenses
                </span>
              </div>
            </div>
            <GroupedBarChart
              data={monthly}
              heightClassName="h-40"
              className="mt-4"
            />
          </div>

          <div className="flex flex-col rounded-lg border border-zinc-200 bg-white p-4 lg:col-span-2">
            <p className="text-[13px] font-medium text-zinc-700">Where money goes</p>
            <div className="mt-3 flex flex-1 flex-col items-center justify-center gap-4 sm:flex-row lg:flex-col">
              <DonutChart
                slices={expenses}
                center={
                  <>
                    <p className="text-[10px] text-zinc-400">Total</p>
                    <p className="text-sm font-semibold text-zinc-900">€76,320</p>
                  </>
                }
              />
              <ul className="w-full space-y-1.5 sm:w-40 lg:w-full">
                {expenses.map((e) => (
                  <li key={e.label} className="flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1.5 text-zinc-600">
                      <span className="h-2 w-2 rounded-sm" style={{ backgroundColor: e.color }} />
                      {e.label}
                    </span>
                    <span className="font-medium text-zinc-900">{e.value}%</span>
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
