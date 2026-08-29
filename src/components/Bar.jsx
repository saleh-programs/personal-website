import { useState,useEffect,useRef } from 'react';
import styles from '../../styles/components/Bar.module.css'

import contentDict from './InnerContent';
import Dropdown from "../assets/images/dropdown.png"

function Bar({name, subname, subname2, contentID, date, link}){
  const [isExpanded,setIsExpanded] = useState(false);
  const [contentMaxHeight, setContentMaxHeight] = useState("0");
  const elem = useRef(null);

  useEffect(() => {
    if (!elem.current) return; 

    let currentMax = 0;
    const observer = new ResizeObserver(() => {
      if (isExpanded && currentMax !== `${elem.current.scrollHeight}px`){  
        currentMax = `${elem.current.scrollHeight}px`
        setContentMaxHeight(currentMax)
      }else if (!isExpanded && currentMax !== `0`){
        currentMax = "0"
        setContentMaxHeight(currentMax)
      }
    })
    observer.observe(elem.current);

    return () => {
      observer.disconnect()
    }
  },[isExpanded])

  return(
      <div className={styles['dropdown-ref']}>
        <div className={`${styles.dropdown} ${isExpanded ? styles.rotateDropdown:""}`} onClick={()=>setIsExpanded(prev => !prev)}>
          <img src={Dropdown} alt="" />
        </div>
        <div className={styles.bar} onClick={()=>setIsExpanded(prev => !prev)}>
          <div className={styles.barHeader}>
            <div className={styles.barLeft}>
              {name}
              {subname && <span style={{
                fontSize: ".7em",
                opacity: ".6"
              }}><br />{subname}</span>}
            </div>
            {
              (link || date || subname2) && (link 
              ? 
                <div className={styles.barRight} style={{display:"flex", flexDirection: "column"}}>
                  <a href={link[1]} target='_blank'>{link[0]}</a>
                  {subname2 && <span style={{
                    fontSize: ".7em",
                    opacity: ".6",
                  }}>{subname2}</span>}
                </div>
              :
                <div className={styles.barRight}>
                    {date}
                    {subname2 && <span style={{
                      fontSize: ".7em",
                      opacity: ".6",
                    }}>{subname2}</span>}
                </div> 
              )
            }
          </div>
          <div className={styles.contentContainer} style={{maxHeight: contentMaxHeight}} ref={elem}>
            {contentDict[contentID]}
          </div>
        </div>
      </div>
  );
}

 
export default Bar;