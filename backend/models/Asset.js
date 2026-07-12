const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema(
{
    tag: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: [
            "Available",
            "Allocated",
            "Maintenance",
            "Retired"
        ],
        default: "Available"
    },

    location: {
        type: String,
        default: ""
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Asset", assetSchema);