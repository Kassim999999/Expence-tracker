import React, { useState } from 'react'

const Form = ({name, description, category, amount, date}) => {
    //  const [formContent, setFormContent] = useState({
    //     name: "",
    //     description: "",
    //     category: "",
    //     amount: "",
    //     date: ""
    //  });

     function handleSubmit(event) {
        event.preventDefault();
          console.log(event);
        
     }

       function handleChange(event) {
        console.log(event.target.value);
        
     }
    return (

    <div id='form-container'>
            <h1>Expense Tracker</h1>
        <h3>Start taking control of your finances and life</h3>
            
        
        <form className='form'
        onSubmit={handleSubmit}
        >
            
            <h2>Add Expense</h2>
            <input 
            type="text" 
            placeholder='Expense Name'
            value={name}
            onChange={handleChange}
             />
            <input 
            type="text" 
            placeholder='Description' 
            value={description}
            onChange={handleChange}
            />
            <input 
            type="text" 
            placeholder='Category' 
            value={category}
            onChange={handleChange}
            />
            <input 
            type="number" 
            placeholder='Amount' 
            value={amount}
            onChange={handleChange}
            />
            <input type="date" value={date}/>
            <button type='submit' className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form