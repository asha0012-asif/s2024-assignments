const rounds = require("../models/golf_rounds");

const validateRound = (round) => {
  if (
    !round.course ||
    !round.username ||
    !round.scores ||
    round.scores.length !== 18
  ) {
    return false;
  }
  return true;
};

const create = (req, res) => {
  const newRound = {
    ...req.body,
  };

  if (!validateRound(newRound)) {
    return res.status(400).json({
      error: {
        message: `Rounds data is missing or invalid`,
      },
    });
  }

  newRound.id = crypto.randomUUID();

  // Add to the rounds array
  rounds.push(newRound);

  // Send a response
  res.status(201).json({
    data: newRound,
  });
};

const getAll = (_req, res) => {
  res.json({
    data: rounds,
  });
};

const getOne = (req, res) => {
  const { id } = req.params;
  const round = rounds.find((round) => round.id === Number(id));

  if (!round) {
    return res.status(404).json({
      error: {
        message: `Round with id ${id} not found`,
      },
    });
  }

  res.json({ data: round });
};

const replaceAll = (req, res) => {
  const id = Number(req.params.id);
  const roundIndex = rounds.findIndex((round) => round.id === id);

  if (roundIndex === -1 || !validateRound(req.body)) {
    return res.status(400).json({
      error: {
        message: `Rounds data is missing or invalid`,
      },
    });
  }

  const updatedRound = {
    ...req.body,
    id,
  };

  rounds[roundIndex] = updatedRound;

  res.json({
    data: updatedRound,
  });
};

const replaceOne = (req, res) => {
  const id = Number(req.params.id);
  const roundIndex = rounds.findIndex((round) => round.id === id);

  if (roundIndex === -1) {
    return res.status(404).json({
      error: {
        message: `Round with id ${id} not found`,
      },
    });
  }

  const { scores, ...rest } = req.body;

  if (scores && scores.length !== 18) {
    return res.status(400).json({
      error: {
        message: `Scores must be an array of 18 numbers`,
      },
    });
  }

  const updatedRound = {
    ...rounds[roundIndex],
    ...rest,
    ...(scores && { scores }),
  };

  rounds[roundIndex] = updatedRound;
  res.json({ data: updatedRound });
};

const deleteOne = (req, res) => {
  const id = Number(req.params.id);
  const roundIndex = rounds.findIndex((round) => round.id === id);

  if (roundIndex === -1) {
    return res.status(404).json({
      error: {
        message: `Round with id ${id} not found`,
      },
    });
  }

  const [deletedRound] = rounds.splice(roundIndex, 1);

  res.status(200).json({ data: deletedRound });
};

module.exports = {
  create,
  getAll,
  getOne,
  replaceAll,
  replaceOne,
  deleteOne,
};
