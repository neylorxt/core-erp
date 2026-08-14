import { Download, ArrowUpRight } from "lucide-react";
import { LineChart } from "@/components/ui/charts";
import { Window } from "@/components/ui/window";

const kpis = [
  { label: "Net revenue", value: "€124,850", change: "+12.4% vs Q2" },
  { label: "Gross margin", value: "32.4%", change: "+1.2 pts" },
  { label: "Avg. order value", value: "€148", change: "+6.8%" },
  { label: "Churn", value: "1.8%", change: "-0.4 pts" },
];

const revenue = [42, 48, 45, 55, 52, 62, 60, 70, 68, 78, 86, 94];

const regions = [
  { name: "DACH", value: 38, amount: "€47,200" },
  { name: "Benelux", value: 27, amount: "€33,600" },
  { name: "Nordics", value: 19, amount: "€23,900" },
  { name: "Iberia", value: 11, amount: "€13,700" },
  { name: "CEE", value: 5, amount: "€6,450" },
];

export function ReportsPreview() {
  return (
    <Window
      title="Reports — Executive summary"
      right={
        <span className="hidden items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2 py-1 text-[11px] font-medium text-zinc-600 sm:inline-flex">
          <Download size={11} /> Export PDF
        </span>
      }
    >
      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-lg border border-zinc-200 bg-white p-3.5">
              <p className="text-[12px] text-zinc-500">{kpi.label}</p>
              <p className="mt-1 text-lg font-semibold tracking-tight text-zinc-900">{kpi.value}</p>
              <p className="mt-0.5 text-[11px] font-medium text-emerald-600">{kpi.change}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-5">
          <div className="rounded-lg border border-zinc-200 bg-white p-4 lg:col-span-3">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-medium text-zinc-700">Revenue trend</p>
              <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600">
                Last 12 months
              </span>
            </div>
            <div className="mt-4 h-40">
              <LineChart data={revenue} color="#2563eb" />
            </div>
            <div className="mt-2 hidden justify-between text-[10px] text-zinc-400 sm:flex">
              {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-4 lg:col-span-2">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-medium text-zinc-700">Sales by region</p>
              <ArrowUpRight size={14} className="text-zinc-400" />
            </div>
            <ul className="mt-4 space-y-3">
              {regions.map((r) => (
                <li key={r.name}>
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="font-medium text-zinc-700">{r.name}</span>
                    <span className="font-medium text-zinc-900">{r.amount}</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
                    <div className="h-full rounded-full bg-brand-600" style={{ width: `${r.value}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Window>
  );
}
