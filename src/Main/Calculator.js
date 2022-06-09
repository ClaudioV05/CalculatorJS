import React, { Component } from "react";
import Button from "../Components/Button";
import Display from "../Components/Display";
import "../Main/Calculator.css"

const initialState = {
  displayValue: "0",
  clearMemory: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class Calculator extends Component {

  state = { ...initialState };

  constructor(props) {
    super(props)

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    this.setState({
      ...initialState
    });
  }

  setOperation(operation) {
    if (this.state.current === 0) {

      this.setState({
        operation, 
        current: 1,
        clearDisplay: true
      });
    } else {
      const equals = operation === '=';
      const currentOperation = this.state.operation;

      const values = [...this.state.values];
      values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      values[1] = 0;

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay :!equals,
        values

      })

    }
  }

  addDigit(number) {

    if (number === '.' && this.state.displayValue.includes('.')) {
      return
    }

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + number;

    this.setState({
      displayValue,
      clearDisplay: false
    });

    if (number !== '.') {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({
        values
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="containerCalculator">

          <Display Value={this.state.displayValue} />

          <Button Label={"AC"} Click={this.clearMemory} />
          <Button Label={"/"} Click={this.setOperation} />
          <Button Label={"7"} Click={this.addDigit} />
          <Button Label={"8"} Click={this.addDigit} />
          <Button Label={"9"} Click={this.addDigit} />
          <Button Label={"*"} Click={this.addDigit} />
          <Button Label={"4"} Click={this.addDigit} />
          <Button Label={"5"} Click={this.addDigit} />
          <Button Label={"6"} Click={this.addDigit} />
          <Button Label={"-"} Click={this.setOperation} />
          <Button Label={"1"} Click={this.addDigit} />
          <Button Label={"2"} Click={this.addDigit} />
          <Button Label={"3"} Click={this.addDigit} />
          <Button Label={"+"} Click={this.addDigit} />
          <Button Label={"0"} Click={this.addDigit} />
          <Button Label={"."} Click={this.addDigit} />
          <Button Label={"="} Click={this.setOperation} />
        </div>
      </React.Fragment>
    )
  }
}
