const Category = require('../model/category.model');

// Отримати всі категорії
exports.findAll = function(req, res) {
    Category.findAll(function(err, category) {
        if (err)
            res.send(err);
        res.send(category);
    });
};

// Створити нову категорію
exports.create = function(req, res) {
    const new_category = new Category(req.body);
    // Перевіряємо чи всі поля присутні
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        Category.create(new_category, function(err, category) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Category added successfully!", data: category });
        });
    }
};

// Отримати категорію за ID
exports.findById = function(req, res) {
    Category.findById(req.params.id, function(err, category) {
        if (err)
            res.send(err);
        res.json(category);
    });
};

// Оновити категорію за ID
exports.update = function(req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        Category.update(req.params.id, new Category(req.body), function(err, category) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Category successfully updated' });
        });
    }
};

// Видалити категорію за ID
exports.delete = function(req, res) {
    Category.delete(req.params.id, function(err, category) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Category successfully deleted' });
    });
};