import { useState, useEffect } from 'react'

export const Filters = ({filter, setFilter}) => {
    return (
        <div className='filtros sombra contenedor'>
            <form>
                <div className="campo">
                    <label>
                        Filtrar gastos
                    </label>

                    <select value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="">--Todas las categorías--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="varios">Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="servicios">Servicios</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
