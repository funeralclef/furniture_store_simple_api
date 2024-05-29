var connection = require('../config/config.bd');

var User = function(user) {
    this.user_id = user.user_id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
};

User.create = function(newUser, result) {
    connection.query("INSERT INTO user SET ?", newUser, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

User.findById = function(id, result) {
    connection.query("SELECT * FROM user WHERE user_id = ?", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

User.findAll = function(result) {
    connection.query("SELECT * FROM user", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('users: ', res);
            result(null, res);
        }
    });
};

User.update = function(id, user, result) {
    connection.query("UPDATE user SET name=?, email=?, password=? WHERE user_id = ?", 
    [user.name, user.email, user.password, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

User.delete = function(id, result) {
    connection.query("DELETE FROM user WHERE user_id = ?", [id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = User;