import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../Main';
import Login from '../Login';

const App = () => (
  <div class="undercover-main">
    <header />
    <main>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
    </main>
  </div>
);

export default App;
