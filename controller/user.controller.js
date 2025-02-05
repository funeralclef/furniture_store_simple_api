const User = require('../model/user.model');

// Отримати всіх користувачів
exports.findAll = function(req, res) {
    User.findAll(function(err, user) {
        if (err)
            res.send(err);
        res.send(user);
    });
};

// Створити нового користувача
exports.create = function(req, res) {
    const new_user = new User(req.body);
    // Перевіряємо чи всі поля присутні
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        User.create(new_user, function(err, user) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "User added successfully!", data: user });
        });
    }
};

// Отримати користувача за ID
exports.findById = function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

// Оновити користувача за ID
exports.update = function(req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        User.update(req.params.id, new User(req.body), function(err, user) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'User successfully updated' });
        });
    }
};

// Видалити користувача за ID
exports.delete = function(req, res) {
    User.delete(req.params.id, function(err, user) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'User successfully deleted' });
    });
};