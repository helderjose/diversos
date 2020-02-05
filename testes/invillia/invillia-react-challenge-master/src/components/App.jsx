import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'
import Pagination from './Pagination'

const App = () => {

  const [people, setPeople] = useState([])
  const [pagination, setPagination] = useState({})

  useEffect(() => {
    getPeople()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getStarships()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.current_page])

  const getPeople = async (page = 1) => {
    if (page === pagination.current_page) {
      return
    }

    const response = await axios.get('https://swapi.co/api/people/?page=' + page)

    setPeople(response.data.results)
    setPagination({
      current_page: page,
      total_pages: Math.ceil(response.data.count / 10)
    })
  }

  const getStarships = () => {
    people.forEach((person, index) => {
      if (person.starships.length === 0) {
        return
      }
      getCharacterStarthips(index, person.starships)
    })
  }

  const getCharacterStarthips = (person_index, starships_urls) => {
    starships_urls.forEach(starship_url => {
      getStarshipsFromApi(person_index, starship_url)
    })
  }

  const getStarshipsFromApi = async (person_index, url) => {
    const response = await axios.get(url)

    const people_clone = [...people]
    const starships_data = people_clone[person_index].starships_data || []
    starships_data.push(response.data)
    people_clone[person_index].starships_data = starships_data
    
    setPeople(people_clone)
  }

  const characters = people.map((person, index) => {
    return <Character key={index} character={person} />
  })

  window.scrollTo(0, 0)

  return (
    <>
      <div className="row">
        {characters}
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Pagination click={getPeople} pagination={pagination} />
        </div>
      </div>
    </>
  )
}

export default App