import Hero from "../sections/home/Hero";
import Location from "../sections/home/Location";
import Build from "../sections/home/Build";
import Services from "../sections/home/Services";
import Industries from "../sections/home/Industries";
import Why from "../sections/home/Why";
import CTA from "../sections/home/CTA";
import Connect from "../sections/home/Connect";
import Process from "../sections/home/Process";
import SelectedWork from "../sections/home/SelectedWork";


export default function Home() {
  return (
<>
  <Hero />
  <Location />
  <Build />
  <Services />
  <Industries />
  <SelectedWork />
  <Process />
  <Why />
  <CTA />
  <Connect />
</>

  );
}
