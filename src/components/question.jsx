import React from 'react';
import QuizButton from './quizButton.jsx';
import PHQ from './PHQ.jsx';

var Question = React.createClass({
  getInitialState: function () {
    return {
      buttonValues: [
        { label: "Not at all", value:0 },
        { label: "Several days", value:1 },
        { label: "More than half the days", value:2 },
        { label: "Nearly every day", value:3 }
      ]
    }
  },
  selectValue: function (value) {

  },
  render: function () {
    var _this = this;
    var options = this.state.buttonValues.map(function(button){
      return <QuizButton label={button.label} selectValue={_this.props.recordScore.bind(null, button.value)} key={button.value} />
    });
    return(
      <div className="question">
        <h3>{this.props.text}</h3>
        {options}
      </div>
    );
  }
});

export default Question;
