import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "./Particle";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "white" }}>
              Get In <strong className="purple">Touch</strong>
            </h1>
            <p style={{ fontSize: "1.1em", paddingBottom: "20px", color: "white" }}>
              I'm always interested in hearing about new opportunities and exciting projects. 
              Feel free to reach out if you'd like to connect!
            </p>
            
            <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
              <Col md={6} className="contact-info">
                <h3 style={{ fontSize: "1.5em", paddingBottom: "15px" }}>
                  <strong className="purple">Contact Info</strong>
                </h3>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Cairo, Egypt</span>
                </div>
                <div className="contact-item">
                  <FaWhatsapp className="contact-icon" />
                  <span>+20 120 316 0430</span>
                </div>
                <div className="contact-item">
                  <AiFillMail className="contact-icon" />
                  <span>yassayassa16@gmail.com</span>
                </div>
                
                <div style={{ paddingTop: "20px" }}>
                  <h4 style={{ fontSize: "1.2em", paddingBottom: "10px" }}>
                    <strong className="purple">Follow Me</strong>
                  </h4>
                  <div className="social-links">
                    <a
                      href="https://github.com/Yassafouad/yassafouad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <AiFillGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/yassa-fouad-4462a6245/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://wa.me/201203160430"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </Col>
              
              <Col md={6} className="contact-form">
                <h3 style={{ fontSize: "1.5em", paddingBottom: "15px" }}>
                  <strong className="purple">Send Message</strong>
                </h3>
                {showAlert && (
                  <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    Thank you for your message! I'll get back to you soon.
                  </Alert>
                )}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="send-btn">
                    Send Message
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact; 