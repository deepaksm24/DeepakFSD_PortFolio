import React from "react";
import githuglogo from "../../src/github.png";
import linkedinlogo from "../../src/linkedin.png";
import Jump from "react-reveal/Jump";
import Resumepage from "./Resumepage";

function Link1icon() {
  return (
    <div>
      <br />
      <Jump>
        <div className="d-flex justify-content-center">
          <a
            href="https://github.com/deepaksm24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="logoabout">
              <img src={githuglogo} className="img-fluid mt-3" alt="" />
            </div>
          </a>
          <div className="logoabout1">
            <img src={linkedinlogo} className="img-fluid" alt="" />
          </div>
        </div>
      </Jump>
      <br />
      <div className="d-flex w-100 justify-content-center">
        <Resumepage />
      </div>
    </div>
  );
}

export default Link1icon;
