import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table'

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

   const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <div id='Container'>
      <Form onAddExpense={addExpense}/>
      
      <Table  searchTerm={searchTerm} 
        expenses={expenses} 
        onSearchChange={setSearchTerm}/>
    </div>
  
  );
}

export default App;
