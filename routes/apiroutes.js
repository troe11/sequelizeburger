var db = require("../models");

module.exports = function(app) {
    app.get('/api/burgers', function(req, res) {
        db.Burger.findAll({}).then(function(data) {
            res.json(data);
        });
    })
    //front end ajax is done, need to create the rest of the backend routes
    app.put('')
}