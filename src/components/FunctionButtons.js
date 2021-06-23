import React from 'react'

function FunctionButtons(props) {
    return (
        <div>
            <button onClick ={props.Add}>+</button>
            <button onClick ={props.Sub}>-</button>
            <button onClick ={props.Mul}>*</button>
            <button onClick ={props.Div}>/</button>
        </div>
    )
}
export default FunctionButtons;