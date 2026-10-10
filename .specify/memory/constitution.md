# Divisor de cuenta web Constitution

## Core Principles

### I. SRP
Una función o módulo tiene una razón de cambio. El cálculo no valida ni formatea.

### II. OCP
Agregar una regla de redondeo no obliga a modificar los módulos de cálculo existentes.

### III. LSP
Cualquier EstrategiaRedondeo puede sustituir a otra sin casts ni comprobaciones de tipo.

### IV. ISP
Interfaces pequeñas. EstrategiaRedondeo expone solamente una operación necesaria: aplicar.

### V. DIP
presentation depende de abstracciones de domain, nunca de implementaciones concretas de data.

## Arquitectura y seguridad
- Capas presentation / domain / data; dependencia presentation -> domain <- data.
- src/domain/ no importa react ni depende del DOM: es JavaScript puro.
- src/main.jsx es el único punto de composición de implementaciones concretas en producción.
- Nunca guardar secretos ni API keys.

## Calidad, pruebas y regla de la materia
- Funcionalidad crítica con pruebas; criterios de aceptación convertidos en pruebas ejecutables.
- Toda función debe poder explicarse: qué hace, por qué existe, qué recibe, qué devuelve y qué errores produce.

## Governance
Esta versión registra las reglas solicitadas, sin principios adicionales.
Las verificaciones se documentan en analyze.md y en la evidencia de la práctica.
La restricción de composición se aplica a src/; las pruebas crean sus estrategias para verificar LSP.

**Version**: 1.0.1 | **Ratified**: 2026-10-01 | **Last Amended**: 2026-10-09

