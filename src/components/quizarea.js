import React from 'react'
import Question from './Question';
import AnswerList from "./answerlist";
function Quizarea(props) {
    if (props.isFinished === true)
    {
        return (<h4>Thank You For Completing The Questionnaire!</h4>);   
    }
    
    return (
        <div>
            <h1>JavaScript Quiz App</h1>
            <Question question={props.dataset.question }/>
            <AnswerList handleClick={props.handleClick} dataset={props.dataset}/>
        </div>
    )
}

export default Quizarea
