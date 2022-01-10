var age = 23;
var firstName = "Bilal";
var log = function(name) {
    console.log(name);
}

module.exports.name = firstName;
module.exports.log = log;

module.exports = {
    firstName,
    log
}

console.log(__filename);
console.log(__dirname)