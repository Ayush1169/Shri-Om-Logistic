import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Journey from "../components/Journey";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Founder from "../components/Founder";
import Network from "../components/Network";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Journey />
      <CTA />
      <Contact />
      <Founder />
      <Network />
      <Footer />
    </main>
  );
}