import React from "react";
import "./Button.css"

export default props => {
  return (
    <>
      <button
        className='button'
        onClick={() => props.Click(props.Label)}>{props.Label}</button>
    </>)

}