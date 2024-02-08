import React from 'react'
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list'
import { FormatDate, ID } from '../helpers'
import 'react-swipeable-list/dist/styles.css'
import SavingsIcon from '../img/icono_ahorro.svg'
import HouseIcon from '../img/icono_casa.svg'
import FoodIcon from '../img/icono_comida.svg'
import ExpenseIcon from '../img/icono_gastos.svg'
import LeisureIcon from '../img/icono_ocio.svg'
import HealthIcon from '../img/icono_salud.svg'
import ServicesIcon from '../img/icono_suscripciones.svg'

const options = {
    ahorro: SavingsIcon,
    comida: FoodIcon,
    casa: HouseIcon,
    varios: ExpenseIcon,
    ocio: LeisureIcon,
    salud: HealthIcon,
    servicios: ServicesIcon
}

export const Expense = ({ expense, setEdit, deleteExpense }) => {

    const leadingActions = () =>(
        <LeadingActions>
            <SwipeAction onClick={() => setEdit(expense)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () =>(
        <TrailingActions>
            <SwipeAction onClick={()=>{deleteExpense(expense.id)}}
            destructive={true}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem 
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
            >
                <div className='gasto sombra'>
                    <div className="contenido-gasto">
                        <img src={options[expense.category]} alt="Icono gasto" />
                        <div className="descripcion-gasto">
                            <p className="categoria">
                                {expense.category}
                            </p>
                            <p className="nombre-gasto">
                                {expense.description}
                            </p>
                            <p className="fecha-gasto">
                                {FormatDate(expense.date)}
                            </p>

                        </div>

                        <p className="cantidad-gasto">
                            ${expense.amount}
                        </p>
                    </div>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}
