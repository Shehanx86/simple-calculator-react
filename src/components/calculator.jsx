import React, { Component} from 'react';

class Calculator extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        num1: 0,
        num2: 0,

        buttons: [
            {id: 0, value: 0},
            {id: 1, value: 1},
            {id: 2, value: 2},
            {id: 3, value: 3},
            {id: 4, value: 4},
            {id: 5, value: 5},
            {id: 6, value: 6},
            {id: 7, value: 7},
            {id: 8, value: 8},
            {id: 9, value: 9}
        ]
      }
      
      add = (num1,num2) => {return num1+num2;}
      substract = (num1,num2) => {return num1-num2;}
      multiply = (num1,num2) => {return num1+num2;}
      divide = (num1,num2) => {return num1/num2;}

      updateValue1 = props => {

       // this.setState({ num1 : this.props.value})
        console.log(props)
      }
      
    render() { 
        return (
        <div>
            {this.state.num1}<br></br>
            {this.state.num2}<br></br>


           
            {this.state.buttons.map(button => <button id="pa" key={button.id} value={button.value} onClick={this.updateValue1}>{button.id}</button>)}
            <br></br>
            <h1>{this.props.value}</h1><br></br>

            


        </div>  );
    }
}
 
export default Calculator;
