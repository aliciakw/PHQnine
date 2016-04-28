import React from 'react';
import $ from 'jquery';
import TherapistForm from './therapistForm.jsx';

var Result = React.createClass({
  getInitialState: function () {
    return {
      result: "",
      therapists: this.props.therapists,
      followUp: false,
      followUpMsg: "Based on this information, we recommend speaking with a therapist. You can select one of the following:",
      scoreKey: {
        0: "No",
        1: "Mild",
        2: "Moderate",
        3: "Moderately Severe",
        4: "Severe"
      }
    }
  },
  componentDidMount: function () {
    var bracket = Math.floor(parseInt(this.props.score)/5);
    if(bracket > 4) { bracket = 4 };

    // Determine if follow-up is needed and return results.
    if(bracket < 2 ) {
      this.setState({
        result: this.state.scoreKey[bracket]
      });
    } else {
      var therapists = [];
      $.get('/api/therapists', function (result) {
        therapists = result;
      });
      this.setState({
        result: this.state.scoreKey[bracket],
        followUp: true,
        therapists: therapists
      });
    }
  },
  choose: function (therapistId) {
    this.setState({
      followUpMessage: "Thank you for your selection"
    })
  },
  render: function () {
    var followUpMsg = this.state.followUp ? this.state.followUpMsg : "Thank you for filling out this questionnaire",
        therapistsForm = this.state.followUp ? <TherapistForm docs={this.props.therapists} choose={this.choose}/> : "";
    return(
      <div className="results">
        <h5>The results of this questionnaire indicate:</h5>
        <h3>{this.state.result} depression</h3>
        <h6>{followUpMsg}</h6>
        {therapistsForm}
      </div>
    );
  }
});

export default Result;
