const roundsService = require("../services/rounds");

const createRound = async (req, res, next) => {
    try {
        const newRound = await roundsService.createRound(req.body);

        res.status(201).json({
            data: newRound,
        });
    } catch (err) {
        next(err);
    }
};

const getAllRounds = async (_req, res, next) => {
    try {
        const rounds = await roundsService.getAllRounds();

        res.status(200).json({
            data: rounds,
        });
    } catch (err) {
        next(err);
    }
};

const getRoundByID = async (req, res, next) => {
    try {
        const { id } = req.params;
        const round = await roundsService.getRoundByID(id);

        res.status(200).json({
            data: round,
        });
    } catch (err) {
        next(err);
    }
};

const updateRound = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedRound = await roundsService.updateRound(id, req.body);

        res.status(200).json({
            data: updatedRound,
        });
    } catch (err) {
        next(err);
    }
};

const updateRoundPartially = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedRound = await roundsService.updateRoundPartially(
            id,
            req.body
        );

        res.status(200).json({
            data: updatedRound,
        });
    } catch (err) {
        next(err);
    }
};

const deleteRound = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedRound = await roundsService.deleteRound(id);

        res.status(200).json({
            data: deletedRound,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createRound,
    getAllRounds,
    getRoundByID,
    updateRound,
    updateRoundPartially,
    deleteRound,
};
