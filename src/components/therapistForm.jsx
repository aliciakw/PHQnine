import React from 'react';

var TherapistForm = React.createClass({
  render: function () {
    var options = this.props.docs.map(function (doc) {
      return <li>{doc.name} <a onClick={this.props.choose.bind(null, doc.id)}>select</a></li>
    });
    return(
      <ul>
        {options}
      </ul>
    );
  }
});

export default TherapistForm;
