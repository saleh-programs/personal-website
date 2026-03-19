import { useState,useEffect,useRef } from 'react';
import styles from '../../styles/pages/Education.module.css'

import Bar from '../../src/components/Bar.jsx'


function Education(){

  return(
    <>
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
      <Bar name="Fordson High School" contentID='fordson' date="09/2018 - 04/2022"/>
      <Bar name="Wayne State University" contentID='wayne' date="09/2022 - 05/2026"/>
      <Bar name="Academic Achievements" contentID='achievements' date=""/>
    </> 
  );
} 

export default Education;