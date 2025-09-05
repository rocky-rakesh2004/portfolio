/**
 * @copyright 2025 Rakesh 
 * @license Apache-2.0
 */

import PropsTypes from "prop-types";
import { useEffect, useRef } from "react";

const Navbar = ({navOpen}) => {
    const lastActiveLink = useRef();
    const activebox = useRef();

    const initActiveBox = () => {
       activebox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activebox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activebox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activebox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }

    const activeCurrentLink = (e) => {
      lastActiveLink.current?.classList.remove('active');
      e.target.classList.add('active');
      lastActiveLink.current = e.target;
      activebox.current.style.top = e.target.offsetTop + 'px';
      activebox.current.style.left = e.target.offsetLeft + 'px';
      activebox.current.style.width = e.target.offsetWidth + 'px';
      activebox.current.style.height = e.target.offsetHeight + 'px';
    };

    window.addEventListener('resize', initActiveBox);

    useEffect(initActiveBox, []);



    const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Skills',
      link: '#skills',
      className: 'nav-link'
    },
    {
      label: 'projects',
      link: '#projects',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden'
    }
  ];

  return (
    <nav className={`navbar${navOpen ? ' active' : ''}`}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          key={key}
          href={link}
          className={className}
          ref={ref}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activebox}></div>
    </nav>
  )
}

Navbar.propsTypes = {
    navOpen: PropsTypes.bool.isRequired
}

export default Navbar
