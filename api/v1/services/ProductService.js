const Product = require("../models/ProductModel");
const bcrypt = require("bcrypt");

const createProduct = (newProduct) => {
  return new Promise(async (resolve, reject) => {
    const { name, image, type, price, countInStock, rating, description } =
      newProduct;

    try {
      const checkProduct = await Product.findOne({
        name: name,
      });
      if (checkProduct !== null) {
        resolve({
          status: "OK",
          message: "The name product is already",
        });
      }
      const newProduct = await Product.create({
        name,
        image,
        type,
        price,
        countInStock,
        rating,
        description,
      });
      if (newProduct) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: newProduct,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const updateProduct = (id, data) => {
  return new Promise(async (resolve, reject) => {

    try {
      const checkProduct = await Product.findOne({
        _id: id
      })

      if (checkProduct === null) {
        resolve({
          status: "OK",
          message: "The product is not defined",
        });
      }
      const updateProduct = await Product.findByIdAndUpdate(id, data, { new: true });

      if (updateProduct) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: updateProduct,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};


const getDetailProduct = (id) => {
  return new Promise(async (resolve, reject) => {

    try {
      const product = await Product.findOne({
        _id: id
      })

      if (product === null) {
        resolve({
          status: "OK",
          message: "The product is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: product,
      });
    } catch (e) {
      reject(e);
    }
  });
};



module.exports = {
  createProduct,
  updateProduct,
  getDetailProduct
};
