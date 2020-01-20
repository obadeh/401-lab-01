'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {

  return true;
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

validator.isNumber = (input) => {
  return typeof input === 'number';
};

validator.isObject = (input) => {
  if(Array.isArray(input)){return false;}
  return typeof input === 'object';
};

validator.isArray = (input) => {
  return Array.isArray(input);
};

validator.isBoolean = (input) => {
  return typeof input === 'boolean';
};

validator.isFunction = (input) => {
  return typeof input === 'function';
};
