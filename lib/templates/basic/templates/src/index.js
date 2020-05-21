import $ from 'jquery';
import indexPage from './templates/index.handlebars';

import './styles/main.scss';

$('#app').append(
  indexPage({title: 'My New Post', body: 'This is my first post!'}),
);
