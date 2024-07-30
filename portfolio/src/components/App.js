import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection"; // Import the new ProjectsSection component
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection /> {/* Include the ProjectsSection */}
      <Footer />
    </div>
  );
}

export default App;
