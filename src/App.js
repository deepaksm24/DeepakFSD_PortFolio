import { Link } from "@mui/material";
import About from "./Pages/About";
// import Navbar from "./Pages/Navbar";
import TransNav from "./Pages/TransNav";
import Sphere from "./Pages/iconcloud";
import Link1icon from "./Pages/Linkicon";
import Skills from "./Pages/Skills";
import CustomizedTimeline from "./Pages/PROJECTS/Projectroot";
import Aboutme from "./Pages/Aboutme";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      
      <TransNav />
      <div className="content">
        <div id="about" className="container mt-5">
          <div className="row justify-content-md-center justify-content-lg-center">
            <div className="col-lg-6 col-md-6 col-sm-12 justify-content-center">
              <About />
            <Link1icon/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 justify-content-md-center justify-content-lg-center justify-content-md-center justify-content-sm-center">
              <Sphere />
            </div>
          </div>
        </div>
        <div id="aboutme" className="p-5">
          <Aboutme/>
        </div>
        <div id="skills" className="p-5">
          <Skills/>
        </div>
        <div id="projects" className="">
          <CustomizedTimeline/>
        </div>
        <div id="contact" className="p-5 m-5">
          <Contact/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
