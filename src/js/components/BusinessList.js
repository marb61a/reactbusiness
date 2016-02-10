var React = require('react');
var AppActions = require('../actions/AppActions');
var BusinessStore = require('../stores/BusinessStore');
var Business = require('./Business.js');

var BusinessList = React.createClass({
	render: function(){
		var showExtended = this.props.showExtended;
		var selectedId =this.props.selectedId;
		var businessNodes;
		
		if(this.props.businesses){
			businessNodes = this.props.businesses.map(function(){
				return(
					<Business showExtended={showExtended} selectedId={selectedId} businessInfo={business} key={index} />	
				);
			});
		} else{
			businessNodes = 'There are no listings';
		}
		
		return(
				<div>
					{businessNodes}
				</div>
		);
	}
});

module.exports = BusinessList;