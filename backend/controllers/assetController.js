const Asset = require("../models/Asset");

exports.getAssets = async (req, res) => {
    try {

        const { search, category, department, status } = req.query;

        let filter = {};

        // Search by tag or asset name
        if (search) {
            filter.$or = [
                {
                    tag: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    name: {
                        $regex: search,
                        $options: "i"
                    }
                }
            ];
        }

        // Filter by category
        if (category) {
            filter.category = category;
        }

        // Filter by department
        if (department) {
            filter.department = department;
        }

        // Filter by status
        if (status) {
            filter.status = status;
        }

        const assets = await Asset.find(filter);

        res.json({
            success: true,
            data: assets
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

exports.createAsset = async (req, res) => {

    try {

        const asset = await Asset.create(req.body);

        res.status(201).json({
            success: true,
            data: asset
        });

    } catch (err) {

        res.status(400).json({
            success: false,
            message: err.message
        });

    }

};