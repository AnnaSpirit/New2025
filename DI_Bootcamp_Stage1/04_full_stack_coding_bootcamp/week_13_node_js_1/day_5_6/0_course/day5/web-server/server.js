const express = require("express");
const userRouter = require("./routes/userRouter.js");
const productsRouter = require("./routes/productsRouter.js");

const app = express();

/** body-parser npm package */
app.use(express.json());

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

app.use("/api", userRouter);
app.use("/api", productsRouter);

/**
 * server.js
 *  |_ config - connections to DB
 *  |_ models - queries to DB
 *  |_ controllers - functions implements - request / response
 *  |_ routes - routes endpoints
 *  |_ middlewares - funtions
 */
