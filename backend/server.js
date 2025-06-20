const path = require("path");

const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDb = require("./config/db");
const cors = require("cors");

connectDb();

const app = express();

// ⛔ CORS middleware har doim BIRINCHI bo‘lishi kerak
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// serve frontend
if (process.env.NODE_EVN === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please send to production"));
}

app.use(errorHandler);

app.listen(port, "0.0.0.0", () => {
  console.log(`✅ Server started on port ${port}`);
});
