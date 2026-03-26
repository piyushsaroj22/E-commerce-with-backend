const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

router.post("/create", upload.single("image"), async (req, res) => {
  try {
    const { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

    let product = await productModel.create({
      Image: req.file.buffer,
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor,
    });

    res.flash("success", "Product created successfully");
    res.redirect("/owners/admin");
  } catch (err) {
    res.status(500).send("Error occurred while creating product");
  }
});

module.exports = router;
