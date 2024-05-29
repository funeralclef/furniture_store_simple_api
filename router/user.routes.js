const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

// CRUD маршрути для користувачів
router.post('/', userController.create);      // Створення нового користувача
router.get('/', userController.findAll);      // Отримання всіх користувачів
router.get('/:id', userController.findById);  // Отримання користувача за ID
router.put('/:id', userController.update);    // Оновлення користувача за ID
router.delete('/:id', userController.delete); // Видалення користувача за ID

module.exports = router;