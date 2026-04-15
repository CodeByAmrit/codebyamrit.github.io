import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Mission />
        <Technologies />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
