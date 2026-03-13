import {useState,useRef,useEffect} from 'react'
import styles from '../../styles/pages/Experience.module.css'
import Bar from '../components/Bar.jsx'


function Experience(){
  return(
    <>
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

    <div className={styles.page_divider}>
        <div>
          <Bar name="WSU Engineering Camp" subname={"Lead Coding Instructor"} contentID='laGelati' date="09/2021-10/2022"/>
          <Bar name="La Gelati Ice Cream" subname={"Assistant Manager"} contentID='laGelati' date="09/2021-10/2022"/>
        </div>
        <div style={{flex:'1'}}>
          <div className={styles.skills}>
            <h1 style={{textAlign:'center',}}>Skills</h1>
            <hr className={styles['hz-separator']}></hr>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>C++</li>
              <li>C</li> 
              <li>HTML, CSS, Javascript</li>
              <li>React</li>
              <li>NodeJS, Express</li>
              <li>SQL, SQLite</li>
              <li>Git/Github</li>
              <li>Postman (API testing)</li>
              <li>Data Management</li>
              <li>Frontend Web Development</li>
              <li>Backend Web Development</li>
              <li>Game Development</li>
              <li>Machine Learning</li>
              <li>Pandas, Numpy, Matplotlib, Tensorflow, Scikit-learn</li>
              <li>Algorithms</li>
              <li>Data Structures</li>
              <li>Adaptable</li>
              <li>Excel</li>
              <li>PowerPoint</li>
              <li>Word</li>
              <li>Team Collaboration</li>
              <li>Team Leadership</li>
              <li>Customer Support</li>
              <li>English/Arabic</li>
            </ul>
          </div>
        </div>
    </div>
  </>
  );
}

export default Experience;