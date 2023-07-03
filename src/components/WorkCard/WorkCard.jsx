import React from "react";
import './workcard.css'

export default function WorkCard() {
  return (
    <div className="workcard">
      <div className="card-img">
        <img src="./project/project-1.jpg" alt="project img" />
      </div>
      <div className="card-content">
        <div className="content-container">
        <h3>Designing Dashboards</h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        <div className="btn-group-date">
            <p>3 Jul 2023</p>
            <div className="btn-group">
                <button id="sharebtn">Share <i className="fa-solid fa-share-nodes"></i></button>
                <button id="veiwbtn">Veiw Project <i className="fa-regular fa-eye"></i></button>
                <button id="getcodebtn">Get Code <i className="fa-solid fa-code"></i></button>
            </div>
        </div>
      </div>
    </div>
  );
}
