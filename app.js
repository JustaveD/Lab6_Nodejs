const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 3000;

const apiRouter = require("./routers/api");


const app = express();

// Enable cors
app.use(cors());

// For body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set view engine
app.set('view engine',"ejs");
app.set("views","views")

// set public folder
app.use(express.static(path.join(__dirname,"public")));

// Routers

app.use("/api",apiRouter);

// Run
app.listen(port,()=>{
    console.log("Server is running on port: "+ port);
})




