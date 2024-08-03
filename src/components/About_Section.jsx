import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const About_Section = ({ id }) => {
    const [activeTab, setActiveTab] = useState()
    useEffect(() => {
        setActiveTab(id)
    }, [id]);
    
    const scrollToSection = (sectionId) => {
        // setActiveTab(sectionId);
        console.log('sectionId', sectionId)
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
    
  return (
    <ul className="nav-tabs">
      <li className={activeTab === "story" ? "active" : ""}>
        <Link to="#" onClick={() => scrollToSection("story")}>Our Story</Link>
      </li>
      <li className={activeTab === "vision" ? "active" : ""}>
        <Link to="#" onClick={() => scrollToSection("vision")}>Vision</Link>
      </li>
      <li className={activeTab === "mission" ? "active" : ""}>
        <Link to="#" onClick={() => scrollToSection("mission")}>Mission</Link>
      </li>
      <li className={activeTab === "philosophy" ? "active" : ""}>
        <Link to="#" onClick={() => scrollToSection("philosophy")}>Philosophy Of Change</Link>
      </li>
      <li className={activeTab === "lifecycle" ? "active" : ""}>
        <Link to="#" onClick={() => scrollToSection("lifecycle")}>The Lifecycle Approach</Link>
      </li>
      <li className={activeTab === "howWeWork" ? "active" : ""}>
        <Link to="#" onClick={() => scrollToSection("howWeWork")}>How We Work</Link>
      </li>
      <li className={activeTab === "whyTrustUs" ? "active" : ""}>
        <Link to="#" onClick={() => scrollToSection("whyTrustUs")}>Why Trust Us</Link>
      </li>
    </ul>
  );
};

export default About_Section;
