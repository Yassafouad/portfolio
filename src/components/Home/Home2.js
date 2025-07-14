import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate Full-Stack Web Developer based in Cairo, Egypt, specializing in the MERN Stack.
              <br />
              <br />I am fluent in modern web technologies like
              <i>
                <b className="purple"> React.js, Node.js, MongoDB, and Express.js. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Applications and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Full-Stack Development.
                </b>
              </i>
              <br />
              <br />
              I love working with modern technologies like <b className="purple">TypeScript</b> and
              <i>
                <b className="purple">
                  {" "}
                  Next.js for building scalable applications
                </b>
              </i>
              &nbsp; along with
              <i>
                <b className="purple"> GraphQL, Firebase, and Stripe integration</b>
              </i>
              <br />
              <br />
              I'm also passionate about mentoring and teaching, having served as a Web Development Instructor at GDSC and Enactus.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img 
                src={myImg} 
                className="img-fluid" 
                alt="avatar" 
                loading="lazy"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Yassafouad/yassafouad"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  title="GitHub Profile"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/yassa-fouad"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  title="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/201203160430"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="WhatsApp Contact"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
            <div style={{ marginTop: "20px", fontSize: "1.1rem" }}>
              <p>
                <span className="purple">Location:</span> Cairo, Egypt
              </p>
              <p>
                <span className="purple">Contact:</span> +20 120 316 0430
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
