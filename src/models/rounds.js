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
            minLength: 18,
            maxLength: 18,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("round", roundSchema);
