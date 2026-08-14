import { Building2, Search, UserPlus } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Window } from "@/components/ui/window";

const stats = [
  { label: "Team size", value: "128" },
  { label: "Open roles", value: "6" },
  { label: "Pending PTO", value: "3" },
  { label: "New hires", value: "4" },
];

const people = [
  { name: "Lena Weber", role: "Sales Manager", dept: "Sales", status: "Active", tone: "green" as const },
  { name: "Omar Haddad", role: "Operations Lead", dept: "Operations", status: "On leave", tone: "amber" as const },
  { name: "Ingrid Meyer", role: "Financial Controller", dept: "Finance", status: "Active", tone: "green" as const },
  { name: "Jonas Wolf", role: "Senior Developer", dept: "Engineering", status: "Active", tone: "green" as const },
  { name: "Sara Miles", role: "Marketing Manager", dept: "Marketing", status: "Active", tone: "green" as const },
  { name: "Tom Becker", role: "Accountant", dept: "Finance", status: "Active", tone: "green" as const },
  { name: "Anna Keller", role: "Account Executive", dept: "Sales", status: "On leave", tone: "amber" as const },
  { name: "Lukas Peters", role: "Support Specialist", dept: "Support", status: "Active", tone: "green" as const },
];

export function EmployeesPreview() {
  return (
    <Window
      title="HR — People"
      right={
        <span className="hidden items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2 py-1 text-[11px] font-medium text-zinc-600 sm:inline-flex">
          <Search size={11} /> Search
        </span>
      }
    >
      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-zinc-900">Employee directory</p>
            <p className="text-xs text-zinc-500">128 people across 6 departments</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-brand-600 px-2.5 py-1.5 text-[11px] font-medium text-white">
            <UserPlus size={12} /> Invite
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-zinc-200 bg-white p-3">
              <p className="text-2xl font-semibold tracking-tight text-zinc-900">{s.value}</p>
              <p className="mt-0.5 text-[11px] text-zinc-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {people.map((p) => (
            <div
              key={p.name}
              className="rounded-lg border border-zinc-200 bg-white p-3.5 transition-colors hover:border-zinc-300"
            >
              <div className="flex items-start justify-between">
                <Avatar name={p.name} />
                <Badge tone={p.tone} dot className="px-1.5 text-[10px]">
                  {p.status}
                </Badge>
              </div>
              <p className="mt-2.5 text-[13px] font-semibold text-zinc-900">{p.name}</p>
              <p className="text-[11px] text-zinc-500">{p.role}</p>
              <div className="mt-2 flex items-center gap-1.5 text-[11px] text-zinc-400">
                <Building2 size={11} />
                {p.dept}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}
