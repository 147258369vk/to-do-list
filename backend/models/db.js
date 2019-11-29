const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://robinsinghkamboj:robinsingh@cluster0-rneh1.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, dbname:'to-do-list'}, (err) => {
    if(!err) {
        console.log('MongoDB connection succeeded!!!')
    }
    else {
        console.log('Error in DB connection: ' + err)
    }
})
