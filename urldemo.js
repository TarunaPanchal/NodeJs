var url = require('url');
var adr = 'http://localhost:1801/default.htm?year=2018&month=march';

var q = url.parse(adr, true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);