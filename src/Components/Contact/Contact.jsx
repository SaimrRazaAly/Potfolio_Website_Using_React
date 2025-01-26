import React, { useRef } from "react";
import Heading from "../SecHeading/Heading";
import email from "../../asserts/assets/mail_icon.svg";
import Location from "../../asserts/assets/location_icon.svg";
import Phone from "../../asserts/assets/call_icon.svg";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // EmailJS Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // EmailJS Template ID
        formRef.current, // Reference to the form
        import.meta.env.VITE_EMAILJS_USER_ID // EmailJS User ID (Public Key)
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <>
      <section className="contact" id="page-5">
        <Heading title="Get In Touch" />
        <div className="contact-content">
          <div className="contact-left">
            <h1>Let's Talk</h1>
            <p className="para-foot">
              Whether you're looking to collaborate, have a project in mind, or
              just want to say hello, feel free to reach out! I'm always excited
              to connect with new people and explore exciting opportunities.
            </p>
            <div className="more-details">
              <div className="detail">
                <img src={email} alt="Email Icon" /> <h2>SaimRaza@gmail.com</h2>
              </div>
              <div className="detail">
                <img src={Phone} alt="Phone Icon" /> <h2>03194083141</h2>
              </div>
              <div className="detail">
                <img src={Location} alt="Location Icon" /> <h2>Gilgit, Pakistan</h2>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="input">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="message">Write Your Message Here</label>
                <textarea
                  cols={7}
                  rows={10}
                  placeholder="Enter your message"
                  id="message"
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="form-btn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
