const { Router } = require("express");
const Business = require("../schemas/business.schema");
const router = Router();

router.post("/", async (req, res) => {
    const {
        title,
        city,
        type,
        img,
        shortDescription,
        description,
    } = req.body;

    const business = new Business({
        title,
        city,
        type,
        img,
        shortDescription,
        description
    });

    const doc = await Business.find({city: {$regex: /w+/gi}})

    console.log(doc);
    return res.json({});
    await business.save();
    res.json({ message: "Успіх!!!" });
});

module.exports = router;
