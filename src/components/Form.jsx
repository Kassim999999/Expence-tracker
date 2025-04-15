import React from 'react'

const Form = ({name, description, category, amount, date, setName, setDescription, setCategory, setAmount, setDate, handleSubmit}) => {
  return (
    <div id='form-container'>
        <h2>Add Expense</h2>
        <form className='form'
        onSubmit={handleSubmit}
        >
            <input 
            type="text" 
            placeholder='Expense Name'
            value={name}
            onChange={(event)=> setName(event.target.value)}
             />
            <input 
            type="text" 
            placeholder='Description' 
            value={description}
            onChange={(event)=> setDescription(event.target.value)}
            />
            <input 
            type="text" 
            placeholder='Category' 
            value={category}
            onChange={(event)=> setCategory(event.target.value)}
            />
            <input 
            type="number" 
            placeholder='Amount' 
            value={amount}
            onChange={(event)=> setAmount(event.target.value)}
            />
            <input type="text" value={date} onChange={(event)=> setDate(event.target.value)}/>
            <button type='submit' className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form