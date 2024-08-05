const express = require("express");
const sanitizeMongo = require("express-mongo-sanitize");

require("dotenv/config");
require("./utils/db");
require("./utils/passport");

const sanitizeBody = require("./middlewares/sanitizeBody");

const authRouter = require("./routers/auth");
const roundsRouter = require("./routers/rounds");
const coursesRouter = require("./routers/courses");

const { errorHandler } = require("./utils/errors");

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(sanitizeMongo());
app.use(sanitizeBody);

// ROUTES
app.get("/", (_req, res) => {
    res.send("Server running 🚀🚀🚀");
});

app.use("/auth", authRouter);
app.use("/api/rounds", roundsRouter);
app.use("/api/courses", coursesRouter);

app.get("/login-success", (req, res) => {
    res.send(`Your token is ${req.query.token}`);
});

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
