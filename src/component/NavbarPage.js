import React, { useState } from "react";
import { Navbar, Container, Offcanvas, Image } from "react-bootstrap";
import styles from "./Navigation.module.css";
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className={styles.navbar} expand={false}>
        <Container fluid>
          <Navbar.Brand
            href="#"
            style={{ marginBottom: "7%", marginLeft: "13%", marginTop: "-4%" }}
          >
            <Image
              src="https://www.lejhro.com/lejhro_logo_white.png"
              alt="Lejhro"
              width={200}
              height={30}
              priority
            />

            <div style={{ marginLeft: "90%", marginTop: "-5%" }}>
              <a
                className="navbar-brand"
                href="#"
                style={{
                  color: "white",
                  fontSize: "16px",
                  marginRight: "30px",
                }}
              >
                Innovations
              </a>
              <a
                className="navbar-brand"
                href="#"
                style={{
                  color: "white",
                  fontSize: "16px",
                  marginRight: "30px",
                }}
              >
                Business Services
              </a>
              <a
                className="navbar-brand"
                href="#"
                style={{
                  color: "white",
                  fontSize: "16px",
                  marginRight: "30px",
                }}
              >
                Financial Services
              </a>
              <a
                className="navbar-brand"
                href="#"
                style={{
                  color: "white",
                  fontSize: "16px",
                  marginRight: "30px",
                }}
              >
                Bootcamp
              </a>
            </div>
          </Navbar.Brand>
          <button
            onClick={handleShow}
            className={styles.hamburger}
            style={{
              borderRadius: "10px",
              marginBottom: "5%",
              marginRight: "7%",
              marginTop: "-5%",
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </Container>
        <div className={styles.blogsTitleContainer}>
          <h1 className={styles.blogsTitle}>Blogs</h1>
        </div>
      </Navbar>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className={styles.sidebar}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Image
              src="https://www.lejhro.com/lejhro_logo_blue.png"
              alt="Lejhro"
              width={200}
              height={30}
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.sidebarLinks}>
            <a href="#" onClick={handleClose}>
              Innovations
            </a>
            <a href="#" onClick={handleClose}>
              Bootcamp
            </a>
            <a href="#" onClick={handleClose}>
              Business Services
            </a>
            <a href="#" onClick={handleClose}>
              Financial Services
            </a>
            <a href="#" onClick={handleClose}>
              About
            </a>
            <a href="#" onClick={handleClose}>
              Contact Us
            </a>
            <a href="#" onClick={handleClose}>
              Blogs
            </a>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <div className="d-flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-dark"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-dark"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-dark"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="text-dark"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navigation;
