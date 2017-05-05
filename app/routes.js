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

// add your routes here

router.all('/service-patterns/parking-permit/example-service/pre-payment', function (req, res) {

  function makeStartDate(permitWait, requestedDate) {
    let earliestDate = new Date()
    earliestDate.setDate(earliestDate.getDate() + Number(permitWait || 0))
    if (requestedDate < earliestDate) return earliestDate
    return requestedDate
  }
  
  function makeEndDate(startDate, length) {
    var date = new Date(startDate.getTime())
    date.setMonth(date.getMonth() + (length === '6 month' ? 6 : 12))
    return date
  }
  
  function makeDate(permitStartDate) {
    if (permitStartDate && permitStartDate.year !== '' && permitStartDate.month !== '' && permitStartDate.day !== '')
      return new Date(permitStartDate.year, permitStartDate.month - 1, permitStartDate.day)
    return new Date()
  }

  const data = req.session.data
  const council = req.session.data.council
  res.render('service-patterns/parking-permit/example-service/pre-payment', {
    data: data.registerNumbers.map((registerNumber, i) => {
      let requestedStartDate = makeDate(data.permitStartDate[data.permitStartChoice] && (data.permitStartDate[data.permitStartChoice][i] || data.permitStartDate[data.permitStartChoice][0]))
      let startDate = makeStartDate(council.permitWait, requestedStartDate)
      let length = data.permitLength === 'multi-lengths' ? data.permitLengths[i] : data.permitLength
      return {
        registerNumber: registerNumber,
        startDate: startDate,
        endDate: makeEndDate(startDate, length),
        length: length
      }
    })
  });
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
