import React from "react";
import HeroSection from "../Components/HomeComponents/HeroSection";
import AboutMe from "../Components/HomeComponents/AboutMe";
import Skills from "../Components/HomeComponents/Skills";
import Education from "../Components/HomeComponents/Education";
import Projects from "../Components/HomeComponents/Projects";
import Contact from "../Components/HomeComponents/Contact";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
