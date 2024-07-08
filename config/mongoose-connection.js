const mongoose = require('mongoose');
const dbgr = require('debug')("development:mongoose");
;

mongoose.connect("mongodb://127.0.0.1:27017/scatch")
.then(function() {
    console.log("Connected to MongoDB");
})
.catch(function(err) {
    console.log("Could not connect to MongoDB: ", err);
})

module.exports = mongoose.connection;