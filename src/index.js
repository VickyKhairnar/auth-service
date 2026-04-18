import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import redisClient from "./config/redis.js";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Auth Service Running");
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL connected");

    console.log("Redis connected");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

startServer();