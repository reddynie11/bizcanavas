var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use(express.static('views'));

router.post('/', (req,res)=>{
  var partner = req.body.partner;
  var activity = req.body.activity;
  var resource = req.body.resource;
  var value = req.body.value;
  var relation = req.body.relation;
  var channel = req.body.channel;
  var segment = req.body.segment;
  var cost = req.body.cost;
  var revenue = req.body.revenue;

  res.render('output/', {
    Partner : partner,
    Activity : activity,
    Resource : resource,
    Value : value,
    Relation : relation,
    Channel : channel,
    Segment : segment,
    Cost : cost,
    Revenue : revenue
  })
});

module.exports = router;
