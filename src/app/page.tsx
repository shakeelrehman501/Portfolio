import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <div className="w-full font-poppins">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
