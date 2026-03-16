import '../styles/index.css'
import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Education from './pages/Education.jsx';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Animation from './assets/Animation.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [animationEnded, setAnimationEnded] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setAnimationEnded(true);
    }, 4000)

    return () => {
      clearTimeout(id);
    }
  }, [])



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
        <div className='page-container'>
          <Navbar/>
          <div className='routes'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
              </Routes> 
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
