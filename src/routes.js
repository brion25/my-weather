import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './features/home/routes'

export default () => (
  <main>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </main>
)
