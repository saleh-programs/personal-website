import { useState,useEffect,useRef } from 'react';
import styles from '../../styles/pages/Education.module.css'


import Fordson from "../assets/images/fordson.png"
import fordTranscript from "../assets/documents/fordsonTranscript.pdf"
import wayneTranscript from "../assets/documents/wayneTranscript.pdf"
import WayneState from "../assets/images/waynestateuniversity.png"
import YAA from '../assets/images/YAA.jpeg'
import Rosa from '../assets/images/rosa.jpeg'

import frame2 from "../assets/images/frame2.png"
import note from "../assets/images/note.png"
import redtack from "../assets/images/redtack.png"

function Education({ref}){

  return(
    <div className={`${styles.educationpage} section`} ref={ref} id="education">
      <div className={styles.intro}> 
        <div className={styles.title}>
          Education 
        </div>
        <hr className={styles['hz-separator']}>
        </hr>
        <div className={styles.info}>
          A brief breakdown of my education as well as academic achievements that I am proud to have received.<br/>
        </div>
      </div>
      <section className={styles.educationItem}>
        <section className={styles.imgContainer}>
          <img src={Fordson} alt="" />
        </section>
        <div className={styles.educationItemContent}>
          <div className={styles.centeredInfo}>
            <h2>Fordson High School</h2>
            <ul>
              <li>GPA: 3.92 / 4.0</li>
              <li><a href={fordTranscript} target='_blank'>Official Transcript</a></li>
            </ul>
            <div className={styles.dateAttended}>09/2018 - 05/2022</div>

          </div>
        </div>
      </section>
      <section className={styles.educationItem}>
        <section className={styles.imgContainer}>
          <img src={WayneState} alt="" />
        </section>
        <div className={styles.educationItemContent}>
          <div className={styles.centeredInfo}>
            <h2>Wayne State University</h2>
            <ul>
              <li>GPA: 4.0 / 4.0</li>
              <li>Major: Computer Science</li>
              <li><a href={wayneTranscript} target='_blank'>Official Transcript</a></li>
            </ul>
            <br />
            <h3>Relevant Courses</h3>
            <ul style={{paddingLeft: "10px", listStyle: "outside"}}>
              <li> Python / Java / C++ / C Programming <span style={{fontSize:'.8em'}}>(4 courses)</span></li>
              <li>Computer Science 1 & 2</li>
              <li>Basic Engineering 1 & 3</li>
              <li>Computer Architecture & Organization</li>
              <li>Algorithm Design & Analysis</li>
              <li>Fundamental Structures in CS</li>
              <li>Software Engineering</li>
              <li>Operating Systems</li>
            </ul>
            <div className={styles.dateAttended}>09/2022 - 05/2026</div>

          </div>
        </div>
      </section>

      <section className={styles.academicAchievements}>
        <h2>Academic Achievements</h2>
        <section className={styles.corkboard}>
          <div className={styles.certificateItem}>
              <section className={styles.frame}>
                <img src={frame2}  alt="" />
                <section>
                  <img src={Rosa} alt="" />
                </section>
              </section>
              <section className={styles.note}>
                <img src={note} alt="" />
                <section className={styles.tack} style={{top: "20px", left: "55px"}}>
                  <img src={redtack} alt="" />
                </section>
                <section className={styles.tack} style={{top: "30px", right: "45px"}}>
                  <img src={redtack} alt="" />
                </section>
                <section className={styles.noteText}>
                  <h3>Rosa Parks Scholarship</h3>
                  <section>
                    Awarded for showing academic excellence, leadership, and community involvement.
                  </section>
                  <section>
                    (June 2022)
                  </section>
                </section>
              </section>
            </div>
          <div className={styles.certificateItem} style={{paddingBottom: "80px"}}>
              <section className={styles.frame}>
                <img src={frame2}  alt="" />
                <section>
                  <img src={YAA} alt="" />
                </section>
              </section>
              <section className={styles.note}>
                <img src={note} style={{transform: "scale(1.3) translateY(30px)"}} alt="" />
                <section className={styles.tack} style={{bottom: "-40px", left: "15px"}}>
                  <img src={redtack} alt="" />
                </section>
                <section className={styles.tack} style={{top: "30px", right: "15px"}}>
                  <img src={redtack} alt="" />
                </section>
                <section className={styles.noteText} style={{paddingTop: "20px"}}>
                  <h3>Yemeni American Association Scholarship</h3>
                  <section>
                    Awarded for showing academic excellence and being an active Yemeni American community member.
                  </section>
                  <section>
                    (August 2022)
                  </section>
                </section>
              </section>
            </div>
            
            <section className={styles.stickyNote}>
              <img src={note} alt="" />
              <section className={styles.tack} style={{ top: "0", left: "75px"}}>
                <img src={redtack} alt="" />
              </section>
              <section className={styles.stickyNoteContent}>
                4.0 / 4.0 GPA
              </section>
            </section>
        </section>
      </section>
    </div> 
  );
} 

export default Education;