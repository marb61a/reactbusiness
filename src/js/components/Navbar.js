var React = require('react');
var AppActions = require('../actions/AppActions');
var BusinessStore = require('../stores/BusinessStore');

var Navbar = React.createClass({
    render : function(){
    	var newLink = '';
		var homeLink = '';
		if(this.props.mainState === 'list'){
			homeLink = 'active';
		} else if(this.props.mainState === 'new'){
			newLink = 'active';
		}
    	
        return(
            <div>
                <nav className="navbar navbar-default">
			      <div className="container">
			        <div className="navbar-header">
			          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			            <span className="sr-only">Toggle navigation</span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			          </button>
			          <a className="navbar-brand" href="#">BizList</a>
			        </div>
			        <div id="navbar" className="collapse navbar-collapse">
			          <ul className="nav navbar-nav">
			            <li className="active"><a href="#">Home</a></li>
			            <li><a href="#">Add Business</a></li>
			          </ul>
			        </div>
			      </div>
			    </nav>
            </div>
        );
    },
    
    newItemClick: function(){
		AppActions.newItem();
	},
	
	homeItemClick: function(){
		AppActions.cancelItem();
	}
	
});


module.exports = Navbar;