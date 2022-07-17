const express = require("express");
const axios = require("axios");
const formData = require("form-data");
const route = express.Router();
const data = new formData();

route.get("/", (req, res) => {
  res.status(200).send("Server up and running");
});
route.get("/imageai", (req, res) => {
  res.json({ msg: "hello" });
});

// post request
route.post("/imageai", (req, res) => {
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

module.exports = route;
