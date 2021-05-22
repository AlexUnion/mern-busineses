const { Router } = require("express");
const Business = require("../schemas/business.schema");
const router = Router();

const whiteList = [
    "http://localhost:3000"
];

router.get("/", async (req, res) => {
    const { origin } = req.headers;
    const isAllow = whiteList.find((value => value === origin));
    if (isAllow) {

        res.append("Access-Control-Allow-Origin", origin);
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
    } else {
        res.send();
    }
});

module.exports = router;
