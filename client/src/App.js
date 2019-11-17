import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { Home, Register, Login, Products, Detail, Cart } from './components'
import { CoffeeAdmin } from './admin'
import { stores } from './Store'

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
        <Route path='/detail' component={Detail} />
        <Route path='/cart' component={Cart} />
        {
          stores.map(product => {
            return <Route key={product.id} path={`/${product.url}`} component={Detail} />
          })
        }
        {/* <Route path='/cart' component={Cart} />
        <Route component={Default} /> */}
      </Switch>
    </Fragment>
  );
}

export default App;
