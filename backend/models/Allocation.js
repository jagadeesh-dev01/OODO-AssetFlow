const mongoose = require("mongoose");

const allocationSchema = new mongoose.Schema(
{
    asset: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Asset",
        required: true
    },

    employee: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    allocatedBy: {
        type: String,
        default: "Admin"
    },

    allocatedAt: {
        type: Date,
        default: Date.now
    },

    expectedReturn: {
        type: Date
    },

    status: {
        type: String,
        enum: [
            "Allocated",
            "Returned"
        ],
        default: "Allocated"
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Allocation", allocationSchema);