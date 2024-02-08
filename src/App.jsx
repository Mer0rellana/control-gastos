import { useState, useEffect } from "react"
import Header from "./components/Header"
import IconBudget from './img/nuevo-gasto.svg'
import { Modal } from "./components/modal"
import { ID } from "./helpers"
import { ExpenseList } from "./components/ExpenseList"
import { Filters } from "./components/Filters"

function App() {

  const [budget, setBudget] = useState(
    localStorage.getItem('budget') ?? 0
  )
  const [validBudget, setValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animation, setAnimation] = useState(false)
  const [expenses, setExpense] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
  )
  const [edit, setEdit] = useState({})
  const [filter, setFilter] = useState('')
  const [filtered, setFiltered] = useState([])


  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget])

  useEffect(()=>{
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  },[expenses])

  useEffect(()=>{
    const budgetLS = localStorage.getItem('budget') ?? 0

    if(budgetLS > 0){
      setValidBudget(true)
    }
  },[])

  useEffect(()=>{
    if(filter){
      const filtered = expenses.filter( expense => expense.category === filter)

      setFiltered(filtered)
    }
  }, [filter]) 

  useEffect(() => {
    if (Object.keys(edit).length > 0) {
      setModal(true)
      setTimeout(() => {
        setAnimation(true)
      }, 500)
    }
  }, [edit])

  const handleSpent = () => {
    setModal(true)
    setEdit({})
    setTimeout(() => {
      setAnimation(true)
    }, 500)
  }

  const saveExpense = (expense) => {
    if (expense.id) {
      const expenseUpdated = expenses.map(expenseState => expenseState.id === expense.id ? expense : expenseState)
      setExpense(expenseUpdated)
      setEdit({})
    } else {
      expense.id = ID()
      expense.date = Date.now()
      setExpense([...expenses, expense])
    }

    setAnimation(false)

    setTimeout(() => {
      setModal(false)
    }, 600)

  }

  const deleteExpense = (id) => {
    const expenseUpdated = expenses.filter(expense => expense.id !== id)
    setExpense(expenseUpdated)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        validBudget={validBudget}
        setValidBudget={setValidBudget}
        setExpense={setExpense}
        setFiltered={setFiltered}
      ></Header>

      {validBudget && (
        <>
          <main>
            <Filters
            filter={filter}
            setFilter={setFilter}
            />
            <ExpenseList
              expenses={expenses}
              setEdit={setEdit}
              deleteExpense={deleteExpense}
              filtered = {filtered}
              filter = {filter}
            />
          </main>
          <div className="nuevo-gasto">
            <img src={IconBudget}
              alt="nuevo gasto"
              onClick={handleSpent}
            />
          </div>
        </>
      )}

      {modal &&
        <Modal
          setModal={setModal}
          setAnimation={setAnimation}
          animation={animation}
          saveExpense={saveExpense}
          edit={edit}
          setEdit={setEdit}
        />
      }

    </div>
  )
}

export default App
