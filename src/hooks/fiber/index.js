import React from 'react';
import { createElement, render } from './element';

var AppVm = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      {
        id: 'title',
      },
      'Title',
    ),
    React.createElement(
      'a',
      {
        href: 'xxx',
      },
      'Jump',
    ),
    React.createElement(
      'section',
      null,
      React.createElement('p', null, 'Article'),
    ),
  );

const App = (
    <div>
        <h1 id="title">Title</h1>
        <a href="test-a">Jump</a>
        <section>
            <p>
                Content
            </p>
        </section>
    </div>
);

render(
    App,
    document.getElementById('root')
)
