'use strict';


const validator = require('./lib/validator.js');



console.log("validator.isValid('gg',validator.isNumber :", validator.isValid('gg',validator.isNumber));
console.log("validator.isValid('gg',validator.isString :", validator.isValid('gg',validator.isString));
console.log( "validator.isValid('gg',validator.isArray :", validator.isValid('gg',validator.isArray));
console.log("validator.isValid('gg',validator.isBoolean :", validator.isValid('gg',validator.isBoolean));


