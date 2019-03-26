/*  var modulex =require('./mainmodule');
console.log("Current URl " +modulex.currentUrl);  */

var mod = require('./mainmodule');
var name = new mod();
name.name('taru1','tiruna1');
name.consoleLog();