const url = require('url');
// const foodItems = require('./userData.js');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://chinnollasrujana1011:Srujana1109@indianrestaurants.7jajvkx.mongodb.net/?retryWrites=true&w=majority&appName=indianrestaurants";
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

exports.getFoodItems = async function(req, res) {
    
    const reqUrl = url.parse(req.url, true)
    await client.connect();
    const cursor = client.db("sample_mflix").collection("embedded_movies").find({});
   const results = await cursor.toArray();
   console.log(results);
   let foodList = (JSON.stringify(results));
   console.log(foodList, 'hyd');
    
   await client.close();

  var response = [
    {
      "message": "Here are the list of food list "
    },
    foodList
  ];
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
 }