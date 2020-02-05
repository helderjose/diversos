import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import App from './app'


const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.getElementById('app')
  )
}

renderApp(App)

/*
Se existir o module.hot significa que estamos com o hot-loader ativado no projeto.
Fazemos a validação para o hot-loader funcionar apenas em dev
*/
if (module.hot) {
  module.hot.accept('./app', () => {
    // nextApp será a próxima atualização do App (quando editamos um componente)
    const NexApp = require('./app').default
    renderApp(NexApp)
  })
}