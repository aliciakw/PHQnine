require("./styles/main.scss");
var React = require('react');
var ReactDOM = require('react-dom');
import PHQ from './components/PHQ.jsx';
var data = require('../data/questions.json');

ReactDOM.render(<PHQ questions={JSON.parse(data)}/>, document.getElementById('phq'));
