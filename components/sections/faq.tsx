"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How long does it take to get set up?",
    a: "Most teams are up and running within a day. Import your customers, products, and balances from a spreadsheet, invite your team, and you are ready. Our onboarding specialists help you plan the migration end to end.",
  },
  {
    q: "Can we import data from our existing tools?",
    a: "Yes. CoreERP supports spreadsheet imports for customers, products, orders, and opening balances, plus direct migrations from common accounting and sales tools. Your implementation manager handles the more complex migrations.",
  },
  {
    q: "Does CoreERP integrate with the tools we already use?",
    a: "Out of the box you get Stripe, PayPal, Google Workspace, Microsoft 365, and Slack — plus a full REST API and webhooks to connect anything else you rely on.",
  },
  {
    q: "How does CoreERP keep our data secure?",
    a: "All data is encrypted in transit and at rest, access is controlled by role-based permissions, automated backups run continuously, and every change is recorded in an audit log.",
  },
  {
    q: "Can we control what each team sees?",
    a: "Administrators configure granular permissions per team and per module — full access, edit, view-only, or none. A finance team can approve invoices while the sales team never touches payroll.",
  },
  {
    q: "What happens when our team grows?",
    a: "Move between plans at any time and your data comes with you. Professional removes the user cap, and Enterprise adds SSO, custom roles, and a dedicated success manager for larger organizations.",
  },
  {
    q: "Do you offer onboarding and support?",
    a: "Every plan includes onboarding guidance and email support. Professional adds priority support, and Enterprise comes with a dedicated success manager and a contractual service-level agreement.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="resources" className="scroll-mt-20 border-t border-zinc-200 bg-zinc-50/60 py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Resources"
          title="Frequently asked questions"
          description="Everything you need to know before you get started."
        />

        <Reveal className="mt-12">
          <div className="divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-white">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-[15px] font-medium text-zinc-900">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "shrink-0 text-zinc-400 transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-7 text-zinc-600">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
