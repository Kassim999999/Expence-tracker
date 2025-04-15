import React from 'react'

const Searchbar = ({searchExpense}) => {
  return (
    <div id='finder'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" 
        placeholder='Search'
        value={searchExpense}
        onChange={(event)=> searchExpense(event.target.value)}
        
        />
    </div>
  )
}

export default Searchbar