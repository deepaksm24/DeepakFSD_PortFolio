import L_HTML5 from "../Pages/IMAGES/html-5.svg";
import L_CSS3 from "../Pages/IMAGES/css3.svg";
import L_BOOTSTRAP from "../Pages/IMAGES/bootstrap-4.svg";
import L_REACT from "../Pages/IMAGES/react.svg";
import L_REDUX from "../Pages/IMAGES/redux.svg";
import L_MATERIALUI from "../Pages/IMAGES/material-ui-1.svg";
import L_REACT_BOOTSTRAP from "../Pages/IMAGES/react-bootstrap.svg";
import L_GIT from "../Pages/IMAGES/git-icon.svg";
import L_GITHUB_PAGES from "../Pages/IMAGES/github.svg";
import L_JAVASCRIPT from "../Pages/IMAGES/javascript.svg";
import L_NETLIFY from "../Pages/IMAGES/netlify-icon.svg"
import L_MYSQL from "../Pages/IMAGES/mssql.svg"
import L_MONGO from "../Pages/IMAGES/mongodb.svg"



export const skills = {
    frontend: [
      {
        link: "https://en.wikipedia.org/wiki/HTML5",
        imgAltText: "HTML 5",
        imgSrc: L_HTML5,
        skillName: "HTML5",
      },
      {
        link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
        imgAltText: "CSS 3",
        imgSrc: L_CSS3,
        skillName: "CSS3",
      },
      {
        link: "https://www.javascript.com/",
        imgAltText: "JavaScript",
        imgSrc: L_JAVASCRIPT,
        skillName: "JavaScript",
      },
    
      {
        link: "https://reactjs.org/",
        imgAltText: "React JS",
        imgSrc: L_REACT,
        skillName: "React JS",
      },
      {
        link: "https://redux.js.org/",
        imgAltText: "Redux",
        imgSrc: L_REDUX,
        skillName: "Redux",
      },
      
    ],
    frameworks:[
        {
            link: "https://material-ui.com/",
            imgAltText: "Material-UI",
            imgSrc: L_MATERIALUI,
            skillName: "Material-UI",
          },
          {
            link: "https://react-bootstrap.github.io/",
            imgAltText: "React Bootstrap",
            imgSrc: L_REACT_BOOTSTRAP,
            skillName: "React Bootstrap",
          },
          {
            link: "https://getbootstrap.com/",
            imgAltText: "Bootstrap",
            imgSrc: L_BOOTSTRAP,
            skillName: "Bootstrap",
          },
          
          
    ],

    hostingPlatforms: [
   
      {
        link: "https://www.netlify.com/",
        imgAltText: "Netlify",
        imgSrc: L_NETLIFY,
        skillName: "Netlify",
      },
      {
        link: "https://pages.github.com/",
        imgAltText: "GitHub Pages",
        imgSrc: L_GITHUB_PAGES,
        skillName: "GitHub Pages",
      },
     
    ],
    databases: [
        {
          link: "https://www.mysql.com/",
          imgAltText: "MySQL",
          imgSrc: L_MYSQL,
          skillName: "MySQL",
        },
        {
          link: "https://www.mongodb.com/",
          imgAltText: "MongoDB",
          imgSrc: L_MONGO,
          skillName: "MongoDB",
        },
    ],
    versionControl: [
      {
        link: "https://git-scm.com/",
        imgAltText: "GIT",
        imgSrc: L_GIT,
        skillName: "GIT",
      },
    ],
  };