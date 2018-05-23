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

  isSelected = val => val.classList.contains('selectOp');

  updateDisplay = value => _evt => {
    if ([...document.querySelectorAll('.operator')].some(this.isSelected)){
      console.log('registers op selected');
    }
    this.setState(prevState => ({
      displayValue: `${prevState.displayValue}${value}`,
    }));
  };
  
  handleInputChange = evt => {
    console.log(evt.target.innerText);
    let value = evt.target.value;
    this.setState({
      displayValue: value,
    });
  };

  clearDisplay = () => {
    this.setState((prevState)=> ({
      displayValue: '',
    }));
  };

  setOperator = evt => {
    [...document.querySelectorAll('.operator')].map(op => op.innerText === evt.target.innerText ? op.classList.add('selectOp') : op.classList.remove('selectOp'));
  }

  runCalculation = () => {

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
