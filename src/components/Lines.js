import React from 'react'

function Lines(props) {
    return (
        <div>
            <button onClick ={() => props.l1(7)}>7</button>
            <button onClick ={() => props.l1(8)}>8</button>
            <button onClick ={() => props.l1(9)}>9</button>
            <br></br>
            <button onClick ={() => props.l1(4)}>4</button>
            <button onClick ={() => props.l1(5)}>5</button>
            <button onClick ={() => props.l1(6)}>6</button>
            <br></br>
            <button onClick ={() => props.l1(1)}>1</button>
            <button onClick ={() => props.l1(2)}>2</button>
            <button onClick ={() => props.l1(3)}>3</button>
            <br></br>
            <button onClick ={() => props.l1(0)}>0</button>
        </div>
    )
}

export default Lines;

