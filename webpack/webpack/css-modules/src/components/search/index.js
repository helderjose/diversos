'use strict'

import React, { PropTypes } from 'react'

/*
O css modules transforma o search.css em um objeto java script e
cada declaração se transforma em um atributo desse objeto java script
*/
import style from './search.css'


/*
vai transformar isso
<div className={style.search}>
nisso
<div class="_2bvrjOSouhKcmAdMtDKE68">
*/
const Search = ({ isDisabled, handleSearch }) => (
  <div className={style.search}>
    <input
      type='search'
      placeholder='Digite o nome do usuário no GitHub'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
