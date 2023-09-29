import React from "react";
import Image from "react-bootstrap/Image";

import L_HTML5 from "../IMAGES/html-5.svg";
import L_CSS3 from "../IMAGES/css3.svg";
import L_BOOTSTRAP from "../IMAGES/bootstrap-4.svg";
import L_REACT from "../IMAGES/react.svg";
import L_REDUX from "../IMAGES/redux.svg";
import L_MATERIALUI from "../IMAGES/material-ui-1.svg";
import L_REACT_BOOTSTRAP from "../IMAGES/react-bootstrap.svg";
import L_GIT from "../IMAGES/git-icon.svg";
import L_GITHUB_PAGES from "../IMAGES/github.svg";
import L_JAVASCRIPT from "../IMAGES/javascript.svg";
import L_NETLIFY from "../IMAGES/netlify-icon.svg";
import L_MYSQL from "../IMAGES/mssql.svg";
import L_MONGO from "../IMAGES/mongodb.svg";
import { Button } from "@mui/material";

import "./project.css";

function Project3() {
  return (
    <div>
      <div className="d-flex flex-column justify-content-start align-items-start ju">
        <strong>Description:</strong>    
        <p> This is an Simple school Management App to add Student, teachers and maintain thier score card using context in react.
        </p>
      </div>
      <hr />
      <div className="d-flex flex-column justify-content-start align-items-start ju">
        <strong>Features:</strong>
        <p>
          Powered by React Functional Component,Bootstrap, JavaScript
          and CSS
        </p>
        <p>Responsive Design</p>
      </div>
      <hr />
      <div className="d-flex flex-column justify-content-start align-items-start ju">
      <strong>Tech used:</strong>

</div>
      <div className="d-flex justify-content-around mt-2">
        <span className="">
          <Image
            src={L_HTML5}
            alt="HTML 5"
            rounded
            className="image-style"
          ></Image>{" "}
          HTML5
        </span>

        <span className="">
          <Image
            src={L_CSS3}
            alt="CSS 3"
            rounded
            className="image-style"
          ></Image>{" "}
          CSS3
        </span>

        <span className="">
          <Image
            src={L_JAVASCRIPT}
            alt="JavaScript"
            rounded
            className="image-style1"
          ></Image>{" "}
          JavaScript
        </span>
        <span className="">
          <Image
            src={L_REACT}
            alt="React"
            rounded
            className="image-style1"
          ></Image>{" "}
          React
        </span>
      </div>
      <p>etc..</p>
    </div>
  );
}

export default Project3;
