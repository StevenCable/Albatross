var express = require('express');
var bp = require('body-parser');
var router = express.Router();

router.use(bp.urlencoded({extended: true}));
/* GET home page. */
router.get('/',(req,res) => {
  console.log('noways bra');
  res.render('index', { title: 'Express' });
});

module.exports = router;
