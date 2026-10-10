import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { redondeoExacto } from './data/redondeoExacto.js'
import { redondeoHaciaArriba } from './data/redondeoHaciaArriba.js'
import { calcularDivision } from './domain/calcularDivision.js'
import { validarEntrada } from './domain/validarEntrada.js'
import { formateadorMoneda } from './presentation/formateadorMoneda.js'
import { PantallaDivisor } from './presentation/PantallaDivisor.jsx'

const dependencias = {
  validar: validarEntrada, calcular: calcularDivision, formatear: formateadorMoneda,
  estrategias: {
    exacto: { ...redondeoExacto, etiqueta: 'Exacto' },
    arriba: { ...redondeoHaciaArriba, etiqueta: 'Hacia arriba' },
  },
}
createRoot(document.getElementById('root')).render(
  <StrictMode><PantallaDivisor dependencias={dependencias} /></StrictMode>,
)
