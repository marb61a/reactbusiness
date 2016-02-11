var React = require('react');
var AppActions = require('../actions/AppActions');
var BusinessStore = require('../stores/BusinessStore');

var Business = React.createClass({
	render: function(){
		var businessExtended;
		
		if(this.props.showExtended && this.props.selectedId == this.props.businessInfo.id){
			businessExtended = <BusinessExtended businessInfo= {this.props.businessInfo} />;
		}else{
			businessExtended = '';
		}
		
		return(
				<div className="well">
					<button onClick={this.handleMoreClick.bind(this, this.props.businessInfo.id)} className="btn btn-default pull-right">Show More</button>
					<h3>{this.props.businessInfo.name}</h3>
					<small>Category: {this.props.businessInfo.category}</small>
					{businessExtended}
				</div>
		);
	},
	
	handleMoreClick : function(i, j){
		AppActions.extendItem(i);
	}
});

module.exports = Business;