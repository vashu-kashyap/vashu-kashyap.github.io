import React from "react";
import './workcard.css'

export default function WorkCard({imgUrl,projectTitle,projectDescription,date,shareUrl,veiwUrl,codeUrl}) {
  return (
    <div className="workcard">
      <div className="card-img">
        <img src={imgUrl} alt="project img" />
      </div>
      <div className="card-content">
        <div className="content-container">
        <h3>{projectTitle}</h3>
        <p>{projectDescription}</p>
        </div>
        <div className="btn-group-date">
            <p>{date}</p>
            <div className="btn-group">
                <a href={veiwUrl} target="_blank" id="veiwbtn">Veiw Project <i className="fa-regular fa-eye"></i></a>
                <a href={codeUrl} target="_blank" id="getcodebtn">Get Code <i className="fa-solid fa-code"></i></a>
            </div>
        </div>
      </div>
    </div>
  );
}
