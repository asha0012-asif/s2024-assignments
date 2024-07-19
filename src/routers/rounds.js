const { Router } = require("express");

const roundsController = require("../controllers/rounds");

const roundsRouter = Router();

// C - Create
roundsRouter.post("/", roundsController.createRound);

// R - Read all
roundsRouter.get("/", roundsController.getAllRounds);

// R - Read one
roundsRouter.get("/:id", roundsController.getRoundByID);

// U - Update (replace)
roundsRouter.put("/:id", roundsController.updateRound);

// U - Update (partial)
roundsRouter.patch("/:id", roundsController.updateRoundPartially);

// D - Delete
roundsRouter.delete("/:id", roundsController.deleteRound);

module.exports = roundsRouter;
