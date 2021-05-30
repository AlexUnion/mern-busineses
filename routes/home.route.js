const { Router } = require("express");
const Business = require("../schemas/business.schema");
const router = Router();

router.get("/", async (req, res) => {
    try {
        Business.find(async (err, doc) => {
            if (err) {
                console.log(err);
            }
            res.status = 200;
            res.json(doc);
        });
    } catch (e) {
        console.log(e);
        res.status = 500;
        res.send({
            message: "Something went wrong"
        });
    }
});

module.exports = router;
