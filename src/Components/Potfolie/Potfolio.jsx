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
                    <button> <a href={v.w_code_link} target="blank">View Code</a></button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mywork-show-more">
          <button>
            ShowMore <img src={arrow_icon} alt="" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Potfolio;
