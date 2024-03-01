import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";
import colors from "colors";
// import {
//   getProducts,
//   getProductById,
//   deleteProduct,
//   createProduct,
//   updateProduct,
//   createProductReview,
//   getTopProduct,
// } from "../controllers/productController.js";
// import { protect, admin } from "../middleware/authMiddleware.js";

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    console.log("Product: ", Product);
    console.log("-----------------------", products);
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      return res.json(product);
    }
    res.status(404).json({ message: "Product not found!" });
  })
);

// router.route("/").get(getProducts).post(protect, admin, createProduct);

// router.route("/:id/reviews").post(protect, createProductReview);

// router.get("/top", getTopProduct);

// router
//   .route("/:id")
//   .get(getProductById)
//   .put(protect, admin, updateProduct)
//   .delete(protect, admin, deleteProduct);

export default router;
