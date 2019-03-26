var fs = require('fs');

console.log('Executed before File');

/*fs.readFile('./Files/file','utf8',function(error, data){
   console.log(data);
}); // Asynchronously
*/

var data = fs.readFileSync('./Files/file', 'utf8'); //Synchronously

console.log(data); 
console.log('Executed After File');