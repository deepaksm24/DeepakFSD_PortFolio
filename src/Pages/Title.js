import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { pink } from '@mui/material/colors';

const MyTitleMessage = styled.h1`
  
font-family: 'Goldman', cursive;
  top: 22rem;
  z-index: 1;
  margin-top: 60px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  .heading  {
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    .main {
      font-size: 50px;
    }
    .sub {
      color: red;
      font-size: 27px;
      letter-spacing: 2px;
      text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.4);

    }
  }
`;

const TitleMessage = () => (
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-left mb-3">
            Hi, this is
            <br />
            <span>
              <strong>Deepak <WavingHandIcon
              sx={{ color: pink[500], fontSize: 50 }}
              id="iconrotate"
              /></strong>

            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "Tech Enthusiast"],
                autoStart: true,
                loop: true,
                delay: 190
              }}
            />
          </div>
        </div>
      </div>
      </MyTitleMessage>
  );
  
  export default TitleMessage;
  