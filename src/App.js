import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { Home, Register, Login, Products } from './components'
import { CoffeeAdmin } from './admin'

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/coffee-admin'>
          <Route path='/' component={CoffeeAdmin} />
        </Route>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/products' component={Products} />

        {/* <Route path='/cart' component={Cart} />
        <Route component={Default} /> */}
      </Switch>
    </Fragment>
  );
}

export default App;
