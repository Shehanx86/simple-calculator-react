import React, { Component} from 'react';
import Calculator from './calculator';
import Functions from './functions';

class Calc1 extends Component {

    state = { 

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
            </div>
         );
    }
}
 
export default Calc1;