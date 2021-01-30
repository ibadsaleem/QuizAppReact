import React, { Component } from "react";
import Quizarea from "./quizarea";
import Scorearea from "./scorearea";
import data_set from "../api/data";
import UserGreeting from "./UserGreeting";

export class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      correct: 0,
      incorrect: 0,
      dataset: data_set,
      isFinished: false,
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e)
    {
        if (e === this.state.dataset[this.state.current].correct)
        {
            this.setState({correct:this.state.correct + 1});   
        }
        else
        {
            this.setState({incorrect:this.state.incorrect + 1});   
        }
        if (this.state.current === this.state.dataset.length - 1)
        {
            this.setState({isFinished:true});
        }
        else {
            this.setState({current:this.state.current + 1});
        }
    }

  render() {
    return (
      <div>
        <Quizarea
          dataset={this.state.dataset[this.state.current]}
          isFinished={this.state.isFinished}
          correct={this.state.correct}
          incorrect={this.state.incorrect}
          current={this.state.current}
          handleClick={this.handleClick}  
            />
        <Scorearea
          correct={this.state.correct}
          incorrect={this.state.incorrect}
            />

      </div>
    );
  }
}

export default Questionnaire;
