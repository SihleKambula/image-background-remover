const express = require("express");
const cors = require("cors");
const AIroutes = require("./routes/ai");

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
app.use(express.json());
app.use(cors());
app.use(AIroutes);
