const { model, Schema, Types } = require("mongoose");

const roundSchema = new Schema(
    {
        course: {
            type: Types.ObjectId,
            ref: "Course",
            required: true,
        },

        user: {
            type: Types.ObjectId,
            ref: "User",
            required: true,
        },

        scores: {
            type: [Number],
            required: true,

            validate: {
                validator: function (arr) {
                    return arr.length === 18;
                },
                message: "Scores array must have exactly 18 elements.",
            },
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("round", roundSchema);
