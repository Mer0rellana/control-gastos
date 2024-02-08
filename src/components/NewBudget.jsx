import React, { useState } from 'react'
import { Message } from './Message';

const NewBudget = ({
    budget, 
    setBudget, 
    setValidBudget}) => {

    const [message, setMessage] = useState('')

    const handleBudget = (e) =>{
        e.preventDefault();

        if(!budget || budget < 0){ 
            setMessage('No es un presupuesto válido')
            return
        }
        setMessage('')
        setValidBudget(true)
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handleBudget} className='formulario'>
                <div className='campo'>
                    <label htmlFor="">Definir presupuesto</label>
                    <input type="text" 
                    className='nuevo-presupuesto'
                    placeholder='Añade tu presupuesto' 
                    value={budget}
                    onChange={(e)=>setBudget(e.target.value)}/>
                </div>
                <input type="submit" className='' value="Añadir"/>
                {message && <Message type={'error'}>{message}</Message>}
            </form>
        </div>
    )
}

export default NewBudget