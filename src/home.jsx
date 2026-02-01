import "./home.css"
import "./App.css"
import TypingEffect from "./typing.jsx";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h2>Hello, It's Me</h2>
        <h1>Debabrata Dey</h1>
        <h3>
          I'm a{" "}
          <span className="text">
            <TypingEffect />
          </span>
        </h3>
        <p>I'm currently pursuing B.Tech in Computer Science.</p>
        <div className="home-sci">
          <a href="https://github.com/debabrata230106" style={{ "--i": 7 }}>
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/debabrata-dey-230106" style={{ "--i": 8 }}>
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://wa.me/919735123202?text=Hello%20there!" style={{ "--i": 9 }}>
            <i className="fa-brands fa-square-whatsapp"></i>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ddey230106@gmail.com" style={{ "--i": 9 }}>
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <a href="#about" className="btn-box">
          More About Me
        </a>
      </div>
        
      <img src="/myphoto.png" alt="Myphoto" className="image" />
    </section>
  );
}

export default Home;
