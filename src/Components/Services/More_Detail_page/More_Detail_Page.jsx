import { useState } from "react";
import "./More_Detail_Page.css";
import Full_Screen_Icon from '../../../asserts/assets/full_Screen.png'

const More_Detail_Page = ({ H1, para, setSelectedService }) => {
    const [fullWidth,setFullWidth]= useState(false)
  return (
    <div className="detail-container">
      <div
        className="detail-cross-icon"
        onClick={() => setSelectedService(null)}
      >
        X
      </div>
      <div className="detail-text">
        <h1>{H1}</h1>
        <p>{para}</p>
      </div>
      <div className="full-screen-icon">
        <p>Full Screen</p>
<img src={Full_Screen_Icon} alt="" />
      </div>
    </div>
  );
};

export default More_Detail_Page;
