import React, { useState } from "react";
import Heading from "../SecHeading/Heading";
import Services_Data from "../../asserts/assets/services_data";
import arrow_icon from "../../asserts/assets/arrow_icon.svg";
import "./Services.css";
import More_Detail_Page from "./More_Detail_page/More_Detail_Page";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleReadMore = (service) => {
    setSelectedService(service);
  };

  return (
    <>
      <section className="services" id="page-3">
        <Heading title="My Services" />
        <div className="services-content">
          <div className="services-container">
            {Services_Data.map((v, i) => {
              return (
                <div className="services-box" key={i}>
                  <h3>{v.s_no}</h3>
                  <h2>{v.s_name}</h2>
                  <p>{v.s_desc}</p>
                  <div className="services-box-btn">
                    <button onClick={() => handleReadMore(v)}>
                      Read More <img src={arrow_icon} alt="" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Conditionally render the More_Detail_Page component */}
          {selectedService && (
            <More_Detail_Page
              H1={selectedService.s_name}
              para={selectedService.s_desc}
              setSelectedService={setSelectedService}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Services;
