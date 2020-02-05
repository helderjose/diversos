'use strict'

import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

/*
AppContent é um dumb component, ele apenas recebe informações do app.js (App component) e repassa
para os outro componentes (que também são dumb component).


!! converte para boolean (equivalente boleano), ex: 0 vira false,
se não fizer isso o zero aparece na tela.
*/

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch, /* vem do app.js e passa para o component Search */
  getRepos,
  getStarred
}) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />

    {isFetching && <div>Carregando...</div>}

    {!!userinfo && <UserInfo userinfo={userinfo} />}

    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length &&
      <Repos
        className='repos'
        title='Repositórios:'
        repos={repos}
      />
    }

    {!!starred.length &&
      <Repos
        className='starred'
        title='Favoritos:'
        repos={starred}
      />
    }
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent
