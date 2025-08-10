const express = require("express");
const dbConnect = require("./config/db");
require("dotenv").config();
const userRouter = require("./routes/userRoutes");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

dbConnect();

app.use("/api/v1", userRouter);

app.listen(PORT, () => {
  console.log(`App is listening on PORT : ${PORT}`);
});
