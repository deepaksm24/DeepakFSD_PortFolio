import React from "react";
import Tada from "react-reveal/Tada";
import Button from "react-bootstrap/Button";
import Certificate from "./Certificate";

function Aboutme() {
  return (
    <div className="container-fluid">
      <Tada>
        <h1 className="text-center font-details-b">About me</h1>
      </Tada>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
<Certificate/>

        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="profile border border-3 p-3">
            <br />
            Full Stack Web Developer with expertise of React.js, Redux, React
            Hooks, HTML, CSS.
            <br />
            <br />
            Implemented responsive Web Application Projects using
            MaterialUI,Bootstrap and Antd. Proficient in building user-friendly
            interfaces and writing clean, efficient, and scalable code
            <br />
            <br />
            <strong>Languages:</strong> JavaScript, HTML, CSS
            <br />
            <hr />
            <strong>Front-End Frameworks/Libraries:</strong> React, Redux,
            Bootstrap, Material-UI & Antd
            <br />
            <hr />
            <strong> Back-End Frameworks/Libraries:</strong> Node.js, Express.js
            <br />
            <hr />
            <strong>Databases:</strong> MongoDB, MySQL
            <br />
            <hr />
            <strong>Tools/Platforms: </strong>Git, Visual Studio Code, Render,
            Netlify
            <br />
            <hr />I love learning about new technologies, what problems are they
            solving and How can I use them to build better and scalable
            products.
            <br />
            <div className="d-flex justify-content-around mt-2 p-1">
              <a href="#contact">
                <Button className="m-2" variant="outline-primary">
                  Let's talk
                </Button>
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="m-2" variant="outline-success">
                  My Resume
                </Button>
              </a>

             

              <a
                href="https://github.com/deepaksm24"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="m-2" variant="outline-dark">
                  GitHub
                </Button>
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <Button className="m-2" variant="outline-info">
                  LinkedIn
                </Button> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
