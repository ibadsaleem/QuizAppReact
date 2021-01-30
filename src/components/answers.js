import React from 'react'
import '../App.css';
function Answers(props) {
    return (
        <div>
            <button className="btn" onClick={()=>props.handleClick(props.choice)}>{props.options}</button>
        </div>
    )
}

export default Answers
