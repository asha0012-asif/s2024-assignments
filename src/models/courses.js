const { model, Schema, Types } = require("mongoose");
const holeSchema = require("./holes");

const courseSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 250,
        },

        holes: {
            type: [holeSchema],
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

module.exports = model("Course", courseSchema);
