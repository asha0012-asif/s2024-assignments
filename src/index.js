const express = require("express");

require("dotenv/config");
require("./utils/db");

const roundsRouter = require("./routers/rounds");
const coursesRouter = require("./routers/courses");

const { errorHandler } = require("./utils/errors");

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.send("Server running 🚀🚀🚀");
});

app.use("/api/rounds", roundsRouter);
app.use("/api/courses", coursesRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
