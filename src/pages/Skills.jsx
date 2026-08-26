
import {useState,useRef,useEffect} from 'react'
import styles from "../../styles/pages/Skills.module.css"
const languageSkills = ["C++", "C", "JavaScript", "Python", "SQL", "HTML", "CSS",
  "Java", "Swift", "Bash"];
const databaseSkills = ["MySQL", "PostgreSQL", "SQLite"];
const librariesSkills = ["Express", "FastAPI", "Flask", "React", "Next.js", 
  "MediaSoup", "Keras", "TensorFlow", "Matplotlib", "Scikit-Learn", "Pygame"];
const cloudSkills = ["AWS S3", "AWS EC2", "AWS RDS", "AWS Cognito", "AWS Amplify", 
  "AWS Lambda", "DigitalOcean Droplets", "Render", "Netlify", "Vercel", "Cloudflare",
  "Auth0" ];
const toolSkills = ["Git", "GitHub", "Docker", "Linux", "Node.js", "Nginx", "WebRTC",
  "WebSockets", "WebAssembly"];
const conceptSkills = ["Auth flows", "Role-based systems", "Supervised AI data generation", 
  "AI chatbots", "Machine learning", "Neural networks (ANNs)", 
  "Decision trees", "Encryption (OpenSSL)", "Compression (zstd)", 
  "Multithreading", "Extending legacy systems"
];


function Skills({ref, scrollableRef}){
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
        <div ref={ref} className={`${styles.skillspage} section`}>
            <div className={styles.intro}>
                <div className={styles.title}>
                Skills
                </div>
                <hr className={styles['hz-separator']}>
                </hr>
                <div className={styles.info}>
                    View and search for major skills I have developed during my years of developing projects.
                </div> 
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
    )
}

export default Skills;