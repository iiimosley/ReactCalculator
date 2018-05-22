import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    displayValue: '',
  }

  updateDisplay = value => _evt => {
    this.setState(prevState=> ({
      displayValue: `${prevState.displayValue}${value}`,
    }));
  };
  
  handleInputChange = (evt) => {
    console.log(evt.target.innerText);
    let value = evt.target.value;
    this.setState({
      displayValue: value,
    });
  };

  clearDisplay = () => {

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
          <div><span onClick={this.clearDisplay()}>Clear</span></div>
          <div><span onClick={this.updateDisplay('/')}>÷</span></div>
          <div><span onClick={this.updateDisplay('7')}>7</span></div>
          <div><span onClick={this.updateDisplay('8')}>8</span></div>
          <div><span onClick={this.updateDisplay('9')}>9</span></div>
          <div><span onClick={this.updateDisplay('*')}>x</span></div>
          <div><span onClick={this.updateDisplay('4')}>4</span></div>
          <div><span onClick={this.updateDisplay('5')}>5</span></div>
          <div><span onClick={this.updateDisplay('6')}>6</span></div>
          <div><span onClick={this.updateDisplay('+')}>+</span></div>
          <div><span onClick={this.updateDisplay('1')}>1</span></div>
          <div><span onClick={this.updateDisplay('2')}>2</span></div>
          <div><span onClick={this.updateDisplay('3')}>3</span></div>
          <div><span onClick={this.updateDisplay('-')}>-</span></div>
          <div><span onClick={this.updateDisplay('0')}>0</span></div>
          <div><span onClick={this.updateDisplay('.')}>.</span></div>
          <div><span onClick={this.runCalculation()}>=</span></div>
        </div>
      </div>
    );
  }
}

export default App;
