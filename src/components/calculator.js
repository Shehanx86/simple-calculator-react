
import React, { Component } from 'react';
import Lines from './Buttons';
import FunctionButtons from './FunctionButtons';

export class Calculator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             num1: 0,
             num2: 0,
             result :0,
             func: ''
        }
        this.answer = this.answer.bind(this)
        this.add = this.add.bind(this)
        this.subs = this.subs.bind(this)
        this.divide = this.divide.bind(this)
        this.multi = this.multi.bind(this)
    }

    answer(){
        switch(this.state.func){
            case '+':{
                this.setState({result: this.state.num2 + this.state.num1})
                break;
            }
            case '-':{
                this.setState({result: this.state.num2 - this.state.num1})
                break;
            }
            case '*':{
                this.setState({result: this.state.num2 * this.state.num1})
                break;
            }
            default:{
                this.setState({result: this.state.num2 / this.state.num1})
            }
        }
    }


    add(){
        this.setState({num2: this.state.num1}, () => console.log(this.state.num2))
        this.setState({func: '+'})
    }

    subs(){
        this.setState({num2: this.state.num1}, () => console.log(this.state.num2))
        this.setState({func: '-'})
    }

    multi(){
        console.log("hi")
        this.setState({num2: this.state.num1}, () => console.log(this.state.num2))
        this.setState({func: '*'})
    }

    divide(){
        console.log("hi")
        this.setState({num2: this.state.num1}, () => console.log(this.state.num2))
        this.setState({func: '/'})
    }

    num1Ass(num){
        this.setState({num1: num}, () => console.log("no1"+this.state.num1))
    }
    
    render() {
        return (
            <div>
                <Lines l1={this.num1Ass.bind(this)} />

                <FunctionButtons 
                    Add={this.add}
                    Div={this.divide}
                    Sub={this.subs}
                    Mul={this.multi}
                />

                <button onClick ={this.answer}>answer</button>
                {this.state.result}

            </div>
        )
    }
}

export default Calculator;


