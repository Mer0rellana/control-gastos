import React from 'react'
import NewBudget from './NewBudget'
import BudgetControl from './BudgetControl'


const Header = ({ expenses, budget, setBudget, validBudget, setValidBudget, setExpense, setFiltered }) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {validBudget ?
        (<BudgetControl
          expenses={expenses}
          budget={budget}
          setExpense={setExpense}
          setBudget={setBudget}
          setValidBudget={setValidBudget}
          setFiltered={setFiltered}
        />)
        : (
          <NewBudget
            budget={budget}
            setBudget={setBudget}
            setValidBudget={setValidBudget}
          ></NewBudget>
        )
      }
    </header>
  )
}

export default Header