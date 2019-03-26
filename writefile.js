var fs = require('fs');

console.log('Executed before File');

/* var data = fs.writeFile('./Files/file1',' Hello How r u ?','utf8',function(error){
    if(error) throw error;
    console.log('File Written');
});  */ // Asynchronously

var data = fs.writeFileSync('./Files/file2',' Hello How r u ?  synchronously','utf8');
console.log('File Written');  //synchronously


console.log('Executed after File');