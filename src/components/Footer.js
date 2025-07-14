import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Yassa Fouad</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} YF</h3>
          <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
            Location: Cairo, Egypt
          </p>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Yassafouad/yassafouad"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub Profile"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/yassa-fouad"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn Profile"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/201203160430"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                title="WhatsApp Contact"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
          <div style={{ marginTop: "15px", fontSize: "0.9rem" }}>
            <p>Contact: +20 120 316 0430</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
