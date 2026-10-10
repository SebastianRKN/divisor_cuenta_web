# Comparación semántica de decisiones del plan
Unidad: decisión del plan original. Cada fila agrupa una decisión coherente, no una línea
física; una ruta y su responsabilidad forman una decisión. Borrador para revisión personal.
| # | Flutter | React | Estado |
|---|---|---|---|
| 1 | Una pantalla Flutter | Una pantalla React | Adaptado |
| 2 | Estado setState | useState | Adaptado |
| 3 | Cálculo Dart puro | JavaScript puro | Adaptado |
| 4 | Estrategias inyectadas | Estrategias inyectadas | Idéntico |
| 5 | Flutter estable 3.47.1; Dart 3.13.1 | React/Vite y Node | Adaptado |
| 6 | Sin nuevas dependencias de ejecución | React/react-dom de plantilla, sin extras | Idéntico |
| 7 | flutter_test / flutter_lints | Vitest / Testing Library / oxlint | Adaptado |
| 8 | Sin almacenamiento | Sin almacenamiento | Idéntico |
| 9 | Sin red | Sin red de negocio | Idéntico |
| 10 | Entrega Android debug | dist estático para navegador | Adaptado |
| 11 | Una pantalla | Una pantalla | Idéntico |
| 12 | Operaciones constantes | Operaciones constantes | Idéntico |
| 13 | Sin objetivos de latencia inventados | Igual | Idéntico |
| 14 | SRP separa cálculo/validación/formato | Igual | Idéntico |
| 15 | OCP/LSP mediante EstrategiaRedondeo | Igual | Idéntico |
| 16 | ISP una operación | Igual | Idéntico |
| 17 | DIP con interfaces Dart | Contratos estructurales y funciones | Adaptado |
| 18 | Sin Flutter en domain | Sin React/DOM en domain | Adaptado |
| 19 | main compone estrategias/dependencias | main.jsx | Adaptado |
| 20 | Tests pueden crear implementaciones fuera de lib/ | Fuera de src/ | Adaptado |
| 21 | lib/domain/cuenta.dart | src/domain/cuenta.js | Adaptado |
| 22 | lib/domain/resultado.dart | src/domain/resultado.js | Adaptado |
| 23 | redondear(double) | aplicar(number) | Adaptado |
| 24 | CalculadorDivision / CalcularDivision.ejecutar | calcularDivision(cuenta, estrategia) | Adaptado |
| 25 | ValidadorEntrada / ValidarEntrada | validarEntrada | Adaptado |
| 26 | Redondeo exacto por aritmética | Igual | Idéntico |
| 27 | Techo entero | Math.ceil, misma regla | Idéntico |
| 28 | Controller por constructor | Hook con dependencias recibidas | Adaptado |
| 29 | Formateador dos decimales | toFixed(2) | Adaptado |
| 30 | Pantalla widgets/setState | JSX/form/useState | Adaptado |
| 31 | lib/main.dart arranque | src/main.jsx y createRoot | Adaptado |
| 32 | test/casos_de_prueba.dart | test/casosDePrueba.js | Adaptado |
| 33 | division_test.dart seis casos y LSP | division.test.js | Adaptado |
| 34 | pantalla_test.dart seis escenarios y regresión | pantalla.test.jsx tres obligatorios más cuatro regresiones | Adaptado |
| 35 | validacion_test.dart límites y tercera estrategia | validacion.test.js | Adaptado |
| 36 | flutter pub get | npm install / npm ci | Adaptado |
| 37 | flutter test --reporter expanded | npm test -- --reporter=verbose | Adaptado |
| 38 | flutter analyze | npm run lint | Adaptado |
| 39 | flutter build apk --debug | npm run build | Adaptado |
| 40 | Búsquedas SOLID y métricas | Igual | Idéntico |
| 41 | Reutilización temporal test/ en vibe | No pertenece a migración React; comparación Dart/JS | Reemplazado |
| 42 | Runner flutter_test disponible, sin package:test extra | Runner Vitest solicitado | Adaptado |

42 decisiones inventariadas; 29 modificadas/reemplazadas;
13 conservadas. No comparable directamente con unidades de spec.
Nuevas concreciones del plan React: jsdom explícito, contrato de parseo completo, CSS responsive,
validación en navegador y dist. La reconstrucción técnica se justifica por la plataforma.
Plan final añade pool threads y versión instalada real después de la validación.
Líneas físicas añadidas/eliminadas: plan-lineas.txt (git diff --no-index --numstat).

