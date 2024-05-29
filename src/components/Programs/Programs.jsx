import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";

const Programs = () => {
  return (
    <div className="programs">
      <p id="our">OUR PROGRAMS</p>
      <h2 id="what">What We Offer</h2>
      <div id="alldegrees">
        <div className="p1">
          <img src={program_1} alt="error" />
          <p>Graduation Degree</p>
        </div>
        <div className="p2">
          <img src={program_2} alt="error" />
          <p>Masters Degree</p>
        </div>
        <div className="p3">
          <img src={program_3} alt="error" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
