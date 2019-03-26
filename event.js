var events = require('events');
var eventemiter = new events.EventEmitter();

eventemiter.on('myevent',function()
{
   console.log("event fire");
});


setTimeout(function(){
    eventemiter.emit('myevent');
},2000)