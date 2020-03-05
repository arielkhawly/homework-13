let connection = require('connection.js');
//select all method
function selectAll() {
    connection.connect(function (err) {
        if (err) throw err;
        connection.query("SELECT * FROM burgers", function (err, result, fields) {
            if (err) throw err;
            return result;
        });
    });
};

//insert method
function insertOne() {
    connection.connect(function (err) {
        if (err) throw err;
        connection.query("INSERT INTO burgers(burger_name, devoured) VALUES (?, ?)", function (err, result, fields) {
            if (err) throw err;
            return result;
        });
    });
};
//update method
function updateOne() {
    connection.connect(function (err) {
        if (err) throw err;
        connection.query("UPDATE burgers SET devoured = true", function (err, result, fields) {
            if (err) throw err;
            return result;
        });
    });
};
module.exports = {updateOne, selectAll, insertOne}