import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const client = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT), // ensure number
  },
});

client.on("error", (err) => console.log("Redis Error:", err));

await client.connect();

console.log("Redis connected");

export default client;