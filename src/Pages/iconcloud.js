import React from "react";
import allIcons from "simple-icons";
import { v4 } from "uuid";
import { IconCloud } from "react-icon-cloud";

const Sphere = () => {
  const tagCanvasOptions = {
    animTiming: "Smooth",
    clickToFront: 500,
    decel: 0.95,
    depth: 1,
    dragControl: true,
    dragThreshold: 0,
    imageScale: 3,
    initial: [0.05, -0.04],
    interval: 20,

    outlineColour: "#0000",

    reverse: true,

    tooltip: "native",

    tooltipDelay: 0,

    wheelZoom: true,
  };
  const iconSlugs = [
    "html5",
    "express",
    "mysql",
    "git",
    "github",
    "bootstrap",
    "visualstudiocode",
    "mongodb",
    "react",
    "css3",
    "redux",
    "netlify",
    "javascript",
    "nodedotjs",
    "nodemon",
    
  ];
  const iconTags = iconSlugs.map((slug) => ({
    id: slug,
    simpleIcon: allIcons.Get(slug),
  }));
  return (
    <div>
      <br/>
      <IconCloud
        key={v4()}
        id={"icon"}
        minContrastRatio={1}
        iconSize={50}
        backgroundHexColor={"#fff"}
        fallbackHexColor={"#000"}
        tags={iconTags}
        tagCanvasOptions={tagCanvasOptions}
      />
    </div>
  );
};

export default Sphere;
