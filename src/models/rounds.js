const { model, Schema, Types } = require("mongoose");

const roundSchema = new Schema(
    {
        course: {
            type: Types.ObjectId,
            ref: "Course",
            required: true,
        },

        username: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 64,
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
