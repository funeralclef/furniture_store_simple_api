const express = require('express');
const router = express.Router();
const categoryController = require('../controller/category.controller');

// CRUD маршрути для категорій
router.post('/', categoryController.create);      // Створення нової категорії
router.get('/', categoryController.findAll);      // Отримання всіх категорій
router.get('/:id', categoryController.findById);  // Отримання категорії за ID
router.put('/:id', categoryController.update);    // Оновлення категорії за ID
router.delete('/:id', categoryController.delete); // Видалення категорії за ID

module.exports = router;