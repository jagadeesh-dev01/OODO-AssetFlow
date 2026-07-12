const Allocation = require("../models/Allocation");
const Asset = require("../models/Asset");

// Get all allocations
exports.getAllocations = async (req, res) => {

    try {

        const allocations = await Allocation.find().populate("asset");

        res.json({
            success: true,
            data: allocations
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};


// Allocate an asset
exports.allocateAsset = async (req, res) => {

    try {

        const allocation = await Allocation.create(req.body);

        await Asset.findByIdAndUpdate(
            req.body.asset,
            {
                status: "Allocated"
            }
        );

        res.status(201).json({
            success: true,
            data: allocation
        });

    } catch (err) {

        res.status(400).json({
            success: false,
            message: err.message
        });

    }

};


// Return an asset
exports.returnAsset = async (req, res) => {

    try {

        const allocation = await Allocation.findByIdAndUpdate(
            req.params.id,
            {
                status: "Returned"
            },
            {
                new: true
            }
        );

        await Asset.findByIdAndUpdate(
            allocation.asset,
            {
                status: "Available"
            }
        );

        res.json({
            success: true,
            data: allocation
        });

    } catch (err) {

        res.status(400).json({
            success: false,
            message: err.message
        });

    }

};