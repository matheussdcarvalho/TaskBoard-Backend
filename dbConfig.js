const mongoose = require("mongoose");

const dbConfig = "***"

const connection = mongoose.connect(dbConfig);

module.exports = connection;



