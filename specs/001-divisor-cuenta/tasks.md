# Tasks: Divisor de cuenta web
Input: spec.md intacta, plan.md, research.md, data-model.md, contracts/interfaz.md.

## Phase 1: Setup
- [x] T001 Crear Vite y configurar dependencias en package.json.
- [x] T002 Copiar spec en specs/001-divisor-cuenta/spec.md y adaptar .specify/memory/constitution.md.

## Phase 2: Foundational
- [x] T003 Crear entidades inmutables en src/domain/cuenta.js y resultado.js y contrato aplicar en estrategiaRedondeo.js.

## Phase 3: US1 — Repartir cuenta (P1)
Prueba independiente: seis escenarios sin cambiar números ni errores de spec.md.
- [x] T004 [US1] Escribir seis datos y runner en test/casosDePrueba.js y test/division.test.js; comprobar errores sin cálculo y LSP.
- [x] T005 [US1] Crear test/pantalla.test.jsx con los tres casos obligatorios y regresiones.
- [x] T006 [US1] Crear src/domain/validarEntrada.js: monto/propina finitos no negativos, personas entero positivo y protección de desbordamiento.
- [x] T007 [US1] Crear src/data/redondeoExacto.js y redondeoHaciaArriba.js y src/domain/calcularDivision.js sin validar/formatear.
- [x] T008 [US1] Crear src/presentation/useDivisor.js con dependencias inyectadas, coma decimal y exclusión error/resultado.
- [x] T009 [US1] Crear src/presentation/formateadorMoneda.js con exactamente dos decimales.
- [x] T010 [US1] Crear src/presentation/PantallaDivisor.jsx y divisor.css: una pantalla accesible, selector, Calcular y estados.
- [x] T011 [US1] Conectar implementaciones solo en src/main.jsx, sin red, almacenamiento, login ni historial.
- [x] T012 [US1] Ejecutar test/validacion.test.js con límites y tercera estrategia intercambiable.

## Phase 4: Verificación
- [x] T013 Ejecutar tests, build y lint; registrar salidas reales en evidencias/.
- [x] T014 Verificar SOLID, navegador responsive y offline; registrar evidencias/ y convergencia.
- [x] T015 Escribir analisis_spec.md, respuestas.md, README.md e informe final con métricas reales.

## Dependencies & Execution Order
T001/T002 -> T003 -> T004/T005 (fase roja) -> T006..T011 -> T012 -> T013/T014 -> T015.
Una única historia. MVP = US1 completa. Oportunidades paralelas: entidades independientes;
estrategias y formateador; documentación y revisión después de pruebas. Ejecución secuencial.
No se modifica la spec. No se genera una nueva con speckit-specify.

