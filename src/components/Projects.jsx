/**
 * @copyright 2025 Rakesh 
 * @license Apache-2.0
 */

import ShinyText from "./ShinyText";
import ProjectsCard from "./ProjectsCard";

const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Music Finder app',
    tags: ['API', 'React js', 'Development'],
    projectLink: 'https://music-finder-rocky.netlify.app/'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Simple Calculator',
    tags: ['React js', 'Development'],
    projectLink: 'https://calculator-rocky.netlify.app/'
  },
  {
    imgSrc: '/images/project-3.png',
    title: 'Todo app (CRUD)',
    tags: ['Development', 'React js'],
    projectLink: 'https://to-do-list-rocky.netlify.app/'
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Symposium website',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/rocky-rakesh2004/symposium-UI'
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'Stone Paper Scissors Game',
    tags: ['React js', 'Development', 'TailwindCSS'],
    projectLink: 'https://stone-paper-scissor-rocky.netlify.app/'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'Travels website',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/rocky-rakesh2004/video-background-UI'
  },
  {
    imgSrc: '/images/project-7.png',
    title: 'Chess grid',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/rocky-rakesh2004/Chess-Grid-Style'
  },
  {
    imgSrc: '/images/project-8.jpg',
    title: 'Portfolio website',
    tags: ['React js', 'TailwindCSS', 'Development'],
    projectLink: 'https://github.com/rocky-rakesh2004/portfolio'
  }
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="bg-zinc-800/20 p-7 rounded-2xl md:p-12">
          <h2 className="mb-8 text-center">
            <ShinyText text="My projects" speed={2} />
          </h2>

          {/* Grid of projects */}
          <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink }, key) => (
              <ProjectsCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
