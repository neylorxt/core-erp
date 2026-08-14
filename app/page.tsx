import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Modules } from "@/components/sections/modules";
import { Crm } from "@/components/sections/crm";
import { Inventory } from "@/components/sections/inventory";
import { Sales } from "@/components/sections/sales";
import { Finance } from "@/components/sections/finance";
import { Employees } from "@/components/sections/employees";
import { Reporting } from "@/components/sections/reporting";
import { Roles } from "@/components/sections/roles";
import { Integrations } from "@/components/sections/integrations";
import { Security } from "@/components/sections/security";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Modules />
        <Crm />
        <Inventory />
        <Sales />
        <Finance />
        <Employees />
        <Reporting />
        <Roles />
        <Integrations />
        <Security />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
