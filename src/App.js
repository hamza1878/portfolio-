
import './App.css';
import Skillfrond from './skillsfront';
import Skillbackend from './skillsbackend';
import DesignSkills from './DesignSkills';
import Project from './Project'
import Apiskills from './ApiSkills'
import Certificat from'./certificat'
import { motion } from "framer-motion";
import FloatingCircles from './FloatingCircles'
const imagepath = require("./assets/image.png");
const insta = require("./assets/instagram.png");
const linkedin = require("./assets/linkedin.png");
const git = require("./assets/sociale.png");
const dv = require("./assets/la7miz.png");
const frontend=require("./assets/frontend.jpg");
const backend=require("./assets/backend.jpg");
const lycee=require("./assets/lycee.jpeg");
const iset=require("./assets/iset.png")

function App() {
  return (

<div className="App min-h-screen bg-gray-900">
        <div className="relative h-screen">
          <img
            src={imagepath}
            className="w-full h-full   shadow-xl shadow-blue-500/10 object-cover object-center"
            alt="Background" />

          <nav className="absolute left-0   top-0 w-full">
            <div className="container mx-auto  px-4 sm:px-6 lg:px-8">
              <div className="flex justify-end  gap-6 space-x-16 text-xl md:gap-8 py-6 font-bold text-white ">
                <a href="#about" className="hover:text-blue-400 transition-colors ">ABOUT</a>
                <a href="#home" className="hover:text-blue-400 transition-colors">HOMEPAGE</a>
                <a href="#work" className="hover:text-blue-400 transition-colors">WORK</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">CONTACT</a>
              </div>
            </div>
          </nav>

          <div className="absolute animate-wiggle-more animate-thrice inset-0 flex items-center justify-center bg-black/40">
            <div className="text-center space-y-6">
              <h1 className="text-5xl md:text-8xl animate-wiggle-more animate-thrice font-bold text-white animate-bounce rounded  px-4 py-2 font-bold text-white">
                Hamza Ben Sassi
              </h1>
              <p className="text-xl md:text-3xl text-blue-400 ">
                Full-Stack Developer
              </p>

              <div className="flex justify-center gap-6 mt-8">
                <a href="#linkedin" className="hover:scale-110 transition-transform">
                  <img src={linkedin} className="w-12  h-12" alt="LinkedIn" />
                </a>
                <a href="#instagram" className="hover:scale-110 transition-transform">
                  <img src={insta} className="w-12 h-12" alt="Instagram" />
                </a>
                <a href="#github" className="hover:scale-110 transition-transform">
                  <img src={git} className="w-12 h-12" alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">

          <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <div className=" bg-gray-900 rounded-lg shadow-lg w-full md:w-1/2 transform duration-500 hover:translate-x-5 hover:-translate-y-5 pointer-events-none lg:w-1/2 shadow-xl shadow-blue-500/40">
              <img
                src={dv}
                className="rounded-lg rounded-lg shadow-lg transform duration-500 hover:-translate-x-10 hover:translate-y-10 pointer-events-auto   shadow-xl shadow-blue-500/40  w-full max-w-lg mx-auto animate-wiggle-more animate-twice animate-duration-[2ms] animate-delay-[2ms]"
                alt="Profile" />
            </div>

            <div className="lg:w-1/2 space-y-6">
              <h2  className=" text-4xl font-bold text-blue-400 hover:scale-110 transition-transform ">ABOUT ME</h2>
              <p className="text-2xl font-medium text-gray-100 hover:scale-110 transition-transform">
                I'm Ben Sassi Hamza
              </p>
              <div className="space-y-4 text-left text-xl text-gray-300">
                <p>
                I am passionate about software development and web technologies. As a software engineer and full-stack developer, I have expertise in React.js, Angular, Node.js, Express.js, Flask, Python, MySQL, MongoDB, and Flutter. Constantly eager to learn, I am also exploring PHP to expand my skill set.                  </p>
                <p>
I have worked on various projects, from building web and mobile applications to database management and chatbot development. My goal is to design efficient and intuitive solutions while ensuring an excellent user experience.                 </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-6xl font-bold text-blue-400 mb-12 animate-pulse rounded  ">
              WHAT I DO
            </h2>

            <div className="grid md:grid-cols-2  gap-8 max-w-8xl  mx-auto">
              <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-6 mb-6">
                  <img
                    src={frontend}
                    className="w-24 h-24 rounded-full object-cover"
                    alt="Frontend Development" />
                  <h3 className="text-2xl font-bold text-gray-100">
                    Front-end Development
                  </h3>
                </div>
                <p className="text-gray-300 text-left pl-8 text-xl">
                  Front-end development focuses on building the visual and interactive parts of a website, ensuring a smooth user experience.
                </p>
              </div>
              <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-6 mb-6">
                  <img
                    src={backend}
                    className="w-24 h-24 rounded-full object-cover"
                    alt="Frontend Development" />
                  <h3 className="text-2xl font-bold text-gray-100">
                    Back-End Development
                  </h3>
                </div>
                <p className="text-gray-300 text-left pl-8 text-xl">
                  Back-end development manages server-side logic, databases, and application functionality to support front-end interactions.
                </p>
              </div>


            </div>
            <div className='space-y-6 mt-6'>
              <div className="grid md:grid-cols-2 gap-8 max-w-8xl   mx-auto">
                <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex text-center items-center gap-6 mb-6">

                    <h3 className="text-2xl font-bold text-center text-gray-100">
                      Front-end Development skills
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    <Skillfrond />              </p>
                </div>
                <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex text-center items-center gap-6 mb-6">

                    <h3 className="text-2xl font-bold  text-gray-100">
                      Back-End Development skills
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    <Skillbackend />
                  </p>

                </div>

              </div>
              <div className='space-y-6 mt-6'>
                <div className="grid md:grid-cols-2 gap-8 max-w-8xl   mx-auto">
                  <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex text-center items-center gap-6 mb-6">


                    </div>
                    <p className="text-gray-300">
                      <DesignSkills />              </p>
                  </div>
                  <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex text-center items-center gap-6 mb-6">


                    </div>
                    <p className="text-gray-300">
                      <Apiskills />
                    </p>

                  </div>

                </div>
              </div>
            </div>

          </div>
          <section className="py-20 bg-gray-900">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-center text-left text-6xl font-bold text-blue-400 mb-12 animate-pulse rounded ">
                Education
              </h2>
              <div className="flex space-x-6 text-white text-xl space-y-6 text-left p-4 pl-16">
                <img src={lycee} className='border  shadow-xl shadow-blue-500/40 max-w-56 max-h-56 space-y-4 rounded-full space-x-4 animate-pulse rounded  ' />

                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 w-[1000px] rounded-lg shadow-lg">

                    <h3 className="text-2xl font-bold text-blue-400 mb-4">Computer Science High School Diploma</h3>
                    <p className="text-gray-300">Atef Chaieb, Hammamet (2019 - 2023)</p>
                    <ul className="list-disc pl-6 w-256 space-y-2 text-gray-400">
                      <li>Studied fundamentals of programming, algorithms, data structures, and database management.</li>
                      <li>Training in advanced mathematics and applied physics.</li>
                      <li>Prepared for higher education in computer science and engineering.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 bg-gray-900">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

              <div className="flex space-x-6 text-white text-xl space-y-6 text-left p-4 pl-16 ">
                <img src={iset} className='border shadow-xl shadow-blue-500/40  max-w-56 max-h-56 space-y-4 rounded-full space-x-4  animate-pulse rounded  ' />

                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 w-[1000px] rounded-lg shadow-lg">

                    <h3 className="text-2xl font-bold text-blue-400 mb-4">Multimedia et Developpement Web
                    </h3>
                    <p className="text-gray-300">Higher Institute of Technological Studies of Nabeul (2023 - 2026)</p>
                    <ul className="list-disc pl-6  space-y-2 text-gray-400">
                      <li>I studied topics such as Advanced Web
                        Development, Database Management, and
                        Interactive Multimedia Content Creation.
                        .</li>
                      <li>I implemented several practical projects using
                        modern web technologies (HTML, CSS, JavaScript,
                        PHP, MySQL) and multimedia tools (Photoshop, After
                        Effects) as part of my training in Multimedia and
                        Web Development..</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-center text-left text-6xl font-bold text-blue-400 mb-12 animate-pulse rounded ">
                Experience
              </h2>

              <div className="text-white text-xl space-y-6 text-left p-4">
                <p>
                  As a  space-x-4-Stack Developer, I have developed and maintained web applications with both front-end and back-end components, working closely with cross-functional teams to deliver optimal solutions. Below are the key responsibilities and skills acquired throughout my experience:
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">Front-End Development:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Developed responsive, user-friendly web interfaces using Angular.js, HTML5, CSS3, Tailwind CSS, and JavaScript.</li>
                      <li>Integrated RESTful APIs to retrieve and display data dynamically from the back end.</li>
                      <li>Applied React Hooks, Redux, and Context API for managing state in large-scale applications.</li>
                      <li>Ensured cross-browser compatibility and mobile responsiveness with CSS media queries and Flexbox/Grid.</li>
                      <li>Optimized performance and loading times by applying lazy loading and code-splitting techniques.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">Back-End Development:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Built and deployed RESTful APIs using Node.js and Express.js to handle business logic, authentication, and database interactions.</li>
                      <li>Worked with MySQL and MongoDB for relational and NoSQL database management, implementing efficient queries and optimizing data models.</li>
                      <li>Used Git for version control and collaborated using GitHub to manage project repositories.</li>
                      <li>Automated testing and deployment pipelines using Jest for unit testing and GitHub Actions for CI/CD.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">Project Highlights:</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                      <h4 className="text-xl font-bold text-gray-100">E-Commerce Web App</h4>
                      <p className="text-gray-300">
                        Developed a fully functioning e-commerce site with shopping cart, user authentication, order management, and payment integration.
                      </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                      <h4 className="text-xl font-bold text-gray-100">Social Media Platform</h4>
                      <p className="text-gray-300">
                        Designed a platform for user interaction with features such as real-time messaging, media uploads, and post sharing, using Angular and React.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">Skills:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-300">Front-End:</h4>
                      <p className="text-gray-400">React.js, HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300">Back-End:</h4>
                      <p className="text-gray-400">GraphQL, Node.js, Express.js, Python, Flask, MySQL, MongoDB, REST APIs</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300">DevOps:</h4>
                      <p className="text-gray-400">Docker, Git</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300">Tools:</h4>
                      <p className="text-gray-400">VS Code, Postman, GitHub</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          <section>
            <div className='text-center text-6xl font-bold text-blue-400 mb-12 animate-pulse rounded '>LATEST PROJECTS</div>
            <div className="flex text-center justify-center items-center p-16">
              <Project />

            </div>
          </section>
          <section>
            <div className='text-center text-6xl font-bold text-blue-400 mb-12 animate-pulse rounded '>LATEST PROJECTS</div>
            <div className="flex text-center justify-center items-center p-16">
              <Certificat />

            </div>
          </section>

        </section>
      </div>
  );
}

export default App;
