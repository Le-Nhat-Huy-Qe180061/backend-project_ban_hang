const UserService = require("../services/UserService");

const ProductService = require("../services/ProductService");


const createProduct = async (req, res) => {
    try {
        // console.log(req.body);
        const { name, image, type, price, countInStock, rating, description } = req.body;
        console.log(name)

        if (!name || !image || !type || !price || !countInStock || !rating ) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        } 
        const response = await ProductService.createProduct(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}


module.exports = {
   createProduct
}