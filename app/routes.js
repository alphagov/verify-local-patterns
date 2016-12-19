var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.get('/pay/choose-payment', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var radioGroup = req.query['radio-group'];

  if (radioGroup){

    // redirect to the relevant page
    res.redirect("/pay/"+radioGroup);

  } else {

    // if radio-group is any other value (or is missing) render the page requested
    res.render('pay/choose-payment');

  }

});

module.exports = router
