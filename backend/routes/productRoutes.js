import express from "express";
const router = express.Router();
import colors from "colors";
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";
//   deleteProduct,
//   createProduct,
//   updateProduct,
//   createProductReview,
//   getTopProduct,

// import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts);
//.post(protect, admin, createProduct);

// router.route("/:id/reviews").post(protect, createProductReview);

// router.get("/top", getTopProduct);

router.route("/:id").get(getProductById);
//   .put(protect, admin, updateProduct)
//   .delete(protect, admin, deleteProduct);

export default router;
