import React from 'react'

const Pagination = props => {

  const { current_page, total_pages } = props.pagination
  const items = []

  for (let i=1; i<=total_pages; i++) {
    items.push(
      <li key={i} className={`page-item ${current_page === i ? 'active' : ''}`}>
        <button className="page-link" onClick={() => props.click(i)}>{i}</button>
      </li>
    )
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {items}
      </ul>
    </nav>
  )

}

export default Pagination