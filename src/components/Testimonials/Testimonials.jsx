import React from "react";
import "./Testimonials.css";
import u1 from "../../assets/user-1.png";
import u2 from "../../assets/user-2.png";
import u3 from "../../assets/user-3.png";
import u4 from "../../assets/user-4.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <p id="test">TESTIMONIALS</p>
      <h2 id="stud">What Student Says</h2>
      <div className="allStudents">
        <div className="stud1">
          <img src={u1} alt="error" id="user1" />
          <h1>Emily Williams</h1>
          <p>Edusity , USA</p>
          <div>
            Choosing to pursue my degree at Edusity wass one of the best
            decisions i've ever made . The supportive communtiy ,
            state-of-the-art facilities and commitment to academic excellence
            have truly exceeded my expectations .
          </div>
        </div>
        <div className="stud2">
          <img src={u2} alt="error" id="user2" />
          <h1>William Jackson</h1>
          <p>Edusity , USA</p>
          <div>
            Choosing to pursue my degree at Edusity wass one of the best
            decisions i've ever made . The supportive communtiy ,
            state-of-the-art facilities and commitment to academic excellence
            have truly exceeded my expectations .
          </div>
        </div>
        <div className="stud3">
          <img src={u3} alt="error" id="user3" />
          <h1>Richa Perry</h1>
          <p>Edusity , USA</p>
          <div>
            Choosing to pursue my degree at Edusity wass one of the best
            decisions i've ever made . The supportive communtiy ,
            state-of-the-art facilities and commitment to academic excellence
            have truly exceeded my expectations .
          </div>
        </div>
        <div className="stud4">
          <img src={u4} alt="error" id="user4" />
          <h1>James Roy</h1>
          <p>Edusity , USA</p>
          <div>
            Choosing to pursue my degree at Edusity wass one of the best
            decisions i've ever made . The supportive communtiy ,
            state-of-the-art facilities and commitment to academic excellence
            have truly exceeded my expectations .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
