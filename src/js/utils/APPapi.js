var AppActions = require('../actions/AppActions');

module.exports = {
	getAllItems: function(){
		var items = JSON.parse(localStorage.getItem('businesses'));
		// Simulates Success Callback
		AppActions.receiveItems(items);
	}
	
};