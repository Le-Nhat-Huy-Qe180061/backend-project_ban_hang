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


const deleteProduct = (id) => {
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

      await Product.findByIdAndDelete(id);

      resolve({
        status: "OK",
        message: "Delete product SUCCESS",
      });

    } catch (e) {
      reject(e);
    }
  });
};



const getAllProduct = (limit, page, sort, filter) => {
  // console.log("sort", sort);
  return new Promise(async (resolve, reject) => {
    try {
      const totalProduct = await Product.countDocuments(); // Lấy ra tổng số sản phẩm
      console.log("filter", filter);

      if (filter) {
        const label = filter[0]; // key
        const objectFilter = {};
        objectFilter[filter[0]] = filter[1]
        console.log("objecFilter", objectFilter);
        const allObjectFilter = await Product.find({
          [label] : {'$regex': filter[1]}
        })
        resolve({
          status: "OK",
          message: "Get all product SUCCESS",
          data: allObjectFilter,
          total: totalProduct,
          pageCurrent: parseInt(page + 1), // Lấy ra location page
          totalPage: Math.ceil(totalProduct / limit),
        });
      }


      if (sort) {
        const objectSort = {};
        objectSort[sort[1]] = sort[0]
        console.log("objectSort", objectSort);

        const allProductSort = await Product.find().limit(limit).skip(page * limit).sort(objectSort).limit(limit).skip(page * limit);
        resolve({
          status: "OK",
          message: "Get all product SUCCESS",
          data: allProductSort,
          total: totalProduct,
          pageCurrent: parseInt(page + 1), // Lấy ra location page
          totalPage: Math.ceil(totalProduct / limit),
        });
      }


      const allProduct = await Product.find().limit(limit).skip(page * limit);
      resolve({
        status: "OK",
        message: "Get all product SUCCESS",
        data: allProduct,
        total: totalProduct,
        pageCurrent: parseInt(page + 1), // Lấy ra location page
        totalPage: Math.ceil(totalProduct / limit),
      });
    } catch (e) {
      reject(e);
    }
  });
};





module.exports = {
  createProduct,
  updateProduct,
  getDetailProduct,
  deleteProduct,
  getAllProduct
};
