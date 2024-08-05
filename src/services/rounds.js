const rounds = require("../models/rounds");
const { BadRequestError } = require("../utils/errors");

const createRound = async (newRound) => {
    const round = await rounds.create(newRound);

    if (!round) throw new BadRequestError("Enter valid round details");

    return round;
};

const getAllRounds = async () =>
    await rounds.find().populate(["course", "user"]);

const getRoundByID = async (id) => {
    const round = await rounds.findById(id).populate(["course", "user"]);

    return round;
};

const updateRound = async (id, updatedRound) => {
    if (!updatedRound.scores) {
        throw new BadRequestError("Cannot update round without scores");
    }

    const round = await rounds
        .findByIdAndUpdate(id, updatedRound, {
            new: true,
        })
        .populate(["course", "user"]);

    return round;
};

const updateRoundPartially = async (id, updatedValue) => {
    const round = await rounds
        .findByIdAndUpdate(id, updatedValue, {
            new: true,
        })
        .populate(["course", "user"]);

    return round;
};

const deleteRound = async (id) => {
    const round = await rounds
        .findByIdAndDelete(id)
        .populate(["course", "user"]);

    return round;
};

module.exports = {
    createRound,
    getAllRounds,
    getRoundByID,
    updateRound,
    updateRoundPartially,
    deleteRound,
};
