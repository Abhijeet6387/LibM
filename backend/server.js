//import libraries and files
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db =
  "mongodb://abhijeet:abhi6816@libm-shard-00-00.fdykf.mongodb.net:27017,libm-shard-00-01.fdykf.mongodb.net:27017,libm-shard-00-02.fdykf.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-10jd5t-shard-0&authSource=admin&retryWrites=true&w=majority";
const Bookroute = require("./routes/Bookroute");
const Userroute = require("./routes/Userroute");

//middleware setup
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// API's connections
app.use("/books", Bookroute);
app.use("/users", Userroute);

app.use(express.static(path.join(__dirname, "frontend", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

// DB and server setup
mongoose.Promise = global.Promise;

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else console.log("connected to db");
  }
);

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is listening on port: 4000");
});
