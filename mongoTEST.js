var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://11petr11:942411@11petr11-2qg42.gcp.mongodb.net/test?retryWrites=true";
MongoClient.connect(uri, function(err, client) {
   const collection = client.db("test").collection("test");
   var myobj = { name: "Company Inc", address: "Highway 37" };
   collection.insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    client.close();
  });
});
