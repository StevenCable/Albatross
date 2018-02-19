var express = require('express');
var router = express.Router();


/* GET CoinmarketCap API data*/
router.get('/', function(req, res, next) {
  var happyMessage = "fuck yeah dawg";
  console.log(happyMessage);
  res.send(happyMessage);
});
module.exports = router;
