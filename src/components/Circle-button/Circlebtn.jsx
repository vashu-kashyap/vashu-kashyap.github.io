import React from 'react'
import './circlebtn.css'
const Circlebtn = ({btnvalue,btnlink,}) => {
  return (
    <a href={btnlink} target='_blank' className='circle-btn'>
        {btnvalue}
        <div className='overlay'></div>
    </a>
  )
}

export default Circlebtn
