import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { EmployeesPreview } from "@/components/previews/employees-preview";

const bullets = [
  "Central employee directory and profiles",
  "Time-off requests, approvals, and balances",
  "Payroll data that feeds straight into accounting",
];

export function Employees() {
  return (
    <section id="employees" className="scroll-mt-20 border-t border-zinc-200 bg-white py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
              Human Resources
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              People management without the paperwork.
            </h2>
            <p className="mt-4 text-pretty text-base leading-7 text-zinc-600">
              Keep the whole team in one directory — roles, departments,
              time off, and payroll. So HR can focus on people instead of
              spreadsheets.
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
          </Reveal>
          <Reveal delay={0.08} className="min-w-0 lg:order-1">
            <EmployeesPreview />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
