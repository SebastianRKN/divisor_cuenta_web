# Research
Decisión: React useState, confirmado en https://react.dev/reference/react/useState .
Razón: una sola pantalla; alternativas Redux/servidor fuera del alcance solicitado.
Decisión: Vite; Node v24.21.0 satisface el umbral 22.12 del deber y de
https://vite.dev/guide/ . Versiones exactas quedan en el lockfile.
Decisión: entorno jsdom explícito; instalar jsdom no basta. Referencia:
https://vitest.dev/guide/environment.html . Testing Library opera sobre etiquetas accesibles.
Decisión: contratos estructurales JSDoc y funciones inyectadas; alternativa clases abstractas
Dart no existe nativamente en JavaScript. No agregar controles de tipo al cálculo.
Decisión: conservar sdd real; no reutilizar modificaciones de sdd-interactivo.
Sin incógnitas bloqueantes ni requisitos de backend. Fuentes consultadas el 2026-10-09.

