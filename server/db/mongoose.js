var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Fateh:bravoXc234@ds051868.mlab.com:51868/todos');

module.exports = {mongoose};