const express = require("express");
const cors = require("cors");
const AIroutes = require("./routes/ai");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/imageai", AIroutes);

app.get("/", (req, res) => {
  res.status(200).send("Server up and running");
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
