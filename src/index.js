import reactElementToString from 'react-element-to-jsx-string';

export default function jsxNotIncludes (actual, expected, message) {
  this.false(reactElementToString(expected).includes(reactElementToString(actual)), message);
};
