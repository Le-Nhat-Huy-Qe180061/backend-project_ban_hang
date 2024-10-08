
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();

const generalAccessToken = async (payload) => {
    console.log("payload", payload);
    const access_token = jwt.sign({
        payload
    }, process.env.ACCESS_TOKEN, { expiresIn: '30s' })

    return access_token;
}

const generalRefreshToken = async (payload) => {

    const refresh_token = jwt.sign({
        payload
    }, process.env.REFRESH_TOKEN, { expiresIn: '365d' })

    return refresh_token;
}

const refreshTokenJWTService = (token) => {
    return new Promise((resolve, reject) => {
        try {
            console.log('token', token);
            jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
                if (err) {
                    resolve({
                        status: 'ERR',
                        message: 'The authemtication'
                    })
                }
                // console.log('user', user)
                const { payload } = user;
                const access_token = await generalAccessToken({
                    id: payload?.id,
                    isAdmin: payload?.isAdmin
                })
                console.log("access_token", access_token);
                resolve({
                    status: 'ok',
                    message: 'SUCCESS',
                    access_token
                })
            })

           
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    generalAccessToken,
    generalRefreshToken,
    refreshTokenJWTService
}