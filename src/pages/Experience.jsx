import styles from '../../styles/pages/Experience.module.css'
import lagelati from '../assets/images/lagelati.jpg'
import campImage1  from "../assets/images/leadInstructor1.png"
import campImage2  from "../assets/images/leadInstructor2.png"


function Experience({ref}){

  function scrollToJob(e){
    const elem = e.currentTarget;
    const scrollable = elem.parentElement;
    setTimeout(() => {
      scrollable.scrollTo({behavior: "smooth", left: elem.offsetLeft + elem.offsetWidth - scrollable.clientWidth})
    },100)
  }

  function toggleJob(e){
    const elem = e.currentTarget;
    if (elem.classList.contains(styles.showJob)){
      elem.classList.remove(`${styles.showJob}`);
    }else{
      elem.classList.add(`${styles.showJob}`);
    }
  }

  return(
    <div className={`${styles.experiencepage} section`} ref={ref} id="experience" style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
    <div className={styles.intro}>
      <div className={styles.title}>
        Experience 
      </div>
      <div className={styles['hz-separator']}>
      </div> 
      <div className={styles.info}>
        Find information on employment history and job experience, excluding any project-related work. 
        <br/>
      </div>
    </div>

    <div className={styles.horizScrollable}>
      <section className={`${styles.job}`} onMouseEnter={scrollToJob} onClick={toggleJob}>
        <div className={styles.jobLeft}>
          <img src={campImage1} width="4032" height="3024"/>
          <section className={styles.jobInfo}>
            <h3>Lead Coding Instructor</h3>
            <h4> @ C2 Pipeline Engineering Camp</h4>
            <section>06/2025 - 09/2025</section>
          </section>
        </div>
        <section className={styles.expander}>
        </section>
        <div className={styles.jobRight}>
          <header>
            <h3>Lead Coding Instructor</h3>
            <h4> @ C2 Pipeline Engineering Camp</h4>
            <section>06/2025 - 09/2025</section>  
          </header>
          <p>
            Served as the lead coding instructor at Wayne State University's Summer Engineering Camp, hosted by the C2 Pipeline.
            <br />
            My main responsibility was to teach the fundamentals of programming to students anywhere from grades 3-12.
            <br /><br />
            Other responsibilities consisted of:
          </p>
          <ul>
            <li>Creating lesson plans surrounding basic programming concepts.</li>
            <li>Building demo applications in Swift to serve as references for students.</li>
            <li>Providing hands on support to students.</li>
            <li>Addressing unique challenges and promoting skill development.</li>
            <li>Coordinating with staff and faculty to improve the student experience.</li>
          </ul>
        </div>
      </section>
      <section className={`${styles.job}`} onMouseEnter={scrollToJob} onClick={toggleJob}>
        <div className={styles.jobLeft}>
          <img src={campImage2} width="3024" height="4032"/>
          <section className={styles.jobInfo}>
            <h3>Curriculum / Camp Coordinator</h3>
            <h4> @ C2 Pipeline Engineering Camp</h4>
            <section>05/2026 - 08/2026</section>
          </section>
        </div>
        <section className={styles.expander}>
        </section>
        <div className={styles.jobRight}>
          <header>
            <h3>Curriculum / Camp Coordinator</h3>
            <h4> @ C2 Pipeline Engineering Camp</h4>
            <section>05/2026 - 08/2026</section>
          </header>
          <p>
            Served as a member of the staff in charge of running the program, in addition to 
            creating all curriculum for the Coding & Game Design course.
            <br /><br />Responsibilities consisted of:
          </p>
          <ul>
            <li>Creating all curriculum for Coding & Game Design.</li>
            <li>Assisting in curriculum for other courses</li>
            <li>Organizing / managing events and field trips.</li>
            <li>Training others to teach and mentor.</li>
            <li>Creating activities for students (see "Create your own game" in projects).</li>
          </ul>
        </div>
      </section>
      <section className={`${styles.job}`} onMouseEnter={scrollToJob} onClick={toggleJob}>
        <div className={styles.jobLeft}>
          <img src={lagelati} width="800" height="671"/>
          <section className={styles.jobInfo}>
            <h3>Assistant Manager</h3>
            <h4> @ La Gelati</h4>
            <section>09/2021 - 10/2022</section>
          </section>
        </div>
        <section className={styles.expander}>
        </section> 
        <div className={styles.jobRight}>
          <header>
            <h3>Assistant Manager</h3>
            <h4> @ La Gelati</h4>
            <section>09/2021 - 10/2022</section>  
          </header>
          <p>
              Working in an ice cream store didn't involve software, but rather meeting new people and developing leadership skills. 
            <br /><br />Responsibilities consisted of:

          </p>
              <ul>
                <li>Resolving customer conflicts</li>
                <li>Coordinating with a team</li>
                <li>A fast paced environment</li>
                <li>Quick and critical thinking</li>
                <li>Efficient communication</li>
                <li>Mentoring and encouraging others</li>
              </ul>

        </div>
      </section>
    </div>
  </div>
  );
}

export default Experience;