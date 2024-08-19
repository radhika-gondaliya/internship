import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"; // Import your CSS file

function Footer() {
  return (
    <footer className="bg-white text-dark pt-5 pb-3">
      <div style={{ height: "10px", backgroundColor: "#4a8596" }}></div>
      <div style={{ height: "70px", backgroundColor: "white" }}></div>
      <div className="container">
        <div className="row">
          {/* Company Section */}
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h5 className="text-uppercase">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/innovations" className="footer-link">
                  Innovations
                </a>
              </li>
              <li>
                <a href="/business-services" className="footer-link">
                  Business Services
                </a>
              </li>
              <li>
                <a href="/financial-services" className="footer-link">
                  Financial Services
                </a>
              </li>
              <li>
                <a
                  href="http://www.recruit.lejhro.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  Lejhro Recruiter
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="/blogs" className="footer-link">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Programs Section */}
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h5 className="text-uppercase">Programs</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/bootcamp" className="footer-link">
                  Lejhro Bootcamp
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h5 className="text-uppercase">Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="/terms" className="footer-link">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/privacy" className="footer-link">
                  Privacy Statement
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h5 className="text-uppercase">Connect With Us</h5>
            <div className="d-flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-center py-3 mt-4">
        <p className="mb-0">© 2024 LEJHRO. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
