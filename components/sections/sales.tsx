import { FileText, ShoppingCart, Receipt, Wallet } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SalesPreview } from "@/components/previews/sales-preview";

const steps = [
  {
    icon: FileText,
    title: "Quote",
    description: "Draft a quote from your catalog in minutes and send it with one click.",
  },
  {
    icon: ShoppingCart,
    title: "Order",
    description: "Convert an accepted quote into an order — nothing gets re-typed.",
  },
  {
    icon: Receipt,
    title: "Invoice",
    description: "Generate and send the invoice automatically from the order.",
  },
  {
    icon: Wallet,
    title: "Payment",
    description: "Track payments and send automated reminders until it is settled.",
  },
];

export function Sales() {
  return (
    <section id="sales" className="scroll-mt-20 border-t border-zinc-200 bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Sales management"
          title="From quote to paid, without the busywork."
          description="A simple, connected workflow that moves each deal forward automatically — no spreadsheets, no chasing, no double entry."
        />

        <ol className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              {i < steps.length - 1 && (
                <span
                  className="absolute left-11 right-[-0.75rem] top-5 hidden h-px bg-zinc-200 lg:block"
                  aria-hidden
                />
              )}
              <div className="relative flex flex-col items-start">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700">
                  <step.icon size={16} strokeWidth={1.75} />
                  <span className="absolute -right-1.5 -top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-brand-600 text-[9px] font-semibold text-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-zinc-900">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-zinc-500">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <Reveal className="mx-auto mt-14 max-w-5xl" delay={0.08}>
          <SalesPreview />
        </Reveal>
      </Container>
    </section>
  );
}
