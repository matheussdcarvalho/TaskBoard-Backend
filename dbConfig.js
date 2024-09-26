const mongoose = require("mongoose");

const dbConfig = "mongodb+srv://matheusflemis:zeroberto@cluster0.pq3kf.mongodb.net/annotations?retryWrites=true&w=majority&appName=Cluster0"

const connection = mongoose.connect(dbConfig);

module.exports = connection;



