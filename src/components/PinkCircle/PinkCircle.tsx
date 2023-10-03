import React from "react";
import "./pinkCircle.css";
interface Props {
  top: number;
  left: number;
  size: number;
}

const PinkCircle = ({ top, left, size }: Props) => {
  return (
    <div
      className="pink-circle"
      style={{ top, left, width: size, height: size }}
    />
  );
};

export default PinkCircle;
