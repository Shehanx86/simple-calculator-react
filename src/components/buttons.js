
import React, { Component } from 'react';

export class Buttons extends Component {
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
            case '+':
                this.setState({result: this.state.num2 + this.state.num1},() => console.log("result = " + this.state.result))
                console.log(this.state.num2 + " + " + this.state.num1)

            case '-':
                this.setState({result: this.state.num2 - this.state.num1})
            case '*':
                this.setState({result: this.state.num2 * this.state.num1})
            default:
                this.setState({result: this.state.num2 / this.state.num1})
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
        this.setState({num2: this.state.num1}, () => console.log(this.state.num2))
        this.setState({func: '*'})
    }

    divide(){
        this.setState({num2: this.state.num1}, () => console.log(this.state.num2))
        this.setState({func: '/'})
    }

    num1Ass(num){
        this.setState({num1: num}, () => console.log(this.state.num1))
    }
    
    render() {
        return (
            <div>
                <button onClick ={() => this.num1Ass(7)}>7</button>
                <button onClick ={() => this.num1Ass(8)}>8</button>
                <button onClick ={() => this.num1Ass(9)}>9</button>
                <button onClick ={this.divide}>/</button>
                <br></br>
                <button onClick ={() => this.num1Ass(4)}>4</button>
                <button onClick ={() => this.num1Ass(5)}>5</button>
                <button onClick ={() => this.num1Ass(6)}>6</button>
                <button onClick ={this.multi}> *</button>
                <br></br>
                <button onClick ={() => this.num1Ass(1)}>1</button>
                <button onClick ={() => this.num1Ass(2)}>2</button>
                <button onClick ={() => this.num1Ass(3)}>3</button>
                <button onClick ={this.subs}> -</button>
                <br></br>
                <button>#</button>
                <button onClick ={() => this.num1Ass(0)}>0</button>
                <button>#</button>
                <button onClick ={this.add}> +</button>
                <br></br>
                <button onClick ={this.answer}>answer</button>
                {this.state.result}


            </div>
        )
    }
}

export default Buttons;


