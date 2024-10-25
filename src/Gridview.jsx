import React from "react";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image6 from "./assets/image6.png";
import image8 from "./assets/image8.png";
import image9 from "./assets/image9.png";

const Gridview = () => {
  return (
    <div className="gridview">
      <div className="grid-item">
        <img src={image1} alt="grid 1" />
      </div>
      <div className="grid-item">
        <img src={image2} alt="grid 2" />
      </div>
      <div className="grid-item">
        <img src={image3} alt="grid 3" />
      </div>
      <div className="grid-item">Insert Textblock</div>
      <div className="grid-item">
        <p>Insert Random Video</p>
        <button>NESTING</button>
      </div>
      <div className="grid-item">
        <img src={image6} alt="grid 6" />
      </div>
      <div className="grid-item">Insert Random Quote</div>
      <div className="grid-item">
        <img src={image8} alt="grid 8" />
      </div>
      <div className="grid-item">
        <img src={image9} alt="grid 9" />
      </div>
    </div>
  );
};

export default Gridview;
