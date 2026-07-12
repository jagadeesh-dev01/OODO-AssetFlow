const Asset = require("../models/Asset");
const Department = require("../models/Department");
const Category = require("../models/Category");
const Allocation = require("../models/Allocation");

exports.getDashboard = async (req, res) => {

    try {

        const totalAssets = await Asset.countDocuments();

        const availableAssets = await Asset.countDocuments({
            status: "Available"
        });

        const allocatedAssets = await Asset.countDocuments({
            status: "Allocated"
        });

        const departments = await Department.countDocuments();

        const categories = await Category.countDocuments();

        const allocations = await Allocation.countDocuments();

        res.json({
            success: true,
            data: {
                totalAssets,
                availableAssets,
                allocatedAssets,
                departments,
                categories,
                allocations
            }
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};