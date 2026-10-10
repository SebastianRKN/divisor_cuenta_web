import { useState } from 'react'
import { cuenta } from '../domain/cuenta.js'

/** Lee un decimal completo; admite coma y exponente, devuelve NaN si es inválido. */
function decimal(texto) {
  const normalizado = texto.trim().replaceAll(',', '.')
  return /^[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?$/.test(normalizado)
    ? Number(normalizado) : NaN
}
/** Recibe contratos inyectados. Coordina texto -> validación -> cálculo -> texto visible. */
export function useDivisor({ validar, calcular, estrategias, formatear }) {
  const [campos, setCampos] = useState({ monto: '', personas: '2', propina: '0' })
  const [modo, setModo] = useState(Object.keys(estrategias)[0])
  const [salida, setSalida] = useState({ pago: null, error: null })
  /** Cambia un campo de texto; sin cálculo ni valor de retorno. */
  function cambiarCampo(nombre, valor) {
    setCampos(anterior => ({ ...anterior, [nombre]: valor }))
  }
  /** Valida y calcula al enviar. Un error siempre borra el pago anterior. */
  function enviar(evento) {
    evento.preventDefault()
    const entrada = cuenta({ monto: decimal(campos.monto),
      personas: /^[+-]?\d+$/.test(campos.personas.trim()) ? Number(campos.personas) : NaN,
      propina: decimal(campos.propina) })
    const error = validar(entrada)
    if (error) { setSalida({ pago: null, error }); return }
    const estrategia = estrategias[modo]
    if (!estrategia) { setSalida({ pago: null, error: 'Modo inválido' }); return }
    setSalida({ pago: formatear(calcular(entrada, estrategia).porPersona), error: null })
  }
  return { campos, cambiarCampo, modo, setModo, enviar, ...salida,
    opciones: Object.entries(estrategias).map(([id, estrategia]) => ({ id, etiqueta: estrategia.etiqueta })) }
}
