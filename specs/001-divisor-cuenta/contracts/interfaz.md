# Contratos
EstrategiaRedondeo: { aplicar(valor): number }, recibe número finito no negativo.
calcularDivision(cuenta, estrategia): Resultado; precondición validarEntrada(cuenta) === null.
validarEntrada(cuenta): string | null. Errores: Monto inválido;
Debe haber al menos una persona; Propina inválida.
useDivisor({validar, calcular, estrategias, formatear}): estado y acciones de formulario.
No importa implementaciones de data. Mapa de opciones usa id, etiqueta y aplicar.
Pantalla: monto, personas, propina, selector, Calcular, error role=alert y output de pago.
No interfaz remota, almacenamiento, autenticación ni distribución de centavos individuales.

