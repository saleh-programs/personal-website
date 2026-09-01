
import styles from "../../styles/components/InnerContent.module.css"

import omre1 from "../assets/images/omre-1.png"
import omre2 from "../assets/images/omre-2.mp4"
import omre3 from "../assets/images/omre-3.mp4"
import omre4 from "../assets/images/omre-4.mp4"

import car1 from '../assets/images/carMain1.mp4'
import car2 from '../assets/images/carMain2.mp4'
import car3 from '../assets/images/carMain3.mp4'
import car4 from '../assets/images/carMain4.mp4'
import physics1 from '../assets/images/physicsGame1.mp4'
import physics2 from '../assets/images/physicsGame2.mp4'
import physics3 from '../assets/images/physicsGame3.mp4'
import physics4 from '../assets/images/physicsGame4.mp4'
import pygame1 from '../assets/images/pygame1.mp4'
import pygame2 from '../assets/images/pygame2.mp4'
import pygame3 from '../assets/images/pygame3.mp4'
import pygame4 from '../assets/images/pygame4.mp4'
import decisionTree from '../assets/images/DecisionTree.jpg'
import ANN from '../assets/images/ANN.jpg'
import TreeAndANN from '../assets/images/TreeAndANN.jpg'
import fileadv1 from "../assets/images/fileadv1.mp4" 
import fileadv2 from "../assets/images/fileadv2.mp4" 
import fileadv3 from "../assets/images/fileadv3.mp4" 
import fileadv4 from "../assets/images/fileadv4.mp4" 
import apiGlue1 from "../assets/images/apiglue_dash.png"
import apiGlue2 from "../assets/images/apiglue_deps.png"
import apiGlue3 from "../assets/images/apiglue_tests.png"

import projectplace1 from "../assets/images/projectplace_solo.mp4"
import projectplace2 from "../assets/images/projectplace_chat.mp4"
import projectplace3 from "../assets/images/projectplace_whiteboard.mp4"
import projectplace4 from "../assets/images/projectplace_video.mp4"
import s3fsflowGIF from "../assets/images/s3fs_flow.mp4"
import s3fsflowPNG from "../assets/images/s3fs_flow.png"



function ProjectPlaceProject(){
    return(
      <div className={styles.inside}> 
          <div className={styles.demo_imgs_car}> 
            <video autoPlay loop muted playsInline preload="auto" src={projectplace1} alt="" />
            <video autoPlay loop muted playsInline preload="auto" src={projectplace2} alt="" />
            <video autoPlay loop muted playsInline preload="auto" src={projectplace3} alt="" />
            <video autoPlay loop muted playsInline preload="auto" src={projectplace4} alt="" />

          </div>
          <div className={styles.descConcContainer}>
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
                        <li>Import images</li>
                        <li>Download canvas / selected region</li>
                        <li>...other tools</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <h3>Other Features</h3>
              <ul>
                <li>Signup + login</li>
                <li>Create + join rooms</li>
                <li>Create + join protected rooms</li>
                <li>Change site appearance</li>
                <li>Select, upload, and change avatars</li>
                <li>View active members</li>
              </ul>
              <a href="https://github.com/saleh-programs/project-place" target='_blank'>Github Repo</a>
            </div>
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <strong>Technologies</strong>
                <li>Language(s): JavaScript, Python <br />(C++ for some whiteboard actions)</li>
                <li>Database: MySQL</li>
                <li>Frontend: Next.js</li>
                <li>Backend: 
                  <ul>
                    <li>REST API: Flask</li>
                    <li>Media SFU + signaling server: Node.js </li>
                    <li>Turn server: Coturn</li>
                  </ul>
                </li>
                <li>Hosting: AWS EC2</li>
                <li>Image storage: AWS S3 </li>
                <li>Signup + login + tokens: Auth0</li>
                <li>Group Calls: MediaSoup</li>
                <li>Signaling: WebSockets</li>
                <br />
                <strong>Concepts</strong>
                <li>Chat</li>
                <ul>
                  <li>Infinite scroll</li>
                  <li>Virtualization</li>
                  <li>Loading file logic / animations</li>
                </ul>
                <li>Whiteboard</li>
                <ul>
                  <li>Canvas + 2D Context API fluency</li>
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
                <li>Signup + login</li>
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
            <video autoPlay loop muted playsInline preload="auto" src={car1} alt="" />
            <video autoPlay loop muted playsInline preload="auto" src={car2} alt="" />
            <video autoPlay loop muted playsInline preload="auto" src={car3} alt="" />
            <video autoPlay loop muted playsInline preload="auto" src={car4} alt="" />

          </div>
          <div className={styles.descConcContainer}>
            <div className={styles.description}>
              <h2 >Description</h2>
              Get reminders to service your vehicle and keep track of what needs maintenance!
              <br/><br/>
              A full-stack car maintenance app with the following features:
              <ul>
                <li>Create account / Log in</li>
                <li>Find local services</li>
                <li>Add / View service history</li>
                <li>View service deadlines</li>
                <li>AI customer support</li>
                <li>View browser notifications</li>
              </ul>
               Integrates APIs for maps, images, geocoding, and AI.<br/><br />
               Worked with a team of 5 people as the primary developer and team lead, implementing nearly all core features end to end (except the initial "Find local services" page, the home page, and some frontend work).
               <br /><br />
               
              <a href="https://github.com/saleh-programs/car-maintenance-site" target='_blank'>Github Repo</a>
            </div>
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <strong>Technologies</strong>
                <li>Language(s): JavaScript, Python</li>
                <li>Database: SQLite</li>
                <li>Frontend: React</li>
                <li>Backend: Express</li>
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
                <li>Heavy input validation</li>
                <li>UI / UX Design</li>
              </ul>
              </div>
          </div>
      </div>
    );
}

