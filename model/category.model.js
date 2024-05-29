var connection = require('../config/config.bd');

var Category = function(category) {
    this.category_id = category.category_id;
    this.name = category.name;
};

Category.create = function(newCategory, result) {
    connection.query("INSERT INTO category SET ?", newCategory, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Category.findById = function(id, result) {
    connection.query("SELECT * FROM category WHERE category_id = ?", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Category.findAll = function(result) {
    connection.query("SELECT * FROM category", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('categories: ', res);
            result(null, res);
        }
    });
};

Category.update = function(id, category, result) {
    connection.query("UPDATE category SET name=? WHERE category_id = ?", 
    [category.name, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Category.delete = function(id, result) {
    connection.query("DELETE FROM category WHERE category_id = ?", [id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Category;