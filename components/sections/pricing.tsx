"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  tagline: string;
  monthly: number | null;
  annual: number | null;
  cta: string;
  featured?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "For small teams getting started.",
    monthly: 29,
    annual: 23,
    cta: "Start free trial",
    features: [
      "CRM, Sales, and Invoices",
      "Up to 10 users",
      "5 GB file storage",
      "Email support",
      "Mobile app",
    ],
  },
  {
    name: "Professional",
    tagline: "For growing businesses on the full platform.",
    monthly: 59,
    annual: 47,
    cta: "Start free trial",
    featured: true,
    features: [
      "All 9 modules included",
      "Unlimited users",
      "Advanced reports & dashboards",
      "Integrations & automations",
      "Priority support",
      "100 GB file storage",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For companies with advanced needs.",
    monthly: null,
    annual: null,
    cta: "Contact sales",
    features: [
      "Everything in Professional",
      "SSO & SAML",
      "Custom roles & permissions",
      "Dedicated success manager",
      "SLA & security audits",
      "On-premise option",
    ],
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="scroll-mt-20 border-t border-zinc-200 bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with you."
          description="Start free for 30 days. No setup fees, no hidden costs — cancel anytime."
        />

        <Reveal className="mt-8 flex items-center justify-center gap-3">
          <span
            className={cn(
              "text-sm font-medium",
              !annual ? "text-zinc-900" : "text-zinc-500"
            )}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            onClick={() => setAnnual((v) => !v)}
            className={cn(
              "relative h-6 w-11 rounded-full border transition-colors",
              annual ? "border-brand-600 bg-brand-600" : "border-zinc-300 bg-zinc-200"
            )}
            aria-label="Toggle annual billing"
          >
            <span
              className={cn(
                "absolute top-0.5 h-[18px] w-[18px] rounded-full bg-white shadow-sm transition-all",
                annual ? "left-[22px]" : "left-0.5"
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm font-medium",
              annual ? "text-zinc-900" : "text-zinc-500"
            )}
          >
            Annual
          </span>
          <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
            Save 20%
          </span>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={Math.min(i * 0.06, 0.2)}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-lg border bg-white p-6",
                  plan.featured
                    ? "border-brand-600 shadow-[0_1px_2px_rgba(24,24,27,0.04),0_12px_32px_-16px_rgba(37,99,235,0.25)]"
                    : "border-zinc-200"
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-brand-600 px-2.5 py-0.5 text-xs font-medium text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-base font-semibold text-zinc-900">{plan.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{plan.tagline}</p>

                <div className="mt-5 flex items-baseline gap-1.5">
                  {plan.monthly === null ? (
                    <span className="text-4xl font-semibold tracking-tight text-zinc-900">
                      Custom
                    </span>
                  ) : (
                    <>
                      <span className="text-4xl font-semibold tracking-tight text-zinc-900">
                        €{annual ? plan.annual : plan.monthly}
                      </span>
                      <span className="text-sm text-zinc-500">/user/month</span>
                    </>
                  )}
                </div>
                {plan.monthly !== null && annual && (
                  <p className="mt-1 text-xs text-zinc-400">billed annually</p>
                )}

                <ul className="mt-6 flex-1 space-y-2.5 border-t border-zinc-100 pt-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span className="text-sm text-zinc-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#cta"
                  className={cn(
                    "mt-7 inline-flex h-11 items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600",
                    plan.featured
                      ? "bg-brand-600 text-white hover:bg-brand-700"
                      : "border border-zinc-300 text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50"
                  )}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center text-sm text-zinc-500">
          All plans include security features, audit logs, and automatic backups.
        </Reveal>
      </Container>
    </section>
  );
}
