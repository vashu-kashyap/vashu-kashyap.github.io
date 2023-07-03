import React from 'react'
import './featuredwork.css'
import Subheading from '../../components/subheading/Subheading'
import WorkCard from '../../components/WorkCard/WorkCard'

export default function FeaturedWork() {
  return (
    <section className='featured padding_x'>
     <Subheading subheading={'#Featured Work'}/>
     <p>To be successful, the first thing to do is fall in love with your work.</p>
     <div className="featured-wrok-container">
      <WorkCard/>
      <WorkCard/>
      <WorkCard/>
      <WorkCard/>
     </div>
     <div className="explore-more">
      <h4>Explore My All Projects </h4>
      <button id='explore-more'>
        Explore More
      </button>
     </div>
    </section>
  )
}
