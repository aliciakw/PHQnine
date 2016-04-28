import React from 'react';
import $ from 'jquery';
import Result from './result.jsx';
import Question from './question.jsx';

var PHQ = React.createClass({
  getInitialState: function () {
      return {
        questions: [],
        position: 0,
        score: 0,
        complete: false
      }
  },
  componentDidMount: function () {
    this.serverRequest = $.get('/api/questions', function (data) {
      this.setState({
        questions: data
      });
    }.bind(this));
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
    var quizContent = "";
    if(this.state.complete){
      quizContent = <Result score={this.state.score} />;
    } else if (this.state.questions.length > 0) {
      quizContent = <Question text={this.state.questions[this.state.position].text} recordScore={this.recordScore} /> ;
    }
    return(
      <section className="main">
        {quizContent}
      </section>
    );
  }
});

export default PHQ;
