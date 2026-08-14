import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { DashboardPreview } from "@/components/previews/dashboard-preview";

const assurances = ["Free 30-day trial", "No credit card required", "SOC 2 certified"];

export function Hero() {
  return (
    <section id="overview" className="scroll-mt-20 bg-white">
      <Container className="pb-16 pt-16 sm:pb-20 sm:pt-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" aria-hidden />
            All-in-one business platform for SMEs
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Run your business from one platform.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-zinc-600">
            CoreERP centralizes your customers, sales, inventory, accounting,
            and employees in a single system — so your whole team works from
            one source of truth instead of five disconnected tools.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#cta" size="lg" className="w-full sm:w-auto">
              Request Demo
            </Button>
            <Button href="#modules" variant="secondary" size="lg" className="w-full sm:w-auto">
              Explore Platform
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {assurances.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 text-sm text-zinc-500"
              >
                <CheckCircle2 size={15} className="text-brand-600" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-14 sm:mt-16" delay={0.1}>
          <div className="mx-auto max-w-5xl">
            <DashboardPreview />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
