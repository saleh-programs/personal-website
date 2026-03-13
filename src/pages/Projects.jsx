import {useState,useRef,useEffect, useLayoutEffect} from 'react'
import styles from '../../styles/pages/Projects.module.css'

import Bar from '../components/Bar.jsx'

function Projects(){
  return(
    <>
      <div className={styles.intro}>
        <div className={styles.title}>
          Projects
        </div>
        <hr className={styles['hz-separator']}>
        </hr>
        <div className={styles.info}>
          This page provides a general breakdown of various projects I've worked on. A description and list of involved concepts is provided.<br/><br/>
          Select an option to learn more!
        </div>
      </div>
      <div>
        <div className={styles.title}>
          Personal Projects
        </div>
        <hr className={styles['hz-separator']}>
        </hr>
        <Bar name='Project Place' subname={"Website Application"} contentID= 'projectPlace' link={["Try the website!","https://carmaintenanceproject.netlify.app/"]}/>
        <Bar name='Secure S3FS' subname={"CLI tool"} contentID= 'secureS3FS' />
        <Bar name='File Adventurer' subname={"Desktop Application (Windows)"} contentID= 'fileAdventure' link={["Try the Windows desktop app!","https://github.com/saleh-programs/FileAdventurer/raw/master/FileAdventurerSetup.exe"]}/>
        <Bar name='Physics Practice Tool' subname={"Desktop Application"} contentID= 'physicsTool' link={["Download / Play the game!","./downloads/PhysicsPracticeGame.zip"]}/>
      </div>

      <div >
        <div className={styles.title}>
          Smaller Projects
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
        <Bar name='Car Maintenance App' subname={"Website"} contentID= 'carMaintenance' link={["Try the website!","https://carmaintenanceproject.netlify.app/"]}/>
        <Bar name='Inflation Predictor with ML' subname={"Source Code Available Only"} contentID= 'stockMarket'/>
      </div>
    </>
  )};  

export default Projects; 