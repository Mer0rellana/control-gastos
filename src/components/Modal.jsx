import React, { useState, useEffect } from 'react'
import Cerrar from '../img/cerrar.svg'
import { Message } from './Message'

export const Modal = ({ setModal, 
    setAnimation, 
    animation, 
    saveExpense, 
    edit,
    setEdit
}) => {

    const[message, setMessage] = useState('')

     const[description, setDescription] = useState('')
     const[amount, setAmount] = useState('')
     const[category, setCategory] = useState('')
     const[date, setDate] = useState('')
     const[id, setId] = useState('')

     useEffect(()=>{
        if(Object.keys(edit).length > 0){
            setDescription(edit.description)
            setAmount(edit.amount)
            setCategory(edit.category)
            setId(edit.id)
            setDate(edit.date)
        }
     },[])

    const closeModal = () => {
        setAnimation(false)
        setEdit({})
        setTimeout(() => {
            setModal(false)
        }, 400)
    }

    const handleSubmit = (e) =>{

        e.preventDefault();

        if ([description, amount, category].includes('')) {
            setMessage('Todos los campos son obligatorios')

            setTimeout(() =>{
                setMessage('')
            }, 3000)
            return;
        }

        saveExpense({description, amount, category, id, date})
    }

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img src={Cerrar} alt="cerrar modal"
                    onClick={closeModal} />
            </div>
            <form onSubmit={handleSubmit} className={`formulario ${animation ? 'animar' : 'cerrar'}`}>
                <legend>{edit.description ? 'Editar gasto' : 'Nuevo gasto'}</legend>

                {
                    message && 
                    <Message type='error'>
                        {message}
                    </Message>
                }
                
                <div className="campo">
                    <label htmlFor="descripcion">Descripción</label>
                    
                    <input type="text"
                        placeholder='Descripción del gasto'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <label htmlFor="cantidad">Cantidad</label>
                    
                    <input type="number"
                        placeholder='Cantidad gastada'
                        value={amount}
                        onChange={e => setAmount(e.target.value)}

                    />

                   
                    <label htmlFor="cantegoria">Categoria</label>
                   
                    <select id="categoria"
                     value={category}
                     onChange={e => setCategory(e.target.value)}>
                        <option value="">--Seleccione--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="varios">Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="servicios">Servicios</option>
                    </select>
                </div>

                <input type="submit" 
                    value={edit.description ? 'Actualizar gasto' : 'Añadir gasto'}
                />
            </form>
        </div>
    )
}
