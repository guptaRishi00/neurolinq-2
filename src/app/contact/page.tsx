import HeroSection from "@/components/aboutpage/HeroSection";
import Faq from "@/components/contact/Faq";
import Register from "@/components/contact/Register";
import { getPageData } from "@/data/loader";

export default async function Contact() {
  const response = await getPageData("contact");

  if (!response) {
    return <div>Loading...</div>;
  }

  const heroSectionData = response.data[0].blocks.find(
    (block: any) => block.__component === "shared.hero-section"
  );

  const contact = response.data[0].blocks.find(
    (block: any) => block.__component === "contactpage.contact-details"
  );

  const faq = response.data[0].blocks.find(
    (block: any) => block.__component === "contactpage.faq"
  );
  return (
    <div>
      {heroSectionData && <HeroSection data={heroSectionData} />}
      {contact && <Register data={contact} />}
      {faq && <Faq data={faq} />}
    </div>
  );
}
