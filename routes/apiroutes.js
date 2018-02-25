var db = require("../models");

module.exports = function(app) {
    app.get('/api/burgers', function(req, res) {
        db.Burger.findAll({}).then(function(data) {
            res.json(data);
        });
    })
    //front end ajax is done, need to create the rest of the backend routes
    app.post('/api/burgers',function(req,res){
    	db.Burger.create({
    		burger_name:req.body.burger_name,
    		devoured:req.body.devoured
    	}).then(function(data){
    		res.json(data);
    	});
    });

    app.put('/api/burgers/:id',function(req,res){
    	db.Burger.update({
    		devoured:1
    	},
    	{
    		where:{
    			id:req.params.id
    		}
    	}).then(function(data){
    		res.json(data)
    	})
    })
}