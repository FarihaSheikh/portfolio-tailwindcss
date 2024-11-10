import About from "@/app/about/page";
import Skills from "@/app/skills/page";
import Projects from "@/app/projects/page";
import Services from "@/app/services/page";
import Contact from "@/app/contact/page";
import HeroSection from "./herosection/page";


export default function Home() {
  return (
<>
    <div>
    <HeroSection/>
    <About/>
    <Skills/>
    <Services/>
    <Projects/>
    <Contact/>
  
    </div>

    </>
  );
}

