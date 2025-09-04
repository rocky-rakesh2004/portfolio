/**
 * @copyright 2025 Rakesh 
 * @license Apache-2.0
 */

import React from 'react'
import PropTypes from 'prop-types'
const SkillCard = ({
    imgsrc,label,desc,classes
}) => {
  return (
   <div className={'flex items-center gap-3 ring-2 right-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colours group'+classes}>
    <figure className='bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2  group-hover:bg-zinc-900 transition-colors'>
        <img src={imgsrc} alt={label} width={32} height={32}/>
    </figure>
    <div>
        <h3>
            {label}
            <p className=''>
                {desc}
            </p>
        </h3>
    </div>
   </div>
  )
}

SkillCard.propTypes={
    imgsrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string,
}

export default SkillCard
