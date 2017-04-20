var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// make radio-group button routes work

router.get('*/example-service/*', function (req, res) {
router.get('*/service-patterns/*', function (req, res) {


  var radioGroup = req.query['radio-group'];

  if (radioGroup) {

    res.redirect(radioGroup);

  } else {

    // if radio-group is any other value (or is missing) render the page requested

    var str = req.path;
    res.render( str.substring(1) );

  }
  
  //res.render('service-patterns/parking-permit/example-service/resident-start')
});

function niceDate(d) {
  var monthNames = [
     "January", "February", "March",
     "April", "May", "June", "July",
     "August", "September", "October",
     "November", "December"
   ];
  var suffixes =
  //    0     1     2     3     4     5     6     7     8     9
     [ "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th",
  //    10    11    12    13    14    15    16    17    18    19
       "th", "th", "th", "th", "th", "th", "th", "th", "th", "th",
  //    20    21    22    23    24    25    26    27    28    29
       "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th",
  //    30    31
       "th", "st" ];
   return d.getDate()+suffixes[d.getDate()]+" "+monthNames[d.getMonth()]+" "+d.getFullYear();
}

// add your routes here

router.all('/service-patterns/parking-permit/example-service/pre-payment', function (req, res) {
  var dateObj={};
  var d = req.session.data;
  var earliestDate = new Date();
  earliestDate.setDate(earliestDate.getDate()+d.council.permitWait);
  if (d.permitStartChoice=="other") {
    dateObj.startDate = new Date(d.permitChoiceYear+"-"+d.permitChoiceMonth+"-"+d.permitChoiceDay);
    if (dateObj.startDate < earliestDate) {
      dateObj.startDate=earliestDate;
    }
  } else {
    dateObj.startDate = earliestDate;
  }
  dateObj.niceStartDate = niceDate(dateObj.startDate);
  if (d.permitChoice=="12 month") {
    dateObj.endDate=dateObj.startDate;
    dateObj.endDate.setFullYear(dateObj.startDate.getFullYear()+1);
  } else {
    dateObj.endDate=dateObj.startDate;
    dateObj.endDate.setMonth(dateObj.startDate.getMonth()+6);
  }
  dateObj.niceEndDate = niceDate(dateObj.endDate);
  res.render('service-patterns/parking-permit/example-service/pre-payment',dateObj);
})

router.get('/service-patterns/concessionary-travel/example-service/add-poa', function(req, res) {
  req.session.skip_verify = true

  res.render('service-patterns/concessionary-travel/example-service/add-poa')
})

router.get('/service-patterns/concessionary-travel/example-service/photo/success', function(req, res) {
  res.render('service-patterns/concessionary-travel/example-service/photo/success', { skip_verify: req.session.skip_verify})
})


router.get('/service-patterns/concessionary-travel/example-service/add-poa', function(req, res) {
  req.session.skip_verify = true

  res.render('service-patterns/concessionary-travel/example-service/add-poa')
})

router.get('/service-patterns/concessionary-travel/example-service/photo/success', function(req, res) {
  res.render('service-patterns/concessionary-travel/example-service/photo/success', { skip_verify: req.session.skip_verify})
})

module.exports = router
