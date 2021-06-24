import React, { Component } from 'react';
import Lines from './Lines';
import FunctionButtons from './FunctionButtons';

export class Calculator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             entered: '',
             num1: '',
             result: 0,
             func: '',
             count:0
        }
        this.answer = this.answer.bind(this)
        this.setAnswer = this.setAnswer.bind(this)
        this.incCount = this.incCount.bind(this)
    }

    incCount(){
        this.setState({count: this.state.count + 1})
    }

    setAnswer(){
       if(this.state.count === 0){
            this.setState({result: this.state.num1})
        }
        else{
            this.answer()
        }
    }

    answer(){

        switch(this.state.func){
            case '+':{
                this.setState({result: +this.state.result + +this.state.num1})
                break;
            }
            case '-':{
                this.setState({result: this.state.result - this.state.num1})
                break;
            }
            case '*':{
                this.setState({result: this.state.result * this.state.num1})
                break;
            }
            default:{
                this.setState({result: this.state.result / this.state.num1})
            }
        }
    }

    func(fun){
        console.log(fun)
        this.setAnswer()
        this.setState({func: fun}, () => this.incCount())
        this.setState({num1: ''})
    }
    
    num1Ass(num){
        this.setState({num1: this.state.num1 + num})

    }

    render() {
        return (
            <div>
                <Lines l1={this.num1Ass.bind(this)} />
                <FunctionButtons Func={this.func.bind(this)} />

                <button onClick ={this.answer}>answer</button>
                <br />
                result: {this.state.result}<br />
                num1: {this.state.num1}<br />
                ent: {this.state.entered}<br />


            </div>
        )
    }
}

export default Calculator;


