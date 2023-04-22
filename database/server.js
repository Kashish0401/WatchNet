const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose") 


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://0.0.0.0/watchnet", { useNewUrlParser: true, useUnifiedTopology: true, }).then(() => {
    console.log("DB connected");
});

app.listen(5000, console.log("Worked"));