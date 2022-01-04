/*
var lastName = "Karakan";

console.log(firstName);
console.log(lastName);
*/

/*
var controllerB = (function() {
    // Scope B
    var firstName = "Karakan";

    var log = function() {
        console.log(this.firstName);
    }

    return {
        firstName,
        log
    }
})();

console.log(controllerB.firstName);
console.log(controllerA.firstName);
*/

const scriptA = require('./scriptA');
scriptA.log("Elif");
console.log(scriptA.name);
console.log(scriptA.age);