import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxNotIncludes from '../src';

const test = addAssertions(tape, {jsxNotIncludes});
const renderer = createRenderer();

const MyComponent = ({color}) => {
  const className = `box-color-${color}`;
  return (
    <div className={className}></div>
  );
};

test('asserts one jsx string is not included in another', (t) => {
  renderer.render(<MyComponent color='red' />);
  const actual = renderer.getRenderOutput();

  t.jsxNotIncludes(actual, <div><div><div className='circle-color-blue'></div></div></div>, 'MyComponent is not included');
  t.end();
});
