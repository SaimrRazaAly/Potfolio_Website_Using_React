import React from "react";
import Heading from "../SecHeading/Heading";
import Services_Data from "../../asserts/assets/services_data";
import arrow_icon from "../../asserts/assets/arrow_icon.svg";
import "./Services.css";
const Services = () => {


  return (
    <>
      <section className="services" id="page-3">
        <Heading title="My Services" />
        <div className="services-content">
          <div className="services-container">
            {Services_Data.map((v, i) => {
              return (
                   <div  className="services-box" key={i}>
                    <h3>{v.s_no}</h3>
                    <h2>{v.s_name}</h2>
                    <p>{v.s_desc}</p>
                    <div className="services-box-btn">
                      <button>
                        Read More <img src={arrow_icon} alt="" />
                      </button>
                    </div>
                  </div>
            
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
