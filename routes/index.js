var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home Page' });
});

router.get('/timetable', function(req, res) {
  res.sendFile(path.normalize(__dirname + '/timetable.json'));
});

module.exports = router;
