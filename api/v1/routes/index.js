
const userRoute = require("./user.route");

const routes = (app) => {

    app.use('/api/user', userRoute)
}



module.exports = routes;