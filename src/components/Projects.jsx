import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import ecommerce from "../assets/ecommerce.png";
import chatapp from "../assets/chatapp.png";
import weather from "../assets/weather.png";
import calculator from "../assets/calculator.png";
import searchapp from "../assets/searchapp.png";
import taskapp from "../assets/taskapp.png";

const Projects = ({ darkMode }) => {
  const projects = [
    {
    id: 1,
    title: "Taskify - Full-Stack MERN Application",
    desc: "A comprehensive task management system with secure JWT authentication and real-time CRUD operations. Built using the MERN stack, it features persistent MongoDB storage, dynamic task filtering, and a mobile-first responsive dashboard.",
    techs: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS", "Mongoose", "REST API"],
    image: taskapp,
    code: "https://github.com/PrernaSingh-90/taskapp-fullstack-mern",
    live: "https://taskapp-fullstack-mern.vercel.app/"
  },
  {
    id: 2,
    title: "ShopEase - E-Commerce Platform",
    desc: "A fully functional shopping cart with payment gateway integration and product filtering. A premium e-commerce experience with advanced product filtering, real-time search, and a dynamic shopping cart. Built for seamless performance on mobile, tablet, and desktop.",
    techs: ["React.js", "Modular CSS3", "Javascript(ES6+)", "Context API", "React Hooks(useState, useEffect)"],
    image: ecommerce,
    code: "https://github.com/PrernaSingh-90/mini-ecommerce-app",
    live: "https://prernasingh-90.github.io/mini-ecommerce-app/"
  },
  {
    id: 3,
    title: "Connectly - Real-time Social Chat Platform",
    desc: "A full-stack messaging application with real-time capabilities. Features include instant messaging, user presence (Online/Offline) status, typing indicators, and secure authentication. Built with a focus on real-time data synchronization and smooth UI transitions",
    techs: ["React.js", "Firebase (Auth & Firestore)", "Modular CSS3", "Context API", "Real-time Data Synchronization", "React Router"],
    image: chatapp,
    code: "https://github.com/PrernaSingh-90/chat-app",
    live: "https://chat-app-cyan-one-54.vercel.app/"
  },
  {
    id: 4,
    title: "SkyCast - Dynamic Weather Dashboard",
    desc: "A high-performance weather application that provides real-time atmospheric data via OpenWeatherMap API. Implemented dynamic UI backgrounds that change based on current weather conditions, a Recent Search history feature, and a sleek glassmorphic design for an enhanced user experience.",
    techs: ["React.js", "OpenWeather API", "Modular CSS3", "LocalStorage", "Glassmorphism", "JavaScript (ES6+)", "Custom Hooks"],
    image: weather,
    code: "https://github.com/PrernaSingh-90/weather-app",
    live: "https://weather-app-orcin-psi-ljzsz1xgwq.vercel.app/"
  },
  {
    id: 5,
    title: "Advanced JS Calculator - Logic & UI Project",
    desc: "A sleek and responsive calculator built using Vanilla JavaScript and modern CSS. It features a high-contrast dark theme, advanced arithmetic logic, and a mobile-first design. Focused on clean DOM manipulation and precise mathematical operations.",
    techs: ["HTML5", "CSS3", "Vanilla JS (ES6+)", "Custom Math Engine (No-Eval)", "Logic Building", "Responsive Design", "State Management"],
    image: calculator,
    code: "https://github.com/PrernaSingh-90/advanced-js-calculator",
    live: "https://advanced-js-calculator-three.vercel.app/"
  },
  {
    id: 6,
    title: "SmartSearch - Real-time User Filtering",
    desc: "A lightweight and efficient search application that filters through user datasets in real-time as you type. Features include instant data rendering, auto-generated user avatars, and a clean, mobile-responsive interface for seamless data navigation.",
    techs: ["HTML5", "CSS3", "State Management", "JSON Data", "Filtering Logic", "Responsive UI"],
    image: searchapp,
    code: "https://github.com/PrernaSingh-90/Live-Search-App",
    live: "https://live-search-app.vercel.app/"
  },
];
  return (
    <section id='projects' style={{
      backgroundColor: darkMode ? '#111827' : '#f9fafb'
    }} className='relative py-24'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-10'
        data-aos='fade-up'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-3'
          style={{ color: darkMode ? 'white' : '#1f2937'}}>
          My <span style={{ background: 'linear-gradient(to right, #f97316, #f59e0b',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>Projects</span>
          </h2>
          <p className='max-w-xl mx-auto'
          style={{ color: darkMode ? '#d1d5db' : '#6b7280'}}>
            A Showcase of my recent work
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
          {projects.map((project, index) => (
            <div key={project.id} style={{
              background: darkMode 
              ? 'linear-gradient(to right, #1f2937, #111827)'
              : 'linear-gradient(to right, #ffffff, #f9fafb)',
              backgroundColor: darkMode ? '#374151' : '#e5e7eb'
            }} className='group rounded-xl border duration-300
             hover:border-orange-500/50 transition-all'
             data-aos='fade-up'
             data-aos-delay={index * 100}>
              {/* <div className='h-36 overflow-hidden rounded-t-xl'> */}
              <div className='h-52 sm:h-60 overflow-hidden rounded-t-xl flex items-center justify-center p-2'
              style={{ backgroundColor: darkMode ? '#1f2937' : '#f3f4f6' }}>

                <img src={project.image} alt={project.title}
                className='w-full h-full object-contain group-hover:scale-110 
                transition-transform duration-500'/>
              </div>
              <div className='p-4'>
                <h3 className='text-lg font-bold mb-2'
                style={{ color: darkMode ? 'white' : '#1f2937'}}>
                  {project.title}
                </h3>
                <p className='text-sm mb-3'
                style={{ color: darkMode ? '#d1d5db' : '#6b7280'}}>
                  {project.desc}
                </p>
                <div className='flex flex-wrap gap-1.5 mb-4'>
                  {project.techs.map((tech, idx) => (
                    <span key={idx} style={{
                      backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                      color: darkMode ? '#d1d5db' : '#4b5563'}}
                      className='px-2 py-1 text-sm rounded-full'>
                        {tech}
                      </span>
                  ))}
                </div>
                <div className='flex gap-2'>
                  {/* code */}
                  <a href={project.code}
                  target="_blank"
                  rel="noreferrer"
                   style={{
                    backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                    color: darkMode ? 'white' : '#374151'
                  }} 
                  className='flex-1 flex items-center justify-center gap-1.5 px-3
                   py-2 text-sm rounded-lg hover:opacity-90 transition-colors'
                   data-aos='zoom-in'
                   data-aos-delay='300'>
                    <FaGithub className='text-sm'/>
                    <span>Code</span>
                   </a>
                    {/* demo */}
                    <a href={project.live}
                    target="_blank"
                    rel="noreferrer"
                     style={{
                      background: 'linear-gradient(to right, #f97316, #f59e0b)',
                  }} 
                  className='flex-1 flex items-center justify-center gap-1.5 px-3
                   py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 
                   transition-all'
                   data-aos='zoom-in'
                   data-aos-delay='400'>
                    <FaExternalLinkAlt className='text-sm'/>
                    <span>Demo</span>
                   </a>
                </div>
              </div>
             </div>
          ))}
        </div>
        <div className='text-center mt-10'>
           <a href="https://github.com/PrernaSingh-90/"
            target="_blank"
            rel="noreferrer" 
           style={{
              background: 'linear-gradient(to right, #f97316, #f59e0b)',
            }} 
              className='inline-flex items-center font-semibold gap-2 px-7 py-2
               text-white text-sm rounded-full hover:shadow-lg 
               hover:shadow-orange-500/25 transition-all'
                data-aos='zoom-in'
                data-aos-delay='400'>
                <FaGithub />
                <span>View All Projects</span>
                <FaExternalLinkAlt className='text-sm'/>
                </a>
        </div>
      </div>
    </section>

  )
}

export default Projects
