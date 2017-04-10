var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

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

function constructDateData(sessionData){

  var dateObj={};
  var d = sessionData;
  // set multiPermitsLength array
  if(d.residentAmount > 1){
    dateObj.multiPermitsLength = [];
    for (var i = 0; i < d.residentAmount; i++) {
      var p = i + 'permitLength';
      dateObj.multiPermitsLength[i] = d.p;
    }
  }

  // set earliestDate
  var earliestDate = new Date();
  earliestDate.setDate(earliestDate.getDate()+d.council.permitWait);
  if(d.residentAmount > 1){
    for (var i = 0; i < d.residentAmount; i++) {
      // set startdates
      if(d.permitStartChoice=="multi"){
          dateObj.startDate[i] = new Date(d.permitLengthYear+"-"+d.permitLengthMonth+"-"+d.permitLengthDay);
          if (dateObj.startDate < earliestDate) {
            dateObj.startDate[i]=earliestDate;
          }
      }else{
        dateObj.startDate = new
        // TODO: Add i count to these variables
        Date(d.permitLengthYear+"-"+d.permitLengthMonth+"-"+d.permitLengthDay);
        if (dateObj.startDate < earliestDate) {
          dateObj.startDate[i]=earliestDate;
        }
      }
      //format startdates
      dateObj.niceStartDate = niceDate(dateObj.startDate);

      //set enddates
      if(d.permitLength=="different"){
        // TODO: add i variables
        if (d.permitLength=="12 month") {
          dateObj.endDate=dateObj.startDate;
          dateObj.endDate.setFullYear(dateObj.startDate.getFullYear()+1);
        } else {
          dateObj.endDate=dateObj.startDate;
          dateObj.endDate.setMonth(dateObj.startDate.getMonth()+6);
        }
      }else{
        // all same enddate
        if (d.permitLength=="12 month") {
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
      dateObj.startDate = new Date(d.permitLengthYear+"-"+d.permitLengthMonth+"-"+d.permitLengthDay);
      if (dateObj.startDate < earliestDate) {
        dateObj.startDate=earliestDate;
      }
    } else {
      dateObj.startDate = earliestDate;
    }
    //format startdate
    dateObj.niceStartDate = niceDate(dateObj.startDate);
    // set enddate
    if (d.permitLength=="12 month") {
      dateObj.endDate=dateObj.startDate;
      dateObj.endDate.setFullYear(dateObj.startDate.getFullYear()+1);
    } else {
      dateObj.endDate=dateObj.startDate;
      dateObj.endDate.setMonth(dateObj.startDate.getMonth()+6);
    }
    // format enddate
    dateObj.niceEndDate = niceDate(dateObj.endDate);
  }
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

vehicleData = [
  {
    reg: 'KS53 UTW',
    make: 'VOLKSWAGEN',
    cc: '1984cc',
    emissions: '192 g/km'
  },
  {
    reg: 'BK52 UAY',
    make: 'LAND ROVER',
    cc: '2495cc',
    emissions: '299 g/km'
  },
  {
    reg: 'EF63 YPZ',
    make: 'FORD',
    cc: '998cc',
    emissions: '114 g/km'
  },
  {
    reg: 'YF64 OEE',
    make: 'BMW',
    cc: '647cc',
    emissions: '13 g/km'
  }
]

function allTheData(sessionData){
  var dateData = constructDateData(sessionData)
  var data = {
    vehicleData: vehicleData,
    dateData: dateData
  }
  return data
}

// make radio-group button routes work and pass all the data

router.get('*/example-service/*', function (req, res) {

  var radioGroup = req.query['radio-group'];

  if (radioGroup) {

    res.redirect(radioGroup);

  } else {

    // if radio-group is any other value (or is missing) render the page requested
    console.log(allTheData(req.session.data));
    var str = req.path;
    res.render( str.substring(1), { 'data': allTheData(req.session.data)} );

  }
})

module.exports = router
