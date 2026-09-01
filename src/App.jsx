import '../styles/index.css'
import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Education from './pages/Education.jsx';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Skills from './pages/Skills.jsx';
import Animation from './assets/Animation.jsx';
import { useEffect, useRef, useState } from 'react';

import {preload} from "../src/assets/preloadedImages.js"

import rock1 from "../src/assets/images/rock1.png"
import rock2 from "../src/assets/images/rock2.png"
import rock3 from "../src/assets/images/rock3.png"
import stick from "../src/assets/images/stick.png"
const fallingItems = [rock1, rock2, rock3, stick];


function App() {
  const [animationEnded, setAnimationEnded] = useState(false);
  const [animationFullyEnded, setAnimationFullyEnded] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const homeRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null)

  const scrollableRef = useRef(null);

  const [debrisItems, setDebrisItems] = useState([]);
  const debrisItemsRef = useRef([]);
  const addDebrisIntervalRef = useRef(null);



  useEffect(() => {
    loadAssets();
    const id = setTimeout(() => {
      setAnimationEnded(true);
    }, 7000)

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

    return () => {
      clearTimeout(id);
      clearInterval(interval)
    };
  }, []);

  function loadAssets(){
    const [_, loadingFrames] = preload("/willowIntro?16");
    loadingFrames.then(()=>{
      setAssetsLoaded(true);
      startAnimation();
    });
  }

  function startAnimation(){
    const bgElem = document.querySelector(".background");
    const contentElem = document.querySelector(".animationContainer");
    bgElem.classList.add("shake");
    contentElem.classList.add("dragIn");


    contentElem.addEventListener("animationstart", (e) => {
      if (e.target !== contentElem) return;
      spawnInitialDebris();
      updateDebris();
      addDebrisIntervalRef.current = setInterval(addDebris, 50);
    });

    contentElem.addEventListener("animationend", (e) => {
      if (e.target !== contentElem) return;
      setAnimationFullyEnded(true);
      clearInterval(addDebrisIntervalRef.current);
    })
  }

  function spawnInitialDebris(){
    const newIds = [];
    for (let i = 0; i < 10; i++){
      const id = crypto.randomUUID();
      const size = .15 + (Math.random() * .6);
      const newDebris = {
        id,
        index: Math.floor(Math.random() * 4),
        x: -100 + (Math.floor(Math.random() * window.innerWidth)),
        y: -600 + Math.floor(Math.random() * 200),
        size,
        degrees: Math.floor(Math.random() * 365),
        rotationDir: -1 + Math.floor(Math.random() * 2) * 2,
        rotationSpeed:  400 * (.75 + (Math.random() * .5)),
        speed: 1200 * (.75 + (Math.random() * .5)) * (.1 + size*2)
      } 
      newIds.push(id);
      debrisItemsRef.current[newDebris.id] = newDebris;
    }
    setDebrisItems(newIds);
  }

  function addDebris(){
    const id = crypto.randomUUID();
    const size = .15 + (Math.random() * .6);

    const newDebris = {
      id,
      index: Math.floor(Math.random() * 4),
      x: -100 + (Math.floor(Math.random() * window.innerWidth)),
      y: -300 + Math.floor(Math.random() * 200),
      size,
      degrees: Math.floor(Math.random() * 365),
      rotationDir: -1 + Math.floor(Math.random() * 2) * 2,
      rotationSpeed: 400 * (.75 + (Math.random() * .5)),
      speed: 1200 * (.75 + (Math.random() * .5)) * (.1 + size*2)
    } 
    setDebrisItems(prev => [...prev, id]);
    debrisItemsRef.current[id] = newDebris;
  }



  function updateDebris(){

    let lastTime = null;
    let dt = null;
    function updateDebrisRaf(time){
      if (Object.keys(debrisItemsRef.current).length === 0) return;
      if (lastTime === null){
        dt = 0;
      }else{
        dt = (time - lastTime) / 1000
      }
      lastTime = time;
      const allDebris = document.querySelectorAll(".debris");
      for (let elem of allDebris){
        const id = elem.dataset.id;
        if (!debrisItemsRef.current[id]) continue;

        const {x, y, size, speed, degrees, rotationDir, rotationSpeed} = debrisItemsRef.current[id];
        const newY = y + speed * dt;
        const newDegrees = degrees + (rotationSpeed * rotationDir * dt);
        debrisItemsRef.current[id].y = newY;
        debrisItemsRef.current[id].degrees = newDegrees;

        if (newY > window.innerHeight){
          setDebrisItems(prev => prev.filter(uuid => uuid !== id));
          delete debrisItemsRef.current[id];
        }

        elem.style.transform = `translate(${x}px,${newY}px) scale(${size}) rotate(${newDegrees}deg)`
      }
      requestAnimationFrame(updateDebrisRaf);
    }
    requestAnimationFrame(updateDebrisRaf);
  }


  function endAnimation(){
    setAnimationFullyEnded(true);
    const bgElem = document.querySelector(".background");
    const contentElem = document.querySelector(".animationContainer");
    setDebrisItems([]);
    debrisItemsRef.current = {};
    clearInterval(addDebrisIntervalRef.current);
    bgElem.style.animation = "none";
    contentElem.style.animation = "none";
    contentElem.style.transform = "none";
  }

  return (
    <div className='background'>
      {debrisItems.map(id => (
        <section className="debris" key={id} data-id={id}>
          <img src={fallingItems[debrisItemsRef.current[id].index]} alt="" />
        </section>
      ))}
      {!animationEnded && 
      <button className='skipAnimation'
      onClick={endAnimation}>
        Skip Animation
        </button>}
        
        <section className='staticBench'>
          <img src="/bench.png" alt="" />
        </section>
        

      <div className={`animationContainer`}>
        {!animationFullyEnded && (assetsLoaded 
        ? 
          <Animation key={"animation"} path="/willowIntro?16" type="loop" loopStart={11} speed={4} startSpeeding={{frame: 5, speed: 12}}/> 
        :
          <Animation key={"loading"} path="/willowIntro?3" type="loop" speed={2}/> 
        )}
        <div ref={scrollableRef} className='page-container'>
          <div className="falling-hex-layer" />
          <div className="hexagon-background">
            {Array.from({ length: Math.ceil(window.innerWidth / 200) }, (_, col) => (
              <div
                className={`hex-column ${col % 2 ? "offset" : ""}`}
                key={col}
              >
                {Array.from({ length: Math.ceil(window.innerHeight / 300) }, (_, row) => (
                  <div className="hex" key={row} />
                ))}
              </div>
            ))}
          </div>
          <Navbar refs={[homeRef, educationRef, projectsRef, experienceRef, skillsRef, scrollableRef]}/>
          <div className='routes'>
            <Home ref={homeRef}/>
            <Education ref={educationRef}/>
            <Projects ref={projectsRef}/>
            <Experience ref={experienceRef}/>
            <Skills ref={skillsRef} scrollableRef={scrollableRef}/>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
