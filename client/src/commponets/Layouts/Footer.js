import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row mb-4">
          {/* Follow Us Section */}
          <div className="col-md-4">
            <h3 className="text-warning">Stay Connected</h3>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://facebook.com"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light d-flex align-items-center"
                >
                  <FontAwesomeIcon icon={faFacebook} className="me-2" /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  title="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light d-flex align-items-center"
                >
                  <FontAwesomeIcon icon={faTwitter} className="me-2" /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light d-flex align-items-center"
                >
                  <FontAwesomeIcon icon={faInstagram} className="me-2" /> Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="col-md-4">
            <h4 className="text-warning">Useful Links</h4>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/about" className="text-light">About Us</a></li>
              <li><a href="/contact" className="text-light">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4">
            <h4 className="text-warning">Contact Us</h4>
            <ul className="list-unstyled">
              <li>
                <a href="tel:+91-93181234" className="text-light d-flex align-items-center">
                  <FontAwesomeIcon icon={faPhone} className="me-2" /> +91-93181234
                </a>
              </li>
              <li>
                <a href="tel:+91-963198765" className="text-light d-flex align-items-center">
                  <FontAwesomeIcon icon={faPhone} className="me-2" /> +91-963198765
                </a>
              </li>
              <li>
                <a href="mailto:info@ecom.com" className="text-light d-flex align-items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" /> info@ecom.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-top pt-3">
          <p className="text-light">E-Commerce Website &copy; 2025</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
