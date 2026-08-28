import {useState,useRef,useEffect, useLayoutEffect} from 'react'
import styles from '../../styles/pages/Projects.module.css'

import Bar from '../components/Bar.jsx'

function Projects({ref}){
  return(
    <div className={`${styles.projectspage} section`} ref={ref} id="projects">
      <div className={styles.intro}>
        <div className={styles.title}>
          Projects
        </div>
        <hr className={styles['hz-separator']}>
        </hr>
        <div className={styles.info}>
          This page provides a general breakdown of various projects I've worked on. A description and list of involved concepts is provided for each project, as well as a link to its dedicated GitHub repository.
          <br/><br />
          Select an option to learn more!
        </div> 
      </div>
      <div>
        <div className={styles.title}> 
          Personal Projects
        </div>
        <hr className={styles['hz-separator']}>
        </hr>
        <Bar name='Project Place' subname={"Website Application"} subname2={"Available 10am - 12am (midnight) to save costs"}  contentID= 'projectPlace' link={["Try the website!","https://projectplace.space/"]}/>
        <Bar name='Secure S3FS' subname={"CLI tool"} contentID= 'secureS3FS' />
        <Bar name='File Adventurer' subname={"Desktop Application (Windows)"} contentID= 'fileAdventure' link={["Download the Windows desktop app!","https://github.com/saleh-programs/file-adventurer/raw/master/FileAdventurerSetup.exe"]}/>
        <Bar name='Physics Practice Tool' subname={"Desktop Application"} subname2={"AI Willow (level 10) is not regularly maintained"} contentID= 'physicsTool' link={["Download the game!","https://github.com/saleh-programs/physics-practice-tool/archive/refs/heads/master.zip"]}/>
        <Bar name='API Glue' subname={"Website Application (Local Developer Tool)"} link={""} subname2={"Submission for WayneHacks4 hackathon"} contentID= 'apiGlue'/>

      </div>

      <div >
        <div className={styles.title}>
          Smaller Personal Projects <br />(those worth mentioning)
        </div>

        <hr className={styles['hz-separator']}>
        </hr>
        <Bar name='Platformer Game' contentID= 'platformer' subname={"Desktop Application"}/>
      </div>
      <div >
        <div className={styles.title}>
          Team Projects
        </div>

        <hr className={styles['hz-separator']}>
        </hr>
        <Bar name='OMRE Fragrances' subname={"Website Application"} contentID= 'omreFragrances' />
        <Bar name='Car Maintenance App' subname={"Website Application"} subname2={"Not regularly maintained"} contentID= 'carMaintenance' link={["Try the website!","https://carmaintenanceproject.netlify.app/"]}/>
        <Bar name='Inflation Predictor with ML' subname={"Source Code Available Only"} contentID= 'stockMarket'/>
      </div>
    </div>
  )};  

export default Projects; 