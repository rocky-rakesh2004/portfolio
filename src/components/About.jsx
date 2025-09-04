/**
 * @copyright 2025 Rakesh 
 * @license Apache-2.0
 */

import ShinyText from './ShinyText';

const About = () => {
  return (
    <section id='about' className='section'>
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          {/* Centered heading */}
          <div className="text-center mb-6">
            <ShinyText text="About Me" speed={2} />
          </div>

          {/* Full width justified paragraph inside the box */}
          <p className="text-zinc-300 md:text-2xl text-justify leading-relaxed">
             I'm a motivated computer science engineer passionate about front-end web development and
            problem-solving, seeking a position where I can apply my skills in Java, Data Structures & Algorithms,
            and React.js to develop responsive, user-friendly, and scalable applications. Eager to contribute to impactful
            projects within a collaborative team environment while continuously enhancing my technical expertise.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;
