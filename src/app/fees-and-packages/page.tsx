import CorporatePricing from "@/components/fees-and-packages/CorporatePricing";
import HeroSection from "@/components/fees-and-packages/HeroSection";
import OurCommitment from "@/components/fees-and-packages/OurCommitment";
import PricingOptions from "@/components/fees-and-packages/PricingOptions";
import Cta from "@/components/ui/Cta";
import { getPageData } from "@/data/loader";

export default async function FeesPage() {
  const response = await getPageData("fees-and-packages");

  if (!response) {
    return <div>Loading...</div>;
  }

  const heroSectionData = response.data[0].blocks.find(
    (block: any) => block.__component === "shared.hero-section"
  );

  const ourCommitment = response.data[0].blocks.find(
    (block: any) => block.__component === "feespage.our-commitment"
  );

  const pricingOptions = response.data[0].blocks.find(
    (block: any) => block.__component === "feespage.pricing-options"
  );
  const corporatePricing = response.data[0].blocks.find(
    (block: any) => block.__component === "feespage.corporate-pricing"
  );
  const cta = response.data[0].blocks.find(
    (block: any) => block.__component === "layout.cta"
  );
  return (
    <div>
      {heroSectionData && <HeroSection data={heroSectionData} />}
      {ourCommitment && <OurCommitment data={ourCommitment} />}
      {pricingOptions && <PricingOptions data={pricingOptions} />}
      {corporatePricing && <CorporatePricing data={corporatePricing} />}
      {cta && <Cta data={cta} />}
    </div>
  );
}
