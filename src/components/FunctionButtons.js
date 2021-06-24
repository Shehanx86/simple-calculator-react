import React from 'react'

function FunctionButtons(props) {
    return (
        <div>
            <button onClick ={() => props.Func('+')}>+</button>
            <button onClick ={() => props.Func('-')}>-</button>
            <button onClick ={() => props.Func('*')}>*</button>
            <button onClick ={() => props.Func('/')}>/</button>
        </div>
    )
}
export default FunctionButtons;