import "./App.css";
import "./project.css";
import HoverVideo from "./hoverVideo.jsx";

export default function Project() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../public/myresume.pdf"; // file must be in public folder
    link.download = "Debabrata_Dey_Resume.pdf"; // filename for download
    link.click();
  };

  return (
    <section className="project" id="project">
      <h3>My <span>Projects</span></h3>

      <div>
        <div className="detail">
          <div>
            <h2>Weather Forecast App</h2>
            <i class="fa-solid fa-cloud-sun-rain"></i>
          </div>
          <p>
            Weather Forecast App A modern web app that lets users search any
            city or country and view detailed forecasts. Powered by OpenMeteo
            for weather data and GeoDB Cities API for smart location
            suggestions, it provides a 7‑day outlook plus hour‑by‑hour details
            like temperature, humidity, wind speed, and direction. Includes a
            clean, modern UI/UX and a sign‑in feature for a personalized
            experience.
          </p>
        </div>
        <HoverVideo src="../public/weather.mp4" />
      </div>

      <div>
        <div className="detail">
          <div>
            <h2>Simon Say Game</h2>
            <i class="fa-solid fa-chess"></i>
          </div>
          <p>
            Simon Say Game A memory game built with vanilla JavaScript with dark
            and light mode switch. you can choose the difficulty level, enter
            you name and start the game. there is also a help button to know the
            rules and watch a tutorial video. I have some fetures to add in the
            future.
          </p>
        </div>
        <HoverVideo src="../public/simon.mp4" />
      </div>

      <div>
        <div className="detail">
          <div>
            <h2>Random Color Generator</h2>
            <i class="fa-solid fa-paintbrush"></i>
          </div>
          <p>
            Color Generator A color palette generator built with vanilla
            JavaScript. You can generate a random color palette or create a
            custom one by adjusting the hue, saturation, and lightness values. I
            have some fetures to add in the future.
          </p>
        </div>
        <HoverVideo src="../public/color.mp4" />
      </div>

      <div>
        <div className="detail">
          <div>
            <h2>Quiz App</h2>
            <i class="fa-solid fa-file-circle-question"></i>
          </div>
          <p>
            Quiz App A quiz application built with vanilla JavaScript. You can
            create a quiz with multiple-choice questions and track your score. I
            have some fetures to add in the future.
          </p>
        </div>
        <HoverVideo src="../public/quiz.mp4" />
      </div>

      <div>
        <div className="detail">
          <div>
            <h2>Kanban Board</h2>
            <i class="fa-solid fa-list-check"></i>
          </div>
          <p>
            Todo App A todo application built with vanilla JavaScript. You can
            store a task in 4 different sectoins, backlog, doing, review & done.
            I have some fetures to add in the future.
          </p>
        </div>
        <HoverVideo src="../public/todo.mp4" />
      </div>

      <div>
        <div className="detail">
          <div>
            <h2>Expense Tracker</h2>
            <i class="fa-solid fa-wallet"></i>
          </div>
          <p>
            Expense Tracker A fully functional expense tracker to track your
            daily expenses and visualize your spending patterns. I used chart.js
            for visual representation. of your daily and monthly spending. It's
            in developing stage.
          </p>
        </div>
        <HoverVideo src="../public/expense.mp4" />
      </div>

      <button className="cv" onClick={handleDownload}><span>Download CV</span></button>
    </section>
  );
}
