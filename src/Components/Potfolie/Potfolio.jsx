import Heading from "../SecHeading/Heading";
import "./Potfolio.css";
import MyData from "../../asserts/assets/mywork_data";
import arrow_icon from "../../asserts/assets/arrow_icon.svg";
import "./Potfolio.css";
const Potfolio = () => {
  return (
    <>
      <section className="potfolio" id="page-4">
        <div className="potfolio-content">
          <Heading title={"My Latest Work"} />
          <div className="potfolio-work-container">
            {MyData.map((v, i) => {
              return (
                <div className="work-img" key={i}>
                  <img src={v.w_img} alt=""  />
                  <div className="View-code">
                  {v.w_live &&(
                    <a className="visit-btn" href={v.w_live_url} target="_blank" > Live Demo <span class="arrow">→</span></a>
                  )}
                    <button> <a href={v.w_code_link} target="_blank">View Code</a></button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mywork-show-more">
          <button>
            <a href="https://github.com/SaimrRazaAly?tab=repositories " target="blank">
            ShowMore <img src={arrow_icon} alt="" />
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Potfolio;
