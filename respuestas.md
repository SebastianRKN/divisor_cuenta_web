# Respuestas — borrador para revisión del estudiante
Estas respuestas y su clasificación fueron elaboradas por el agente sobre el repositorio
real. Requieren reflexión, revisión y explicación personal antes de entregar.

## 1. Porcentaje reutilizado
En el inventario de 61 enunciados de analisis_spec.md, 61 (100%) viajan
intactos; 0% con adaptación y 0% no reutilizables. No hay CÓMO ni MIXTO según la clasificación
propuesta. Los dos diffs de spec están vacíos, salida 0, y las pruebas validan los seis AC.
Los datos de tiempo académico son «no registrado»; bitacora.md diferencia marcadores
operativos (3.36 min build y 3.90 min confirmación) del criterio de envío del prompt.

## 2. Constitution
10 reglas idénticas, 6 adaptadas, ninguna reemplazada. La tabla separada
de analisis_spec.md cita todas las originales. Adaptaciones: SRP clase→módulo; OCP
clases→módulos; ISP redondear→aplicar; domain Flutter→React/DOM; main.dart→main.jsx;
alcance lib/→src/. Siguen idénticos LSP, DIP, separación del cálculo, seguridad y pruebas.
Ver evidencias/constitution.diff y ambas constituciones. No se incorporó estado externo.

## 3. Modificaciones de la spec
Ninguna: 0 enunciados y 0 líneas. Por eso no existe commit de adaptación ni antes/después
diferente. La spec ya fija entradas, salidas, reglas de cálculo y alcance sin widgets,
lenguaje ni runner. El metadato Feature Branch: sdd queda como procedencia, no es una
obligación de arquitectura. El feature React se selecciona con activar-feature.ps1.

## 4. Casos de aceptación
No cambió ningún número, escenario ni mensaje. 100/4/10→27.50; 90/3/0→30.00;
50/0→Debe haber al menos una persona; NaN/4→Monto inválido; 10/3 exacto→3.33;
10/3 arriba→4.00. El abc de spec se convierte en NaN al parsear, igual que en Dart.
Comparación ejecutable en evidencias/casos-comparacion.json. Cambia sintaxis Dart→JS,
flutter_test→Vitest y widgets→Testing Library; no el significado.
La prueba de UI inválida usa un spy y verifica que no se ejecuta el calculador.
El archivo JS fue escrito por el agente a petición expresa posterior; NO a mano por el alumno.

## 5. Qué partes del plan dejaron de servir
1. setState/StatefulWidget/TextEditingController se sustituyen por useState y campos controlados.
2. Interfaces abstractas Dart y ejecutar/redondear se expresan como funciones y contrato JSDoc aplicar.
3. flutter_test y finders de widgets se cambian por Vitest/jsdom y consultas accesibles de Testing Library.
4. flutter build apk --debug deja de ser un entregable web: Vite genera dist/index.html y assets.
5. lib/main.dart/runApp se reconstruye en src/main.jsx/createRoot, con la misma responsabilidad.
El inventario de 42 decisiones registra 29 cambios, no 29 líneas.
Ver evidencias/comparacion-plan.md y plan.diff; las líneas reales están en plan-lineas.txt.

## 6. Más y menos reutilizable
La spec fue el archivo más reutilizable: copia idéntica, ningún diff ni reformulación de AC.
Los datos de prueba también conservan significado aunque su sintaxis cambia.
El código de presentación y su runner son los menos reutilizables físicamente: widgets,
controladores y ciclo de vida Flutter no ejecutan en React; se reconstruyeron en JSX/hooks.
Entre los artefactos SDD, el plan y las tareas requieren la mayor reconstrucción técnica:
29/42 decisiones del plan cambian en el inventario. No se afirma que todos
sus principios se pierdan: conserva inyección, capas, cálculo y ausencia de almacenamiento.
Evidencias: 16 tests Flutter, 25 React, build Vite y commits por etapa (historial.txt).

