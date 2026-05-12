var express = require('express');
var router = express.Router();

/* GET home page — returns a plain text response. */
router.get('/', function(req, res, next) {
  res.send('Wokku Express starter — it works.');
});

module.exports = router;
