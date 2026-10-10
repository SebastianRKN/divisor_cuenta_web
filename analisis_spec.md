# Análisis QUÉ / CÓMO / MIXTO — borrador verificable

**Autoría:** clasificación elaborada por el agente. El estudiante debe revisar y realizar
personalmente la clasificación exigida por el profesor antes de entregar. No se presenta
como trabajo manual suyo. Fuente: evidencias/original/spec.md, commit 92fc101 en sdd.

## Especificación
Unidad: proposición de comportamiento, dato de entidad, restricción de alcance o relación
entrada/salida verificable. Se separan conjunciones con obligaciones independientes;
cada fila entrada/salida de aceptación es una relación atómica, salvo la ausencia adicional
de resultado del caso 3. Las repeticiones se cuentan como ocurrencias de enunciados reales
y se marcan mediante su sección; no como requisitos únicos. Se excluyen títulos, fechas,
estado y nombre de rama (metadatos, no requisitos). La tabla es una atomización/paráfrasis
trazable, no una transcripción literal. No se cuentan líneas Markdown.

| ID / fuente | Enunciado | Tipo | ¿Viaja a React? | Justificación |
|---|---|---|---|---|
| S01 / Input | Una pantalla para dividir una cuenta de restaurante entre varias personas. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S02 / US1 | El comensal ingresa el monto. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S03 / US1 | El comensal ingresa las personas. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S04 / US1 | El comensal ingresa la propina. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S05 / US1 | El comensal elige el redondeo. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S06 / US1 | El comensal toca Calcular. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S07 / US1 | Se muestra el pago por persona. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S08 / US1 | El pago se muestra con dos decimales. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S09 / Why this priority | El reparto es la única función de la app. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S10 / Independent Test | Ingresar los datos de cada fila permite comprobar el texto visible. | QUÉ | Intacto | Criterio observable; no fija runner. |
| S11 / Caso 1 | 100, 4 personas, 10%, exacto → 27.50. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S12 / Caso 2 | 90, 3 personas, 0%, exacto → 30.00. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S13 / Caso 3 | 50, 0 personas, 0%, exacto → Debe haber al menos una persona. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S14 / Caso 3 | El caso 3 no muestra resultado. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S15 / Caso 4 | abc, 4 personas, 0%, exacto → Monto inválido. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S16 / Caso 5 | 10, 3 personas, 0%, exacto → 3.33. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S17 / Caso 6 | 10, 3 personas, 0%, arriba → 4.00. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S18 / Edge Cases | Cero personas genera el mensaje anterior. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S19 / Edge Cases | Texto no numérico genera el mensaje anterior. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S20 / Edge Cases | Un error retira cualquier resultado anterior. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S21 / Edge Cases | Cero de monto es válido. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S22 / Edge Cases | Cero de propina es válido. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S23 / FR-001 | La app tiene una pantalla. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S24 / FR-001 | La pantalla contiene monto. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S25 / FR-001 | La pantalla contiene personas. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S26 / FR-001 | La pantalla contiene propina. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S27 / FR-001 | La pantalla contiene selector. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S28 / FR-001 | La pantalla contiene botón Calcular. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S29 / FR-001 | La pantalla contiene resultado/error. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S30 / FR-002 | Repartir monto más propina entre personas. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S31 / FR-003 | Exacto expresa centavos. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S32 / FR-003 | Arriba devuelve el entero superior. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S33 / FR-003 | Ambos modos muestran dos decimales. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S34 / FR-004 | No calcular para entradas inválidas. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S35 / FR-004 | No mostrar pago para entradas inválidas. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S36 / FR-005 | Funcionar offline sin red. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S37 / FR-005 | Funcionar sin base de datos. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S38 / FR-006 | Sin login. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S39 / FR-006 | Sin historial. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S40 / FR-006 | Sin funciones ajenas al reparto. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S41 / Key Entities | Cuenta contiene monto. | QUÉ | Intacto | Dato del negocio sin clase o lenguaje obligatorio. |
| S42 / Key Entities | Cuenta contiene número de personas. | QUÉ | Intacto | Dato del negocio sin clase o lenguaje obligatorio. |
| S43 / Key Entities | Cuenta contiene porcentaje de propina. | QUÉ | Intacto | Dato del negocio sin clase o lenguaje obligatorio. |
| S44 / Key Entities | Resultado contiene cantidad a pagar por persona. | QUÉ | Intacto | Dato del negocio sin clase o lenguaje obligatorio. |
| S45 / SC-001 | Cumplir los seis escenarios de aceptación. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S46 / SC-002 | Mostrar dos decimales en todos los resultados válidos. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S47 / SC-003 | Ningún error de entrada conserva un pago visible. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S48 / SC-004 | Completar el reparto sin conexión. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S49 / SC-004 | Completar el reparto sin almacenamiento de datos. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S50 / Assumptions | Aceptar coma decimal además de punto. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S51 / Assumptions | Rechazar negativos. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S52 / Assumptions | Rechazar NaN. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S53 / Assumptions | Rechazar infinito. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S54 / Assumptions | Propina inválida muestra Propina inválida. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S55 / Assumptions | Personas requiere entero. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S56 / Assumptions | Personas requiere valor positivo. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S57 / Assumptions | Valor inicial: 2 personas. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S58 / Assumptions | Valor inicial: 0% de propina. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S59 / Assumptions | Exacto redondea a centavos. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S60 / Assumptions | Exacto no distribuye diferencias de centavos entre personas. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |
| S61 / Assumptions | No hay requisito de contabilidad exacta por individuo. | QUÉ | Intacto | Comportamiento o alcance observable, sin referencia a Flutter, Dart o widgets. |

