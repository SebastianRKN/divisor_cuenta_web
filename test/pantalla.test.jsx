import { render, screen, fireEvent } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { PantallaDivisor } from '../src/presentation/PantallaDivisor.jsx'
import { validarEntrada } from '../src/domain/validarEntrada.js'
import { calcularDivision } from '../src/domain/calcularDivision.js'
import { redondeoExacto } from '../src/data/redondeoExacto.js'
import { redondeoHaciaArriba } from '../src/data/redondeoHaciaArriba.js'
import { formateadorMoneda } from '../src/presentation/formateadorMoneda.js'
function montar() {
  const calcular = vi.fn(calcularDivision)
  render(<PantallaDivisor dependencias={{ validar: validarEntrada, calcular, formatear: formateadorMoneda,
    estrategias: { exacto: { ...redondeoExacto, etiqueta: 'Exacto' }, arriba: { ...redondeoHaciaArriba, etiqueta: 'Hacia arriba' } } }} />)
  return calcular
}
function ingresar(monto, personas, propina = '0') {
  for (const [nombre, valor] of [['Monto total', monto], ['Personas', personas], ['Propina (%)', propina]]) {
    fireEvent.change(screen.getByLabelText(nombre), { target: { value: valor } })
  }
  fireEvent.click(screen.getByRole('button', { name: 'Calcular' }))
}
it('100, 4 y 10 muestra 27.50', () => {
  montar(); ingresar('100', '4', '10')
  expect(screen.getByText('27.50')).toBeVisible()
})
it('50 y 0 muestra error, ningún pago numérico y no calcula', () => {
  const calcular = montar(); ingresar('50', '0')
  expect(screen.getByRole('alert')).toHaveTextContent('Debe haber al menos una persona')
  expect(screen.queryByTestId('pago')).not.toBeInTheDocument()
  expect(calcular).not.toHaveBeenCalled()
})
it('abc muestra Monto inválido', () => {
  const calcular = montar(); ingresar('abc', '4')
  expect(screen.getByRole('alert')).toHaveTextContent('Monto inválido')
  expect(calcular).not.toHaveBeenCalled()
})
it('un error retira el resultado anterior', () => {
  montar(); ingresar('100', '4', '10'); ingresar('50', '0')
  expect(screen.queryByText('27.50')).not.toBeInTheDocument()
  expect(screen.queryByTestId('pago')).not.toBeInTheDocument()
})
it('coma decimal, centavos y selector hacia arriba', () => {
  montar(); ingresar('10,00', '3')
  expect(screen.getByText('3.33')).toBeVisible()
  fireEvent.change(screen.getByLabelText('Redondeo'), { target: { value: 'arriba' } })
  fireEvent.click(screen.getByRole('button', { name: 'Calcular' }))
  expect(screen.getByText('4.00')).toBeVisible()
})
it('no acepta texto parcial ni hexadecimales como monto decimal', () => {
  const calcular = montar(); ingresar('12abc', '4'); ingresar('0x10', '4')
  expect(screen.getByRole('alert')).toHaveTextContent('Monto inválido')
  expect(calcular).not.toHaveBeenCalled()
})
it('personas fraccionarias y propina vacía son inválidas como en sdd', () => {
  montar(); ingresar('10', '2.5')
  expect(screen.getByRole('alert')).toHaveTextContent('Debe haber al menos una persona')
  ingresar('10', '2', '')
  expect(screen.getByRole('alert')).toHaveTextContent('Propina inválida')
})
