const { Router } = require("express");

const roundsController = require("../controllers/rounds");
const isValidObjectId = require("../middleware/validateObjectID");

const roundsRouter = Router();

// C - Create
roundsRouter.post("/", roundsController.createRound);

// R - Read all
roundsRouter.get("/", roundsController.getAllRounds);

// R - Read one
roundsRouter.get("/:id", isValidObjectId, roundsController.getRoundByID);

// U - Update (replace)
roundsRouter.put("/:id", isValidObjectId, roundsController.updateRound);

// U - Update (partial)
roundsRouter.patch(
    "/:id",
    isValidObjectId,
    roundsController.updateRoundPartially
);

// D - Delete
roundsRouter.delete("/:id", isValidObjectId, roundsController.deleteRound);

module.exports = roundsRouter;
