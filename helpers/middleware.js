module.exports.CORS = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization,Origin,X-Requested-With,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    if (req.method == 'OPTIONS') {
        res.status(200).send();
    } else {
        next();
    }
};