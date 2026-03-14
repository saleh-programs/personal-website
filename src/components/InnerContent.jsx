
import styles from "../../styles/components/InnerContent.module.css"
import tractor from '../assets/images/tractor.png'
import wsu from '../assets/images/wsu.png'
import C from '../assets/images/C.png'
import Java from '../assets/images/Java.png'
import Python from '../assets/images/Python.png'
import YAA from '../assets/images/YAA.jpeg'
import Rosa from '../assets/images/rosa.jpeg'
import car1 from '../assets/images/carMain1.gif'
import car2 from '../assets/images/carMain2.gif'
import car3 from '../assets/images/carMain3.gif'
import car4 from '../assets/images/carMain4.gif'
import physics1 from '../assets/images/physicsGame1.gif'
import physics2 from '../assets/images/physicsGame2.gif'
import physics3 from '../assets/images/physicsGame3.gif'
import physics4 from '../assets/images/physicsGame4.gif'
import pygame1 from '../assets/images/pygame1.gif'
import pygame2 from '../assets/images/pygame2.gif'
import pygame3 from '../assets/images/pygame3.gif'
import pygame4 from '../assets/images/pygame4.gif'
import decisionTree from '../assets/images/DecisionTree.jpg'
import ANN from '../assets/images/ANN.jpg'
import TreeAndANN from '../assets/images/TreeAndANN.jpg'
import lagelati from '../assets/images/lagelati.jpg'
import hat from '../assets/images/hat.jpg'
import fordTranscript from "../assets/documents/fordsonTranscript.pdf"
import wayneTranscript from "../assets/documents/wayneTranscript.pdf"
import fileadv1 from "../assets/images/fileadv1.gif" 
import fileadv2 from "../assets/images/fileadv2.gif" 
import fileadv3 from "../assets/images/fileadv3.gif" 
import fileadv4 from "../assets/images/fileadv4.gif" 
import projectplace1 from "../assets/images/projectplace_solo.gif"
import projectplace2 from "../assets/images/projectplace_chat.gif"
import projectplace3 from "../assets/images/projectplace_whiteboard.gif"
import projectplace4 from "../assets/images/projectplace_video.gif"
import s3fsflowGIF from "../assets/images/s3fs_flow.gif"
import s3fsflowPNG from "../assets/images/s3fs_flow.png"


