import styles from '../../styles/pages/Home.module.css'
import portrait from '../assets/images/murad8.jpeg'
import github_icon from '../assets/images/Github_icon.png'
import LinkedIn_icon from '../assets/images/LinkedIn_icon.png'
import Handshake_icon from '../assets/images/Handshake_icon.png'
import { useEffect, useState } from 'react'

function Home(){
  return(
    <div>     
      <div className={styles.title}>
        Welcome, I'm Murad Saleh!
      </div>
      <div className={styles.card}>
        <div className={styles["card-left"]}>
          <div className={styles.portrait}>
            <img src={portrait}/>
          </div>

          <div className={styles.info}>
              <section 
              style={{
                gridColumn: "1/6",
                gridRow: "1/4"
              }}>
                <h3>Education</h3>
                <span>Wayne State University</span>
              </section>
              <section
              style={{
                gridColumn: "6/12",
                gridRow: "1/4"
              }}>
                <h3>Major</h3>
                <span>Computer Science</span>
              </section>
              <section
              style={{
                gridColumn: "12/16",
                gridRow: "1/4"
              }}>
                <h3>Age</h3>
                <span>21</span>
              </section>
              <section
              style={{
                gridColumn: "2/9",
                gridRow: "4/6"
              }}>
                <h3>Graduation Date</h3>
                <span>May of 2026</span>
              </section>
              <section
              style={{
                gridColumn: "9/15",
                gridRow: "4/6"
              }}>
                <h3>City</h3>
                <span>Dearborn, MI</span>
              </section>
              <section
              style={{
                gridColumn: "2/15",
                gridRow: "6/8"
              }}>
                <h3>University Email</h3>
                <span>hl4178@wayne.edu</span>
              </section>
              <section
              style={{
                gridColumn: "2/15",
                gridRow: "8/10"
              }}>
                <h3>Personal Email</h3>
                <span>salehm0529@gmail.com</span>
              </section>

          </div>
        </div>
        <div className={styles.separator}>
        </div>
        <div className={styles["card-right"]}>
          <div className={styles.aboutme}>
            About Me
          </div>
          <div className={styles.description}>
            Hello! My name is Murad Saleh. This is a site I built to show my experience, education, projects, skills, and a few other things that employers may be looking for.
            <br/><br/>
            I'm looking for opportunities to grow my skills in the field of backend development. <br /><br /> <section style={{fontSize: ".55em"}}>Thank you for visiting! I would appreciate any feedback using the form at the bottom of the page. It will be sent anonymously. </section>
          </div>
          <div className={styles.links}>
            <a className={styles["img-container"]} href="https://github.com/saleh-programs" target='_blank'>
              <img src={github_icon} alt='Github link not found'/>
              Github:

            </a>
            <a className={styles["img-container"]} href="https://www.linkedin.com/in/murad-saleh-674722254/" target='_blank'>
              <img src={LinkedIn_icon} alt='LinkedIn icon not found'/>
              LinkedIn:

            </a>
            <a className={styles["img-container"]} href="https://app.joinhandshake.com/profiles/7a79aj" target='_blank'> 
              <img src={Handshake_icon} alt="Handshake icon not found" />
              Handshake:

            </a>


          </div>
        </div>
      </div> 
    </div>
  );
}
 
export default Home; 