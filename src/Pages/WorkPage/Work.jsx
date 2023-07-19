import React, { useEffect,useState } from "react";
import "./work.css";
import Subheading from "../../components/subheading/Subheading";
import WorkCard from "../../components/WorkCard/WorkCard";

const Work = () => {
  let [featuredData, setFeaturedData] = useState([]);

  // fetching data of featured project

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/vashu-kashyap/featured-work-json-data/contents/featuredwork.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        let featuredData = JSON.parse(atob(result.content));
        setFeaturedData(featuredData);
      });
  }, []);

  return (
    <section className="padding_x">
      <Subheading subheading={"#Work"} />

      <div className="work-container">
        {featuredData.map((item, index) => {
          return (
            <WorkCard
              projectTitle={item.projectTitle}
              key={index}
              imgUrl={item.imgUrl}
              codeUrl={item.codeUrl}
              veiwUrl={item.veiwUrl}
              shareUrl={item.shareUrl}
              date={item.date}
              projectDescription={item.projectDescription}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Work;
