import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { moduleIcons, moduleMinis } from "@/components/previews/module-minis";

const modules = [
  {
    id: "crm",
    name: "CRM",
    description: "Track leads, contacts, and deals from first touch to renewal.",
  },
  {
    id: "sales",
    name: "Sales",
    description: "Quotes, orders, and invoicing in one connected workflow.",
  },
  {
    id: "inventory",
    name: "Inventory",
    description: "Multi-warehouse stock levels with automatic reorder alerts.",
  },
  {
    id: "purchasing",
    name: "Purchasing",
    description: "Suppliers, purchase orders, and receipts in one place.",
  },
  {
    id: "invoices",
    name: "Invoices",
    description: "Create, send, and track invoices with payment reminders.",
  },
  {
    id: "accounting",
    name: "Accounting",
    description: "Chart of accounts, ledgers, and tax-ready reports.",
  },
  {
    id: "hr",
    name: "Human Resources",
    description: "Employee directory, payroll, and time-off management.",
  },
  {
    id: "projects",
    name: "Projects",
    description: "Plan work, assign tasks, and track delivery to deadline.",
  },
  {
    id: "analytics",
    name: "Analytics",
    description: "Dashboards and reports across every department.",
  },
];

export function Modules() {
  return (
    <section id="modules" className="scroll-mt-20 border-t border-zinc-200 bg-zinc-50/60 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Modules"
          title="Nine modules. One source of truth."
          description="Every CoreERP module shares the same customers, products, and transactions — so data entered in one place is instantly available everywhere else."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod, i) => {
            const Icon = moduleIcons[mod.id];
            return (
              <Reveal key={mod.id} delay={Math.min(i * 0.05, 0.25)}>
                <div className="flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-300">
                  {moduleMinis[mod.id]}
                  <div className="mt-4 flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 text-zinc-700">
                      <Icon size={16} strokeWidth={1.75} />
                    </span>
                    <h3 className="text-sm font-semibold text-zinc-900">{mod.name}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{mod.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
