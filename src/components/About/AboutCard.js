import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yassa Fouad </span>
            from <span className="purple"> Cairo, Egypt.</span>
            <br />
            I'm a passionate Full-Stack Web Developer specializing in the MERN Stack (MongoDB, Express.js, React.js, Node.js). I graduated from Modern Academy, Faculty of Computer Science, in 2026.
            <br />
            <br />
            Over the years, I've contributed to several tech communities and student organizations, taking on leadership and mentorship roles that allowed me to help others grow while continuously enhancing my own skills.
            <br />
            <br />
            <strong className="purple">🏆 Experience & Community Roles</strong>
            <br />
            • Web Development Instructor at GDSC (Google Developer Student Clubs) — 2022–2024
            <br />
            • Web Development Instructor at Enactus — 2022–2023
            <br />
            • Head of Technical at Enactus — 2023–2024
            <br />
            • Head of Technical at GDG (Google Developer Groups) — 2025–2026
            <br />
            • Mentor for aspiring developers at various coding bootcamps (2024-present)
            <br />
            • Speaker at local developer events like Cairo Dev Summit (2024)
            <br />
            <br />
            These experiences have honed my technical skills and enhanced my ability to collaborate and guide others effectively.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Contributing to Tech Communities
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring Aspiring Developers
            </li>
            <li className="about-activity">
              <ImPointRight /> Attending Developer Meetups
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference and help others grow!"{" "}
          </p>
          <footer className="blockquote-footer">Yassa Fouad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
