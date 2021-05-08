import React from 'react';
import { render } from 'react-dom';

import {
  Button,
  Item,
  Provider,
  View,
  darkTheme,
  defaultTheme,
  lightTheme,
} from '@adobe/react-spectrum';
import { Accordion } from '@react-spectrum/accordion';

import Readme from '../readme.md';
import Hello from './hello.mdx';

render(
  // <Provider theme={darkTheme}>
  <Provider theme={lightTheme}>
    <Hello />
    <div style={{ padding: 12, background: 'snow' }}>
      <hr />
    </div>
    <Button variant='cta'>This button in index.js // WORKS WELL</Button>
    <div style={{ padding: 12, background: 'snow' }}>
      <hr />
    </div>
    <Accordion>
      <Item key='files' title='This Accordion in index.js  // WORKS WELL'>
        files
      </Item>
    </Accordion>
    <div style={{ padding: 12, background: 'snow' }}>
      <hr />
    </div>
    <h1>readme.md</h1>
    <Readme />
  </Provider>,
  document.getElementById('root'),
);
