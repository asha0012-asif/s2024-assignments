const { Router } = require("express");

const roundsController = require("../controllers/rounds");

const isValidObjectId = require("../middlewares/validateObjectID");
const isAuthenticated = require("../middlewares/isAuthenticated");
const verifyRound = require("../middlewares/verifyRound");

const roundsRouter = Router();

roundsRouter.use(isAuthenticated);

// C - Create
roundsRouter.post("/", roundsController.createRound);

// R - Read all
roundsRouter.get("/", roundsController.getAllRounds);

// R - Read one
roundsRouter.get(
    "/:id",
    isValidObjectId,
    verifyRound,
    roundsController.getRoundByID
);

// U - Update (replace)
roundsRouter.put(
    "/:id",
    isValidObjectId,
    verifyRound,
    roundsController.updateRound
);

// U - Update (partial)
roundsRouter.patch(
    "/:id",
    isValidObjectId,
    verifyRound,
    roundsController.updateRoundPartially
);

// D - Delete
roundsRouter.delete(
    "/:id",
    isValidObjectId,
    verifyRound,
    roundsController.deleteRound
);

module.exports = roundsRouter;
