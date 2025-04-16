import React from 'react'

const Table = ({searchTerm, expenses= [], onDeleteExpense}) => {

    function handleChange(event) {
        console.log(event.target.value);
        
    }
    function handleDelete(index) {
        console.log(index);
        onDeleteExpense(index)
        
    }
  return (
    <div className='table'>
        <input className='finder' 
        type="text" 
        placeholder='Search Expenses...' 
        value={searchTerm}
        onChange={handleChange}
        />
        <table>
            <thead>
                <tr>
                    <th>Expense</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {expenses.filter((expense)=>{
                const term = searchTerm.toLowerCase();
                return(
                    expense.name.toLowerCase().includes(term) ||
                    expense.description.toLowerCase().includes(term)
                )
                })
                .map((expense, index) => (
                <tr key={index}>
                    <td>{expense.name}</td>
                    <td>{expense.description}</td>
                    <td>{expense.category}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.date}</td>
                    <td>
                        <button id='trash' onClick={()=>handleDelete(index)}><i className="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table