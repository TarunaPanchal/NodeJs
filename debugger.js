/*var fs = require('fs');

fs.readFile('input.txt', 'utf8', function (err, data) {
    
    debugger;

    if (err) throw err;
    
    console.log(data);
});*/


/* var emitter = require('events').EventEmitter;

var em = new emitter();

//Subscribe FirstEvent
em.addListener('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});

//Subscribe SecondEvent
em.on('SecondEvent', function (data) {
    console.log('First subscriber: ' + data);
});

// Raising FirstEvent
em.emit('FirstEvent', 'This is my first Node.js event emitter example.');

// Raising SecondEvent
em.emit('SecondEvent', 'This is my second Node.js event emitter example.'); */



/*var emitter = require('events').EventEmitter;

function LoopProcessor(num) {
    var e = new emitter();
    
    setTimeout(function () {
        
        for (var i = 1; i <= num; i++) {
            e.emit('BeforeProcess', i);
            
            console.log('Processing number:' + i);
            
            e.emit('AfterProcess', i);
        }
    }
    , 2000)
    
    return e;
}
var lp = LoopProcessor(4);

lp.on('BeforeProcess', function (data) {
    console.log('About to start the process for ' + data);
});

lp.on('AfterProcess', function (data) {
    console.log('Completed processing ' + data);
});*/


var emitter = require('events').EventEmitter;

var util = require('util');

function LoopProcessor(num) {
    var me = this;

    setTimeout(function () {
        
        for (var i = 1; i <= num; i++) {
            me.emit('BeforeProcess', i);
            
            console.log('Processing number:' + i);
            
            me.emit('AfterProcess', i);
        }
    }
    , 2000)
        
    return this; 
}

util.inherits(LoopProcessor, emitter)

var lp = new LoopProcessor(3);

lp.on('BeforeProcess', function (data) {
    console.log('About to start the process for ' + data);
});

lp.on('AfterProcess', function (data) {
    console.log('Completed processing ' + data);
});