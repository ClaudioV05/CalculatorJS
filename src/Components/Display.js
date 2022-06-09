import React from "react";
import "./Display.css"

export default props => {
  return (
    <>
      <div className="display">
        <h1>{props.Value}</h1>
      </div>
    </>
  )
}