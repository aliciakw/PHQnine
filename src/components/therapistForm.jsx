import React from 'react';

var TherapistForm = React.createClass({
  render: function () {
    var _this = this,
        options = this.props.docs.map(function (doc) {
          return <li key={doc.id}>{doc.name} <a onClick={_this.props.choose}>select</a></li>
    });
    return(
      <ul className="therapists">
        {options}
      </ul>
    );
  }
});

export default TherapistForm;
