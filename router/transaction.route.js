var express = require('express');
var router = express.Router();

var db = require('../db');
var controller = require('../controllers/transaction.controller');

router.get('/', controller.index2);

router.get('/create', controller.create);

router.get('/:id/complete', controller.complete);

router.post('/create', controller.postCreate);

router.post('/:id/complete', controller.postComplete);

module.exports = router;