
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();


const authMiddleWare = (req, res, next) => {
    // console.log("token", req.headers.token);
    const token = req.headers.token.split(' ')[1];
    console.log(token);

    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user){
        if(err){
            return res.status(404).json({
                message: 'The authemtication',
                status: "ERROR",
            })
        }
        const {payload} = user

        if(payload?.isAdmin){
            // console.log("true"); 
            next();
        } else {
            return res.status.json({
                message: 'The authemtication',
                status: "ERROR"
            })
        }

        console.log("user", user)
    })
}

const authUserMiddleWare = (req, res, next) => {
    // console.log("token", req.headers.token);
    const token = req.headers.token.split(' ')[1];
    const userId = req.params.id;
    console.log(token);

    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user){
        if(err){
            return res.status(404).json({
                message: 'The authemtication',
                status: "ERROR",
            })
        }
        const {payload} = user

        if(payload?.isAdmin || payload?.id === userId){
            // console.log("true"); 
            next();
        } else {
            return res.status.json({
                message: 'The authemtication',
                status: "ERROR"
            })
        }

        console.log("user", user)
    })
}


module.exports = {
    authMiddleWare,
    authUserMiddleWare
}