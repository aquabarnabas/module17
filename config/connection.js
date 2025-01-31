const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGOOB_URI ||
    "mongodb+srv://dbUser:hellomister123@cluster0.pf0vp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
