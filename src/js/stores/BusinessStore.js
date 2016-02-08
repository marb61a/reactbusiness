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
    
});

module.exports = BusinessStore;