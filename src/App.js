import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    equation: [],
    displayValue: '',
    currentOp: '',
    ops: {
      '÷': '/',
      'x': '*',
      '+': '+',
      '-': '-',
    }
  }

  updateDisplay = value => _evt => {
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
    // let clickedOp = evt.target.innerText
    // this.setState(() => ({ currentOp: clickedOp }));
    // console.log('current op', this.state.currentOp);
    if (!evt.target.classList.contains(this.selectOp)){
      [...document.querySelectorAll('.operator')].forEach(op => {
        console.log('looped op', op);
        op.classList.remove('selectOp');
      });
      evt.target.classList.add('selectOp');
    }
    // [...document.querySelectorAll('.operator')].map(op => op.innerText === evt.target.innerText ? console.log('got class', op.innerText) : console.log('no class', op.innerText));
    // [...document.querySelectorAll('.operator')].map(op => op.innerText === evt.target.innerText ? op.classList.add(this.selectOp) : op.classList.remove(this.selectOp));
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
