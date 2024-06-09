const express = require("express");

const roundsRouter = require("./routers/golf_rounds");

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Server running 🚀🚀🚀");
});

app.use("/api/rounds", roundsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
