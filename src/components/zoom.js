"use client"
import React, { useState } from "react";

const ImageZoom = ({ src, c, zoomScale = 2 }) => {
  const [showZoom, setShowZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x, y });
  };

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      {/* Main Image */}
      <div
        style={{
          width: "500px",
          height: "500px",
          overflow: "hidden",
          border: "1px solid #ddd",
        }}
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={src}
          alt="product"
          className={c}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Zoom Preview (ABSOLUTE) */}
      {showZoom && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "420px", // adjust spacing from main image
            width: "400px",
            height: "400px",
            border: "1px solid #ddd",
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${zoomScale * 100}%`,
            backgroundPosition: `${position.x}% ${position.y}%`,
            pointerEvents: "none", // prevents flicker
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
};

export default ImageZoom;