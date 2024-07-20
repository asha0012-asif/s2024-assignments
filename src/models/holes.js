const { Schema } = require("mongoose");

const holeSchema = new Schema(
    {
        par: {
            type: Number,
            required: true,
            minLength: 3,
            maxLength: 5,
        },

        distance: {
            type: Number,
            required: true,
            minLength: 0,
            maxLength: 999,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        _id: false,
    }
);

module.exports = holeSchema;
