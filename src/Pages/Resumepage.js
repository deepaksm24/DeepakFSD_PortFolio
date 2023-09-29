import React from "react";
import Button from "react-bootstrap/Button";

function Resumepage() {
  return (
    <div>
      <a
      href="https://docs.google.com/document/d/1oZw41S09-OtztFcMNTb8D2hFlyOHs64E/edit?usp=sharing&ouid=104668654161739966033&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"     
      >
        <Button className="mt-5" variant="outline-success">
          My Resume
        </Button>
      </a>
    </div>
  );
}

export default Resumepage;
