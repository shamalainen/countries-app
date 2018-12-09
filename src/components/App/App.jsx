import React from 'react';

import { Countries } from '../Countries';

const App = () => (
  <div className="App">
    <h1 className="page-title">
      <i className="fas fa-globe-americas" /> Countries{' '}
      <i className="fas fa-globe-americas" />
    </h1>
    <Countries />
  </div>
);

export { App };
