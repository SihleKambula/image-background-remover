const express = require("express");
const cors = require("cors");
const AIroutes = require("./routes/ai");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use("/imageai", AIroutes);

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
