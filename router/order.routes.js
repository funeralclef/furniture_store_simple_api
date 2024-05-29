const express = require('express');
const router = express.Router();
const orderController = require('../controller/order.controller');

// CRUD для orders
router.post('/', orderController.create);      // Створення нового замовлення
router.get('/', orderController.findAll);      // Отримання всіх замовлень
router.get('/:id', orderController.findById);  // Отримання замовлення за ID
router.put('/:id', orderController.update);    // Оновлення замовлення за ID
router.delete('/:id', orderController.delete); // Видалення замовлення за ID

module.exports = router;