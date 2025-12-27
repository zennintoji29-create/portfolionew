import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="WEATHER APP"
              description="A responsive Weather Dashboard built with React.js that provides real-time weather updates including temperature, humidity, and conditions for any city."
              ghLink="https://github.com/zennintoji29-create/weather.git"
              demoLink="https://gthubsearch-4e1k.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gitsearch}
              isBlog={false}
              title="GIT HUB PROFILE SEARCH"
              description="A responsive GitHub Profile Explorer built with React.js, featuring real-time username search and dynamic rendering of GitHub user data via the GitHub API."
              ghLink="https://github.com/zennintoji29-create/gthubsearch.git"
              demoLink="https://gthubsearch-hlzb.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ish}
              isBlog={false}
              title="HEALTH CHAT AI"
              description="An AI-powered health assistant offering preventive care, disease awareness, and wellness guidance in local languages."
              ghLink="https://github.com/zennintoji29-create"
              demoLink="https://swasthyahub.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agrosense}
              isBlog={false}
              title="AGROSENSE"
              description="AgroSense is a smart IoT-based irrigation system that monitors soil moisture in real time and provides intelligent irrigation recommendations to optimize water usage for sustainable farming"
              ghLink="https://github.com/zennintoji29-create/agrosense-smart-irrigation.git"
              demoLink="https://agrosense29.vercel.app/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TOdolist}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="TaskPlanner is a productivity-focused task management app that helps users organize daily schedules, manage tasks by date, and plan their day efficiently through an intuitive calendar-based interface."
              ghLink="https://github.com/zennintoji29-create/daily-planner-pro.git"
              demoLink="https://daily-planner-pro.vercel.app/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
