import React from 'react'

const Form = () => {
  return (
    <div id='form-container'>
        <h2>Add Expense</h2>
        <form className='form'>
            <input type="text" placeholder='Expense Name' />
            <input type="text" placeholder='Description'/>
            <input type="text" placeholder='Category'/>
            <input type="number" placeholder='Amount'/>
            <input type="text" />
            <button type='submit' className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form