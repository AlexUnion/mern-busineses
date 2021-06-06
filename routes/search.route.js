const { Router } = require("express");
const Business = require("../schemas/business.schema");
const router = Router();

router.get("/", async (req, res) => {
    const { city } = req.query;

    const regexp = new RegExp(city, "gui");

    if (!city) {
        res.status(404);
        res.json({ message: "City field is empty!" });
        return;
    }
    Business.find({ city: { $regex: regexp } }, {
        title: 1,
        city: 1,
        type: 1,
        img: 1,
        shortDescription: 1
    })
        .then((doc, err) => {
            if (err) {
                res.status(404);
                res.json({ message: "Search is failed!" });
            }
            console.log(doc);
            res.json(doc);
        });
});

module.exports = router;
