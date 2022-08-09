import React, { useRef, useEffect } from "react";
import randomNumberGenerator from "./numbers";
import draw from "./draw";

const MyCanvas = (props) => {
  const numbers = randomNumberGenerator(100, window.innerHeight);
  const cRef = useRef(null);
  useEffect(() => {
    const c = cRef.current;
    const ctx = c.getContext("2d");
    draw(numbers, ctx)
  }, []);
  return (
    <canvas
      width={window.innerWidth}
      height={window.innerHeight}
      ref={cRef}
      className="myCanvas"
    />
  );
};

export default MyCanvas;
