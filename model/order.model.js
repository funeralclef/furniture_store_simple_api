var connection = require('../config/config.bd');

var Order = function(order) {
    this.order_id = order.order_id;
    this.user_id = order.user_id;
    this.order_time = order.order_time;
    this.order_status = order.order_status;
};

Order.create = function(newOrder, result) {
    connection.query("INSERT INTO `order` SET ?", newOrder, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Order.findById = function(id, result) {
    connection.query("SELECT * FROM `order` WHERE order_id = ?", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Order.findAll = function(result) {
    connection.query("SELECT * FROM `order`", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('orders: ', res);
            result(null, res);
        }
    });
};

Order.update = function(id, order, result) {
    connection.query("UPDATE `order` SET user_id=?, order_time=?, order_status=? WHERE order_id = ?", 
    [order.user_id, order.order_time, order.order_status, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Order.delete = function(id, result) {
    connection.query("DELETE FROM `order` WHERE order_id = ?", [id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Order;