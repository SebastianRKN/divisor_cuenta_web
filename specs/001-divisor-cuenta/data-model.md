# Data model
Cuenta: monto y propina finitos no negativos; personas entero positivo. Relación:
una Cuenta validada + una EstrategiaRedondeo producen un Resultado {porPersona} numérico.
Validación prioriza monto, personas, propina, desbordamiento (igual al Flutter).
Estado de presentación: campos de texto, modo, resultado nullable, error nullable.
Inicio: monto vacío, personas '2', propina '0', modo 'exacto', sin error/resultado.
Calcular válido -> resultado; inválido -> error y resultado null. Nunca ambos.

