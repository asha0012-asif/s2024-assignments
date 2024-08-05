const Round = require("../models/rounds");
const { NotFoundError, ForbiddenError } = require("../utils/errors");

const verifyRound = async (req, _res, next) => {
    try {
        const { id } = req.params;

        const round = await Round.findById(id);
        if (!round) {
            return next(new NotFoundError("Round not found"));
        }

        if (round.user._id.toString() !== req.user._id.toString()) {
            throw new ForbiddenError(`Not your round`);
        }
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = verifyRound;
