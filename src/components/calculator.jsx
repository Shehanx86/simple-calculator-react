import React, { Component} from 'react';

class Calculator extends Component {

    state = {
        num1: 0,
        num2: 0,
        result: 0
      }
      
      add = () => {this.setState({result: this.state.num1+this.state.num2})
        console.log(this.state.result)}
      substract = (num1,num2) => {return num1-num2;}
      multiply = (num1,num2) => {return num1+num2;}
      divide = (num1,num2) => {return num1/num2;}

      updateValue1 = () => {
        this.setState({num1: this.props.value});
       }
    
       updateValue2 = () => {
        this.setState({num2: this.props.value});
       }
      
    render() { 
        return (
        <div>
            <button onClick={this.updateValue1} value={this.props.value}>{this.props.value}</button>
            <button onClick={this.updateValue2} value={this.props.value}>{this.props.value}</button>
            <button onClick={this.add}>add</button>
            {this.state.result}
        </div>  );
    }
}
 
export default Calculator;
