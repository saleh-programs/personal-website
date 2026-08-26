import {useState,useRef,useEffect} from 'react'
import styles from '../../styles/pages/Experience.module.css'
import Bar from '../components/Bar.jsx'
import lagelati from '../assets/images/lagelati.jpg'
import campImage1  from "../assets/images/leadInstructor1.png"
import campImage2  from "../assets/images/leadInstructor2.png"

const languageSkills = ["C++", "C", "JavaScript", "Python", "SQL", "HTML", "CSS",
  "Java", "Swift", "Bash"
];
const databaseSkills = ["MySQL", "PostgreSQL", "SQLite"];
const librariesSkills = ["Express", "FastAPI", "Flask", "React", "Next.js", 
  "MediaSoup", "Keras", "TensorFlow", "Matplotlib", "Scikit-Learn", "Pygame"
];
const cloudSkills = ["AWS S3", "AWS EC2", "AWS RDS", "AWS Cognito", "AWS Amplify", 
  "AWS Lambda", "DigitalOcean Droplets", "Render", "Netlify", "Vercel", "Cloudflare",
  "Auth0" 
];
const toolSkills = ["Git", "GitHub", "Docker", "Linux", "Node.js", "Nginx", "WebRTC",
  "WebSockets", "WebAssembly"
];
const conceptSkills = ["Auth flows", "Role-based systems", "Supervised AI data generation", 
  "AI chatbots", "Machine learning", "Neural networks (ANNs)", 
  "Decision trees", "Encryption (OpenSSL)", "Compression (zstd)", 
  "Multithreading", "Extending legacy systems"
];


