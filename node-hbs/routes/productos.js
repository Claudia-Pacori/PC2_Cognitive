var express = require('express');
var router = express.Router();

var producto = require('../controllers/ProductoController.js');

router.get('/', producto.list);
router.get('/show/:id', producto.show);

module.exports = router;
