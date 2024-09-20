
const userRoute = require("./user.route");
const productRoute = require("./product.route");

const routes = (app) => {

    app.use('/api/user', userRoute)
    app.use('/api/product', productRoute)
}



module.exports = routes;