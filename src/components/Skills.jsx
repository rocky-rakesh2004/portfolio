/**
 * @copyright 2025 Rakesh 
 * @license Apache-2.0
 */

import SkillCard from "./SkillCard";
import ShinyText from "./ShinyText";
import { img, section } from "framer-motion/client";

const skillItem = [
  // Programming Languages
  {
    imgsrc: '/images/java.svg',
    label: 'Java',
    desc: 'Programming Language'
  },
  {
    imgsrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Programming Language'
  },
  {
    imgsrc: '/images/sql.svg',
    label: 'SQL',
    desc: 'Database Language'
  },

  // Frameworks & Libraries
  {
    imgsrc: '/images/react.svg',
    label: 'React',
    desc: 'Frontend Framework'
  },

  // Styling / UI
  {
    imgsrc: '/images/html.svg',
    label: 'HTML',
    desc: 'Markup Language'
  },
  {
    imgsrc: '/images/css.svg',
    label: 'CSS',
    desc: 'User Interface Styling'
  },
  {
    imgsrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'CSS Framework'
  },

  // Tools & Version Control
  {
    imgsrc: '/images/github.svg',
    label: 'GitHub',
    desc: 'Version Control'
  },
  {
    imgsrc: '/images/vscode.svg',
    label: 'VS Code',
    desc: 'Code Editor'
  },

  // Hosting & Deployment
  {
    imgsrc: '/images/netlify.svg',
    label: 'Netlify',
    desc: 'Hosting & Deployment'
  }
];


const Skills = () => {
  return (
    <section className="section" id="skills">
        <div className="container">
            <div className="text-center mb-6">
            <ShinyText text="Skills" speed={2} />
          </div>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] text-justify">
            Here are some of the technologies and skills I have worked with:
            </p>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] p-6">

                {
                    skillItem.map(({imgsrc,label,desc},key)=> (
                        <SkillCard key={key} imgsrc={imgsrc} label={label} desc={desc}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skills
