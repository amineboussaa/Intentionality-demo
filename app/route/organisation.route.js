module.exports = function(app) {
 
    var organisations = require('../controller/organisation.controller.js');
 
    // Create a new Customer
    app.post('/api/organisation', organisations.create);
 
    // Retrieve all Customer
    app.get('/api/organisation', organisations.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/organisation/:id', organisations.findById);
 
    // Update a Customer with Id
    app.put('/api/organisation', organisations.update);
 
    // Delete a Customer with Id
    app.delete('/api/organisation/:id', organisations.delete);
}