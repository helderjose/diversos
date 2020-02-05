'use strict'

import React, { PropTypes } from 'react'

/*
Component stateless.
As props desse component vem do app-content.js que recebe de app.js
*/

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions'>
    {/* não usou link porque não ia lincar com nada */}
    <button onClick={getRepos}>Ver repositórios</button>
    <button onClick={getStarred}>Ver favoritos</button>
  </div>
)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default Actions
