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
							<select ref="category" className="form-control">
						    	<option value="0">Select Category</option>
						    	<option value="Construction" selected={this.props.selected.category == 'Construction'}>Construction</option>
						    	<option value="Food" selected={this.props.selected.category == 'Food'}>Food</option>
						    	<option value="Fashion" selected={this.props.selected.category == 'Fashion'}>Fashion</option>
						    	<option value="Finance" selected={this.props.selected.category == 'Finance'}>Finance</option>
						    	<option value="Retail" selected={this.props.selected.category == 'Retail'}>Retail</option>
						    	<option value="Technology" selected={this.props.selected.category == 'Technology'}>Technology</option>
						    	<option value="Other" selected={this.props.selected.category == 'Other'}>Other</option>
					    	</select>
						</div>
						<div className="form-group">
							<label htmlFor="street_address">
								Street Address
							</label>
					    	<input type="text" ref="street" onChange={this.handleChange.bind(this, 'address.street')} value={this.props.selected.address.street} 
					    	className="form-control" placeholder="Street Address" />
						</div>
						<div className="form-group">
						    <label htmlFor="city">
						    	City
						    </label>
						    <input type="text" ref="city" className="form-control" onChange={this.handleChange.bind(this, 'city')} value={this.props.selected.address.city} placeholder="City" />
					  	</div>
					</form>
				</div>
			);
	}
});

module.exports = BusinessFormEdit;