/**
 * @copyright 2025 Rakesh
 * @license Apache-2.0
 */

import React from 'react'
import PropTypes from 'prop-types'



const ButtonPrimary = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={"btn btn-primary " + (classes || "")}
        download={href.endsWith(".pdf") ? true : undefined} 
      >
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-primary " + (classes || "")}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export default ButtonPrimary;


ButtonPrimary.propTypes={
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
}
const ButtonOutline = ({href,target='_self',label,icon,classes}) => {

   if(href){
    return(
        <a href={href} target={target} className={'btn btn-outline '+ (classes || '')}>
        {label}
        {icon ? <span className="material-symbols-rounded aria-hidden='true">{icon}</span> : undefined}
        </a>
    )
}
   else{
    return(
        <button className={'btn btn-outline'+ c(classes || '')}>{label}{icon ? <span className="material-symbols-rounded aria-hidden='true">{icon}</span> : undefined}</button>
    )
   }
}

ButtonOutline.propTypes={
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
}



export {
    ButtonPrimary,ButtonOutline
};
