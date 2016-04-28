import React from 'react';

var TherapistForm = React.createClass({
  render: function () {
    var options = this.props.docs.map(function (doc) {
      return <li key={doc.id}>{doc.name} <a>select</a></li>
    });
    return(
      <ul className="therapists">
        {options}
      </ul>
    );
  }
});

export default TherapistForm;
