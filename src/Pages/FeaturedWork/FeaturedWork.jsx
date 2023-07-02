import React from 'react'
import './featuredwork.css'
import Subheading from '../../components/subheading/Subheading'

export default function FeaturedWork() {
  return (
    <section className='featured padding_x'>
     <Subheading subheading={'#Featured Work'}/>
     <p>To be successful, the first thing to do is fall in love with your work.</p>
    </section>
  )
}
