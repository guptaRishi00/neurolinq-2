import CareApproach from "@/components/aboutpage/CareApproach";
import HeroSection from "@/components/aboutpage/HeroSection";
import Assessment from "@/components/servicespage/Assessment";
import Medication from "@/components/servicespage/Medication";
import Process from "@/components/servicespage/Process";
import Cta from "@/components/ui/Cta";
import { getPageData } from "@/data/loader";

export default async function page({}: any) {
  const response = await getPageData("services");

  if (!response) {
    return <div>Loading...</div>;
  }

  const heroSectionData = response.data[0].blocks.find(
    (block: any) => block.__component === "shared.hero-section"
  );

  const assessment = response.data[0].blocks.find(
    (block: any) => block.__component === "servicepage.assessment"
  );

  const process = response.data[0].blocks.find(
    (block: any) => block.__component === "aboutpage.core-values"
  );

  const medication = response.data[0].blocks.find(
    (block: any) => block.__component === "servicepage.medication"
  );

  const corporate = response.data[0].blocks.find(
    (block: any) => block.__component === "aboutpage.care-approach"
  );

  const cta = response.data[0].blocks.find(
    (block: any) => block.__component === "layout.cta"
  );

  return (
    <div>
      {heroSectionData && <HeroSection data={heroSectionData} />}
      {assessment && <Assessment data={assessment} />}
      {process && <Process data={process} />}
      {medication && <Medication data={medication} />}
      {corporate && <CareApproach data={corporate} />}
      {cta && <Cta data={cta} />}
    </div>
  );
}
