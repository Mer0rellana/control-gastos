import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BudgetControl = ({ budget, expenses, setExpense, setBudget, setValidBudget, setFiltered}) => {

    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {

        const totalSpent = expenses.reduce((total, expense) => 
        total + Number(expense.amount), 0)

        const totalAvailable = budget - totalSpent

        const newpctg = (((budget - totalAvailable)/budget*100)).toFixed(2)

        setSpent(totalSpent)
        setAvailable(totalAvailable)

        setTimeout(()=>{
            setPercentage(newpctg)
        }, 1500)
    }, [expenses])

    const formatAmount = (amount) => {
        return Number(amount).toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS'
        })
    }

    const handleReset = () =>{
        const result = window.confirm('¿Desea reiniciar preupuesto y gastos?')

        if(result){
            setExpense([])
            setBudget('')
            setValidBudget(false)
            setFiltered([])
        }
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div className="">
                <CircularProgressbar 
                    value={percentage}
                    styles={buildStyles({
                        pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
                        trailColor:'#F5F5F5',
                        textColor: percentage > 100 ? '#DC2626' : '#3B82F6'
                    })}
                    text={`${percentage}% 
                    gastado`}
                />
            </div>
            <div className="contenido-presupuesto">
                <button className="reset-app" type="button" onClick={handleReset}>
                    Resetear app
                </button>
                <p>
                    <span>Presupuesto: </span> {formatAmount(budget)}
                </p>

                <p className={`${available < 0 ? 'negativo' : ''}`}>
                    <span>Disponible: </span> {formatAmount(available)}
                </p>

                <p>
                    <span>Gastado: </span> {formatAmount(spent)}
                </p>
            </div>
        </div>
    )
}

export default BudgetControl;

