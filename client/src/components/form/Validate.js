const EMAIL_REGEX =
  '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+).([a-zA-Z]{2,5})$';
const INT_REGEX = '^[1-9]\\d*$';

const Validate = (name, value) => {
  let errors = {};
  switch (name) {
    case 'name':
      errors.name = value.length === 0 ? 'Vessel name is required' : '';
      break;
    case 'length':
      errors.length =
        value.length === 0
          ? '(c)Length is required'
          : !value.match(INT_REGEX)
          ? 'Must be a positive integer'
          : '';
      break;
    case 'weight':
      errors.weight =
        value.length === 0
          ? '(c)Weight is required'
          : !value.match(INT_REGEX)
          ? 'Must be a positive integer'
          : '';
      break;
    case 'depth':
      errors.depth =
        value.length === 0
          ? '(c)Depth is required'
          : !value.match(INT_REGEX)
          ? 'Must be a positive integer'
          : '';
      break;
    case 'username':
      errors.name = value.length === 0 ? 'Username is required' : '';
      break;
    case 'email':
      errors.email =
        value.length === 0
          ? 'Email is required'
          : !value.match(EMAIL_REGEX)
          ? 'Enter a valid email id'
          : '';
      break;
    case 'password':
      errors.password =
        value.length === 0
          ? 'Password is required'
          : value.length < 6
          ? 'Password must be atleast 6 characters'
          : '';
      break;
    default:
      break;
  }

  return {
    errors,
  };
};

export default Validate;
