var React = require('react');
var AppActions = require('../actions/AppActions');
var BusinessStore = require('../stores/BusinessStore');

var BusinessFormEdit = React.createClass({
	componentDidMount: function(){
		BusinessStore.getBusiness(this.props.selectedId);
	},
	
	render: function(){
		return(
				<div className="well">
					<h3>Edit Business</h3>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="item.name">
								Business Name
							</label>
							<input type="text" ref="name" className="form-control" onChange={this.handleChange.bind(this, 'name')} value={this.props.selected.name} placeholder="Business Name" />
						</div>
						<div className="form-group">
							<label htmlFor="category">
								Category
							</label>
						</div>
					</form>
				</div>
			);
	}
});

module.exports = BusinessFormEdit;