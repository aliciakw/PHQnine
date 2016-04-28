require("./styles/main.scss");
var React = require('react');
var ReactDOM = require('react-dom');
import PHQ from './components/PHQ.jsx';
var questions = require('../data/questions.json');
var therapists = require('../data/therapists.json');

ReactDOM.render(<PHQ questions={JSON.parse(questions)} therapists={JSON.parse(therapists)}/>, document.getElementById('phq'));
