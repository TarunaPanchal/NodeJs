/* var modulex =require('./mainmodule');
modulex.currentUrl ='http://google.com';
console.log("Current URl " +modulex.currentUrl); */

var mod = require('./mainmodule');
var name = new mod();
name.name('taru','tiruna');
name.consoleLog();