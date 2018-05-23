import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    equation: [],
    displayValue: '',
    opFunc: {
      '÷': (a,b) => a / b,
      'x': (a, b) => a * b,
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
    }
  }

  updateDisplay = value => _evt => {
    let thisOp = [...document.querySelectorAll('.selectOp')][0];
    if (thisOp){
      this.state.equation.push(this.state.displayValue);
      this.state.equation.push(thisOp.innerText);
      thisOp.classList.remove('selectOp');
      this.setState({displayValue: value});
    } else {
      this.setState(prevState => ({
        displayValue: `${prevState.displayValue}${value}`,
      }));
    }
  };
  
  handleInputChange = evt => {
    console.log(evt.target.innerText);
    let value = evt.target.value;
    this.setState({
      displayValue: value,
    });
  };

  clearDisplay = () => {
    this.setState({displayValue: ''});
  };

  clearAll = () => {
    this.clearDisplay();
    this.setState({equation: []});
    [...document.querySelectorAll('.operator')].map(op => op.classList.remove('selectOp'));
  }

  runCalculation = () => {
    this.setState(prevState => ({
      displayValue: this.state.opFunc[this.state.equation[1]](+this.state.equation[0], +prevState.displayValue),
    }));
    this.setState({equation: []});
  }
  
  toggleOperator = e => {
    [...document.querySelectorAll('.operator')].map(op => op.innerText === e.target.innerText ? op.classList.add('selectOp') : op.classList.remove('selectOp'));
  }

  setOperator = evt => {
    if(!this.state.equation.length && this.state.displayValue){
      this.toggleOperator(evt);
    } else if (this.state.equation.length && this.state.displayValue) {
      this.runCalculation();
      this.toggleOperator(evt);
    }
  }

  render() {
    return (
      <div className="App">
        <div id="calc">
          <div>
            <input className="calculator__display" 
            onChange={this.handleInputChange}
            value={this.state.displayValue}/>
          </div>
          <div onClick={this.clearDisplay}>Clear</div>
          <div onClick={this.clearAll}>AC</div>
          <div className="operator" onClick={this.setOperator}>÷</div>
          <div onClick={this.updateDisplay('7')}>7</div>
          <div onClick={this.updateDisplay('8')}>8</div>
          <div onClick={this.updateDisplay('9')}>9</div>
          <div className="operator" onClick={this.setOperator}>x</div>
          <div onClick={this.updateDisplay('4')}>4</div>
          <div onClick={this.updateDisplay('5')}>5</div>
          <div onClick={this.updateDisplay('6')}>6</div>
          <div className="operator" onClick={this.setOperator}>+</div>
          <div onClick={this.updateDisplay('1')}>1</div>
          <div onClick={this.updateDisplay('2')}>2</div>
          <div onClick={this.updateDisplay('3')}>3</div>
          <div className="operator" onClick={this.setOperator}>-</div>
          <div onClick={this.updateDisplay('0')}>0</div>
          <div onClick={this.updateDisplay('.')}>.</div>
          <div onClick={this.runCalculation}>=</div>
        </div>
      </div>
    );
  }
}

export default App;