Total: **61 enunciados**. QUÉ: **61**; CÓMO: **0**; MIXTO: **0**.
CÓMO = 0/61 = **0%**. Viaja intacto = 61/61 = **100%**.
Con adaptación = **0%**. No viaja = **0%**. Modificados: **0**.
La restricción sin base de datos describe el alcance del producto, no selecciona una
implementación; las decisiones de supuestos fijan resultados observables, no APIs.
El umbral CÓMO >30% es el criterio pedagógico de este deber, no una regla universal.
El diff vacío prueba identidad de archivos, no demuestra por sí solo esta clasificación:
la tabla y las pruebas aportan la interpretación y la verificación funcional.
Evidencia: spec-inicial.diff, spec-inicial.txt, spec-final.diff, spec-final.txt en evidencias/.

## Constitution (conteo separado)
Unidad: regla o cláusula normativa, conservando unidas las obligaciones que forman un
principio. No se mezclan estas 16 reglas con las 61 unidades de la spec.
Títulos y línea de versión/fechas se excluyen. Cada regla tiene su cita original completa.

| Regla | Original | React | Clasificación | Justificación |
|---|---|---|---|---|
| SRP | Una clase tiene una razón de cambio. | Una función o módulo tiene una razón de cambio. | Adaptada en redacción | JavaScript usa funciones/módulos. |
| SRP | El cálculo no valida ni formatea. | Igual | Idéntica | Separación funcional independiente del framework. |
| OCP | Agregar una regla de redondeo no obliga a modificar las clases de cálculo existentes. | clases → módulos | Adaptada en redacción | Mismo punto de extensión con funciones. |
| LSP | Cualquier EstrategiaRedondeo puede sustituir a otra sin casts ni comprobaciones de tipo. | Igual | Idéntica | Contrato estructural sustituible. |
| ISP | Interfaces pequeñas. | Igual | Idéntica | Tamaño del contrato independiente del lenguaje. |
| ISP | EstrategiaRedondeo expone solamente una operación necesaria: redondear. | redondear → aplicar | Adaptada en redacción | Nombre solicitado por Deber2; sigue una operación. |
| DIP | presentation depende de abstracciones de domain, nunca de implementaciones concretas de data. | Igual | Idéntica | Inyección por props/funciones. |
| Arquitectura | Capas presentation / domain / data; dependencia presentation -> domain <- data. | Igual | Idéntica | Misma dirección. |
| Arquitectura | lib/domain/ no importa package:flutter. | src/domain/ no importa react ni depende del DOM: es JavaScript puro. | Adaptada en redacción | Cambia ruta/framework; explicita equivalente DOM pedido. |
| Arquitectura | main.dart es el único punto de composición de implementaciones concretas en producción. | src/main.jsx sustituye main.dart | Adaptada en redacción | Entrada React. |
| Seguridad | Nunca guardar secretos ni API keys. | Igual | Idéntica | Aplicable a ambos repositorios. |
| Calidad | Funcionalidad crítica con pruebas; criterios de aceptación convertidos en pruebas ejecutables. | Igual | Idéntica | Se conserva obligación y cambian herramientas. |
| Materia | Toda función debe poder explicarse: qué hace, por qué existe, qué recibe, qué devuelve y qué errores produce. | Igual | Idéntica | Debe revisar el estudiante. |
| Governance | Esta versión registra las reglas solicitadas, sin principios adicionales. | Igual | Idéntica | No principios nuevos. |
| Governance | Las verificaciones se documentan en analyze.md y en la evidencia de la práctica. | Igual | Idéntica | Informe en evidencias/analyze.md. |
| Governance | La restricción de composición se aplica a lib/; las pruebas crean sus estrategias para verificar LSP. | lib/ → src/ | Adaptada en redacción | Se conserva excepción de tests. |

Idénticas: **10**. Adaptadas: **6**. Reemplazadas: **0**.
Enunciados modificados: **6**, distintos del número de líneas que muestre Git.
Versión 1.0.0 → 1.0.1, adaptación de redacción. Fecha de ratificación preservada.
Evidencias: original/constitution.md, ../.specify/memory/constitution.md y constitution.diff.

