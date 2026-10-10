import { resultado } from './resultado.js'
/**
 * Reparte cuenta previamente validada y delega el redondeo. Devuelve Resultado.
 * @param {{monto:number, personas:number, propina:number}} cuenta
 * @param {import('./estrategiaRedondeo.js').EstrategiaRedondeo} estrategia
 */
export function calcularDivision(cuenta, estrategia) {
  const pago = cuenta.monto * (1 + cuenta.propina / 100) / cuenta.personas
  return resultado(estrategia.aplicar(pago))
}
