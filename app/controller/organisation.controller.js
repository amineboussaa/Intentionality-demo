const db = require('../config/db.config.js');
var Organisation = db.organisations;

// Post a Customer
exports.create = (req, res) => {	
	// Save to MySQL database
	let organisation = req.body;
	Organisation.create(organisation).then(result => {		
		// Send created customer to client
		res.json(result);
	});
};
 
// Fetch all Customers
exports.findAll = (req, res) => {
	Organisation.findAll().then(organisations => {
	  // Send all customers to Client
	  res.json(organisations);
	});
};

// Find a Customer by Id
exports.findById = (req, res) => {	
	Organisation.findById(req.params.id).then(organisation => {
		res.json(organisation);
	})
};
 
// Update a Customer
exports.update = (req, res) => {
	let organisation = req.body;
	let id = req.body.id;
	Organisation.update(organisation, 
					 { where: {id: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully an organisation with id = " + id});
				   });	
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	Organisation.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully an organisation with id = ' + id});
	});
};