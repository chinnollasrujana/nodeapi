const url = require('url');
const foodItems = require('./foodData.js');
exports.getFoodItems = async function(req, res) {
  const reqUrl = url.parse(req.url, true)
  var response;
  await foodItems().then((result) => {
    response = result;
  });
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
 }