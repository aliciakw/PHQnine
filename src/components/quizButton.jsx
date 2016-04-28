import React from 'react';

var QuizButton = React.createClass({
  getInitialState: function () {
    return {
      selected: this.props.selected ? true : false
    }
  },
  render: function () {
    return(
      <a className="quiz-button" onClick={this.props.selectValue}>
        <span>{this.props.label}</span>
      </a>
    );
  }
});

export default QuizButton;
