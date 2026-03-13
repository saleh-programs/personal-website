import { useState,useEffect,useRef } from 'react';
import styles from '../../styles/components/Bar.module.css'

import contentDict from './InnerContent';

function Bar({name, contentID, date, link}){
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
          <span>&gt;</span>
        </div>
        <div className={styles.bar} onClick={()=>setIsExpanded(prev => !prev)}>
          <div className={styles.barHeader}>
            <div className={styles.left}>
              {name}
            </div>
            {link 
            ? 
              <div>
                <a href={link[1]} target='_blank'>{link[0]}</a>
              </div>
            :
              <div>
                  {date}
              </div> 
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