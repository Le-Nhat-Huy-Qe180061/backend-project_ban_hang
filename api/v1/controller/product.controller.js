const UserService = require("../services/UserService");

const ProductService = require("../services/ProductService");


const createProduct = async (req, res) => {
    try {
        // console.log(req.body);
        const { name, image, type, price, countInStock, rating, description } = req.body;
        console.log(name)

        if (!name || !image || !type || !price || !countInStock || !rating) {
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

const updateProduct = async (req, res) => {
    try {

        const productId = req.params.id;
        console.log("Product:", productId);
        const data = req.body;

        const response = await ProductService.updateProduct(productId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const getDetailProduct = async (req, res) => {
    try {

        const productId = req.params.id;
        console.log(productId);

        if (!productId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productId is required'
            })
        }

        const response = await ProductService.getDetailProduct(productId);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const deleteProduct = async (req, res) => {
    try {

        const productId = req.params.id;
        console.log(productId);

        if (!productId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productId is required'
            })
        }

        const response = await ProductService.deleteProduct(productId);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

const getAllProduct = async (req, res) => {
    // console.log(req.body);
    try {
        // const limit = parseInt(req.query.limit) || 8;
        // const page = parseInt(req.query.page) || 0;

        // const sort = req.query;

        const {limit, page, sort, filter} = req.query;

        const response = await ProductService.getAllProduct(parseInt(limit) || 8, parseInt(page) || 0, sort, filter);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}




module.exports = {
    createProduct,
    updateProduct,
    getDetailProduct,
    deleteProduct,
    getAllProduct
}