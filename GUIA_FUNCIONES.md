# Guía para explicar el código
Borrador de apoyo: no demuestra por sí mismo que el estudiante comprenda las funciones.
| Función/módulo | Por qué existe | Recibe | Devuelve | Errores/precondición |
|---|---|---|---|---|
| cuenta | Representar entrada inmutable | monto, personas, propina | objeto congelado | No valida; recibe objeto |
| resultado | Separar número de formato | porPersona | objeto congelado | Pago calculado |
| EstrategiaRedondeo | ISP y sustitución | Contrato aplicar(valor) | Contrato JSDoc | Valor finito no negativo |
| calcularDivision | Solo reparto | Cuenta válida, estrategia | Resultado | Prevalidar; contrato aplicar válido |
| validarEntrada | Rechazar entrada inválida | Cuenta numérica | primer mensaje o null | Monto inválido, personas, propina; sin throw esperado |
| redondeoExacto.aplicar | Redondear centavos | pago | Math.round(pago*100)/100 | Valor bajo contrato |
| redondeoHaciaArriba.aplicar | Techo entero | pago | Math.ceil(pago) | Valor bajo contrato |
| decimal | Parseo de presentación | texto | número o NaN | No throw con string; rechaza texto parcial |
| useDivisor | Estado y coordinación | contratos inyectados | estado/acciones/opciones | Valida antes de calcular |
| cambiarCampo | Editar un campo | nombre, texto | void | Nombres del formulario |
| enviar | Coordinar submit | evento | void, actualiza salida | Error de validación o Modo inválido; borra pago |
| formateadorMoneda | Dos decimales | número válido | string | Número validado |
| PantallaDivisor | Dibujar vista | dependencias | JSX | No cálculo de negocio |
| main.jsx | Componer concretos y montar | elemento root | arranque React | root debe existir |

SRP: cambiar formato no cambia cálculo. OCP: nueva estrategia se registra en composición.
LSP: la misma función trabaja con exacto/arriba/identidad sin instanceof. ISP: una operación.
DIP: hook recibe funciones; no importa data. Las fábricas de datos no son servicios concretos.

