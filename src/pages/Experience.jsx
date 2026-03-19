import {useState,useRef,useEffect} from 'react'
import styles from '../../styles/pages/Experience.module.css'
import Bar from '../components/Bar.jsx'

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


function Experience(){
  const [searchedSkills, setSearchedSkills] = useState([])
  const [skillSearch, setSkillSearch] = useState("")

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
    console.log("hi")
    selectedSkill.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
  return(
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
    <div className={styles.intro}>
      <div className={styles.title}>
        Experience and Skills
      </div>
      <div className={styles['hz-separator']}>
      </div> 
      <div className={styles.info}>
        Find information on employment history and job experience, excluding any project-related work. 
        <br/>
        Also, see skills showcasing my capabilities.<br/><br/>
        Select an option to learn more!
      </div>
    </div>
    <div >
      <div className={styles.title}>
        Experience
      </div>

      <hr className={styles['hz-separator']}>
      </hr>
      <Bar name="C2 Pipeline Engineering Camp" subname={"Lead Coding Instructor"} contentID='leadInstructor' date="06/2025-09/2025"/>
      <Bar name="La Gelati Ice Cream" subname={"Assistant Manager"} contentID='laGelati' date="09/2021-10/2022"/>
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
    <div className={styles.skillsGrid} >
      <div className={styles.skillsGridItem}
      style={{
        gridColumn: "1 / 3",
        gridRow: "1 / 10"
      }}>
        <h3>Languages</h3>
        <hr className={styles['hz-separator']}/>
        <ul>
          {languageSkills.map(skill => (
            <li key={skill} data-skill={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className={styles.skillsGridItem}
      style={{
        gridColumn: "1/3",
        gridRow: "10/15"
      }}>
        <h3>Databases</h3>
        <hr className={styles['hz-separator']}/>
        <ul>
          {databaseSkills.map(skill => (
            <li key={skill} data-skill={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className={styles.skillsGridItem}
      style={{
        gridColumn: "3/6",
        gridRow: "1 / 11"
      }}>
        <h3>Frameworks & Libraries</h3>
        <hr className={styles['hz-separator']}/>
        <ul>
          {librariesSkills.map(skill => (
            <li key={skill} data-skill={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className={styles.skillsGridItem}
      style={{
        gridColumn: "span 8",
        gridRow: "span 11"
      }}>
        <h3>Major Cloud Services</h3>
        <hr className={styles['hz-separator']}/>
        <ul>
          {cloudSkills.map(skill => (
            <li key={skill} data-skill={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className={styles.skillsGridItem}
      style={{
        gridColumn: "3 / 6",
        gridRow: "11/21",
      }}>
        <h3>Tools</h3>
        <hr className={styles['hz-separator']}/>
        <ul>
          {toolSkills.map(skill => (
            <li key={skill} data-skill={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className={styles.skillsGridItem}
      style={{
        gridColumn: "6/16",
        gridRow: "1/11"
      }}>
        <h3>Concepts</h3>
        <hr className={styles['hz-separator']}/>
        <ul>
          {conceptSkills.map(skill => (
            <li key={skill} data-skill={skill}>{skill}</li>
          ))}
        </ul>
      </div>

    </div>

  </div>
  );
}

export default Experience;