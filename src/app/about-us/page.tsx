import CareApproach from "@/components/aboutpage/CareApproach";
import CoreValues from "@/components/aboutpage/CoreValues";
import Founder from "@/components/aboutpage/Founder";
import HeroSection from "@/components/aboutpage/HeroSection";
import OurMission from "@/components/aboutpage/OurMission";
import OurStory from "@/components/aboutpage/OurStory";
import MeetOurFounder from "@/components/homepage/MeetOurFounder";
import Cta from "@/components/ui/Cta";
import { getPageData } from "@/data/loader";

export default async function AboutUs() {
  const response = await getPageData("about-us");

  if (!response) {
    return <div>Loading...</div>;
  }

  const heroSectionData = response.data[0].blocks.find(
    (block: any) => block.__component === "shared.hero-section"
  );
  const ourStory = response.data[0].blocks.find(
    (block: any) => block.__component === "aboutpage.our-story"
  );
  const ourMission = response.data[0].blocks.find(
    (block: any) => block.__component === "aboutpage.our-mission"
  );
  const ourValues = response.data[0].blocks.find(
    (block: any) => block.__component === "aboutpage.core-values"
  );
  const founder = response.data[0].blocks.find(
    (block: any) => block.__component === "homepage.founder"
  );
  const careApproach = response.data[0].blocks.find(
    (block: any) => block.__component === "aboutpage.care-approach"
  );
  const cta = response.data[0].blocks.find(
    (block: any) => block.__component === "layout.cta"
  );

  return (
    <div>
      {heroSectionData && <HeroSection data={heroSectionData} />}
      {ourStory && <OurStory data={ourStory} />}
      {ourMission && <OurMission data={ourMission} />}
      {ourValues && <CoreValues data={ourValues} />}
      {founder && <Founder data={founder} />}
      {careApproach && <CareApproach data={careApproach} />}
      {cta && <Cta data={cta} />}
    </div>
  );
}
