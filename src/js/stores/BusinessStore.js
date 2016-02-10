var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

// Define Store
var _businesses = {
    list : [],
    mainState : 'list'
};

var BusinessStore = assign({}, EventEmitter.prototype, {
    getBusinesses : function(){
        return _businesses;
    },
    
    addChangeListener : function(callback){
		this.on('change', callback);
	},
	
	removeChangeListener : function(callback){
		this.removeListener('change', callback);
	},
    
    emitChange : function(){
		this.emit(CHANGE_EVENT);
	}
});

AppDispatcher.register(function(payload){
    var action = payload.action;
    
    switch(action.actionType){
        case AppConstants.RECEIVE_ITEMS:
			console.log('Receiving Items...');
			_businesses.list = action.items;
			BusinessStore.emit(CHANGE_EVENT);
		break;
		
		case AppConstants.NEW_ITEM:
			_businesses.mainState = 'new';
			BusinessStore.emit(CHANGE_EVENT);
		break;
		
		case AppConstants.CANCEL_ITEM:
			_businesses.mainState = 'list';
			BusinessStore.emit(CHANGE_EVENT);
		break;
		
		case AppConstants.EXTEND_ITEM:
			_businesses.showExtended = true;
			_businesses.selectedId = action.itemId;
			BusinessStore.emit(CHANGE_EVENT);
		break;
		
		default :
		    // NO-OP
    }
    
    return true;
});

module.exports = BusinessStore;