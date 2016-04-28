require("./styles/main.scss");
var React = require('react');
var ReactDOM = require('react-dom');
import PHQ from './components/PHQ.jsx';
var data = require('./data.json');

ReactDOM.render(<PHQ data={JSON.parse(data)}/>, document.getElementById('phq'));
