import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { CrmPreview } from "@/components/previews/crm-preview";

const bullets = [
  "Unified contact records with full interaction history",
  "Sales pipelines that update as deals move",
  "Revenue per customer at a glance",
];

export function Crm() {
  return (
    <section id="solutions" className="scroll-mt-20 border-t border-zinc-200 bg-white py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
              Solutions · CRM
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Know every customer, on every channel.
            </h2>
            <p className="mt-4 text-pretty text-base leading-7 text-zinc-600">
              Store contacts, companies, and deals in one place. See who has
              talked to whom, what has been sold, and what is due next — with
              every interaction logged automatically.
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
          <Reveal delay={0.08} className="min-w-0">
            <CrmPreview />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
