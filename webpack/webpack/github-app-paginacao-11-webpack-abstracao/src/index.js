'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

// teste do exemplo
// import myCss from './css/style.css'
// // vai imprimir um objeto por causa do style-loader, se deixar só o raw-loader imprime uma string com o css.
// console.log('myCss: ', myCss)

import './css/style.css'

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
