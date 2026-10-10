import { describe, it, expect, vi } from 'vitest'
import { casos } from './casosDePrueba.js'
import { cuenta } from '../src/domain/cuenta.js'
import { calcularDivision } from '../src/domain/calcularDivision.js'
import { validarEntrada } from '../src/domain/validarEntrada.js'
import { redondeoExacto } from '../src/data/redondeoExacto.js'
import { redondeoHaciaArriba } from '../src/data/redondeoHaciaArriba.js'
const estrategias = { exacto: redondeoExacto, arriba: redondeoHaciaArriba }
describe('Seis casos originales', () => {
  for (const caso of casos) {
    it(caso.nombre, () => {
      const entrada = cuenta(caso)
      const calcular = vi.fn(calcularDivision)
      const error = validarEntrada(entrada)
      if (caso.errorEsperado) {
        expect(error).toBe(caso.errorEsperado)
        expect(calcular).not.toHaveBeenCalled()
      } else {
        expect(error).toBeNull()
        expect(calcular(entrada, estrategias[caso.modo]).porPersona).toBeCloseTo(caso.esperado, 2)
      }
    })
  }
})
it('LSP: el mismo cálculo recibe ambas estrategias sin comprobar su tipo', () => {
  const entrada = cuenta({ monto: 10, personas: 3, propina: 0 })
  for (const [estrategia, esperado] of [[redondeoExacto, 3.33], [redondeoHaciaArriba, 4]]) {
    expect(calcularDivision(entrada, estrategia).porPersona).toBeCloseTo(esperado, 2)
  }
})
