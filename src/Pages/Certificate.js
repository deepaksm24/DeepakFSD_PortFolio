import Carousel from "react-bootstrap/Carousel";
import Award from "../../src/Pages/Certificate/Deepak S M.png";
import HTML from "../../src/Pages/Certificate/GuviCertification - HTML_CSS.png";
import JS from "../../src/Pages/Certificate/GuviCertification -JS.png";
import Box from '@mui/material/Box';

function Certificate() {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-12">
        <div className="d-flex justify-content-center mb-3">
      <Box
      className ="modelbox border border-success rounded"
      sx={{
        width: 210,
        height: 200,
        
      }}
    ><div className="d-flex flex-column justify-content-center">
  <div className="w-100 m-2">Guvi's CodeKata Problem Solving Count</div>
  <div className="d-flex justify-content-center">
  <div className="count">777</div>
  </div>
    </div>
      </Box></div>
      </div>
    <div className="col-sm-12 col-md-12 col-lg-12 border border-3 p-4 mb-4 mt-3">
      <Carousel data-bs-theme="dark" className="certificate">
        <Carousel.Item>
          <img className="d-block w-100 p-3" src={Award} alt="First slide" />

          <div className="h2 gold">Certicate of Winner</div>
          <div className="h5">Completed GUVI Full Stack MERN Course</div>

          <h6>Secured 2nd Rank in GUVI Codekata Challenge(15days)</h6>
          <h6><hr/>
            Solved <span className="h2 gold">91</span> Codekata Coding problems using
            Javascript in 15 Days.
          </h6>
          <div className="h5">Date: Feb 04, 2023</div>

        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={HTML} alt="Second slide" />
          <div className="h3 m-2">Completed HTML & CSS Course</div>
          <div className="h5 m-2">Date: Feb 11, 2023</div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={JS} alt="Third slide" />
          <div className="h3 m-2">Completed Javascript Course</div>
          <div className="h5 m-2">Date: Dec 8, 2022</div>


        </Carousel.Item>
      </Carousel>
    </div>
    
    </div>
  );
}

export default Certificate;
