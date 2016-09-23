var express = require('express');
var path = require('path');
var timetable = require('./timetable.json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home Page' });
});

router.get('/timetable', function(req, res) {
  res.json(timetable);
});

module.exports = router;
