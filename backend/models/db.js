const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://robinsinghkamboj:robinsingh@cluster0-rneh1.gcp.mongodb.net/to-do-list?retryWrites=true&w=majority&connectTimeoutMS=50000&bufferCommands=false', { useNewUrlParser: true,keepAlive: true, keepAliveInitialDelay: 300000,urlUnifiedTopology:true}, (err) => {
    if(!err) {
        console.log('MongoDB connection succeeded!!!')
    }
    else {
        console.log('Error in DB connection: ' + err)
    }
})

// const MongoClient = require('mongodb').MongoClient;
// // const uri = "mongodb+srv://robinsinghkamboj:robinsingh@cluster0-rneh1.gcp.mongodb.net/to-do-list?retryWrites=true&w=majority";
// const client = new MongoClient('mongodb+srv://robinsinghkamboj:robinsingh@cluster0-rneh1.gcp.mongodb.net/to-do-list?retryWrites=true&w=majority', { useNewUrlParser: true });
// client.connect(err => {
//   //const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
