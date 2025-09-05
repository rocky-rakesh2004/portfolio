/**
 * @copyright 2025 Rakesh 
 * @license Apache-2.0
 */

import SkillCard from "./SkillCard";
import ShinyText from "./ShinyText";

const skillItem = [
  { imgsrc: '/images/java.svg', label: 'Java', desc: 'Programming Language' },
  { imgsrc: '/images/javascript.svg', label: 'JavaScript', desc: 'Programming Language' },
  { imgsrc: '/images/sql.svg', label: 'SQL', desc: 'Database Language' },
  { imgsrc: '/images/react.svg', label: 'React', desc: 'Frontend Framework' },
  { imgsrc: '/images/html.svg', label: 'HTML', desc: 'Markup Language' },
  { imgsrc: '/images/css.svg', label: 'CSS', desc: 'User Interface Styling' },
  { imgsrc: '/images/tailwindcss.svg', label: 'TailwindCSS', desc: 'CSS Framework' },
  { imgsrc: '/images/github.svg', label: 'GitHub', desc: 'Version Control' },
  { imgsrc: '/images/vscode.svg', label: 'VS Code', desc: 'Code Editor' },
  { imgsrc: '/images/netlify.svg', label: 'Netlify', desc: 'Hosting & Deployment' }
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          
          {/* Heading */}
          <div className="text-center mb-6 ">
            <ShinyText text="Skills" speed={2} />
          </div>

          {/* Description */}
          <p className="text-zinc-300 md:text-2xl text-center leading-relaxed reveal-up">
            Here are some of the technologies and skills I have worked with:
          </p>

          {/* Grid of skills */}
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] p-6">
            {skillItem.map(({ imgsrc, label, desc }, key) => (
              <SkillCard 
                key={key} 
                imgsrc={imgsrc} 
                label={label} 
                desc={desc} 
                classes="reveal-up" 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
