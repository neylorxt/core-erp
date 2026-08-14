import { Check, Plus, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Window } from "@/components/ui/window";
import { cn } from "@/lib/utils";

const bullets = [
  "Role-based access to every module",
  "Granular read, write, and approve rights per team",
  "An audit trail of exactly who changed what",
];

type Level = "full" | "edit" | "view" | "none";

const columns = ["CRM", "Sales", "Inventory", "Invoices", "Accounting", "HR"];

const matrix: { team: string; levels: Level[] }[] = [
  { team: "Sales", levels: ["full", "full", "edit", "edit", "view", "none"] },
  { team: "Inventory", levels: ["view", "edit", "full", "none", "none", "none"] },
  { team: "Finance", levels: ["view", "view", "view", "full", "full", "view"] },
  { team: "HR", levels: ["view", "none", "none", "none", "none", "full"] },
  { team: "Administrators", levels: ["full", "full", "full", "full", "full", "full"] },
];

function LevelMark({ level }: { level: Level }) {
  switch (level) {
    case "full":
      return (
        <span className="mx-auto block h-2.5 w-2.5 rounded-sm bg-brand-600" title="Full access" />
      );
    case "edit":
      return (
        <span
          className="mx-auto block h-2.5 w-2.5 rounded-sm border border-brand-600 bg-brand-100"
          title="Edit"
        />
      );
    case "view":
      return (
        <span className="mx-auto block h-2.5 w-2.5 rounded-sm border border-zinc-300" title="View only" />
      );
    case "none":
      return <span className="block text-center text-xs text-zinc-300">—</span>;
  }
}

const legend: { level: Level; label: string }[] = [
  { level: "full", label: "Full" },
  { level: "edit", label: "Edit" },
  { level: "view", label: "View" },
  { level: "none", label: "None" },
];

export function Roles() {
  return (
    <section id="roles" className="scroll-mt-20 border-t border-zinc-200 bg-white py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
              Roles &amp; permissions
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Granular control, per team.
            </h2>
            <p className="mt-4 text-pretty text-base leading-7 text-zinc-600">
              Administrators configure exactly what each team can see and do —
              from full control down to view-only. Everyone works with the
              right data and nothing more.
            </p>
            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm leading-6 text-zinc-600">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-2 text-sm text-zinc-500">
              <ShieldCheck size={16} className="text-brand-600" />
              Built for multi-team companies, not just admins.
            </div>
          </Reveal>

          <Reveal delay={0.08} className="min-w-0">
            <Window
              title="Settings — Roles & permissions"
              right={
                <span className="inline-flex items-center gap-1 rounded-md bg-brand-600 px-2 py-1 text-[11px] font-medium text-white">
                  <Plus size={11} /> New role
                </span>
              }
            >
              <div className="flex items-center gap-1.5 border-b border-zinc-100 px-4 py-2.5">
                <span className="rounded-md border border-zinc-200 px-2 py-1 text-[11px] font-medium text-zinc-600">
                  Sales
                </span>
                <span className="rounded-md border border-zinc-200 px-2 py-1 text-[11px] font-medium text-zinc-600">
                  Inventory
                </span>
                <span className="rounded-md bg-zinc-900 px-2 py-1 text-[11px] font-medium text-white">
                  All teams
                </span>
              </div>
              <div className="overflow-x-auto p-2">
                <table className="w-full min-w-[480px] text-left text-xs">
                  <thead>
                    <tr className="text-zinc-400">
                      <th className="px-3 py-2 font-medium">Team</th>
                      {columns.map((c) => (
                        <th key={c} className="px-3 py-2 text-center font-medium">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {matrix.map((row, i) => (
                      <tr
                        key={row.team}
                        className={cn(
                          "border-t border-zinc-100",
                          i === matrix.length - 1 && "border-zinc-200 bg-zinc-50/60"
                        )}
                      >
                        <td
                          className={cn(
                            "px-3 py-2.5 font-medium text-zinc-700",
                            i === matrix.length - 1 && "text-zinc-900"
                          )}
                        >
                          {row.team}
                        </td>
                        {row.levels.map((level, j) => (
                          <td key={j} className="px-3 py-2.5 text-center">
                            <LevelMark level={level} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-2 flex flex-wrap items-center gap-4 px-3 pb-2 pt-1">
                  {legend.map((item) => (
                    <span key={item.label} className="flex items-center gap-1.5 text-[11px] text-zinc-500">
                      <LevelMark level={item.level} />
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </Window>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
