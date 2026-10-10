/** Recibe Cuenta y devuelve el primer error literal o null. No lanza por datos numéricos. */
export function validarEntrada({ monto, personas, propina }) {
  if (!Number.isFinite(monto) || monto < 0) return 'Monto inválido'
  if (!Number.isInteger(personas) || personas < 1) return 'Debe haber al menos una persona'
  if (!Number.isFinite(propina) || propina < 0) return 'Propina inválida'
  const total = monto * (1 + propina / 100)
  if (!Number.isFinite(total) || !Number.isFinite(total / personas * 100)) return 'Monto inválido'
  return null
}
