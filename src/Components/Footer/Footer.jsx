import Logo from "../../asserts/assets/logo.svg";
import UserIcon from "../../asserts/assets/user_icon.svg";

import Theme_Pattren from '../../asserts/assets/theme_pattern.svg'
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div>

            <div className="heading-logo-title">
              <h1>SR</h1>


              
              {/* <img src={Theme_Pattren} alt=""  className="footer-logo-img"/> */}
            </div>
            </div>
            <p>
              fronted developer from Nagar colony,Gilgit with 2 years of
              experience in multiple companines like 3D-GB Google etc.
            </p>
          </div>
          <div className="footer-right">
            <div className="footer-input">
              <img src={UserIcon} alt="" />
              <input type="text" placeholder="Enter Your Email" />
            </div>
            <button>Subscribe</button>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            &copy; Saim Raza. All Rights Reserved
          </div>
          <div className="footer-bottom-right">
            <span>Terms and Services</span>
            <span>Privicy Policy</span>
            <span>Connect With Me</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
