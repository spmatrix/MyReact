import React from "react";

export default function RenderTest() {
  return (
    <div>
      <h1>Tick Renders</h1>
      <h2>Time is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}
