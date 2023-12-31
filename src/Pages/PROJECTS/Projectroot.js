import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MovieIcon from "@mui/icons-material/Movie";
import { pink } from "@mui/material/colors";
import Box from "@mui/material/Box";
import SchoolIcon from '@mui/icons-material/School';

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import MovieBook from "./Projectimages/MovieBook.png";
import Zen from "./Projectimages/zenclass.png";
import myschool from "./Projectimages/myschool.png";
import todo from "./Projectimages/Todo.png";



//Skills
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
import { Button, Grid } from "@mui/material";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";


import { topcoder } from "simple-icons";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CustomizedTimeline() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [expanded1, setExpanded1] = React.useState(false);
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const [expanded2, setExpanded2] = React.useState(false);
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };


  const [expanded4, setExpanded4] = React.useState(false);
  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };




  return (
    <div className="">
      
      <h1 className="mt-4 pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline position="alternate">
        {/* project1 and 2 moviebook */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
           <Card className="cardstyleproject2">
              <CardHeader
                title="Zenclass Clone"
                subheader="Clone of Guvi Zenclass Learning Portal"
              />

              <CardMedia
                className="border p-3"
                component="img"
                image={Zen}
                alt=""
              />

              <CardActions disableSpacing>
                <IconButton>
                  <a
                    href="https://guvizenclassclone.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button color="secondary" variant="contained">
                      SEE LIVE
                    </Button>
                  </a>
                </IconButton>
                <IconButton>
                  <a
                    href="https://github.com/deepaksm24/zenclassclone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button color="secondary" variant="contained">
                      CODE
                    </Button>
                  </a>
                </IconButton>
                <IconButton>
                  <ExpandMore
                    expand={expanded1}
                    onClick={handleExpandClick1}
                    aria-expanded={expanded1}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </IconButton>
              </CardActions>
              <Collapse in={expanded1} timeout="auto" unmountOnExit>
                <CardContent>
                  <Project2 />
                </CardContent>
              </Collapse>
            </Card>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <MovieIcon sx={{ color: pink[500], fontSize: 50 }} />{" "}
            </TimelineDot>
            <TimelineDot color="secondary">
            <LaptopMacIcon sx={{ fontSize: 50 }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card
              className="cardstyleproject"
              // style={{width: "22rem"}}
            >
              <CardHeader
                // avatar={
                //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                //     M
                //   </Avatar>
                // }
                title="MovieBook"
                subheader="Simple Movie Booking App - MERN"
              />

              <CardMedia component="img" image={MovieBook} alt="Booking App" />

              <CardActions disableSpacing>
                <IconButton>
                  <a
                    href="https://moviebook-w1wb.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button color="secondary" variant="contained">
                      SEE LIVE
                    </Button>
                  </a>
                </IconButton>
                <IconButton>
                  <a
                    href="https://github.com/deepaksm24/moviesbook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button color="secondary" variant="contained">
                      CODE
                    </Button>
                  </a>
                </IconButton>
                <IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon aria-label="show more" />
                  </ExpandMore>
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Project1 />
                </CardContent>
              </Collapse>
            </Card>
          </TimelineContent>
        </TimelineItem>

        {/* project3 and 4  myschool*/}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
           <Card className="cardstyleproject2">
              <CardHeader
                title="MySchool"
                subheader="A Simple School management app model for Students & teachers"
              />

              <CardMedia
                className="border p-2"
                component="img"
                image={myschool}
                alt=""
              />

              <CardActions disableSpacing>
                <IconButton>
                  <a
                    href="https://myschool-u9je.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button color="secondary" variant="contained">
                      SEE LIVE
                    </Button>
                  </a>
                </IconButton>
                <IconButton>
                  <a
                    href="https://github.com/deepaksm24/MyschoolApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button color="secondary" variant="contained">
                      CODE
                    </Button>
                  </a>
                </IconButton>
                <IconButton>
                  <ExpandMore
                    expand={expanded2}
                    onClick={handleExpandClick2}
                    aria-expanded={expanded2}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </IconButton>
              </CardActions>
              <Collapse in={expanded2} timeout="auto" unmountOnExit>
                <CardContent>

                  <Project3 />


                </CardContent>
              </Collapse>
            </Card>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              {/* <MovieIcon sx={{ color: pink[500], fontSize: 50 }} />{" "} */}
              <SchoolIcon sx={{ color: pink[500], fontSize: 50 }} />{" "}
              </TimelineDot>
            <TimelineDot color="secondary">
            <LaptopMacIcon sx={{ fontSize: 50 }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {/* project 4 */}
            {<Card
              className="cardstyleproject border border-2"
              // style={{width: "22rem"}}
            >
              <CardHeader
                
                title="ToDo App"
                subheader="An App to manke note of our tasks - MERN"
              />

              <CardMedia component="img" image={todo} alt="Todo App" />

              <CardActions disableSpacing>
                <IconButton>
                  <a
                    href="https://comfy-gnome-57fbec.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button color="secondary" variant="contained">
                      SEE LIVE
                    </Button>
                  </a>
                </IconButton>
                <IconButton>
                  <a
                    href="https://github.com/deepaksm24/MERN-TODOAPP"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button color="secondary" variant="contained">
                      CODE
                    </Button>
                  </a>
                </IconButton>
                <IconButton>
                  <ExpandMore
                    expand={expanded4}
                    onClick={handleExpandClick4}
                    aria-expanded={expanded4}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon aria-label="show more" />
                  </ExpandMore>
                </IconButton>
              </CardActions>
              <Collapse in={expanded4} timeout="auto" unmountOnExit>
                <CardContent>
                  <Project3/>
                </CardContent>
              </Collapse>
            </Card> }
          </TimelineContent>
        </TimelineItem>
        
      </Timeline>
    </div>
  );
}
