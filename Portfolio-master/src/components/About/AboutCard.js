import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Hello everyone, I am <span className="purple">Subhansu Satyapragnya</span>{" "}
        from <span className="purple">Bhubaneswar, Odisha, India</span>. I am
        currently a <span className="purple">second-year B.Tech CSE student</span>{" "}
        with interests in <span className="purple">web development</span>,{" "}
        <span className="purple">UI/UX design</span>,{" "}
        <span className="purple">AI</span>,{" "}
        <span className="purple">cloud computing</span>, and both{" "}
        <span className="purple">frontend</span> and{" "}
        <span className="purple">backend development</span>.
        <br />
        <br />
        Outside of coding, I enjoy building projects, preparing for hackathons,
        exploring new technologies, playing outdoor games, learning new things,
        and attending tech events. I also have working knowledge of{" "}
        <span className="purple">MongoDB and databases</span>.
      </p>

      <p style={{ color: "rgb(155 126 172)", marginTop: "15px" }}>
        "Learning, building, and growing—one project at a time."
      </p>

      <footer className="blockquote-footer">Subhansu</footer>
    </blockquote>
  </Card.Body>
</Card>

  );
}

export default AboutCard;
