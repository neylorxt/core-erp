import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function Cta() {
  return (
    <section id="cta" className="scroll-mt-20 bg-zinc-900">
      <Container className="py-20 text-center sm:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-400">
            Get started
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Manage your entire business from one place.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-7 text-zinc-400">
            Join thousands of SMEs running their operations on CoreERP. See it
            working on your own data in a 30-minute live demo.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#overview"
              className="inline-flex h-12 w-full items-center justify-center rounded-md bg-white px-6 text-base font-medium text-zinc-900 transition-colors hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              Request Demo
            </a>
            <a
              href="#pricing"
              className="inline-flex h-12 w-full items-center justify-center rounded-md border border-zinc-600 px-6 text-base font-medium text-zinc-200 transition-colors hover:border-zinc-400 hover:text-white sm:w-auto"
            >
              Contact Sales
            </a>
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            Free 30-day trial · No credit card required
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
