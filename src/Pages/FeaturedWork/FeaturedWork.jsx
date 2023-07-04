import React, { useEffect, useState } from 'react'
import './featuredwork.css'
import Subheading from '../../components/subheading/Subheading'
import WorkCard from '../../components/WorkCard/WorkCard'

export default function FeaturedWork() {

  let [featuredData,setFeaturedData] = useState([])

// fetching data of featured project

useEffect(()=>{
  fetch('https://api.github.com/repos/vashu-kashyap/featured-work-json-data/contents/featuredwork.json')
  .then((res)=>{
    return res.json()
  }).then((result)=>{
    let featuredData = JSON.parse(atob(result.content))
    setFeaturedData(featuredData)
  })
}, [])

  return (
    <section className='featured padding_x'>
     <Subheading subheading={'#Featured Work'}/>
     <p>To be successful, the first thing to do is fall in love with your work.</p>
     <div className="featured-wrok-container">
        {featuredData.map((item,index)=>{
          return <WorkCard projectTitle={item.projectTitle} key={index} imgUrl={item.imgUrl} codeUrl={item.codeUrl} veiwUrl={item.veiwUrl} shareUrl={item.shareUrl} date={item.date} projectDescription={item.projectDescription} />
        })}
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
