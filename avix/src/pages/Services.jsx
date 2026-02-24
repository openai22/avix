import ServicesHero from "../sections/services/ServicesHero";
import ServicesBuild from "../sections/services/ServicesBuild";
import ServicesResponsive from "../sections/services/ServicesResponsive";
import ServicesFAQ from "../sections/services/ServicesFAQ";
import IndustryTabs from "../sections/services/IndustryTabs";
import SearchSection from "../sections/services/SearchSection";
import ServicesProcess from "../sections/services/ServicesProcess";
import ServicePackages from "../sections/services/ServicePackages";
import SelectedWork from "../sections/services/SelectedWork";
export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesBuild />
      <IndustryTabs />
      <ServicesProcess />
      <ServicePackages />
      <SelectedWork />
      <ServicesFAQ />
      <ServicesResponsive />
      <SearchSection />
    </>
  );
}
