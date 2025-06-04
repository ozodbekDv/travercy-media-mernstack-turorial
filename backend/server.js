const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, "0.0.0.0", () => {
  console.log(`✅ Server started on port ${port}`);
});
