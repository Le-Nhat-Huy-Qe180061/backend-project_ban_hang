
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();

const generalAccessToken = async (payload) => {
    console.log("payload", payload);
    const access_token = jwt.sign({
        payload
    }, process.env.ACCESS_TOKEN, {expiresIn: '1h'})

    return access_token;
}

const generalRefreshToken = async (payload) => {
  
    const refresh_token = jwt.sign({
        payload
    }, process.env.REFRESH_TOKEN, {expiresIn: '365d'})

    return refresh_token;
}

module.exports = {
    generalAccessToken,
    generalRefreshToken
}