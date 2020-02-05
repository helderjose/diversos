import React from 'react'

const Character = props => {

  const character = props.character
  const starships = character.starships_data || []

  const items = starships.map((starship, index) => (
    <li key={index}>
      {starship.name}<br />
      <small><em>{starship.model}</em></small>
    </li>
  ))

  const starships_list = items.length ? <ul>{items}</ul> : 'None'

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c" />
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
        </svg>
        <div className="card-body">
          <div className="card-text">
            <ul className="char-info">
              <li>
                <strong>Name:</strong> {character.name}
              </li>
              <li>
                <strong>Gender:</strong> {character.gender}
              </li>
              <li>
                <strong>Birth Year:</strong> {character.birth_year}
              </li>
              <li>
                <strong>Starships:</strong> {starships_list}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Character