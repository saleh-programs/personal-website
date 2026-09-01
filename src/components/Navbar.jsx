// import {Link, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react';
import styles from '../../styles/components/Navbar.module.css'
function Navbar({refs}){
  const [homeRef, educationRef, projectsRef, experienceRef, skillsRef, scrollableRef] = refs;
  // const location = useLocation();
  // useEffect(()=>{
  //   document.getElementById(location.pathname).classList.add(styles.highlight);
  //   return ()=>{
  //     document.querySelector(`.${styles.highlight}`).classList.remove(styles.highlight);
  //   }
  // },[location.pathname])

const [activeId, setActiveId] = useState(null);

function updateActiveSection() {
  if (!scrollableRef.current) return;
  const sections = [homeRef, educationRef, projectsRef, experienceRef, skillsRef]

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i].current;
    if (!section) continue;

    const sectionTop =
      (section.getBoundingClientRect().top) -
      scrollableRef.current.getBoundingClientRect().top +
      scrollableRef.current.scrollTop;

    if (scrollableRef.current.scrollTop >= sectionTop - scrollableRef.current.clientHeight * 0.25) {
      setActiveId(section.id);
      break;
    }
  }
}

useEffect(() => {
  const elem = scrollableRef.current;
  if (!elem) return;

  elem.addEventListener("scroll", updateActiveSection);

  updateActiveSection();

  return () => {
    elem.removeEventListener("scroll", updateActiveSection);
  };
}, []);


  function handleClick(ref){
    if (!ref.current || ! scrollableRef.current) return;

    const targetRect = ref.current.getBoundingClientRect();
    const scrollRect = scrollableRef.current.getBoundingClientRect();

    const y = targetRect.top - scrollRect.top + scrollableRef.current.scrollTop - 80;

    scrollableRef.current.scrollTo({
      top: y,
      behavior: "smooth"
    })
  }

  return(
      <div className={styles.navbar}>
        <button onClick={()=>handleClick(homeRef)} className={`${styles.link} ${activeId === "home" ? styles.highlight : ""}`} style={{flexBasis:'0%'}}>Home</button>
        <button onClick={()=>handleClick(educationRef)} className={`${styles.link} ${activeId === "education" ? styles.highlight : ""}`}>Education</button>
        <button onClick={()=>handleClick(projectsRef)} className={`${styles.link} ${activeId === "projects" ? styles.highlight : ""}`}>Projects</button>
        <button onClick={()=>handleClick(experienceRef)} className={`${styles.link} ${activeId === "experience" ? styles.highlight : ""}`}>Experience</button>
        <button onClick={()=>handleClick(skillsRef)} className={`${styles.link} ${activeId === "skills" ? styles.highlight : ""}`}>Skills</button>
      </div>
  );
}

export default Navbar;