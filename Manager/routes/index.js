var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/chart', function(req, res){
  res.render('chartTest', {});
});

router.get('/table', function(req, res){
  res.render('chartTable', {});
});

module.exports = router;
