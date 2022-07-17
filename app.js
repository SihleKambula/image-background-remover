const express = require("express");
const cors = require("cors");
const axios = require("axios");
const formData = require("form-data");
const data = new formData();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "hello" });
});

// post request
app.post("/", (req, res) => {
  console.log("Request made");
  const { url } = req.body;
  data.append("image_url", url);

  const config = {
    method: "post",
    url: "https://api.removal.ai/3.0/remove",
    headers: {
      "Rm-Token": "62cd59951a38b3.13811015",
      ...data.getHeaders(),
    },
    data: data,
  };
  axios(config)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.json({ err: error });
    });
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
