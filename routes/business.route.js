const { Router } = require("express");
const Business = require("../schemas/business.schema");
const router = Router();

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const data = await Business.findOne({ _id: id });
    res.json(data);
});

module.exports = router;
