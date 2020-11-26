import $ from 'jquery';
import indexTemplate from './template/index.hbs';

import logo from './assets/logo.jpg';

import './common.scss';

$('#app').append(
  indexTemplate({
    user: {
      name: 'webpack-test',
    },
    logoURL: logo,
  }),
);
