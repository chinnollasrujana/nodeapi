let foodList;
// const {MongoClient} = require('mongodb');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://chinnollasrujana1011:Srujana1109@indianrestaurants.7jajvkx.mongodb.net/?retryWrites=true&w=majority&appName=indianrestaurants";

exports.foodItems = async function() {
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
   // await client.db("sample_mflix").command({ ping: 1 });
   const cursor = client.db("sample_mflix").collection("embedded_movies").find({});
   const results = await cursor.toArray();
   console.log(results);
   foodList = (JSON.stringify(results));
   console.log(foodList, 'hyd');
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

