const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to Mongoose");
    })
    .catch((err) => {
        console.log("Error connecting to mongoose", err);
    });
