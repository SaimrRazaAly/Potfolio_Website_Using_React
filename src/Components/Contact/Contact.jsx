import Heading from "../SecHeading/Heading";
import email from "../../asserts/assets/mail_icon.svg";
import Location from "../../asserts/assets/location_icon.svg";
import Phone from "../../asserts/assets/call_icon.svg";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <section className="contact" id="page-5">
        <Heading title="Get In Touch" />
        <div className="contact-content">
          <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus eius consequuntur quas iure dolorum facere obcaecati
              similique culpa sed debitis minus.
            </p>
            <div className="more-details">
              <div className="detail">
                <img src={email} alt="" /> <h2>SaimRaza@gmail.com</h2>
              </div>
              <div className="detail">
                <img src={Phone} alt="" /> <h2>03194083141</h2>
              </div>
              <div className="detail">
                <img src={Location} alt="" /> <h2>Gilgit</h2>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <form action="#">
              <div className="input">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input">
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder="Enter your Email" />
              </div>
              <div className="input">
                <label htmlFor="">Write Your Message Here</label>
                <textarea
                  cols={7}
                  rows={10}
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="form-btn">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
