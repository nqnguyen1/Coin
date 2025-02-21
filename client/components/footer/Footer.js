import React from "react";
import "./Footer.css"; // Import the CSS file for the footer styling
import logo from "../../assets/1280x708Logo.jpg";
const Footer = () => {
  return (
    <footer className="footer" id="contact-section">
      <div className="footer-content">
        {/* Left Section: Logo and About */}
        <div className="footer-about">
          <img
            src={logo}
            className="logo"
            alt="Broadway Coin & Stamp Exchange Logo"
          />
          <h3>Broadway Coin & Stamp Exchange</h3>
          <p>
            We are specialists in the buying and selling of rare coins, bullion,
            and stamps. Visit us for expert service and competitive prices.
          </p>
        </div>

        {/* Middle Section: Contact Info */}
        <div className="footer-contact">
          <h3 className="footer-special">Contact Info</h3>
          <p className="footer-special">
            <strong>Phone:</strong> <a href="tel:619-440-0362">619-440-0362</a>
          </p>
          <p>
            <strong className="footer-special">Email:</strong>{" "}
            <a href="mailto:greg@broadwaycoin.com">greg@broadwaycoin.com</a>
          </p>
          <p className="footer-special">
            <strong>Business Hours:</strong>
          </p>
          <p>Mon-Sat: 9am - 5pm</p>

          <p>Closed on Sunday</p>
          <p className="footer-special">
            <strong>Address:</strong>
          </p>
          <p>473 Broadway, El Cajon, CA 92021</p>
        </div>

        {/* Right Section: Google Map Embed */}
        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.876051998333!2d-116.9604963!3d32.7945725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d956ac9cf5997d%3A0x36a3b519f57f7493!2s473%20Broadway%2C%20El%20Cajon%2C%20CA%2092021%2C%20USA!5e0!3m2!1sen!2sbd!4v1694285584136!5m2!1sen!2sbd"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
