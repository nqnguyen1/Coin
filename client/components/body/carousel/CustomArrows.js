import React from "react";

export const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#ffd700",
        right: "10px",
        zIndex: "1",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

export const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#ffd700",
        left: "10px",
        zIndex: "1",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};
