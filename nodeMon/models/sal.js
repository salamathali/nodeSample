 var mongoose = require('mongoose');

var mods = mongoose.model('salcols', salSchema);
    module.exports = mods;
var modelTest = new mods({

  name:String

});