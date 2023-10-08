import React, { useRef, useEffect } from "react";
import p5 from "p5";

const MagicParticleComponent = () => {
  const myP5 = useRef();

  const sketch = (p) => {
    // center point
    let centerX = 0.0,
      centerY = 0.0;

    let radius = 20, // Updated from 45 to 30 to make the shape smaller
      rotAngle = -90;
    let springing = 0.0027, // Updated from 0.0009 to 0.0018 to make the animation faster
      damping = 0.98;
    let accelX = 0.0,
      accelY = 0.0;
    let deltaX = 0.0,
      deltaY = 0.0;
    damping = 0.98;

    //corner nodes
    let nodes = 5;

    //zero fill arrays
    let nodeStartX = [];
    let nodeStartY = [];
    let nodeX = [];
    let nodeY = [];
    let angle = [];
    let frequency = [];

    // soft-body dynamics
    let organicConstant = 1.0;

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);

      //center shape in window
      centerX = p.width / 2;
      centerY = p.height / 2;

      //initialize arrays to 0
      for (let i = 0; i < nodes; i++) {
        nodeStartX[i] = 0;
        nodeStartY[i] = 0;
        nodeY[i] = 0;
        nodeY[i] = 0;
        angle[i] = 0;
      }

      // initialize frequencies for corner nodes
      for (let i = 0; i < nodes; i++) {
        frequency[i] = p.random(5, 12);
      }

      p.noStroke();
      p.frameRate(30);
    };

    p.draw = () => {
      p.clear();
      drawShape();
      moveShape();
    };

    function drawShape() {
      //  calculate node  starting locations
      for (let i = 0; i < nodes; i++) {
        nodeStartX[i] = centerX + p.cos(p.radians(rotAngle)) * radius;
        nodeStartY[i] = centerY + p.sin(p.radians(rotAngle)) * radius;
        rotAngle += 360.0 / nodes;
      }

      // draw polygon
      p.curveTightness(organicConstant);
      p.fill(255);
      p.beginShape();
      for (let i = 0; i < nodes; i++) {
        p.curveVertex(nodeX[i], nodeY[i]);
      }
      for (let i = 0; i < nodes - 1; i++) {
        p.curveVertex(nodeX[i], nodeY[i]);
      }
      p.endShape(p.CLOSE);
    }

    function moveShape() {
      //move center point
      deltaX = p.mouseX - centerX;
      deltaY = p.mouseY - centerY;

      // create springing effect
      deltaX *= springing;
      deltaY *= springing;
      accelX += deltaX;
      accelY += deltaY;

      // move predator's center
      centerX += accelX;
      centerY += accelY;

      // slow down springing
      accelX *= damping;
      accelY *= damping;

      // change curve tightness
      organicConstant = 1 - (p.abs(accelX) + p.abs(accelY)) * 0.1;

      //move nodes
      for (let i = 0; i < nodes; i++) {
        nodeX[i] = nodeStartX[i] + p.sin(p.radians(angle[i])) * (accelX * 2);
        nodeY[i] = nodeStartY[i] + p.sin(p.radians(angle[i])) * (accelY * 2);
        angle[i] += frequency[i];
      }
    }
  };

  useEffect(() => {
    const mySketch = new p5(sketch, myP5.current);
    return () => {
      mySketch.remove();
    }; // This is important to prevent memory leaks
  }, []);

  return (
    <div
      ref={myP5}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1000,
        pointerEvents: "none",
      }}
    />
  );
};

export default MagicParticleComponent;
