var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var AppAPI = require('./utils/appAPI.js');
var StartData = require('./startdata.js');

if(localStorage.getItem('businesses') == null){
	StartData.init();
}

// Get Items From API
AppAPI.getAllItems();

ReactDOM.render(
	<App />,
	document.getElementById('main')
	);