var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// make radio-group button routes work

router.get('*/example-service/*', function (req, res) {

  var radioGroup = req.query['radio-group'];

  if (radioGroup) {

    res.redirect(radioGroup);

  } else {

    // if radio-group is any other value (or is missing) render the page requested

    var str = req.path;
    res.render( str.substring(1) );

  }
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

router.get('/service-patterns/concessionary-travel/example-service/photo/photo-guide', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var answer = req.query.answer

  if (answer === 'skip') {
    res.redirect('upload')
  } else if (answer === 'shop') {
    res.redirect('photo-shop')
  } else {
    res.render('service-patterns/concessionary-travel/example-service/photo/photo-guide')
  }
})

router.get('/service-patterns/parking-permit/example-service/eligible', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var answer = req.query.answer

  if (answer === 'No') {
    res.redirect('incorrect-address')
  } else {
    res.render('service-patterns/parking-permit/example-service/eligible')
  }
})

router.all('/service-patterns/parking-permit/example-service/pre-payment', function (req, res) {
  var dateObj={};
  var d = req.session.data;
  // set earliestDate
  var earliestDate = new Date();
  earliestDate.setDate(earliestDate.getDate()+d.council.permitWait);
  if(d.residentAmount > 1){
    for (var i = 0; i < d.residentAmount; i++) {
      // set startdates
      if(d.permitStartChoice=="multi"){
          dateObj.startDate[i] = new Date(d.permitChoiceYear+"-"+d.permitChoiceMonth+"-"+d.permitChoiceDay);
          if (dateObj.startDate < earliestDate) {
            dateObj.startDate[i]=earliestDate;
          }
      }else{
        dateObj.startDate = new
        // TODO: Add i count to these variables
        Date(d.permitChoiceYear+"-"+d.permitChoiceMonth+"-"+d.permitChoiceDay);
        if (dateObj.startDate < earliestDate) {
          dateObj.startDate[i]=earliestDate;
        }
      }
      //format startdates
      dateObj.niceStartDate = niceDate(dateObj.startDate);

      //set enddates
      if(d.permitChoice=="different"){
        // TODO: add i variables
        if (d.permitChoice=="12 month") {
          dateObj.endDate=dateObj.startDate;
          dateObj.endDate.setFullYear(dateObj.startDate.getFullYear()+1);
        } else {
          dateObj.endDate=dateObj.startDate;
          dateObj.endDate.setMonth(dateObj.startDate.getMonth()+6);
        }
      }else{
        // all same enddate
        if (d.permitChoice=="12 month") {
          dateObj.endDate=dateObj.startDate;
          dateObj.endDate.setFullYear(dateObj.startDate.getFullYear()+1);
        } else {
          dateObj.endDate=dateObj.startDate;
          dateObj.endDate.setMonth(dateObj.startDate.getMonth()+6);
        }
      }
      // format enddate
      dateObj.niceEndDate = niceDate(dateObj.endDate);
    }
  }else{ // single permit
    //set startdate
    if (d.permitStartChoice=="other") {
      dateObj.startDate = new Date(d.permitChoiceYear+"-"+d.permitChoiceMonth+"-"+d.permitChoiceDay);
      if (dateObj.startDate < earliestDate) {
        dateObj.startDate=earliestDate;
      }
    } else {
      dateObj.startDate = earliestDate;
    }
    //format startdate
    dateObj.niceStartDate = niceDate(dateObj.startDate);
    // set enddate
    if (d.permitChoice=="12 month") {
      dateObj.endDate=dateObj.startDate;
      dateObj.endDate.setFullYear(dateObj.startDate.getFullYear()+1);
    } else {
      dateObj.endDate=dateObj.startDate;
      dateObj.endDate.setMonth(dateObj.startDate.getMonth()+6);
    }
    // format enddate
    dateObj.niceEndDate = niceDate(dateObj.endDate);
  }
  res.render('service-patterns/parking-permit/example-service/pre-payment',dateObj);
})

router.get('/service-patterns/concessionary-travel/example-service/confirm-address', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var answer = req.query.answer

  if (answer === 'No') {
    res.redirect('incorrect-dob')
  } else {
    res.render('service-patterns/concessionary-travel/example-service/confirm-address')
  }
})

router.get('/service-patterns/concessionary-travel/example-service/eligible', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var answer = req.query.answer

  if (answer === 'No') {
    res.redirect('incorrect-address')
  } else {
    res.render('service-patterns/concessionary-travel/example-service/eligible')
  }
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
