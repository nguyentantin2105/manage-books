var express = require('express');
var router = express.Router();

var controller = require('../controllers/user.controller');

router.get("/", controller.index1);

router.get("/add", controller.addUser);

router.get("/update", controller.updateUser);

router.get("/delete", controller.deleteUser);

router.post("/add", controller.postAddUser);

router.post("/update", controller.postUpdateUser);

router.post("/delete", controller.postDeleteUser);

module.exports = router;