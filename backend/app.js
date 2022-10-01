const config = require("./utils/config");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const middleware = require("./utils/middleware");
const logger = require("./utils/logger");
const mongoose = require("mongoose");
const helmet = require("helmet");

const userRouter = require("./routers/user.router");
const invoiceRouter = require("./routers/invoice.router");

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to mongodb");
  })
  .catch((err) => {
    logger.error("error connecting to mongodb", err.message);
  });

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan(middleware.morganOptions));
app.use(helmet());

// routes
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});
app.use("/api/users", userRouter);
app.use("/api/invoices", invoiceRouter);

// validation middlewares
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
