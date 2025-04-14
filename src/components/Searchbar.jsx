import React from 'react'

const Searchbar = () => {
  return (
    <div>
        <input type="text" placeholder='Search' value={searchTerm} />
    </div>
  )
}

export default Searchbar