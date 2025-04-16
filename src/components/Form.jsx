import React, { useState } from 'react';

const Form = ({ onAddExpense }) => {
  const [formContent, setFormContent] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormContent((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddExpense(formContent); 
    setFormContent({ name: '', description: '', category: '', amount: '', date: '' });
  }

  return (
    <div id='form-container'>
      <h1>Expense Tracker</h1>
      <h3>Start taking control of your finances and life</h3>

      <form className='form' onSubmit={handleSubmit}>
        <h2>Add Expense</h2>
        <input
          type='text'
          name='name'
          placeholder='Expense Name'
          value={formContent.name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='description'
          placeholder='Description'
          value={formContent.description}
          onChange={handleChange}
        />
        <input
          type='text'
          name='category'
          placeholder='Category'
          value={formContent.category}
          onChange={handleChange}
        />
        <input
          type='number'
          name='amount'
          placeholder='Amount'
          value={formContent.amount}
          onChange={handleChange}
        />
        <input
          type='date'
          name='date'
          value={formContent.date}
          onChange={handleChange}
        />
        <button type='submit' className='btn'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
