const { Route } = require('express');
const Business = require("../schemas/business.schema");
const router = Route();

router.post("/", async (req, res) => {
    /*const business = new Business({
        title: "Mala Opera Spot",
        city: "Вінниця",
        type: "Кав`ярня",
        shortDescription:
            "В кофейне Mala Opera Spot зал выполнен в стиле лофт, спокойных и ненавязчивых тонах. Мебель предельно простая и удобная, главным образом изготовлена из качественной древесины.",
        description:
            "В кофейне Mala Opera Spot зал выполнен в стиле лофт, спокойных и ненавязчивых тонах. Мебель предельно простая и удобная, главным образом изготовлена из качественной древесины.",
        img:
            "https://assets.turbologo.ru/blog/ru/2020/02/18162724/a5a4b6991268b801e30d82bbc757c672-958x575.jpg",
    });
    business.save();
    res.json({ message: "saved" });*/
});

module.exports = router;
