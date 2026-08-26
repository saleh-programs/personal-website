import { useState,useEffect,useRef } from 'react';
import styles from '../../styles/pages/Education.module.css'

import Bar from '../../src/components/Bar.jsx'

import Fordson from "../assets/images/fordson.png"
import fordTranscript from "../assets/documents/fordsonTranscript.pdf"
import wayneTranscript from "../assets/documents/wayneTranscript.pdf"
import WayneState from "../assets/images/waynestateuniversity.png"
import CorkBoard from "../assets/images/corkboard.png"
import YAA from '../assets/images/YAA.jpeg'
import Rosa from '../assets/images/rosa.jpeg'

import frame1 from "../assets/images/frame1.png"
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
          A brief breakdown of my education and academic achievements that I am proud to have received.<br/>
        </div>
      </div>
      <section style={{position: "relative", height: "500px", margin: "5px 80px", borderRadius: "90px 10px", border: "1px solid rgba(255,255,255,.5)", overflow: "hidden", backgroundColor: "rgba(0,0,0,1)"}}>
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
      <section style={{position: "relative", height: "800px", margin: "5px 80px", borderRadius: "90px 10px", border: "1px solid rgba(255,255,255,.5)", overflow: "hidden", backgroundColor: "rgba(0,0,0,1)"}}>
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
      <section style={{position: "relative", margin: "5px", borderRadius: "10px"}}>
        <section style={{position: "relative", width: "1400px", borderRadius: "10px", backgroundColor: "rgba(0,0,0,1)", margin: "auto"}}>
          <img src={CorkBoard} style={{width: "100%", height: "100%", objectFit: "cover", display: "block", justifySelf: "center"}} alt="" />
          <h2 style={{position: 'absolute', top: "0", left: "50%", transform: "translateX(-50%)", fontSize: "2rem", padding: "10px", textAlign: "center", backgroundColor: "rgba(39, 65, 15, 0.22)"}}>Academic Achievements</h2>
          <div style={{position: "absolute",top: "50%", left: "25%", transform: "translate(-50%,-50%)", width: "400px", padding: "20px", borderRadius: "20px", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <section style={{ position: "relative", minWidth: "200px", maxWidth: "400px"}}>
              <img src={frame2} style={{display: "block", width: "100%", height: "100%", objectFit: "cover"}} alt="" />
              <section style={{position: "absolute", top: "50%", left: "50%", width: "100%", transform: "translate(-50%, -50%) scale(.8)"}}>
                <img src={Rosa} style={{display: "block", width: "100%", height: "100%", objectFit: "cover"}} alt="" />
              </section>
            </section>
            <section style={{position: "relative", width: "400px", margin: "-10px"}}>
              <section style={{position: "absolute", top: "20px", left: "55px", width: "40px", zIndex: "5"}}>
                <img src={redtack} style={{width: "100%", height: "100%"}} alt="" />
              </section>
              <section style={{position: "absolute", top: "30px", right: "45px", width: "40px", zIndex: "5"}}>
                <img src={redtack} style={{width: "100%", height: "100%"}} alt="" />
              </section>
              <img src={note} style={{width: "100%", height: "100%"}} alt="" />
              <section style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "70%"}}>
                <h3 style={{fontSize: "1.5rem", textAlign: "center"}}>Rosa Parks Scholarship</h3>
                <section style={{textAlign: "center", fontWeight: "bolder"}}>
                  Awarded for showing academic excellence, leadership, and community involvement.
                </section>
                <section style={{textAlign: "center", fontWeight: "bolder"}}>
                  (June 2022)
                </section>
              </section>
            </section>

          </div>
          <section style={{position: "absolute", bottom: "20px", left: "10px", width: "200px", zIndex: "4", transform: "rotate(14deg)"}}>
            <section style={{position: "absolute", top: "-10px", left: "75px", width: "40px", zIndex: "5"}}>
              <img src={redtack} style={{width: "100%", height: "100%"}} alt="" />
            </section>
            <img src={note} style={{width: "100%", height: "100%"}} alt="" />
            <section style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center", fontWeight: "bold", fontFamily: "Daruma"}}>
              4.0 / 4.0 GPA
            </section>
          </section>

          <div style={{position: "absolute",top: "50%", right: "25%", transform: "translate(50%,-50%)", width: "400px", padding: "20px", borderRadius: "20px", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <section style={{ position: "relative", minWidth: "200px", maxWidth: "400px"}}>
              <img src={frame2} style={{display: "block", width: "100%", height: "100%", objectFit: "cover"}} alt="" />
              <section style={{position: "absolute", top: "50%", left: "50%", width: "100%", transform: "translate(-50%, -50%) scale(.8)"}}>
                <img src={YAA} style={{display: "block", width: "100%", height: "100%", objectFit: "cover"}} alt="" />
              </section>
            </section>
            <section style={{position: "relative", width: "450px", margin: "-10px"}}>
              <section style={{position: "absolute", bottom: "30px", left: "55px", width: "40px", zIndex: "5"}}>
                <img src={redtack} style={{width: "100%", height: "100%"}} alt="" />
              </section>
              <section style={{position: "absolute", top: "30px", right: "45px", width: "40px", zIndex: "5"}}>
                <img src={redtack} style={{width: "100%", height: "100%"}} alt="" />
              </section>
              <img src={note} style={{width: "100%", height: "100%"}} alt="" />
              <section style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "70%"}}>
                <h3 style={{fontSize: "1.5rem", textAlign: "center"}}>Yemeni American Association Scholarship</h3>
                <section style={{textAlign: "center", fontWeight: "bolder"}}>
              Awarded for showing academic excellence and being an active Yemeni American community member.
                </section>
                <section style={{textAlign: "center", fontWeight: "bolder"}}>
                  (Auguest 2022)
                </section>
              </section>
            </section>

          </div>


          



          {/* <div style={{position: "absolute", top: "50%", right: "25%", transform: "translate(50%,-50%)"}}>
            <h3>Yemeni American Association Scholarship</h3>
            <section style={{minWidth: "200px", maxWidth: "400px", border: "40px solid rgb(99, 79, 19)", borderRadius: "0 50px"}}>
              <img src={YAA} style={{display: "block", width: "100%", height: "100%", objectFit: "cover"}} alt="" />
            </section>
            <section style={{backgroundColor: "white"}}>
              Awarded for showing academic excellence and being an active Yemeni American community member.
            </section>
          </div> */}
        </section>

        <div style={{position: 'absolute', top: "0", left: "0", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
        </div>
      </section>
      {/* <Bar name="Fordson High School" contentID='fordson' date="09/2018 - 04/2022"/> */}
    </div> 
  );
} 

export default Education;