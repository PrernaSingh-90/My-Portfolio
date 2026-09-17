import React from "react";
import { DownloadIcon, Mail } from "lucide-react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import myresume from "../assets/my-resume.pdf";
import hero01 from "../assets/hero01.png";
import hi from "../assets/hi.png";

const Hero = ({ darkMode }) => {
  const socialIcons = [
    { 
      icon: linkedin, 
      alt: "Linkedin",
      link: "https://www.linkedin.com/in/prerna-singh-299265157/" 
    },
    { 
      icon: github, 
      alt: "Github",
      link: "https://github.com/PrernaSingh-90/"
     },
    { icon: gmail, 
      alt: "Gmail",
      link: "mailto:priyasingh.sp98@gmail.com" },
  ];

  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    buttonSecondary: `text-white border-2 border-orange-500 hover:bg-orange-600`,
    decorativeCircle: "bg-orange-500 opacity-10",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    buttonSecondary: `text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white`,
    decorativeCircle: "bg-orange-400 opacity-20",
  };

  const theme = darkMode ? darkTheme : lightTheme;



return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      <section id="home" className="body-font z-10 grow flex lg:items-end">
        <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-10 lg:py-0 flex-col lg:flex-row items-center justify-between mt-10 lg:mt-0">
          {/* LEFT CONTENT  */}
          <div className="lg:w-1/2 w-full flex flex-col items-start text-left mb-12 lg:mb-0">
            <div
              className="flex justify-start gap-4 mb-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="transform hover:scale-110 transition-all"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain
                     ${darkMode ? "" : "filter brightness-75"}
                     ${(social.alt === "Github" || social.alt === "Gmail" || social.alt === "Linkedin") ? "dark:invert" : ""}`}
                  />
                </a>
              ))}
            </div>

            <h1
              className={`title-font text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold ${theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi, I'm <span className="text-orange-500">Prerna</span>
            </h1>
            <p
              className={`mb-8 leading-relaxed max-w-md text-base sm:text-lg ${theme.textSecondary}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              I craft beautiful, responsive, and user-centric web applications 
              using React.js. Turning complex ideas into seamless digital 
              experiences with clean code.
            </p>

            <div
              className="flex flex-row items-center justify-start gap-4 w-full"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <a href={myresume} download className="w-auto">
                <button className="inline-flex items-center text-white bg-linear-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300">
                  <DownloadIcon className="w-5 h-5 mr-2" /> Download CV
                </button>
              </a>
              <a href="#contact" className="w-auto">
                <button
                  className={`inline-flex items-center ${theme.buttonSecondary} border-2 border-orange-500 py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold transition-all duration-300`}
                >
                  <Mail className="w-5 h-5 mr-2" /> Contact Me
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-8 lg:mt-20 lg:translate-y-10"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative w-full max-w-75 sm:max-w-100 lg:max-w-112.5">
              <div className="relative z-10">
                <img
                  src={hero01}
                  alt="Hero Image"
                  className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <img
                src={hi}
                alt="Hi Icon"
                className="absolute top-9 left-12 sm:top-10 sm:left-10 w-20 h-20 sm:w-40 sm:h-40 object-contain animate-bounce opacity-90 z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <div
        className={`absolute -bottom-20 -right-20 w-64 h-64 sm:w-96 sm:h-96 ${theme.decorativeCircle} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse hidden sm:block`}
      ></div>
    </div>
  );
};
export default Hero;
