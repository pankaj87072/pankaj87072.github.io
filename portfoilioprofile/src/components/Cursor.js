import React, { useEffect, useRef } from 'react';
import '../cursor.css';

const Cursor = () => {
  const cursorRef = useRef(null);
  const coords = { x: 0, y: 0 };

  useEffect(() => {
    const circles = cursorRef.current.querySelectorAll(".circle");

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = "white";
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor">
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="circle"></div>
      ))}
    </div>
  );
};

export default Cursor;
