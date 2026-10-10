# Implementation Plan: Divisor de cuenta web
**Branch**: main | **Date**: 2026-10-09 | **Spec**: [spec.md](spec.md)
**Input**: copia byte por byte de la rama sdd, commit 92fc101.

## Summary
Una pantalla React, useState local, JavaScript puro y estrategias inyectadas.
La spec no se modifica. La etiqueta histórica Feature Branch: sdd se conserva como procedencia.

## Technical Context
- Language/Version: JavaScript ESM; Node observado v24.21.0.
- Dependencies: React 19.2.8, Vite 8.3.0; versiones resueltas en package-lock.json.
- Storage: ninguno; sin llamadas de negocio a red, sin backend ni base de datos.
- Testing: Vitest, jsdom, Testing Library y jest-dom; runner npm test = vitest run.
- Target Platform: navegador web desktop/móvil; build estático servido localmente sin Internet.
- Project Type: aplicación de una pantalla.
- Performance: operaciones constantes; no inventar objetivos de latencia.
- Constraints: preserve seis escenarios, errores literales, dos decimales y SOLID.
- Scope: un formulario; sin funciones adicionales, sin librerías externas de estado.

## Constitution Check
Antes/después del diseño: PASS. SRP separa validar/calcular/formatear; OCP y LSP reciben
EstrategiaRedondeo con aplicar(valor); ISP contrato de una operación; DIP hook recibe
funciones y mapa de estrategias. Domain no importa React/DOM. main.jsx compone todo.
Las pruebas pueden componer dependencias fuera de src/.

## Project Structure
- src/domain/cuenta.js: fábrica inmutable {monto, personas, propina}.
- src/domain/resultado.js: fábrica inmutable {porPersona}.
- src/domain/estrategiaRedondeo.js: contrato JSDoc aplicar(number): number.
- src/domain/calcularDivision.js: recibe cuenta validada y estrategia; calcula y devuelve resultado.
- src/domain/validarEntrada.js: devuelve primer error o null, sin calcular resultado.
- src/data/redondeoExacto.js: aritmética de centavos.
- src/data/redondeoHaciaArriba.js: Math.ceil.
- src/presentation/useDivisor.js: parsea texto, valida, coordina y mantiene useState.
- src/presentation/formateadorMoneda.js: dos decimales, sin localización variable.
- src/presentation/PantallaDivisor.jsx: formulario accesible y resultado/error excluyentes.
- src/presentation/divisor.css: teal heredado, foco visible, formulario responsive.
- src/main.jsx: único punto de composición concreto de producción y montaje DOM.
- test/casosDePrueba.js: seis escenarios, escritos por agente por autorización posterior.
- test/division.test.js: un it por caso, error literal, toBeCloseTo(esperado, 2), LSP.
- test/pantalla.test.jsx: tres pruebas obligatorias y regresiones de presentación separadas.
- test/validacion.test.js: límites de spec y sustitución por tercera estrategia.
- test/setup.js y vite.config.js: jsdom y limpieza tras cada prueba.

## Decisions and Validation
Parseo completo (no parseFloat parcial): coma decimal aceptada, vacío de monto inválido,
personas entero positivo; propina vacía inválida como en sdd. No se importa el comportamiento
posterior de sdd-interactivo. Valores iniciales 2 personas, 0% y exacto.
Errores retiran resultados anteriores. Validar desbordamiento antes de calcular.
Una app sin red de negocio funciona con servidor local desconectado de Internet; no se
promete reapertura sin servidor ni PWA (fuera de alcance).
Ejecutar suite dominio, suite completa, lint, build, grep SOLID y navegador desktop/móvil.
Converge revisará FR-001..006, SC-001..004, seis escenarios, supuestos y cinco principios.

## Complexity Tracking
No excepciones a la Constitution. Formularios nativos y CSS sin dependencias extra.
## Research and design artifacts
research.md, data-model.md, contracts/interfaz.md y quickstart.md resuelven el diseño.

