const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true, // Keep this property to make the field required
            unique: true,
        },
        email: {
            type: String,
            required: true, // Keep this property to make the field required
            unique: true,
        },
        password: {
            type: String,
            required: true, // Keep this property to make the field required
        },
        profilePic: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
