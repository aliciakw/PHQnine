import React from 'react';
import $ from 'jquery';
import Question from './question.jsx';
import Result from './result.jsx';

var PHQ = React.createClass({
  getInitialState: function () {
    return {
      questions: this.props.questions,
      position: 0,
      score: 0,
      complete: false
    }
  },
  recordScore: function(value) {
    var score = this.state.score,
        position = this.state.position;

    //record answer
    this.setState({
      score: score + parseInt(value)
    });

    // advance quiz
    if(position < 8) {
      this.setState({
        position: position + 1,
      });
    } else {
      this.calcScore();
    }
  },
  calcScore: function () {
    this.setState({
      complete: true
    });
  },
  render: function () {
    var quizContent;
    if(this.state.complete){
      quizContent = <Result score={this.state.score}/>;
    } else {
      var currentQuestion = this.state.questions.length > 0 ? this.state.questions[this.state.position].text : "";
      quizContent = <Question text={currentQuestion} recordScore={this.recordScore} /> ;
    }
    return(
      <section className="main">
        {quizContent}
      </section>
    );
  }
});

export default PHQ;
