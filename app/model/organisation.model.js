module.exports = (sequelize, Sequelize) => {
	var Organisation = sequelize.define('organisation', {
	  
	  nom: {
			type: Sequelize.STRING
	  }

	});
	
	return Organisation;
}