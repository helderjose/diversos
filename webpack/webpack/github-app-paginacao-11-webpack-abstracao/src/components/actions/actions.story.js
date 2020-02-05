'use strict'

/*
Quando o componente espera uma function, pode usar o action só pata teste (não executa nada).
*/
import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import Actions from './index'

const stories = storiesOf('Actions', module)

stories.add('Actions component', () => (
  <Actions
    getRepos={action('Get Repos')}
    getStarred={action('Get Starred')}
  />
))
