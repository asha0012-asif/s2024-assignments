const { model, Schema, Types } = require("mongoose");

const courseSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 250,
        },

        holes: {
            // type: Types.ObjectId,
            // ref: "hole",
            type: [Number], // TEMPORARY
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
