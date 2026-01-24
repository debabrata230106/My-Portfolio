import "./header.css";
import "./App.css";
import { useState, useEffect } from "react";

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../public/myresume.pdf"; // file must be in public folder
    link.download = "Debabrata_Dey_Resume.pdf"; // filename for download
    link.click();
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    // cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Portfolio
        </a>

        <button className="cvbtn" onClick={handleDownload}>
          CV <i className="fa-solid fa-download"></i>
        </button>

        <i
          id="hamburger"
          style={{
            display: width < 950 ? "block" : "none",
            right: toggle ? "130px" : "0",
          }}
          className={toggle ? "fa-solid fa-xmark" : "fas fa-bars"}
          onClick={() => {
            setToggle(!toggle);
          }}
        ></i>

        <nav
          className="navbar"
          style={{ display: width < 950 ? "none" : "block" }}
        >
          <a href="#home" style={{ "--i": 1 }} className="active">
            Home
          </a>
          <a href="#about" style={{ "--i": 2 }}>
            About
          </a>
          <a href="#skill" style={{ "--i": 3 }}>
            Skill
          </a>
          <a href="#project" style={{ "--i": 4 }}>
            Project
          </a>
          <a href="#contact" style={{ "--i": 5 }}>
            Contact
          </a>
        </nav>
      </header>
      <nav
        className="burger"
        style={{
          display: width < 950 ? "flex" : "none",
          right: toggle ? "0px" : "-180px",
        }}
      >
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#skill">Skill</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </nav>
    </>
  );
}

export default Header;
