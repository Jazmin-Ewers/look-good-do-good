const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../orders/api/items');

// GET /api/orders
router.get('/', ordersCtrl.index);
// GET /api/orders/:id
router.get('/:id', ordersCtrl.show);

module.exports = router;