var React = require("react");
var AppActions = require('../actions/AppActions');
var BusinessStore = require('../stores/BusinessStore');

var BusinessFormNew = React.createClass({
    render : function(){
        return(
            <div className="well">
                <h3>Add a Business</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
					    <label htmlFor="item.name">Business Name</label>
					    <input type="text" ref="name" className="form-control" placeholder="Business Name" />
					</div>
					<div className="form-group">
					    <label htmlFor="category">Category</label>
					    <select ref="category" className="form-control">
					    	<option value="0">Select Category</option>
					    	<option value="Construction">Construction</option>
					    	<option value="Food">Food</option>
					    	<option value="Fashion">Fashion</option>
					    	<option value="Finance">Finance</option>
					    	<option value="Finance">Finance</option>
					    	<option value="Retail">Retail</option>
					    	<option value="Technology">Technology</option>
					    	<option value="Other">Other</option>
					    </select>
				    </div>
				    <div className="form-group">
					    <label htmlFor="street_address">Street Address</label>
					    <input type="text" ref="street" className="form-control" placeholder="Street Address" />
					</div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" ref="city" className="form-control" placeholder="City" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input type="text" ref="state" className="form-control" placeholder="State" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zipcode">Zipcode</label>
                        <input type="text" ref="zipcode" className="form-control" placeholder="Zipcode" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" ref="phone" className="form-control" placeholder="Phone Number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" ref="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea ref="description" className="form-control" placeholder="Description" />
                    </div>
					   
				    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
});

module.exports = BusinessFormNew;