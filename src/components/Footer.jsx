/**
 * @copyright 2025 Rakesh 
 * @license Apache-2.0
 */


import { a, li } from "framer-motion/client";
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Skills',
    href: '#skills'
  },
  {
    label: 'Projects',
    href: '#projects'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/rocky-rakesh2004'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rakesh-s-138605278/'
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/rakesh40020102'
  }
];

const Footer = () => {
  return (
    <div>
      <footer className="section">
        <div className="container">
          <div className=" lg:grid lg:grid-cols-2">

            <div className="mb-10">
              <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                Let&apos;s work together today!
              </h2>
              <ButtonPrimary
                href="mailto:s.rakesh.official@gmail.com"
                label="Start project"
                icon="chevron_right"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 lg:pl-20">
              <div>
                <p className="mb-2">Sitemap</p>
                <ul>
                  {sitemap.map(({ label, href }, key) => (
                    <li key={key}>
                      <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2">Socials</p>
                <ul>
                  {socials.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          <div className="flex flex-center justify-between pt-10 mb-8">
            <a href="" className="">
                <img src="/images/letter-r.png" alt="logo" width={40} height={40}/>
            </a>
            <p className="text-zinc-500 text-sm">
                &copy; 2025 <span className="text-zinc-200">RAKESH</span>
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
