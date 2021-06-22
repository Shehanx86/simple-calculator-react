import React, { Component} from 'react';
import Calculator from './calculator';
import Functions from './functions';

class Calc1 extends Component {

    state = { 


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

    render() { 
        return (
            <div>
                <h3>number 1</h3>
                <Calculator value={0}/>
                <Calculator value={1}/>
                <Calculator value={2}/>
                <Calculator value={3}/>
                <Calculator value={4}/>
                <Calculator value={5}/>
                <Calculator value={6}/>
                <Calculator value={7}/>
                <Calculator value={8}/>
                <Calculator value={9}/>
                <button onClick={this.asdd}>add</button>
                <Functions/>
            </div>
         );
    }
}
 
export default Calc1;