function OMREFragrancesProject(){
    return(
      <div className={styles.inside}> 
          <div className={styles.demo_imgs_car}> 
            <img src={omre1} alt="" />
            <video autoPlay loop muted playsInline preload="auto" src={omre2} alt="" />
            <video autoPlay loop muted playsInline preload="auto" src={omre3} alt="" />
            <video autoPlay loop muted playsInline preload="auto" src={omre4} alt="" />
          </div>
          <div className={styles.descConcContainer}>
            <div className={styles.description}>
              <h2 >Description</h2>
              OMRE Fragrances is a company that sells colognes, perfumes, and similar products. This is a senior capstone project that worked with the owner of the company to develop a 
              website platform from scratch.
              <br /><br />
              Worked with an excellent team of 4 and served as the backend lead, overseeing any interations with the database, the main API, the wiring of various AWS services, and anything related to the app's schema and architecture.
              Also made significant contributions in the frontend. 
              <br /><br />

              The following features are included:
              <ul>
                <li>Create account / Log in</li>
                <li>Admin Panel</li>
                <li>Orders / Cart</li>
                <li>Product Reviews</li>
                <li>Store Credit</li>
                <li>Search / filter functionalities</li>
                <li>Create Custom Blends</li> 
                <li>Profile Management</li>
              </ul>

              <h3 style={{marginBottom: "0"}}><strong>Main Contributions:</strong> </h3>
              <span style={{fontSize: ".8em"}}>(Where attention was focused, also made many modifications all throughout application) </span>
              <ul>
                <strong>Backend-Related</strong>
                <li>Most API endpoints and corresponding requests</li>
                <li>Most database classes and methods</li>
                <li>All middleware and token management</li>
                <li>All schema management</li>
                <li>Test flows for all API endpoints</li>
                <li>Managed all "interfaces" (requests, api handlers, api controllers, database classes / methods, tests)</li>
                <br />
                <strong>Frontend-Related</strong>
                <li>Product Detail Page</li>
                <li>Any page with reviews or store credit</li>
                <li>All image handling</li>
                <li>All search / filter functionalities</li>
                <li>Redesigns / enhancements in the admin panel (all tabs)</li>
                <li>"Save for later" on the Cart page</li>
              </ul>

              Other contributions may include bug fixes, styling adjustments, optimizations (moreso readability and consistency than performance), security enhancements (enforcing token usage),  and logic that was written in the backend for another to develop in the front end.
              <br /><br />
              <a href="https://github.com/omre-r/omre-platform/tree/main" target='_blank'>Github Repo</a>
            </div>
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <strong>Technologies</strong>
                <li>Language(s): JavaScript</li>
                <li>Database: PostgreSQL</li>
                <li>Frontend: React</li>
                <li>Backend: Express</li>
                <li>Images: AWS S3</li>
                <li>Emails: AWS SES</li>
                <li>Image CDN: AWS CloudFront</li>
                <li>Database Hosting: AWS RDS</li>
                <li>Access Management: AWS IAM</li>
                <li>Signup + login + tokens: AWS Cognito</li>

                <br />
                <strong>Concepts</strong>
                <li>Admin panel (user, product, & order management)</li>
                <li>Product reviews</li>
                <li>Store credit</li>
                <li>Advanced search / filter</li>
                <li>Signup / Login</li>
                <li>User profile</li>
                <li>Mixology (custom blend creation)</li>
                <li>Cart / Saved items</li>
                <li>Order creation</li>
                <li>Managing / Debugging related interfaces</li>
                <li>Managing image lifecycle rules on S3</li>
                <li>Transaction wrappers for safe database rollbacks on failure</li>
                <li>Consistent error handling</li>
                <li>Heavy input validation</li>
                <li>UI / UX design</li>
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
            <video autoPlay loop muted playsInline preload="auto" src={s3fsflowGIF} alt="" />
            <img src={s3fsflowPNG} alt="" />
            <iframe src="https://www.youtube.com/embed/_VpKkgdseCU?autoplay=1&mute=1&loop=1&playlist=_VpKkgdseCU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
          </div>
          <div className={styles.descConcContainer}>
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
              S3FS (specifically s3fs-fuse) is a Linux command line tool that works with S3, allowing users to interact with the files stored on S3 as if they were on their local
              file system. 
              <br /><br />
               
              <a href="https://github.com/saleh-programs/secure-s3fs-fuse.git" target='_blank'>Github Repo</a>
            </div>
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <strong>Technologies</strong>

                <li>Language(s): C++</li>
                <li>s3fs</li>
                <li>AWS S3</li>
                <li>Encryption / Decryption: <br />
                  OpenSSL using aes-256-cbc</li>
                <li>Compression / Decompression: <br /> zstd</li>
                <li>Linux OS</li>
                <br />
                <strong>Concepts</strong>
                <li>File level compression</li>
                <li>Chunk level encryption </li>
                <li>Multithreading</li>
                <li>Memory management</li>
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
            <video autoPlay loop muted playsInline preload="auto" src={fileadv1} alt="" />
            <video autoPlay loop muted playsInline preload="auto" src={fileadv2} alt="" />
            <video autoPlay loop muted playsInline preload="auto" src={fileadv3} alt="" />
            <video autoPlay loop muted playsInline preload="auto" src={fileadv4} alt="" />
          </div>
          <div className={styles.descConcContainer}>
            <div className={styles.description}>
              <h2>Description</h2>
              "File Adventurer" is my take on a cleaner, more intuitive version of Windows File Explorer. I built it to reduce clutter and add features I felt were missing in the built in file system, based on my frequent use of it.
              <br/><br/>
              Includes an optimized recursive search and a priority queue based "Recent Folders" feature. File Explorer would often take very long for basic searches. Scanning a drive to locate a file would take over 9 minutes, whereas File Adventurer completed it in 8 seconds (68x faster).
              <br /><br /> 
              Implemented many conveniences such as allowing navigation while dragging and offering different "view modes". <br /> I created some custom assets and animations to add a unique personality. <br/><br />
              Features include:<br />
              <ul>
                <li>Folder navigation & file access</li>
                <li>Create, delete, drag & drop </li>
                <li>Pin, hide, & rename entries</li>
                <li>Sort by name, creation date, or modified date</li>
                <li>Track recent folders / Quick access</li>
                <li>Search for folders / files</li>
                <li>Tree Mode: View all entries in a traditional nested environment</li>
                <li>Stack Mode: View the hierarchical structure of a specific path</li>
              </ul>
              <span style={{color:'red'}}><span style={{fontSize:'1.5em'}}>NOTE:</span> Your download of the app's installer may be flagged by antivirus tools such as Microsoft Defender. I have no ill intent, these warnings only appear because they are less likely to trust apps that haven't purchased a signed certificate. </span><br />
              <a href="https://github.com/saleh-programs/file-adventurer" target='_blank'>Github Repo</a>
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
function APIGlueProject(){
      return(
      <div className={styles.inside}> 
        <div className="columncontainer">
          <div className={styles.demo_imgs_apiglue}>
            <img src={apiGlue1} alt="" />
            <img src={apiGlue2} alt="" />
            <img src={apiGlue3} alt="" />
            <iframe src="https://www.youtube.com/embed/7Vz3ubHO5-4?autoplay=1&mute=1&loop=1&playlist=7Vz3ubHO5-4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
          </div>
          <div className={styles.descConcContainer}>
            <div className={styles.description}>
              <h2>Description</h2>
              It's pretty bothersome to have to constantly check if all of your projects' external dependencies (such as APIs) are still working. 
              WayneHacks4 has presented me with the opportunity to create a solution to a problem I've had for a very long time! <br /> 
              APIGlue allows you to add your "projects" and view if all their dependencies are up and running.<br />
              You can add dependencies by heading into "View Dependencies", adding a title for a dependency, and then modifying a sample function to make a request to the API using built in code environments. 
              Additionally, you can customize what is considered "passing", as well as the response value! 
              <br /><br />APIGlue doubles as a <strong>testing framework</strong> that shows you if all of your local tests have passed or failed. 
              You can link a file (that meets a few formatting criteria) to run all these tests automatically or when prompted.

              <br /><br />
              <h3><strong>Why this tool is useful:</strong></h3>
              External APIs always break, especially if you're someone who uses free tiers. Here are common examples of APIs breaking that I've personally experienced
              and had no idea until quite a bit of time had passed:
              <ul>
                <li>Groq API: A model had been deprecated</li>
                <li>OpenAI API: Free trial had expired</li>
                <li>Google Places API: Needed to verify email again</li>
                <li>Namecheap Domain Provider: Needed to verify email again ("projectplace.space" site was down until resolved)</li>
              </ul>
              Other services I use such as AWS, Auth0, or CloudFlare also have the potential to break at any point. APIGlue helps by keeping us from having to worry about things we can't control.
              
              <br /><br /> <a href="https://github.com/saleh-programs/hackathon-api-glue" target='_blank'>Github Repo</a>
            </div>
            
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <strong>Technologies</strong>
                <li>Language(s): JavaScript</li>
                <li>Frontend: React</li>
                <li>Backend: Express</li>
                <li>Code Editing: CodeMirror</li>
                <br />
                <strong>Concepts</strong>
                <li>Heavy file handling</li>
                <li>Embedded code editing</li>
                <li>Validating file structure</li>
                <li>Automating checks</li>
                <li>Regex for finding / interacting with dependency functions</li>
                <li>Consistent error handling</li>
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
            <video autoPlay loop muted playsInline preload="auto" src={physics1} alt="" />
            <video autoPlay loop muted playsInline preload="auto" src={physics2} alt="" />
            <video autoPlay loop muted playsInline preload="auto" src={physics3} alt="" />
            <video autoPlay loop muted playsInline preload="auto" src={physics4} alt="" />

          </div>
          <div className={styles.descConcContainer}>
            <div className={styles.description}>
              <h2 >Description</h2>
              A game designed to help physics students improve at solving kinematics based physics problems! Join Willow on a journey gliding through the air and sprinting on foot, all while solving word problems related to his situation. Maybe you'll even get to chat with him if you do well enough!
              <br/><br/>
              The game contains 10 levels of progressing difficulty and 3 questions each. Level 10 connects to the OpenAI API to allow you to chat with Willow.<br/><br />
              <a href="https://github.com/saleh-programs/physics-practice-tool" target='_blank'>Github Repo</a>
            </div>
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <strong>Technologies</strong>
                <li>Language(s): Python</li>
                <li>2D graphics library : Pygame</li>
                <li>AI chatbot: OpenAI API</li>
                <br />
                <strong>Concepts</strong>
                <li>Motion physics</li>
                <li>State management</li>
                <li>Collision logic</li>
                <li>Camera system</li>
                <li>Created reusable level-based framework</li>
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
            <video autoPlay loop muted playsInline preload="auto" src={pygame1} alt="" />
            <video autoPlay loop muted playsInline preload="auto" src={pygame2} alt="" />
            <video autoPlay loop muted playsInline preload="auto" src={pygame3} alt="" />
            <video autoPlay loop muted playsInline preload="auto" src={pygame4} alt="" />
          </div>
          <div className={styles.descConcContainer}>
            <div className={styles.description}>
              <h2>Description</h2>
              A Hollow Knight inspired game made in Pygame with custom animations! The player can slash, shoot, and swing faced against enemies with unique logic!
              <br/><br/>
              Gained a lot of skills navigating this somewhat large project and working with more complex solutions.<br/>
              Although unfinished, a lot was learned from all the effort dumped into custom enemy behaviors, the terrain system, camera perspectives, and much more. 
              <br /> <br />
              <a href="https://github.com/saleh-programs/platformer-game" target='_blank'>Github Repo</a>
            </div>
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <strong>Technologies</strong>
                <li>Language(s): Python</li>
                <li>2D graphics library : Pygame</li>
                <li>Map editor: Tiled</li>
                <br />
                <strong>Concepts</strong>
                <li>Motion physics</li>
                <li>State management</li>
                <li>Health / Damage system</li>
                <li>Camera system</li>
                <li>Custom multi-layered parallax background</li>
                <li>Melee, shooting, and grappling hook mechanics</li>
                <li>Enemy behavior logic</li> 
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
          <div className={styles.descConcContainer}>
            <div className={styles.description}>
              <h2>Description</h2>
              Used 2 machine learning models (ANN and Decision Tree) to analyze trends in individual CPI sectors (gasoline, food, energy, etc.) and predict if overall inflation will rise. The F1 scores (performance scores) for both models are provided.<br/><br/>
              
              ANN model: 92% <br/>
              Decision Tree Model: 80%<br/><br />
              
              Worked with a team of 8, taking a lead coordinating meetings and assigning sections for the final report. Completed all decision tree / ANN modeling, performance measuring, and data preprocessing / processing.  <br />
              All code within the repository is written by myself.<br />
              <br /><br />
              Note: The model does somewhat struggle due to limited data and some existing bias. However, it still reveals inflation trends with reasonable accuracy.
              <br /><br />
              <a href="https://github.com/saleh-programs/inflation-predictor" target='_blank'>Github Repo</a>
            </div>
            <div className={styles.concepts}>
              <h2>Concepts & Technologies</h2>
              <ul>
                <strong>Technologies</strong>
                <li>Language(s): Python</li>
                <li>Decision trees: Scikit-Learn</li>
                <li>Artificial neural networks: TensorFlow / Keras</li>
                <li>Data manipulation: Pandas</li>
                <li>Data visualization: Matplotlib</li>
                <br />
                <strong>Concepts</strong>
                <li>Machine learning algorithms
                  <ul>
                    <li>Artificial neural networks</li>
                    <li>Decision trees</li>
                  </ul>
                </li>
                <li>Preprocessing data stored in CSV files </li>
                <li>Processing output into graphs / visuals</li>
                <li>Measuring ML model performance</li>
              </ul>
            </div>
          </div>
      </div>
    );
}

const contentDict = {
  "projectPlace": <ProjectPlaceProject/>,
  "omreFragrances": <OMREFragrancesProject/>,
  "carMaintenance": <CarMaintenanceProject/>,
  "fileAdventure": <FileAdventurerProject/>,
  "apiGlue": <APIGlueProject/>,
  "physicsTool": <PhysicsToolProject/>,
  "platformer": <PlatformerProject/>,
  "stockMarket": <StockMarketProject/>,
  "secureS3FS": <SecureS3FSProject/>

}
export default contentDict;