const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path')

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
//for production
if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    })
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on ${port}`));