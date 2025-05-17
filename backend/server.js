// const express = require('express'); старый синтаксис
import express from "express"; // новый синтаксис
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept JSON data in the body

app.use("/api/products", productRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
