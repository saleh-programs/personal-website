import '../styles/index.css'
import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Education from './pages/Education.jsx';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Animation from './assets/Animation.jsx';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [animationEnded, setAnimationEnded] = useState(false);
  const homeRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollableRef = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => {
      setAnimationEnded(true);
    }, 4000)

    return () => {
      clearTimeout(id);
    }
  }, [])

useEffect(() => {
  const container = document.querySelector(".page-container");
  const layer = document.querySelector(".falling-hex-layer");

  const initialSpeed = 300; // px/sec
  const acceleration = 635; // px/sec²

  const dropRandomHex = () => {
    const available = Array.from(
      document.querySelectorAll(".hex:not(.fallen)")
    );

    if (!available.length) return;

    const original =
      available[Math.floor(Math.random() * available.length)];

    const rect = original.getBoundingClientRect();

    const clone = original.cloneNode(true);
    const spinZ = (Math.random() * 120) - 60;   // deg/sec
    const spinX = (Math.random() * 180) - 90;   // deg/sec
    const spinY = (Math.random() * 180) - 90;   // deg/sec

    clone.classList.add("falling-hex");
    clone.style.left = `${rect.left}px`;
    clone.style.top = `${rect.top}px`;

    layer.appendChild(clone);

    // Remove the original visually without disturbing the honeycomb layout
    original.classList.add("fallen");
    original.style.visibility = "hidden";

    const startingScroll = container.scrollTop;
    const pageStartY = rect.top + startingScroll;

    const pageBottom = container.scrollHeight;
    const startTime = performance.now();

    const fall = (now) => {
      const seconds = (now - startTime) / 1000;

      const distance =
        initialSpeed * seconds +
        0.5 * acceleration * seconds * seconds;

      const screenY =
        pageStartY +
        distance -
        container.scrollTop;

      const translateY = pageStartY + distance - container.scrollTop - rect.top;

      const rotZ = spinZ * seconds;
      const rotX = spinX * seconds;
      const rotY = spinY * seconds;

      clone.style.transform = `
        translateY(${translateY}px)
        rotateX(${rotX}deg)
        rotateY(${rotY}deg)
        rotateZ(${rotZ}deg)
      `;
      // Entire hexagon has passed the real bottom of the page
      if (pageStartY + distance > pageBottom + rect.height) {
        clone.remove();
        return;
      }

      requestAnimationFrame(fall);
    };

    requestAnimationFrame(fall);
  };

  const interval = setInterval(dropRandomHex, 1000);

  return () => clearInterval(interval);
}, []);

  function endAnimation(){
    const shakeElem = document.querySelector(".shakeAnimation");
    const draggedElem = document.querySelector(".dragIn");
    if (shakeElem && draggedElem){
      shakeElem.style.animation = "none";
      draggedElem.style.animation = "none";
      draggedElem.style.transform = "none";
    }
  }

  return (
    <div className='shakeAnimation'>
      <img src="/bench.png" alt="willow" />
      {!animationEnded && 
      <button className='skipAnimation'
      onClick={endAnimation}>
        Skip Animation
        </button>}

      <div className={`animationContainer dragIn`}>
        <Animation path="/willowIntro?16" type="loop" loopStart={11} speed={6}/> 
        <div ref={scrollableRef} className='page-container'>
          <div className="falling-hex-layer" />

          <div className="hexagon-background">
            {Array.from({ length: Math.ceil(window.innerWidth / 140) }, (_, col) => (
              <div
                className={`hex-column ${col % 2 ? "offset" : ""}`}
                key={col}
              >
                {Array.from({ length: Math.ceil(window.innerHeight / 150) }, (_, row) => (
                  <div className="hex" key={row} />
                ))}
              </div>
            ))}
          </div>
          <Navbar refs={[homeRef, educationRef, projectsRef, experienceRef, scrollableRef]}/>
          <div className='routes'>
            <Home ref={homeRef}/>
            <Education ref={educationRef}/>
            <Projects ref={projectsRef}/>
            <Experience ref={experienceRef}/>
              {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
              </Routes>  */}
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
