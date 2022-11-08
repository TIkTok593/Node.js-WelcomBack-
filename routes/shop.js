const path = require('path')

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'shop.html')) //dirname -> will give me the directory of this folder
});

module.exports = router;
