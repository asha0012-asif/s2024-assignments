const rounds = require("../models/rounds");
const { NotFoundError, BadRequestError } = require("../utils/errors");

const validateRoundID = (id, round) => {
    if (!round) throw new NotFoundError(`No rounds found with an id of ${id}`);

    return round;
};

const createRound = async (newRound) => {
    const round = await rounds.create(newRound);

    if (!round) throw new BadRequestError("Enter valid round details");

    return round;
};

const getAllRounds = async () => await rounds.find().populate("course");

const getRoundByID = async (id) => {
    const round = await rounds.findById(id).populate("course");

    return validateRoundID(id, round);
};

const updateRound = async (id, updatedRound) => {
    if (!updatedRound.username || !updatedRound.scores) {
        throw new BadRequestError(
            "Cannot update round without username or scores"
        );
    }

    const round = await rounds
        .findByIdAndUpdate(id, updatedRound, {
            new: true,
        })
        .populate("course");

    return validateRoundID(id, round);
};

const updateRoundPartially = async (id, updatedValue) => {
    const round = await rounds
        .findByIdAndUpdate(id, updatedValue, {
            new: true,
        })
        .populate("course");

    return validateRoundID(id, round);
};

const deleteRound = async (id) => {
    const round = await rounds.findByIdAndDelete(id).populate("course");

    return validateRoundID(id, round);
};

module.exports = {
    createRound,
    getAllRounds,
    getRoundByID,
    updateRound,
    updateRoundPartially,
    deleteRound,
};
