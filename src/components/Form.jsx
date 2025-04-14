import React from 'react'

const Form = () => {
  return (
    <div>
        <h2>Add Expense</h2>
        <form>
            <input type="text" placeholder='Expense Name' />
            <input type="text" placeholder='Description'/>
            <input type="text" placeholder='Category'/>
            <input type="number" placeholder='Amount'/>
            <input type="text" />
        </form>
    </div>
  )
}

export default Form