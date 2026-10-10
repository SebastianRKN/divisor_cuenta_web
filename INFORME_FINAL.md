# Deber 2 — informe de entrega

**Implementación técnica verificada. Entrega académica pendiente de revisión personal.**
Fecha: 9 de octubre de 2026, America/Guayaquil. Los logs conservan además fechas UTC.

## Estado de requisitos
| Requisito | Estado | Evidencia / límite |
|---|---|---|
| Leer Deber2.md y solicitud | Completado | Archivo original en Downloads; solicitud adjunta leída |
| Original real, rama sdd e historial | Completado | Origen 92fc101, remoto original verificado |
| Flutter pub get y pruebas | Completado | 16 pruebas; flutter-test.log |
| Node >=22.12 | Completado | v24.21.0 observado |
| Vite + React + JavaScript independiente | Completado | package.json, lockfile, commits |
| npm run dev | Completado | servidor 127.0.0.1:5173; navegador real |
| Spec copiada sin regenerar | Completado | diff inicial/final vacíos y SHA-256 iguales |
| SPECIFY_FEATURE_DIRECTORY | Completado | activar-feature.ps1; setup-plan.json |
| Constitution y cinco SOLID | Completado | .specify/memory/constitution.md, solid-audit.json |
| Plan/tareas/analyze/implement/converge | Completado | evidencias/flujo-speckit.md y reportes |
| Dominio/datos/presentación, useState | Completado | src/; sin backend/BD/estado externo |
| Seis casos, LSP y tres UI obligatorios | Completado | 7 dominio; 7 UI incluyendo 3 obligatorios; 11 límites/OCP |
| npm test | Completado | 25/25, 3 archivos; exit 0 |
| npm run build y lint | Completado | exit 0; dist generado; exit-codes.json |
| Responsive y offline | Completado | Edge desktop/móvil; cálculo sin Internet en página cargada |
| Comparaciones, respuestas y análisis | Completado como borrador | Revisión personal pendiente |
| Bitácora en Flutter sdd | Completado | Único archivo añadido al original; copia en React |
| Cronómetro según envío de prompt | No registrado | Prompt agrupó fases; marcadores operativos separados |
| Escritura manual de casos JS | Pendiente académico | Usuario pidió al agente hacerlo; no se atribuye autoría manual |
| Clasificación personal y defensa de funciones | Pendiente académico | analisis_spec.md y GUIA_FUNCIONES.md son apoyo |
| Publicación GitHub | Ver estado en evidencias/publicacion.txt | No sobrescribir repositorio Flutter |
| Secretos | Verificado por revisión y escaneo de archivos preparados | Credencial GCM usada en memoria, nunca versionada |

## Proyectos
Flutter original: `C:\Users\sebas\OneDrive\Desktop\app\participacion 7\app_divisor_cuentas`, rama `sdd`.
React: `C:\Users\sebas\Documents\Codex\2026-10-09\files-mentioned-by-the-user-deber2\outputs\divisor_cuenta_web`, rama `main`.
Los artefactos originales están en `.specify/`; se conserva esa ubicación histórica.
React utiliza `specs/001-divisor-cuenta/`. No se inventaron archivos del laboratorio.

## Estructura final
```text
src/
  domain/ cuenta.js resultado.js estrategiaRedondeo.js calcularDivision.js validarEntrada.js
  data/ redondeoExacto.js redondeoHaciaArriba.js
  presentation/ useDivisor.js formateadorMoneda.js PantallaDivisor.jsx divisor.css
  main.jsx
test/ casosDePrueba.js division.test.js pantalla.test.jsx validacion.test.js setup.js
specs/001-divisor-cuenta/ spec.md plan.md tasks.md research.md data-model.md quickstart.md contracts/
.specify/memory/constitution.md
scripts/auditar.mjs
evidencias/
analisis_spec.md respuestas.md bitacora.md GUIA_FUNCIONES.md README.md INFORME_FINAL.md
```

## Resultados y comparación
- Spec: 61 enunciados propuestos, 61 QUÉ, 0 CÓMO, 0 MIXTO; 100% intacto, 0% adaptado/no reutilizable.
- Constitution: 16 reglas inventariadas, 10 idénticas, 6 adaptadas, 0 reemplazadas.
- Plan: 42 decisiones inventariadas, 29 modificadas/reemplazadas, 13 conservadas.
- Flutter: 16 pruebas; React: 25. Esto no compara calidad por cantidad: se añadieron límites explícitos.
- Flutter widgets/setState/APK → React JSX/useState/dist; reglas de negocio y seis casos idénticos.
- Build final: 24 módulos transformados; resultados exactos en build-final.log.
- No se cambió el código, pruebas ni especificación Flutter. Solo se añadió bitacora.md.

## Archivos y commits
Lista completa: evidencias/archivos-finales.txt. Historial real: evidencias/historial.txt.
Commits por etapas: base Vite; Spec Kit+copia; Constitution; plan/tareas;
implementación aprobada; documentación/evidencias. El historial permite revisar cada etapa.
Los ajustes del plan posteriores fueron versiones instaladas reales y pool de pruebas.

## Límites pendientes
El estudiante debe revisar las seis respuestas y clasificación, explicar las funciones y
resolver el requisito docente de escribir manualmente casosDePrueba.js. No se afirma que
estas intervenciones personales hayan sido realizadas. Tiempos históricos Flutter y tiempo
académico React: no registrado. Marcadores operativos en bitacora.md, sin comparación causal.
No se entrega una app móvil React ni PWA: no son requisitos. Las capturas móviles son de
viewport emulado en Edge, no de un dispositivo físico.