function FordsonEducation(){
  return(
    <div className={styles.inside}>
      <div className='rowcontainer'>
        <div>
          GPA: 3.9 / 4.0<br/><br />
          <a href={fordTranscript} target='_blank'>Official Transcript</a>
        </div>
        <div>
          <img src={tractor} alt="not found" />
        </div>
      </div>
    </div>
  );
}
function WayneEducation(){
    return(
      <div className={styles.inside}> 
        <div className="rowcontainer">
          <div>
            Major: Computer Science<br/>
            GPA: 4.0 / 4.0 <br/><br />
            <a href={wayneTranscript} target='_blank'>Official Transcript</a><br />
          </div>
          <img src={wsu} alt="Not found" />
        </div>
        <div className="rowcontainer">
          <div>
            Relevant Courses: <br />
            &bull; Python / Java / C++ / C Programming <span style={{fontSize:'.8em'}}>(4 courses)</span><br/>
            &bull; Computer Science 1 & 2<br />
            &bull; Basic Engineering 1 & 3<br />
            &bull; Computer Architecture & Organization<br />
            &bull; Algorithm Design & Analysis<br />
            &bull; Fundamental Structures in CS<br />
            &bull; Software Engineering<br />
          </div>
          <div className="columncontainer" >
            <img src={C} alt="not found" />
            <img src={Java} alt="not found" />
            <img src={Python} alt="not found" />
          </div>
        </div>
      </div>
  );
}
function AchievementsEducation(){
  return(
    <div className={styles.inside}> 
        <div className={"rowcontainer"}>
          <div>
            &bull;Rosa Parks Scholarship<br/>
            <div>
              Awarded for showing academic excellence, leadership, and community involvement.<br/><br/>
            </div>
          </div>
          June 2022
          <img src={Rosa} alt="" />
        </div>
        <div className={"rowcontainer"}>
          <div>
            &bull;Yemeni American Association Scholarship<br/>
            <div>
              Awarded for showing academic excellence and being an active Yemeni American community member.<br/><br/>
            </div>
          </div>
          August 2022
          <img src={YAA} alt="" />
        </div>
    </div>
  );
}
function ProjectPlaceProject(){
    return(
      <div className={styles.inside}> 
          <div className={styles.demo_imgs_car}> 
            <img src={projectplace1} alt="" />
            <img src={projectplace2} alt="" />
            <img src={projectplace3} alt="" />
            <img src={projectplace4} alt="" />

          </div>
          <div className={"rowcontainer"}>
            <div className={styles.description}>
              <h2 >Description</h2>
              Project Place is a communication platform for teams inspired by what I believe is missing from similar applications.
              <br /><br />
              Teams often need to send messages, share files, hold meetings, and illustrate ideas to others.
              This project was built with these ideas in mind.

              <h3>Major Features</h3>
              <ul>
                <li>Chat
                  <ul>
                    <li>Send / Edit / Delete messages</li>
                    <li>Display message statuses</li>
                    <li>Share files</li>
                  </ul>
                </li>
                <li>Video Chat
                  <ul>
                    <li>Call members individually</li>
                    <li>Call the entire team</li>
                  </ul>
                </li>
                <li>Collaborative Whiteboard 
                  <ul>
                    <li>Explain ideas visually</li>
                    <li>Build together in real time</li>
                    <li>Load a saved history</li>
                    <li>Includes many tools: 
                      <ul>
                        <li>Draw / Erase / Fill / Clear</li>
                        <li>Select / Move</li>
                        <li>Undo / Redo</li>
                        <li>Import Images</li>
                        <li>Download canvas / selected region</li>
                        <li>...other tools</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <h3>Other Features</h3>
              <ul>
                <li>Signup + Login</li>
                <li>Create + join rooms</li>
                <li>Create + join protected rooms</li>
                <li>Change site appearance</li>
                <li>Select, upload, and change avatar</li>
                <li>View active members</li>
              </ul>
              <a href="https://github.com/saleh-programs/ProjectPlace" target='_blank'>Github Repo</a>
            </div>
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <strong>Technologies</strong>
                <li>Language(s): JavaScript, Python, HTML, CSS <br />(C++ for some whiteboard actions)</li>
                <li>Database: MySQL</li>
                <li>Frontend: Next.js</li>
                <li>Backend: 
                  <ul>
                    <li>REST API: Flask</li>
                    <li>Media SFU + Signaling Server: Node.js </li>
                    <li>Turn Server: Coturn</li>
                  </ul>
                </li>
                <li>Hosting: AWS EC2</li>
                <li>Image Storage: AWS S3 </li>
                <li>Signup + Login + Access Tokens: Auth0</li>
                <li>Group Calls: mediasoup</li>
                <li>Signaling: WebSockets</li>
                <br />
                <strong>Concepts</strong>
                <li>Chat</li>
                <ul>
                  <li>Infinite Scroll</li>
                  <li>Virtualization</li>
                  <li>Loading File Logic/Animations</li>
                </ul>
                <li>Whiteboard</li>
                <ul>
                  <li>Canvas + 2D Context API Fluency</li>
                  <li>Operations queue</li>
                  <li>WASM optimizations</li>
                  <li>Optimized canvas storage (snapshot + recent instructions)</li>
                </ul>
                <li>Video Chat</li>
                <ul>
                  <li>SFU server management</li>
                  <li>Debugging packet delivery</li>
                  <li>Managing video / audio tracks</li>
                </ul>
                <li>UI / UX design</li>
                <li>Signup + Login</li>
                <li>Token enforced permissions</li>
                <li>Direct uploads with temporary S3 URLs</li>
                
              </ul>
              </div>
          </div>
      </div>
    );
}
function CarMaintenanceProject(){
    return(
      <div className={styles.inside}> 
          <div className={styles.demo_imgs_car}> 
            <img src={car1} alt="" />
            <img src={car2} alt="" />
            <img src={car3} alt="" />
            <img src={car4} alt="" />

          </div>
          <div className={"rowcontainer"}>
            <div className={styles.description}>
              <h2 >Description</h2>
              Get reminders to service your vehicle and keep track of what needs maintenance!
              <br/><br/>
              A full-stack car maintenance app with the following features:
              <ul>
                <li>Create Account / Log In</li>
                <li>Find Local Services</li>
                <li>Add / View Service History</li>
                <li>View Service Deadlines</li>
                <li>AI Customer Support</li>
                <li>View Browser Notifications</li>
              </ul>
               Integrates APIs for maps, images, geocoding, and AI.<br/><br />
               Worked with a team of 3 people as the primary developer and team lead, implementing nearly all core features end to end (except the initial "Find local services" page, the home page, and some frontend work).
               <br /><br />
               
              <a href="https://github.com/saleh-programs/Car_Maintenance_Site" target='_blank'>Github Repo</a>
            </div>
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <strong>Technologies</strong>
                <li>Language(s): JavaScript, Python</li>
                <li>Database: SQLite</li>
                <li>Frontend: React</li>
                <li>Backend: Node.js</li>
                <li>Hosting: 
                  <ul>
                    <li>Frontend: Netlify</li>
                    <li>Backend: Render</li>
                  </ul>
                </li>
                <li>AI chatbot: Groq API</li>
                <li>Guided data generation with OpenAI API</li>
                <li>Google Places API for business images</li>
                <li>Overpass API for nearby mechanics / geocoding</li>
                <br />
                <strong>Concepts</strong>
                <li>Automating data generation with AI  <br />(using reference vehicle data)</li>

                <li>Password hashing</li>
                <li>Consistent error handling</li>
                <li>Dev-friendly / All functions + complex flows commented</li>
                <li>Input Validation</li>
              </ul>
              </div>
          </div>
      </div>
    );
}
function SecureS3FSProject(){
    return(
      <div className={styles.inside}> 
          <div className={styles.demo_imgs_s3fs}> 
            <img src={s3fsflowGIF} alt="" />
            <img src={s3fsflowPNG} alt="" />

            <iframe src="https://www.youtube.com/embed/_VpKkgdseCU?autoplay=1&mute=1&loop=1&playlist=_VpKkgdseCU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>

          </div>
          <div className={"rowcontainer"}>
            <div className={styles.description}>
              <h2 >Description</h2>
              An extension of the S3FS tool that allows users to upload their files to the cloud as: 
              <ul>
                <li>Encrypted</li>
                <li>Compressed</li>
                <li>Encrypted and Compressed</li>
                <li>Standard <small style={{fontSize: ".8em"}}>(no modification)</small></li>
              </ul>

              This project is heavily based in C++. 
              <br />This implementation is fully compatible with base S3FS,
              yet adds encryption and compression capabilities. 
              <br /><br />You'll have the option of passing the following arguments: 
              <ul>
                <li><strong>"secure_mode":</strong> Specifies how you'd like files to be uploaded.</li>
                <li><strong>"crypt_password":</strong>  The password used for all encryption and decryption.</li>
              </ul>
 

              <h3><strong>What is S3?</strong></h3>
              S3 is an Amazon service short for "Simple Storage Service". It allows you to store files on the cloud.
              <h3><strong>What is S3FS?</strong></h3>
              S3FS is a command line tool that works with S3, allowing users to interact with the files stored on S3 as if they were on their local
              file system. 
              <br /><br />
               
              <a href="https://github.com/saleh-programs/Car_Maintenance_Site" target='_blank'>Github Repo</a>
            </div>
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <strong>Technologies</strong>

                <li>Language(s): C++</li>
                <li>Base Tool: s3fs</li>
                <li>AWS S3</li>
                <li>Encryption / Decryption: <br />
                  OpenSSL using aes-256-cbc</li>
                <li>Compression / Decompression: <br /> zstd</li>
                <li>Linux OS</li>
                <li>AWS S3</li>
                <br />
                <strong>Concepts</strong>
                <li>File level Compression</li>
                <li>Chunk level Encryption </li>
                <li>Multithreading</li>
                <li>Memory Management</li>
                <li>Legacy systems</li>
              </ul>
              </div>
          </div>
      </div>
    );
}
function FileAdventurerProject(){
      return(
      <div className={styles.inside}> 
        <div className="columncontainer">
          <div className={styles.demo_imgs_platformer}>
            <img src={fileadv1} alt="" />
            <img src={fileadv2} alt="" />
            <img src={fileadv3} alt="" />
            <img src={fileadv4} alt="" />
          </div>
          <div className={"rowcontainer"}>
            <div className={styles.description}>
              <h2>Description</h2>
              "File Adventurer" is my take on a cleaner, more intuitive version of Windows' "File Explorer". I built it to reduce clutter and add features I felt were missing in the built in file system, based on my frequent use of it.
              <br/><br/>
              Includes an optimized recursive search and a priority queue based "Recent Folders" feature. 
              <br /><br /> 
              Implemented many conveniences such as allowing navigation while dragging and offering different "view modes". <br /> I created some custom assets and animations to add a unique personality. <br/><br />
              Features include:<br />
              <ul>
                <li>Folder Navigation / Open Files</li>
                <li>Create, Delete, drag & drop </li>
                <li>Pin, Hide, or Rename Entries</li>
                <li>Sort by Name, Creation Date, or Modified Date</li>
                <li>Track Recent Folders</li>
                <li>Search Entries</li>
                <li>Tree Mode: View all entries in a traditional nested environment</li>
                <li>Stack Mode: View the hierarchical structure of a specific path</li>
              </ul>
              <span style={{color:'red'}}><span style={{fontSize:'1.5em'}}>NOTE:</span> Your download of the app's installer may be flagged by antivirus tools such as Microsoft Defender. I have no ill intent, these warnings only appear because they are less likely to trust apps that haven't purchased a signed certificate. </span><br />
              <a href="https://github.com/saleh-programs/FileAdventurer.git" target='_blank'>Github Repo</a>
            </div>
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <strong>Technologies</strong>
                <li>Language(s): JavaScript, Python</li>
                <li>Database: SQLite</li>
                <li>Frontend: React</li>
                <li>Backend: FastAPI</li>
                <li>Deployment: Tauri <br />(to package as desktop app)</li>
                <br />
                <strong>Concepts</strong>
                <li>Consistent error handling  </li>
                <li>Dev-friendly documentation for any complex behaviors</li>
                <li>Priority queue based quick access </li>
                <li>Infinite scroll</li>
                <li>Lazy loading</li>
                <li>UI / UX Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
function PhysicsToolProject(){
    return(
      <div className={styles.inside}> 
          <div className={styles.demo_imgs_physics}> 
            <img src={physics1} alt="" />
            <img src={physics2} alt="" />
            <img src={physics3} alt="" />
            <img src={physics4} alt="" />

          </div>
          <div className={"rowcontainer"}>
            <div className={styles.description}>
              <h2 >Description</h2>
              A game designed to help physics students improve at solving kinematics based physics problems! Join Willow on a journey gliding through the air and sprinting on foot, all while solving word problems related to his situation. Maybe you'll even get to chat with him if you do well enough!
              <br/><br/>
              The game contains 10 levels of progressing difficulty and 3 questions each. Level 10 connects to the OpenAI API to allow you to chat with Willow.<br/><br />
              <a href="https://github.com/saleh-programs/Physics_Practice_Tool" target='_blank'>Github Repo</a>
            </div>
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <strong>Technologies</strong>
                <li>Language(s): Python</li>
                <li>2D Graphics Library : Pygame</li>
                <li>AI chatbot: OpenAI API</li>
                <br />
                <strong>Concepts</strong>
                <li>Motion Physics</li>
                <li>State Management</li>
                <li>Collision Logic</li>
                <li>Camera System</li>
                <li>Performance Optimizations</li>
                <li>Created reusable level based design framework</li>
                <li>Problem generation system</li>
                <li>Custom trails, textboxes, & more</li>
                <li>UI / UX Design</li>

              </ul>
              </div>
          </div>
        </div>
    );
}
function PlatformerProject(){
    return(
      <div className={styles.inside}> 
        <div className="columncontainer">
          <div className={styles.demo_imgs_platformer}>
            <img src={pygame1} alt="" />
            <img src={pygame2} alt="" />
            <img src={pygame3} alt="" />
            <img src={pygame4} alt="" />
          </div>
          <div className={"rowcontainer"}>
            <div className={styles.description}>
              <h2>Description</h2>
              A Hollow Knight inspired game made in Pygame with custom animations! The player can slash, shoot, and swing faced against enemies with unique logic!
              <br/><br/>
              I gained a lot of skills navigating this somewhat large project and working with more complex solutions.<br/>
              Although unfinished, a lot was learned from all the effort dumped into custom enemy behaviors, the terrain system, camera perspectives, and much more. 
              <br /> <br />
              <a href="https://github.com/saleh-programs/Platformer_Game.git" target='_blank'>Github Repo</a>
            </div>
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <strong>Technologies</strong>
                <li>Language(s): Python</li>
                <li>2D Graphics Library : Pygame</li>
                <li>Map Editing: Tiled</li>
                <br />
                <strong>Concepts</strong>
                <li>Motion Physics</li>
                <li>State Management</li>
                <li>Health/Damage System</li>
                <li>Camera System</li>
                <li>Custom Multi-layered Parallax Background</li>
                <li>Melee, Shooting, and Grappling Hook Mechanics</li>
                <li>Enemy Behavior Logic</li> 
                <li>Performance Optimizations</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
function StockMarketProject(){
    return(
      <div className={styles.inside}> 
          <div className={styles.demo_imgs_models}>
            <img src={decisionTree} alt="" />
            <img src={ANN} alt="" />
            <img src={TreeAndANN} alt="" />
          </div>
          <div className={"rowcontainer"}>
            <div className={styles.description}>
              <h2>Description</h2>
              Used 2 machine learning models (ANN and Decision Tree) to analyze trends in individual CPI sectors (gasoline, food, energy, etc.) and predict if overall inflation will rise. The F1 scores (performance scores) for both models are provided.<br/><br/>
              
              ANN model: 92% <br/>
              Decision Tree Model: 80%<br/><br />
              
              Worked with a team of 6, taking a lead coordinating meetings and assigning sections for the final report. Completed all decision tree / ANN modeling, performance measuring, and data processing.  <br />
              (All code within the repository is written by myself)<br />
              <br /><br />
              Note: The model does somewhat struggle due to limited data and some existing bias. However, it still reveals inflation trends with reasonable accuracy.
              <br /><br />
              <a href="https://github.com/saleh-programs/Inflation_Predictor.git" target='_blank'>Github Repo</a>
            </div>
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <strong>Technologies</strong>
                <li>Language(s): Python</li>
                <li>Decision Trees: scikit-learn</li>
                <li>Artificial Neural Networks: TensorFlow / Keras</li>
                <li>Data Manipulation: Pandas</li>
                <li>Data Visualization: Matplotlib</li>
                <br />
                <strong>Concepts</strong>
                <li>Machine Learning Algorithms
                  <ul>
                    <li>Artificial Neural Networks</li>
                    <li>Decision Trees</li>
                  </ul>
                </li>
                <li>Preprocessing data stored in CSV files </li>
                <li>Measuring ML model performance</li>
              </ul>
            </div>
          </div>
      </div>
    );
}
function LaGelatiExperience(){
      return(
        <div className={styles.inside}>
          <div className={"rowcontainer"}>
            <div>
              Working in an ice cream store didn't involve software, but rather meeting new people on a daily basis. It consisted of: 
              <ul>
                <li>Resolving customer conflicts</li>
                <li>Coordinating with a team</li>
                <li>A fast paced environment</li>
                <li>Quick and critical thinking</li>
                <li>Quick and efficient solutions</li>
                <li>Efficient communication</li>
              </ul>

            </div>
            <div className={styles.lagelati_img}>
              <img src={lagelati} alt="" />
            </div>
          </div>
        </div>
      );
}
const contentDict = {
  "fordson": <FordsonEducation/>,
  "wayne": <WayneEducation/>,
  "achievements": <AchievementsEducation/>,
  "projectPlace": <ProjectPlaceProject/>,
  "carMaintenance": <CarMaintenanceProject/>,
  "fileAdventure": <FileAdventurerProject/>,
  "physicsTool": <PhysicsToolProject/>,
  "platformer": <PlatformerProject/>,
  "stockMarket": <StockMarketProject/>,
  "laGelati": <LaGelatiExperience/>,
  "secureS3FS": <SecureS3FSProject/>
}
export default contentDict;