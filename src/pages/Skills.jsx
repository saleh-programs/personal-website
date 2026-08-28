
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

    const allSkills = [
        {name: "Languages",
        ref: languageSkillsRef,
        skills: languageSkills,
        color: "rgb(189, 236, 177)"},
        {name: "Databases",
        ref: databaseSkillsRef,
        skills: databaseSkills,
        color: "rgb(253, 200, 200)"},
        {name: "Frameworks & Libraries",
        ref: librariesSkillsRef,
        skills: librariesSkills,
        color: "rgb(205, 248, 255)"},
        {name: "Major Cloud Services",
        ref: cloudSkillsRef,
        skills: cloudSkills,
        color: "rgb(255, 230, 253)"},
        {name: "Tools",
        ref: toolSkillsRef,
        skills: toolSkills,
        color: "rgb(248, 247, 192)"},
        {name: "Concepts",
        ref: conceptSkillsRef,
        skills: conceptSkills,
        color: "rgb(250, 250, 250)"},        
    ]


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
            elem.style.filter = "";
            elem.style.border = "";
        }

        if (e.target.value.length < 1){
            setSearchedSkills([]);
            return;
        }

        
        const matchingSkills = allSkills
        .filter(elem => elem?.dataset?.skill?.toLowerCase()?.includes(e.target.value.toLowerCase()));

        setSearchedSkills(matchingSkills.map(elem => elem?.dataset?.skill));

        // Highlight found skills
        for (const elem of matchingSkills){
            elem.style.filter = "invert()";
            elem.style.border = "5px solid purple";
        }
    }

    function scrollToSkill(e){
        const selectedSkill = Array.from(document.querySelectorAll(`[data-skill="${e.target.textContent}"]`))?.[0];
        if (!selectedSkill) return;
        selectedSkill.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        selectedSkill.classList.add("skillAnimation");
        selectedSkill.addEventListener("animationend", () => {
            selectedSkill.classList.remove("skillAnimation");
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
                    <span>Find / Highlight Skills </span>
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

            <div className={styles.allSkills}>
                {allSkills.map(skillInfo => (
                    <section ref={skillInfo.ref}>
                        <h3>{skillInfo.name}</h3>
                        <ul>
                        {skillInfo.skills.map((skill, i) => (
                            <li style={{animationDelay: `${i * .02}s`, backgroundColor: skillInfo.color}} key={skill} data-skill={skill}>{skill}</li>
                        ))}
                        </ul>
                    </section>
                ))}            
            </div>
        </div>
    )
}

export default Skills;