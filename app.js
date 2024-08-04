import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ Message: "Home Page" });
});
app.listen(5000, () => console.log("Server running on port 5000"));
