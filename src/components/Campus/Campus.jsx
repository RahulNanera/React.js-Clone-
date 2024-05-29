import React from "react";
import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  return (
    <div className="campus">
      <p id="gal">GALLERY</p>
      <h2 id="cam">Campus Photos</h2>
      <div className="allimages">
        <img src={gallery_1} alt="error" />
        <img src={gallery_2} alt="error" />
        <img src={gallery_3} alt="error" />
        <img src={gallery_4} alt="error" />
      </div>
      <button id="btnsee">
        See more here <img src={white_arrow} alt="error" id="imgarrow" />
      </button>
    </div>
  );
};

export default Campus;
