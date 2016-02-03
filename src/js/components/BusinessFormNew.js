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
                </form>
            </div>
        )
    }
});

module.exports = BusinessFormNew;