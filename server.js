const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');
const config = require('config')



const app = express();

app.use(bodyParser.json());
//mongo connection
const db = config.get('mongoURI');

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, })
    .then(() => console.log("mongo connected"))
    .catch((err) => console.log(err));

//routes are here
app.use("/api/items", require("./routes/api/items"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));


//for production
if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    })
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on ${port}`));