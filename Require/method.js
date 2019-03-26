var methods = {};

/* methods.a = function(){
    console.log("a function");
};

methods.b = function(){
    console.log("B function");
}

methods.c = function(){
    console.log("C NODE FUNCTION");
}

exports.data = methods; */

//var output = 1234;
this.output = 1234;
methods.sumnum = function(a,b){
    output = a+b;
    return output;
}

methods.circleC= function(r){
    output = 2* Math.PI * r;
    return output;
}

methods.areaofRect = function (a,b){
    output = a * b;
    return output;
}
exports.data = methods ;

//exports.output = output;  


// If not use  exports.output = output;   then  you can Declare the output variable " [ this.output = 1234; ] " not this [ var output = 1234;]