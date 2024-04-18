const { MongoClient, ServerApiVersion } = require('mongodb');
module.exports = async function() {
  
  const uri = "mongodb+srv://chinnollasrujana1011:Srujana1109@indianrestaurants.7jajvkx.mongodb.net/indianrestaurants";
  const client = new MongoClient(uri);
  try {
      // Connect to the MongoDB cluster
      await client.connect();
      // Make the appropriate DB calls
     databasesList = await client.db("sample_mflix").collection("food_Items").find({}).toArray()
     return databasesList;

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}