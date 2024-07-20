const { model, Schema } = require("mongoose");
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

            validate: {
                validator: (holes) => holes.length === 18,
                message: "The holes array must have exactly 18 elements.",
            },
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("Course", courseSchema);
