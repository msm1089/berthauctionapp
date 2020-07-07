const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validateVesselInput = (data) => {
  let errors = {};

  let { name, description, length, weight, depth } = data;

  // Converting empty fields to empty string as validator function works only with strings
  name = !isEmpty(name) ? name : '';
  length = !isEmpty(length) ? length : '';
  weight = !isEmpty(weight) ? weight : '';
  depth = !isEmpty(depth) ? depth : '';

  if (Validator.isEmpty(name)) {
    errors.name = 'Name is required';
  }
  if (Validator.isEmpty(length)) {
    errors.length = 'Length is required';
  }
  if (Validator.isEmpty(weight)) {
    errors.weight = 'Weight is required';
  }
  if (Validator.isEmpty(depth)) {
    errors.depth = 'Depth is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
