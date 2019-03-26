var methods = module.exports = {};
//a =_{prop1:true};
//b = a
//b.prop1=false;
//console.log(a.prop1)  // output false

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


