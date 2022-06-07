import React from "react";
import "./Button.css"

export default props => {
  return (<>
    <button
      className='button'
      onclick={e => props.click(e.target.label)}
    >{props.Label}</button>
  </>)

}