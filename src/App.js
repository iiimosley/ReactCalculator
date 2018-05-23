import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    equation: [],
    displayValue: '',
    opSym: {
      '÷': '/',
      'x': '*',
      '+': '+',
      '-': '-',
    }
  }

  updateDisplay = value => _evt => {
    let thisOp = [...document.querySelectorAll('.selectOp')][0];
    if (thisOp){
      this.state.equation.push(this.state.displayValue);
      this.state.equation.push(this.state.opSym[thisOp.innerText]);
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
    this.setState(prevState => ({
      displayValue: '',
    }));
  };

  toggleOperator = e => {
    [...document.querySelectorAll('.operator')].map(op => op.innerText === e.target.innerText ? op.classList.add('selectOp') : op.classList.remove('selectOp'));
  }

  setOperator = evt => {
    this.toggleOperator(evt);
  }

  runCalculation = () => {
    this.setState(prevState => ({
      displayValue: eval(`${this.state.equation.map(val => +val ? +val : val).join('')}${prevState.displayValue}`),
    }));
    console.log(eval(`${this.state.equation.map(val=> +val ? +val : val).join('')}${this.state.displayValue}`));
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