function Experience({ref, scrollableRef}){
  const [searchedSkills, setSearchedSkills] = useState([])
  const [skillSearch, setSkillSearch] = useState("")

  const languageSkillsRef = useRef(null);
  const databaseSkillsRef = useRef(null);
  const librariesSkillsRef = useRef(null);
  const cloudSkillsRef = useRef(null);
  const toolSkillsRef = useRef(null);
  const conceptSkillsRef = useRef(null);


  useEffect(() => {
    const elem = scrollableRef.current;
    if (!elem) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add("skillEnter");
          entry.target.classList.remove("skillLeave");
        }else{
          entry.target.classList.remove("skillEnter");
          entry.target.classList.add("skillLeave");
        }
      });
    }, {root: elem});

    observer.observe(languageSkillsRef.current);
    observer.observe(databaseSkillsRef.current);
    observer.observe(librariesSkillsRef.current);
    observer.observe(cloudSkillsRef.current);
    observer.observe(toolSkillsRef.current);
    observer.observe(conceptSkillsRef.current);

    return () => {
      observer.disconnect()
    }
  }, [])

  function locateSkills(e){
    setSkillSearch(e.target.value);

    const allSkills = Array.from(document.querySelectorAll("[data-skill]"));
    for (const elem of allSkills){
      elem.style.backgroundColor = ""
    }

    if (e.target.value.length < 1){
      setSearchedSkills([]);
      return
    }

    
    const matchingSkills = allSkills
    .filter(elem => elem?.dataset?.skill?.toLowerCase()?.includes(e.target.value.toLowerCase()));

    setSearchedSkills(matchingSkills.map(elem => elem?.dataset?.skill));

    // Highlight found skills
    for (const elem of matchingSkills){
      elem.style.backgroundColor = "yellow";
    }
  }

  function scrollToSkill(e){
    const selectedSkill = Array.from(document.querySelectorAll(`[data-skill="${e.target.textContent}"]`))?.[0];
    if (!selectedSkill) return;
    selectedSkill.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }


  return(
    <div className={`${styles.experiencepage} section`} ref={ref} id="experience" style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
    <div className={styles.intro}>
      <div className={styles.title}>
        Experience 
      </div>
      <div className={styles['hz-separator']}>
      </div> 
      <div className={styles.info}>
        Find information on employment history and job experience, excluding any project-related work. 
        <br/>
      </div>
    </div>

    <div className={styles.horizScrollable}>
      <section className={`${styles.job} ${styles.startJobAnimation}`}>
        <div className={styles.jobLeft}>
          <img src={campImage1} />
          <section className={styles.jobInfo}>
            <h3>Lead Coding Instructor</h3>
            <h4> @ C2 Pipeline Engineering Camp</h4>
            <section>06/2025 - 09/2025</section>
          </section>
        </div>
        <div className={styles.jobRight}>
          <header>
            <h3>Lead Coding Instructor</h3>
            <h4> @ C2 Pipeline Engineering Camp</h4>
            <section>06/2025 - 09/2025</section>  
          </header>
          <p>
            Served as the lead coding instructor at Wayne State University's Summer Engineering Camp, hosted by the C2 Pipeline.
            <br />
            My main responsibility was to teach the fundamentals of programming to students anywhere from grades 3-12.
            <br /><br />
            Other responsibilities consisted of:
          </p>
          <ul>
            <li>Creating lesson plans surrounding basic programming concepts.</li>
            <li>Building demo applications in Swift to serve as references for students.</li>
            <li>Providing hands on support to students.</li>
            <li>Addressing unique challenges and promoting skill development.</li>
            <li>Coordinating with staff and faculty to improve the student experience.</li>
          </ul>
        </div>
      </section>
      {/* <section className={styles.job}>
        <img src={campImage2} />
        <section className={styles.jobInfo}>
          <h3>Camp Coordinator</h3>
          <h4> @ C2 Pipeline Engineering Camp</h4>
          <section>06/2025 - 09/2025</section>
        </section>
      </section>
      <section className={styles.job}>
        <img src={lagelati} />
        <section className={styles.jobInfo}>
          <h3>Assistant Manager</h3>
          <h4> @ La Gelati</h4>
          <section>06/2025 - 09/2025</section>
        </section>
      </section> */}
    </div>

    <div >
      <Bar name="Lead Coding Instructor" subname={"C2 Pipeline Engineering Camp"} contentID='leadInstructor' date="06/2025-09/2025"/>
      <Bar name="Assistant Manager" subname={"La Gelati Ice Cream"} contentID='laGelati' date="09/2021-10/2022"/>
    </div>
    <div style={{width: "100%"}} >
      <div className={styles.title}>
        Skills
      </div>
      <hr className={styles['hz-separator']}>
      </hr>
    </div>
    <nav className={styles.skillsNavBar}>
      <section>
        <span>Find skills </span>
        <input 
        type="text" 
        placeholder='Ex) Node.js'
        value={skillSearch}
        onChange={locateSkills}
        />
      </section>
      {searchedSkills.length !== 0 && 
        <section>
          <ul>
            {searchedSkills.map(skill => (
              <li 
              key={skill}
              onClick={scrollToSkill}>
                {skill}</li>
              ))}
          </ul>
        </section>
      }
    </nav>

    <div className={styles.allSkills} style={{display: "flex" , flexDirection: 'column', width: "100%"}}>

      <section ref={languageSkillsRef} style={{width: "100%", border: "1px solid"}}>
        <h3>Languages</h3>
        <ul style={{display: "flex", listStyle: "none", gap: "5px", flexWrap: "wrap"}}>
          {languageSkills.map((skill, i) => (
            <li className={styles.skill} style={{backgroundColor: "rgba(96, 196, 57, 0.23)", padding: "15px", animationDelay: `${i * .02}s`}} key={skill} data-skill={skill}>{skill}</li>
          ))}
        </ul>
      </section>
      <section ref={databaseSkillsRef} style={{width: "100%", border: "1px solid"}}>
        <h3>Databases</h3>
        <ul style={{display: "flex", listStyle: "none", gap: "5px", flexWrap: "wrap"}}>
          {databaseSkills.map((skill,i) => (
            <li style={{backgroundColor: "rgba(96, 196, 57, 0.23)", padding: "15px", animationDelay: `${i * .04}s`}} key={skill} data-skill={skill}>{skill}</li>
          ))}
        </ul>
      </section>
      <section ref={librariesSkillsRef} style={{width: "100%", border: "1px solid"}}>
        <h3>Frameworks & Libraries</h3>
        <ul style={{display: "flex", listStyle: "none", gap: "5px", flexWrap: "wrap"}}>
          {librariesSkills.map((skill,i) => (
            <li style={{backgroundColor: "rgba(96, 196, 57, 0.23)", padding: "15px",  animationDelay: `${i * .04}s`}} key={skill} data-skill={skill}>{skill}</li>
          ))}
        </ul>
      </section>
      <section ref={cloudSkillsRef} style={{width: "100%", border: "1px solid"}}>
        <h3>Major Cloud Services</h3>
        <ul style={{display: "flex", listStyle: "none", gap: "5px", flexWrap: "wrap"}}>
          {cloudSkills.map((skill,i) => (
            <li style={{backgroundColor: "rgba(96, 196, 57, 0.23)", padding: "15px", animationDelay: `${i * .04}s`}} key={skill} data-skill={skill}>{skill}</li>
          ))}
        </ul>
      </section>
      <section ref={toolSkillsRef} style={{width: "100%", border: "1px solid"}}>
        <h3>Tools</h3>
        <ul style={{display: "flex", listStyle: "none", gap: "5px", flexWrap: "wrap"}}>
          {toolSkills.map((skill,i) => (
            <li style={{backgroundColor: "rgba(96, 196, 57, 0.23)", padding: "15px", animationDelay: `${i * .04}s`}} key={skill} data-skill={skill}>{skill}</li>
          ))}
        </ul>
      </section>
      <section ref={conceptSkillsRef} style={{width: "100%", border: "1px solid"}}>
        <h3>Concepts</h3>
        <ul style={{display: "flex", listStyle: "none", gap: "5px", flexWrap: "wrap"}}>
          {conceptSkills.map((skill,i) => (
            <li style={{backgroundColor: "rgba(96, 196, 57, 0.23)", padding: "15px", animationDelay: `${i * .04}s`}} key={skill} data-skill={skill}>{skill}</li>
          ))}
        </ul>
      </section>
      
    </div>

  </div>
  );
}

export default Experience;