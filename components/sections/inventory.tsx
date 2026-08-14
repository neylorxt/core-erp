import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { InventoryPreview } from "@/components/previews/inventory-preview";

const bullets = [
  "Live stock counts across every warehouse",
  "Low-stock and out-of-stock alerts before they bite",
  "SKU-level traceability from purchase to sale",
];

export function Inventory() {
  return (
    <section id="inventory" className="scroll-mt-20 border-t border-zinc-200 bg-zinc-50/60 py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
              Inventory
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Stock you can trust, warehouses included.
            </h2>
            <p className="mt-4 text-pretty text-base leading-7 text-zinc-600">
              Track products across multiple warehouses with live stock levels,
              reorder points, and supplier lead times — so you never overpromise
              or run dry.
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
            <InventoryPreview />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
