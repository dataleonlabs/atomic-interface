// .storybook/config.ts
import { configure } from '@storybook/react';
const req = require.context('../src', true, /\.stories\.tsx$/);


import 'bootstrap/dist/css/bootstrap.min.css';

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);