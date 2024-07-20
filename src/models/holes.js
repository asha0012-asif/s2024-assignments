const { Schema } = require("mongoose");

const holeSchema = new Schema(
    {
        par: {
            type: Number,
            required: true,
            min: 3,
            max: 5,
        },

        distance: {
            type: Number,
            required: true,
            min: 0,
            max: 999,
        },
    },
    {
        _id: false,
    }
);

module.exports = holeSchema;
