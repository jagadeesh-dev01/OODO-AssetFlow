const express = require("express");

const {
    getAllocations,
    allocateAsset,
    returnAsset
} = require("../controllers/allocationController");

const router = express.Router();

router.get("/", getAllocations);

router.post("/", allocateAsset);

router.put("/:id", returnAsset);

module.exports = router;