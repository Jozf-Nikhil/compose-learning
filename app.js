const express = require("express");
const redis = require("redis");

const app = express();

const client = redis.createClient({
  url: "redis://redis:6379"
});

client.connect();

app.get("/", async (req, res) => {
  await client.set("message", "Hello Docker Compose!");

  const message = await client.get("message");

  res.send(message);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});