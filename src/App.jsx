/**
 * @copyright 2025 Rakesh 
 * @license Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 }, // 👈 initial hidden state
        {
          y: 0,
          opacity: 0.8,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,       
            start: "top 80%",   
            end: "bottom 60%",  
            scrub: true,        
          },
        }
      );
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
