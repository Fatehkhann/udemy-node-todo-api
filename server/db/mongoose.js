var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Fateh:bravoXc234@ds127730.mlab.com:27730/todos');

module.exports = {mongoose};