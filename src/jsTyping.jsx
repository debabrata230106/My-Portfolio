import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function JsTypingEffect() {
  const el = useRef(null); // reference to the span element
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(el.current, {
      strings: ["ReactJS", "VanillaJS"], // array of strings
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to prevent memory leaks
      typedInstance.current.destroy();
    };
  }, []);

  return <span ref={el} className="text"></span>;
};


