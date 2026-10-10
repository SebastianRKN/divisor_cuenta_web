# divisor_cuenta_web
Migración real de [app_divisor_de_cuentas](https://github.com/SebastianRKN/app_divisor_de_cuentas/tree/sdd)
desde sdd (92fc101). React + Vite + JavaScript. Sin backend ni almacenamiento.

## Ejecutar
Node >=22.12. Desde este directorio:
```powershell
npm ci
npm run dev
npm test
npm run lint
npm run build
npm run preview
. ./activar-feature.ps1
```
Build local: dist/. Servirlo con preview permite usarlo sin conexión a Internet. No es PWA:
no se promete recargar desde un sitio remoto sin red ni caché/servidor disponible.

## Verificación
25 pruebas: 6 AC + 1 LSP + 7 de interfaz + 11 límites/OCP. Flutter: 16 pruebas.
Vitest usa threads por un timeout observado de forks en este Windows; misma suite y expectativas.
Resultados y errores se conservan literalmente. Domain no importa React ni DOM.

## Documentos
- [Informe final](INFORME_FINAL.md): requisitos, resultados, pendientes y GitHub.
- [Análisis](analisis_spec.md), [respuestas](respuestas.md), [bitácora](bitacora.md).
- [Spec intacta](specs/001-divisor-cuenta/spec.md), plan, tareas y contratos en el mismo feature.
- [Evidencias](evidencias/): diffs, logs, capturas, métricas y análisis/convergencia.
- [Guía de funciones](GUIA_FUNCIONES.md): responsabilidades para la defensa oral.

## Autoría académica
Código, casos JS, respuestas y clasificación generados por el agente. La solicitud posterior
«haz tu todo eso» autorizó escribir los casos. El profesor exige autoría manual de ese archivo
y clasificación personal: el alumno debe resolverlo y revisar antes de entregar.

