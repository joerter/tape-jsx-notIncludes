# tape-jsx-notincludes
Tape extension to assert one jsx string does not include another

[![npm](https://img.shields.io/npm/v/tape-jsx-notincludes.svg)](https://www.npmjs.com/package/tape-jsx-notincludes)
[![npm](https://img.shields.io/npm/l/tape-jsx-notincludes.svg)](https://www.npmjs.com/package/tape-jsx-notincludes)

[Tape](https://github.com/substack/tape) [extension](https://github.com/atabel/extend-tape) to assert one jsx string does not include another.

`tape-jsx-notincludes` uses [`react-element-to-jsx-string`](https://github.com/algolia/react-element-to-jsx-string) to compare two components'
rendered output.

## Install
```
$ npm install --save-dev extend-tape
$ npm install --save-dev tape-jsx-notincludes
```
## How to use

Testing React components is very easy with `tape` + `tape-jsx-notincludes`:

```javascript
const MyComponent = function ({color}) {
    const className = `box color-${color}`;
    return (
        <div className={className}></div>
    );
};
```

```javascript
import {createRenderer} from 'react-addons-test-utils';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxNotIncludes from 'tape-jsx-notincludes';
import MyComponent from '../MyComponent';

// extend tape with jsxNotIncludes assertion:
const test = addAssertions(tape, {jsxNotIncludes});

test('MyComponent is not included', (t) => {
  const renderer = createRenderer();
  renderer.render(<MyComponent color="blue" />);
  const result = renderer.getRenderOutput();

  t.jsxNotIncludes(result, <div><div><div className="circle color-red"></div></div></div>);
  t.end();
});
```

## Run tests
```
$ npm install
$ npm test
