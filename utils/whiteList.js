const whiteList = [
    "http://localhost:3000",
    "http://127.0.0.1:3000"
];

const useWhiteList = (req, res, next) => {
    const { origin } = req.headers;
    const isAllow = whiteList.find((value => value === origin));
    if (isAllow) {
        res.append("Access-Control-Allow-Origin", origin);
        res.append("Access-Control-Allow-Methods", "GET, POST");
        res.append("Access-Control-Allow-Headers", "Content-Type");
        res.append("Vary", "Origin");
        next();
    } else {
        res.send();
    }
};

module.exports = useWhiteList;
