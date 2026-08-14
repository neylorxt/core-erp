import { LockKeyhole, ShieldCheck, DatabaseBackup, ScrollText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const items = [
  {
    icon: LockKeyhole,
    title: "Data encryption",
    description: "All data is encrypted in transit with TLS and at rest with AES-256.",
  },
  {
    icon: ShieldCheck,
    title: "Role-based permissions",
    description: "Fine-grained read, write, and approve rights for every team.",
  },
  {
    icon: DatabaseBackup,
    title: "Automated backups",
    description: "Encrypted backups run continuously, with point-in-time recovery.",
  },
  {
    icon: ScrollText,
    title: "Audit logs",
    description: "A complete record of every change — by whom, and when.",
  },
];

export function Security() {
  return (
    <section id="security" className="scroll-mt-20 border-t border-zinc-200 bg-zinc-50/60 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Security"
          title="Enterprise-grade protection, out of the box."
          description="Your business data is your most valuable asset. CoreERP is built to keep it safe — and prove it at any time."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i * 0.05, 0.2)}>
              <div className="flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-700">
                  <item.icon size={18} strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-zinc-500">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
