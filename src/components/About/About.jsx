import React from "react";
import "./About.css";
import aboutImg from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="image">
        <img src={aboutImg} alt="error" id="aboutImg" />
      </div>
      <div className="description">
        <p id="university">ABOUT UNIVERSITY</p>
        <h1>Nurturing Tomorrow's Leader Today</h1>
        <p className="para1">
          Embark on a transformative educational journey with our university's
          comprehensive education programs .Our cutting-edge curriculum is
          designed to empower students with the knowledge , skills and the
          experience needed to excel in the dynamic field of eduction .
        </p>

        <p className="para2">
          With a focus on innovation , hands - on learnig and personlized
          mentorship , our programs prepares aspiring educators to make a
          meaningful impact in classrooms , schools and communites .
        </p>

        <p className="para3">
          Whether you aspire to became a teacher , administrator , counselor or
          educational leader , our diverse range of programs offer the perfect
          patheway to achive your goals and unlock your full potential in
          shaping the future of education .
        </p>
      </div>
    </div>
  );
};

export default About;
