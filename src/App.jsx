import "./App.css";
import { useEffect } from "react";
import Header from "./header.jsx";
import Home from "./home.jsx";
import Skill from "./skill.jsx";
import About from "./about.jsx";
import Project from "./project.jsx";
import Footer from "./footer.jsx";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // reset animation by forcing reflow
            entry.target.classList.remove("animate");
            void entry.target.offsetWidth; // 🔥 force reflow
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.35,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="main">
      <Header />
      <Home />
      <About />
      <Skill />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
