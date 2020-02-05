'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import Repos from './index'

// cada ".add" passa um parâmetro que o component Repos espera
storiesOf('Repos', module)
  .add('with title prop', () => (
    <Repos title='Favoritos' />
  ))

  .add('with repos', () => (
    // posso usar html e css.
    <div style={{ padding: '50px' }}>
      <Repos
        title='Favoritos'
        repos={[{
          link: 'http://blog.da2k.com.br',
          name: 'Blog Da2k'
        }]}
      />
    </div>
  ))
