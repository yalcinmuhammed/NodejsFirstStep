const SystemError = require("../errors/system.error");
const respond = require("./respond");
const verifier = {};
verifier.verifyToken = (req, res, next)=>{
    let token = req.headers.authorization;
    //verify your token
    if(!token){
        return respond.withError(next, new SystemError.Unauthorized());
    }
    req.token = token;
    return next();
}
module.exports = verifier;