import React from 'react'
import Answer from "./answers";
function Answerlist(props) {
    let ans = [];
    for (let i = 0; i < props.dataset.options.length; i++)
    {
        ans.push(<Answer choice={i} handleClick={props.handleClick} options={props.dataset.options[i]} />);
    }
    return (
        <div>
            {ans}
        </div>
    )
}

export default Answerlist
