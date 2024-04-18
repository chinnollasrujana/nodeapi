const url = require('url');
const foodList = require('./userData.js');
exports.getFoodItems = function(req, res) {
  const reqUrl = url.parse(req.url, true)
  var response = [
    {
      "message": "Here are the list of Food List "
    },
   // users,
   foodItems
  ];
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
 }