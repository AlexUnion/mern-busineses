const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const useWhiteList = require("./utils/whiteList");

const app = express();

const PORT = config.get("port") || 5000;
const MONGO_URI = config.get("mongoUri");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(useWhiteList);

app.use("/", require(path.join(__dirname, "/routes/home.route.js")));
app.use("/search", require(path.join(__dirname, "/routes/search.route.js")));
app.use("/add", require(path.join(__dirname, "/routes/add.route.js")));
app.use("/business", require(path.join(__dirname, "/routes/business.route.js")));

async function start() {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (e) {
        console.log(e.message);
        process.exit(1);
    }
}

start();
