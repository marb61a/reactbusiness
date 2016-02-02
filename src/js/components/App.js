var React = require('react');
var AppActions = require('../actions/AppActions');
var BusinessStore = require('../stores/BusinessStore');
var BusinessList = require('./BusinessList');
var BusinessFormNew = require('./BusinessFormNew');
var BusinessFormEdit = require('./BusinessFormEdit');
var Navbar = require('./Navbar');

function getAppState(){
    return{
        
    };
}

var App = React.createClass({
    getInitialState: function(){
		return getAppState();
	},
	componentDidMount: function(){
		
	},
	componentUnmount: function(){
		
	}, 
	render : function(){
	    return(
	        <div className="wrapper">
				<Navbar />
				<div className="container">
					<div className="row">
						<div className="col-12-md">
							<BusinessFormNew />
							<BusinessList />
						</div>
					</div>
				</div>
			</div>
	    );
	}
});

module.exports = App;