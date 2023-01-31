import "./intro.scss";
import {init} from "ityped";
import {useEffect, useRef} from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    //console.log(textRef);
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      typeSpeed: 150,
      backSpeed: 60,
      strings: ["Designer", "Developer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="src/assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Sujan Singh</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
          <a href="#contact">
            <img src="src/assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
