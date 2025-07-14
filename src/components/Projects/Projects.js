import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import da from "../../Assets/Projects/da.PNG";
import fo from "../../Assets/Projects/fo.PNG";
import ch from "../../Assets/Projects/ch.PNG";
import tr from "../../Assets/Projects/tr.PNG";
import ss from "../../Assets/Projects/ss.PNG";
import ga from "../../Assets/Projects/ga.PNG";
import pu from "../../Assets/Projects/pu.PNG";
import la from "../../Assets/Projects/la.PNG";
import dacar from "../../Assets/Projects/dacar.PNG";
import va from "../../Assets/Projects/va.PNG";


function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const frontendProjects = [
    {
      imgPath: fo,
      title: "Food Delivery App",
      description: "A modern food delivery application built with React.js. Features include restaurant browsing, menu selection, order tracking, and real-time delivery updates. Integrated with payment gateways and location services for seamless food ordering experience.",
      ghLink: "https://github.com/Yassafouad/FoodAppReact",
      demoLink: "https://food-app-react-gules.vercel.app/"
    },

    {
      imgPath: ch,
      title: "Chef Landing Page",
      description: "A beautiful landing page for a chef's culinary services built with React.js. Features include menu showcase, booking system, testimonials, and contact forms. Designed with modern UI/UX principles and smooth animations.",
      ghLink: "https://github.com/Yassafouad/landing-chef",
      demoLink: "https://landing-chef-5ou7qjauw-yassa-fouads-projects.vercel.app/"
    },
    {
      imgPath: la,
      title: "Landing Page",
      description: "A simple and modern landing page created using Next.js and Tailwind CSS. The layout includes a hero section, feature highlights, testimonials, and a call-to-action. Its fully responsive and optimized for fast load time and clean UI.",
      ghLink: "https://github.com/Yassafouad/landing-page-tailwind",
      demoLink: "https://landing-page-tailwind-psi.vercel.app/"
    },
    {
      imgPath: pu,
      title: "Pullo Shop",
      description: "Pullo is a modern, responsive front-end UI for an online shoe store. I built it using Next.js and Tailwind CSS, focusing on clean design, product-focused layout, and smooth user experience. The project includes product grids, filters, dynamic product pages, and a shopping cart. It showcases my ability to turn e-commerce ideas into real, scalable front-end interfaces.",
      ghLink: "https://github.com/Yassafouad/Pullo",
      demoLink: "https://pullo-five.vercel.app/"
    },
    {
      imgPath: va,
      title: "Modern Villa Real Estate UI",
      description: "Created a sleek and responsive landing page for a modern villa, showcasing high-quality visuals, smooth scroll animations, and clean layout. Built using React and Tailwind CSS, fully optimized for all screen sizes.",
      ghLink: "https://github.com/Yassafouad/villa-page",
      demoLink: "https://villa-page.vercel.app/"
    },
    {
      imgPath: dacar,
      title: "Car Management Dashboard UI",
      description: "Designed a responsive car management dashboard UI with sections for vehicle tracking, driver management, and maintenance. Built using React and Tailwind for a clean, modern user experience across all devices.",
      demoLink: "https://car-rental-main-beta.vercel.app/",
      ghLink: "https://github.com/Yassafouad/car-rental-main",

    }
  ];

  const backendProjects = [
    {
      imgPath: ss,
      title: "ShopHub E-Commerce",
      description: "A comprehensive e-commerce platform built with React.js and modern web technologies. Features include product catalog, shopping cart, user authentication, secure payments, and responsive design. Offers a complete online shopping experience.",
      ghLink: "https://github.com/Yassafouad/ShopHub",
      demoLink: "https://shop-hub-gilt.vercel.app/"
    },
    {
      imgPath: tr,
      title: "Travel Booking System",
      description: "A comprehensive travel booking platform built with React.js and backend services. Features include flight search, booking management, user authentication, and payment processing. Integrated with travel APIs for real-time pricing and availability.",
      ghLink: "https://github.com/Yassafouad/travel-booking",
      demoLink: "https://travel-booking-tan.vercel.app/"
    },
    {
      imgPath: ga,
      title: "Memory Game",
      description: "An interactive memory card game built with React.js. Features include multiple difficulty levels, score tracking, timer functionality, and responsive design. Provides an engaging gaming experience with smooth animations and sound effects.",
      ghLink: "https://github.com/Yassafouad/memory-game",
      demoLink: "https://memory-game-nine-nu.vercel.app/#/"
    },
    {
      imgPath: da,
      title: "Admin Dashboard",
      description: "A comprehensive admin dashboard built with React.js and modern UI libraries. Features include data visualization, user management, analytics, and real-time monitoring. Designed for business administration with intuitive navigation and responsive design.",
      ghLink: "https://github.com/Yassafouad/Dashboard",
      demoLink: "https://dashboard-lake-alpha-60.vercel.app/dashboard"
    }
  ];

  const allProjects = [...frontendProjects, ...backendProjects];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "30px" }}>
          Here are some of my projects organized by technology stack.
        </p>
        
        <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          <Row className="justify-content-center mb-4">
            <Col md={8}>
              <Nav variant="pills" className="justify-content-center project-tabs">
                <Nav.Item>
                  <Nav.Link 
                    eventKey="all" 
                    className={activeTab === "all" ? "active-tab" : ""}
                  >
                    All Projects
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    eventKey="frontend" 
                    className={activeTab === "frontend" ? "active-tab" : ""}
                  >
                    Frontend Projects
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    eventKey="backend" 
                    className={activeTab === "backend" ? "active-tab" : ""}
                  >
                    Backend Projects
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>

          <Tab.Content>
            <Tab.Pane eventKey="all">
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                {allProjects.map((project, index) => (
                  <Col md={4} className="project-card" key={index}>
                    <ProjectCard
                      imgPath={project.imgPath}
                      isBlog={false}
                      title={project.title}
                      description={project.description}
                      ghLink={project.ghLink}
                      demoLink={project.demoLink}
                    />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="frontend">
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                {frontendProjects.map((project, index) => (
                  <Col md={4} className="project-card" key={index}>
                    <ProjectCard
                      imgPath={project.imgPath}
                      isBlog={false}
                      title={project.title}
                      description={project.description}
                      ghLink={project.ghLink}
                      demoLink={project.demoLink}
                    />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="backend">
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                {backendProjects.map((project, index) => (
                  <Col md={4} className="project-card" key={index}>
                    <ProjectCard
                      imgPath={project.imgPath}
                      isBlog={false}
                      title={project.title}
                      description={project.description}
                      ghLink={project.ghLink}
                      demoLink={project.demoLink}
                    />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </Container>
  );
}

export default Projects;
