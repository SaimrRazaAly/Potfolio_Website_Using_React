import Heading from "../SecHeading/Heading";
import "./Potfolio.css";
import Card from "./Card"
import arrow_icon from "../../asserts/assets/arrow_icon.svg";
import "./Potfolio.css";
const Potfolio = () => {
  return (
    <>
      <section className="potfolio" id="page-4">
        <div className="potfolio-content">
          <Heading title={"My Latest Work"} />

          {/* Projects Grid */}
          <div className="projects-grid">
       <Card/>
            </div>
        </div>
        <div className="mywork-show-more">
          <button>
            <a
              href="https://github.com/SaimrRazaAly?tab=repositories "
              target="blank"
            >
              ShowMore <img src={arrow_icon} alt="" />
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Potfolio;
