
module.exports.Todo = require("./todomodel") // requiring the todo model created in mongodb

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/letsgetit", {
  // connecting to the mongodb database name: "letsgetit" locally
  keepAlive: true, // keeping the connection alive
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.set("debug", true) // Lets me see what I need to debug from the console
mongoose.Promise = Promise // setting mongoose's Promise to use Node's Promise