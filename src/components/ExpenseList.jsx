import React from 'react'
import { Expense } from './Expense'

export const ExpenseList = ({ expenses, 
    setEdit, 
    deleteExpense, 
    filter, 
    filtered }) => {
    return (
        <div className='listado-gastos contenedor'>

            {
                filter ? (
                    <>
                    <h2>{filtered.length ? 'Gastos' : 'No hay gastos en esta categoría'}</h2>

                    {filtered.map((expense) => (
                        <Expense
                            key={expense.id}
                            expense={expense}
                            setEdit={setEdit}
                            deleteExpense={deleteExpense}
                        />
                    ))}
                    </>
                ) : (
                    <>
                    <h2>{expenses.length ? 'Gastos' : 'No hay gastos aun'}</h2>

                    {expenses.map((expense) => (
                        
                        <Expense
                            key={expense.id}
                            expense={expense}
                            setEdit={setEdit}
                            deleteExpense={deleteExpense}
                        />
                    ))}
                    </>
                )
            } 
        </div>
    )
}
