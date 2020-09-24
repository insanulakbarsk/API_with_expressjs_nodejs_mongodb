const express = require("express");
const bodyParser = require("body-parser");
const assist = require("./routes/assistRoutes");
const mongoose =  require("mongoose");
const app = express();

let mongourl = "mongodb://localhost:27017/assistid";

const mongoDB = mongourl;
mongoose.connect(mongoDB);
mongoose.Promis = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Eror coba cek dulu"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use("/api", assist);

const port = 4000;
app.listen(port, () => console.log('Localhost udah jalan di port ${port}'));

