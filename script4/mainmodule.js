/*module.exports ={
    currentUrl : 'http://vdnjk.mdj'
}*/


function con(){
    var name1;
    return {
        name: function(fname,lname){
            name1 = fname +' '+ lname;
        },

        consoleLog : function() {
            console.log(name1);
        }

    }
}

module.exports = con;
