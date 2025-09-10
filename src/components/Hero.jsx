/**
 * @copyright 2025 Rakesh
 * @license Apache-2.0
 */

import React from "react";

import Threads from "./Threads";
import ShinyText from "./ShinyText";
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Threads amplitude={10} distance={0.5} enableMouseInteraction={true} />
      </div>
      {/* Content above Galaxy */}
      <div className="relative z-10">
        <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <figure className="img-box w-9 h-9 rounded-lg">
                <img
                  src="/images/rakesh.jpg"
                  alt="Rakesh"
                  width={40}
                  height={40}
                  className="img-cover"
                />
              </figure>
              <div className="flex items-center gap-1.5 text-sm text-zinc-400 tracking-wide">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                </span>
                Available for work
              </div>
            </div>
            <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
              <ShinyText text="Hello, I’m Rakesh." disabled={false} speed={2} />
              <br />
              <span>
                Web developer crafting responsive, user-friendly digital
                experiences.
              </span>
            </h2>
            <div className="flex items-center gap-3">
              <ButtonPrimary
                label="Download Resume"
                icon="download"
                href="/RESUME.pdf"
                target="_blank"
              />

              <ButtonOutline
                href="#about"
                label="Scroll down"
                icon="arrow_downward"
              />
            </div>
          </div>
          {/* Column 2 */}
          <div className="hidden lg:block">
            <div className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
              <img
                src="/images/my-pic.PNG"
                alt="Rakesh"
                className="w-full rounded-[40px] object-cover"
                width={656}
                height={750}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
