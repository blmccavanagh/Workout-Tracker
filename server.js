const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// set up the server and get it to run
const app = express();

// output the process of what the server is doing
app.use(logger("dev"));

// middleware, boiler plate for express server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// delivers public folder statically to the front end, JS and CSS package going to the user side of things so they are available to the html pages that we are delivering dynamically from the server
app.use(express.static("public"));

// using mongoose to connect to the database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });