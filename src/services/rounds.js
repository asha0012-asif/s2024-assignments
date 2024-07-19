const rounds = require("../models/rounds");

const createRound = async (newRound) => {
    const round = await rounds.create(newRound);
    return round;
};

const getAllRounds = async () => await rounds.find();

const getRoundByID = async (id) => {
    const round = await rounds.findById(id);
    return round;
};

const updateRound = async (id, updatedRound) => {
    const round = await rounds.findByIdAndUpdate(id, updatedRound, {
        new: true,
    });

    return round;
};

const updateRoundPartially = async (id, updatedValue) => {
    const round = await rounds.findByIdAndUpdate(id, updatedValue, {
        new: true,
    });

    return round;
};

const deleteRound = async (id) => {
    const round = await rounds.findByIdAndDelete(id);
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
