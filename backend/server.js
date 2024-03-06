import express from "express";

// import path from "path";
import dotenv from "dotenv";
dotenv.config();

import colors from "colors";
// import morgan from "morgan";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";
// import uploadRoutes from "./routes/uploadRoute.js";

import { notFound, errorHandle } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.get("/", (req, res) => res.send("API is running"));

// //only run morgan on devlopnment mode
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }
// //accept json data in body
// app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/upload", uploadRoutes);

// //PayPal Route
// app.get("/api/config/paypal", (req, res) =>
//   res.send(process.env.PAYPAL_CLIENT_ID)
// );

// //Make uploads folder accessible by setting to static
// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// //In production mode, set 'build' to static folder
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running....");
//   });
// }

// //Custom Error handling middleware
app.use(notFound);
app.use(errorHandle);

app.listen(port, () =>
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${port}`.rainbow
      .underline.bold
  )
);
