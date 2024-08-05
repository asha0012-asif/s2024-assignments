const { model, Schema } = require("mongoose");

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 64,
        },
        googleId: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("User", userSchema);
