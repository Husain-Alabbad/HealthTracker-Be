const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = (req, res, next) => {
    let token = ""
    var authorizationToken = req.header("Authorization");
    console.log("authorizationToken",authorizationToken);
    if(authorizationToken){
        authorizationToken = authorizationToken.replace("Bearer ", "");
        console.log(authorizationToken);
        token = authorizationToken;
    }
    if(!token){
        return res.status(401).json({"message": "Ahaaan!!!! You are not allowed to view this as this is protected"})
    }
    try{
        const decoded = jwt.verify(token, process.env.SESSION_SECRET);
        req.user = decoded.user;
        next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({"message": "Your token is invalid"})
    }
}