/*
https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/
*/

import api_routes from "./routes/apiRoutes.js";
import auth_routes from "./routes/authRoutes.js";

import cors from "cors";
import express, { json, urlencoded } from "express";

import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use("/api", api_routes);
app.use("/auth", auth_routes);

// // Swagger config
// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Your API Name",
//       version: "1.0.0",
//       description: "A short description of your API",
//     },
//   },
//   apis: ["./routes/*.js"], // Path to the API docs
// };

// const swaggerUi = require("swagger-ui-express");
// const swaggerJsdoc = require("swagger-jsdoc");

// const specs = swaggerJsdoc(options);

// module.exports = (app) => {
//   app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
// };
