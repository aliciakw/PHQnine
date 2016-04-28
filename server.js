const express = require('express'),
    path = require('path'),
    app = express(),
    port = 3000,
    questions = require('./data/questions.json'),
    therapists = require('./data/therapists.json');

app.use(express.static(path.join(__dirname, 'app')));
app.get('/api/questions', function(req, res) {
  res.json(questions);
});
app.get('/api/therapists', function(req, res) {
  res.json(therapists);
});
app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});
