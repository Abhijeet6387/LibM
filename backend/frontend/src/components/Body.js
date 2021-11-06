import React from "react";
export default function Body() {
  return (
    <div
      id="bg"
      style={{
        position: "fixed",
        top: "-50%",
        left: "-50%",
        width: "200%",
        height: "200%",
      }}
    >
      <img
        src="lib3.jpeg"
        style={{
          position: "absolute",
          opacity: "0.9",
          filter: "blur(2px)",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          margin: "auto",
          minWidth: "50%",
          minHeight: "50%",
        }}
        alt="bg"
      ></img>
    </div>
  );
}
