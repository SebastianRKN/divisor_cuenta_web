/** Construye datos inmutables; recibe números sin validarlos y devuelve una Cuenta. */
export const cuenta = ({ monto, personas, propina }) => Object.freeze({ monto, personas, propina })
