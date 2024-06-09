const { Router } = require("express");

const roundsController = require("../controllers/golf_rounds");

const roundsRouter = Router();

// C - Create
roundsRouter.post("/", roundsController.create); // create a new round

// R - Read all
roundsRouter.get("/", roundsController.getAll); // return a collection of rounds

// R - Read one
roundsRouter.get("/:id", roundsController.getOne); // return the round matching the id value

// U - Update (replace)
roundsRouter.put("/:id", roundsController.replaceAll); // replace all properties of a round

// U - Update (partial)
roundsRouter.patch("/:id", roundsController.replaceOne); // update some properties of a round

// D - Delete
roundsRouter.delete("/:id", roundsController.deleteOne); // destroy the record for a round

module.exports = roundsRouter;
