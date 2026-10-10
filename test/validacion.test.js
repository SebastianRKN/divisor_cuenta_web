import { expect, it } from 'vitest'
import { validarEntrada } from '../src/domain/validarEntrada.js'
import { calcularDivision } from '../src/domain/calcularDivision.js'
const base = { monto: 10, personas: 2, propina: 0 }
it.each([
  [{ monto: -1 }, 'Monto inválido'],
  [{ monto: Infinity }, 'Monto inválido'],
  [{ personas: 1.5 }, 'Debe haber al menos una persona'],
  [{ personas: NaN }, 'Debe haber al menos una persona'],
  [{ personas: Infinity }, 'Debe haber al menos una persona'],
  [{ propina: -1 }, 'Propina inválida'],
  [{ propina: NaN }, 'Propina inválida'],
  [{ propina: Infinity }, 'Propina inválida'],
  [{ monto: 1e308, propina: 100 }, 'Monto inválido'],
])('rechaza límite %j', (cambios, error) => {
  expect(validarEntrada({ ...base, ...cambios })).toBe(error)
})
it('cero monto y cero propina válidos', () => {
  expect(validarEntrada({ ...base, monto: 0 })).toBeNull()
})
it('OCP: tercera estrategia sin modificar el caso de uso', () => {
  expect(calcularDivision(base, { aplicar: valor => valor }).porPersona).toBe(5)
})
