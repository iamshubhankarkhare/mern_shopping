const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

app.use(bodyParser.json());
//mongo connection
const db = require("./config/keys").mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("mongo connected"))
    .catch((err) => console.log(err));

//routes are here
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on ${port}`));