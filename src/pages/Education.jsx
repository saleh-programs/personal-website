import { useState,useEffect,useRef } from 'react';
import styles from '../../styles/pages/Education.module.css'

import Bar from '../../src/components/Bar.jsx'

import Fordson from "../assets/images/fordson.png"
import fordTranscript from "../assets/documents/fordsonTranscript.pdf"
import wayneTranscript from "../assets/documents/wayneTranscript.pdf"

import WayneState from "../assets/images/waynestateuniversity.png"

function Education({ref}){

  return(
    <div className='section' ref={ref} id="education">
      <div className={styles.intro}> 
        <div className={styles.title}>
          Education 
        </div>
        <hr className={styles['hz-separator']}>
        </hr>
        <div className={styles.info}>
          A brief breakdown of my education and academic achievements that I am proud to have received.<br/><br/>
          Select an option to learn more!
        </div>
      </div>
      <section style={{position: "relative", height: "500px", margin: "5px", borderRadius: "10px", overflow: "hidden", backgroundColor: "rgba(0,0,0,1)"}}>
        <img src={Fordson} style={{width: "100%", height: "100%", objectFit: "cover", display: "block", justifySelf: "center", opacity: .5}} alt="" />
        <div style={{position: 'absolute', top: "0", left: "0", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
          <div style={{backgroundColor: "rgba(0, 0, 0, 0.7)", alignSelf: "center", width: "30%", padding: "20px", borderRadius: "50px", alignItems: "center", margin: "10px"}}>
            <h2 style={{color: "white", borderRadius: "5px", alignSelf: "center", width: "fit-content", padding: "5px", margin: "10px auto"}}>Fordson High School</h2>
            <section style={{borderRadius: "5px", display: "flex", flexDirection: "column", alignSelf: "center", padding: "20px", fontSize: "1.3rem"}}>
              <ul style={{listStyle: "none", color: "white"}}>
                <li style={{ fontWeight: 'bold', padding: "10px"}}>GPA: 3.92 / 4.0</li>
                <li style={{ fontWeight: 'bold', padding: "10px"}}><a href={fordTranscript} style={{color: "white"}} target='_blank'>Official Transcript</a></li>
              </ul>
              <div style={{ fontWeight: 'bold', padding: "10px", color: "white", textAlign: "center"}}>09/2022 - 05/2026</div>
            </section>

          </div>
        </div>
      </section>
      <section style={{position: "relative", height: "800px", margin: "5px", borderRadius: "10px", overflow: "hidden", backgroundColor: "rgba(0,0,0,1)"}}>
        <img src={WayneState} style={{width: "100%", height: "100%", objectFit: "cover", display: "block", justifySelf: "center", opacity: .5}} alt="" />
        <div style={{position: 'absolute', top: "0", left: "0", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
          <div style={{backgroundColor: "rgba(0, 0, 0, 0.7)", alignSelf: "center", width: "40%", padding: "20px", borderRadius: "50px", alignItems: "center", margin: "10px"}}>
            <h2 style={{color: "white", borderRadius: "5px", alignSelf: "center", width: "fit-content", padding: "5px", margin: "10px auto"}}>Wayne State University</h2>
            <section style={{borderRadius: "5px", display: "flex", flexDirection: "column", alignSelf: "center", padding: "20px", fontSize: "1.3rem"}}>
              <ul style={{listStyle: "none", color: "white"}}>
                <li style={{ fontWeight: 'bold', padding: "10px"}}>GPA: 4.0 / 4.0</li>
                <li style={{ fontWeight: 'bold', padding: "10px"}}>Major: Computer Science</li>

                <li style={{ fontWeight: 'bold', padding: "10px"}}>
                Relevant Courses:
                  <ul>
                    <li> Python / Java / C++ / C Programming <span style={{fontSize:'.8em'}}>(4 courses)</span></li>
                    <li>Computer Science 1 & 2</li>
                    <li>Basic Engineering 1 & 3</li>
                    <li>Computer Architecture & Organization</li>
                    <li>Algorithm Design & Analysis</li>
                    <li>Fundamental Structures in CS</li>
                    <li>Software Engineering</li>
                    <li>Operating Systems</li>
                  </ul>
                </li>
                <li style={{ fontWeight: 'bold', padding: "10px"}}><a href={wayneTranscript} style={{color: "white"}} target='_blank'>Official Transcript</a></li>
              </ul>
              <div style={{ fontWeight: 'bold', padding: "10px", color: "white", textAlign: "center"}}>09/2022 - 05/2026</div>
            </section>
          </div>
        </div>
      </section>

      
      {/* <Bar name="Fordson High School" contentID='fordson' date="09/2018 - 04/2022"/> */}
      <Bar name="Wayne State University" contentID='wayne' date="09/2022 - 05/2026"/>
      <Bar name="Academic Achievements" contentID='achievements' date=""/>
    </div> 
  );
} 

export default Education;