import React, { Component } from 'react'
import Buttons from './buttons';

class Calculator extends Component {

    constructor(props) {
        super(props)

    }
    

    render() {
        return (
            <div>
                <Buttons 
                value0={0}
                value1={1}
                value2={2}
                value3={3} 
                value4={4}
                value5={5}
                value6={6}
                value7={7}
                value8={8}
                value9={9} />
            </div>
        )
    }
}

export default Calculator;