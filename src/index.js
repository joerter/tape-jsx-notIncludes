import reactElementToString from 'react-element-to-jsx-string';
import collapse from 'collapse-white-space';

export default function jsxNotIncludes (actual, expected, message) {
  this.false(collapse(reactElementToString(expected)).includes(collapse(reactElementToString(actual))), message);
};
