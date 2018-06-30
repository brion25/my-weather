import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppWrapper from './common/components/app-wrapper'

import Routes from './routes'

export default () => (
  <AppWrapper>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </AppWrapper>
)
