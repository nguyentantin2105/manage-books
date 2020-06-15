var express = require('express');
var router = express.Router();

var controller = require('../controllers/book.controller');

router.get("/", controller.index);

router.get("/add", controller.addBook);

router.get("/update", controller.updateBook);

router.get("/delete", controller.deleteBook);

//post
router.post("/add", controller.postAddBook);

router.post("/update", controller.postUpdateBook);

router.post("/delete", controller.postDeleteBook);

module.exports = router;
