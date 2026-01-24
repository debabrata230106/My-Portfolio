import "./App.css";
import "./footer.css";
import { useState } from "react";

export default function Footer() {
  const [icon, seIcon] = useState([
    "fa-solid fa-copy",
    "fa-solid fa-copy",
    "fa-solid fa-copy",
  ]);
  const copyText = [
    919735123512,
    "ddey230106@gmail.com",
    "https://github.com/debabrata230106",
  ];

  const handleClick = (idx) => {
    const newIcon = [...icon];
    newIcon[idx] = "fa-solid fa-check-double";
    seIcon(newIcon);
    navigator.clipboard.writeText(copyText[idx]);
    setTimeout(() => {
      const resetIcon = [...newIcon];
      resetIcon[idx] = "fa-solid fa-copy";
      seIcon(resetIcon);
    }, 1000);
  };

  return (
    <footer>
      <div className="footer" id="contact">
        <p>
          If you have some work for me, feel free to contact.
          <span> I am waiting for your call.</span>
        </p>
        <div className="copy-info">
          <div>
            <i className="fa-solid fa-at"></i>
            <p> (91+) 9735123512</p>
            <i className={icon[0]} onClick={() => handleClick(0)}></i>
          </div>
          <div>
            <i className="fa-solid fa-phone"></i>
            <p> ddey230106@gmail.com</p>
            <i className={icon[1]} onClick={() => handleClick(1)}></i>
          </div>
          <div>
            <i className="fa-solid fa-link"></i>
            <p> https://github.com/debabrata230106</p>
            <i className={icon[2]} onClick={() => handleClick(2)}></i>
          </div>
        </div>
      </div>
      <p className="copyright">© 2026 Debabrata. All rights reserved.</p>
    </footer>
  );
}
