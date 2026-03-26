const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedin");

router.get("/", function (req, res) {
  let error = req.flash("error");
  res.render("index", { error });
});

router.get("/shop", isLoggedIn, function (req, res) {
  res.send("ha bhai shop page show kar raha hai tu tenshan mat le");
});

module.exports = router;
