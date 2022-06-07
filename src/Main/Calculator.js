import React, { Component } from "react";
import Button from "../Components/Button";
import Display from "../Components/Display";
import "../Main/Calculator.css"

export default class Calculator extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="containerCalculator">
          <Display Value={0}/>
          <Button Label={"AC"} />
          <Button Label={"/"} />
          <Button Label={"7"} />
          <Button Label={"8"} />
          <Button Label={"9"} />
          <Button Label={"*"} />
          <Button Label={"4"} />
          <Button Label={"5"} />
          <Button Label={"6"} />
          <Button Label={"-"} />
          <Button Label={"1"} />
          <Button Label={"2"} />
          <Button Label={"3"} />
          <Button Label={"+"} />
          <Button Label={"0"} />
          <Button Label={"."} />
          <Button Label={"="} />
        </div>

      </React.Fragment>
    )
  }
}
