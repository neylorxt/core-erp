import { Webhook } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

function GoogleMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function MicrosoftMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <rect x="1" y="1" width="10.5" height="10.5" fill="#F25022" />
      <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00" />
      <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF" />
      <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900" />
    </svg>
  );
}

function SlackMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
      <path fill="#36C5F0" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" />
      <path fill="#2EB67D" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" />
      <path fill="#ECB22E" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" />
      <path fill="#E01E5A" d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  );
}

const integrations = [
  {
    name: "Stripe",
    description: "Sync subscriptions, charges, and refunds automatically.",
    mark: <span className="text-[17px] font-extrabold lowercase tracking-tight text-[#635BFF]">stripe</span>,
  },
  {
    name: "PayPal",
    description: "Collect payments and reconcile them against invoices.",
    mark: <span className="text-[17px] font-bold italic tracking-tight text-[#0070BA]">PayPal</span>,
  },
  {
    name: "Google Workspace",
    description: "Sync contacts, calendar, and documents with Gmail & Drive.",
    mark: <GoogleMark />,
  },
  {
    name: "Microsoft 365",
    description: "Work with Outlook, Teams, and SharePoint alongside CoreERP.",
    mark: <MicrosoftMark />,
  },
  {
    name: "Slack",
    description: "Get order, stock, and approval notifications in your channels.",
    mark: <SlackMark />,
  },
  {
    name: "Webhooks & API",
    description: "Connect anything else with a full REST API and webhooks.",
    mark: (
      <span className="flex h-[22px] w-[22px] items-center justify-center text-zinc-700">
        <Webhook size={22} strokeWidth={1.75} />
      </span>
    ),
  },
];

export function Integrations() {
  return (
    <section id="integrations" className="scroll-mt-20 border-t border-zinc-200 bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Integrations"
          title="Plays nicely with the tools you already use."
          description="CoreERP connects to your payments, email, and messaging stack — so data flows in both directions, automatically."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item, i) => (
            <Reveal key={item.name} delay={Math.min(i * 0.05, 0.25)}>
              <div className="flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-300">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-100 bg-zinc-50">
                    {item.mark}
                  </div>
                  <span className="text-xs text-zinc-400">Available</span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-zinc-900">{item.name}</h3>
                <p className="mt-1.5 text-sm leading-6 text-zinc-500">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
