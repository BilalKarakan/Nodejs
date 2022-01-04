// Browser
/*
var firstName = "Bilal";
---------------------------------------------------
*/

/*
// IIFE
var controllerA = (function() {
    // Scope A
    var firstName = "Bilal";

    var log = function() {
        console.log(this.firstName);
    }

    return {
        firstName,
        log
    }
})();
---------------------------------------------------
*/

// Nodejs

/*
console.log(module);
----------------------
*/

//private members
var age = 23;

//public members
var firstName = "Bilal";
var log = function(name) {
    console.log(name);
}

module.exports.name = firstName;
module.exports.log = log;

/*
-------------------------------------------
module.exports = {
    name: firstName,
    log: log
}
*/

/*
module.exports = {
    firstName,
    log
}
--------------------------------------------
Modüllere böyle de ulaşılabilir.
*/