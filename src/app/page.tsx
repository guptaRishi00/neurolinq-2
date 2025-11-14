import { getHomepageData } from "@/data/loader";
import HeroSection from "@/components/homepage/HeroSection";
import CareStrandard from "@/components/homepage/CareStrandard";
import Pathway from "@/components/homepage/Pathway";
import MeetOurFounder from "@/components/homepage/MeetOurFounder";
import Cta from "@/components/ui/Cta";

export default async function Home() {
  const response = await getHomepageData();

  if (!response) {
    return <div>Loading...</div>;
  }

  const heroSectionData = response.data.blocks.find(
    (block: any) => block.__component === "homepage.herosection"
  );

  const careStrandard = response.data.blocks.find(
    (block: any) => block.__component === "homepage.care-standard"
  );

  const pathway = response.data.blocks.find(
    (block: any) => block.__component === "homepage.pathway"
  );

  const founder = response.data.blocks.find(
    (block: any) => block.__component === "homepage.founder"
  );
  const cta = response.data.blocks.find(
    (block: any) => block.__component === "layout.cta"
  );

  return (
    <div className="">
      {heroSectionData && <HeroSection data={heroSectionData} />}
      {careStrandard && <CareStrandard data={careStrandard} />}
      {pathway && <Pathway data={pathway} />}
      {founder && <MeetOurFounder data={founder} />}
      {cta && <Cta data={cta} />}
    </div>
  );
}
