import React from 'react';
import $ from 'jquery';
import Question from './question.jsx';
import Result from './result.jsx';

var PHQ = React.createClass({
  getInitialState: function () {
    var data = this.props.data;
    return {
      questions: data.questions,
      position: 0,
      score: 0,
      complete: false
    }
  },
  recordScore: function(value) {
    var questions = this.state.questions,
        score = this.state.score,
        position = this.state.position;
    questions[position].score = value;
    this.setState({
      questions: questions,
      score: score + parseInt(value)
    });
    if(position + 1 < questions.length) {
      this.setState({
        position: position + 1,
      });
    } else {
      console.log('quiz complete!');
      this.calcScore();
    }
  },
  calcScore: function () {
    console.log(this.state.score);
  },
  render: function () {
    var currentQuestion = this.state.questions[this.state.position];
    return(
      <div>
        <div className="quiz">
          <Question text={currentQuestion.text} score={currentQuestion.score} recordScore={this.recordScore} />
        </div>
      </div>
    );
  }
});

export default PHQ;
