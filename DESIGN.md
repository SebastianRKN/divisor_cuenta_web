---
name: Divisor de cuenta
description: Formulario accesible que conserva el teal Material de la aplicación original.
colors:
  primary: "#00695c"
  primary-hover: "#004d43"
  primary-active: "#003f37"
  background: "#eff5f3"
  surface: "#ffffff"
  foreground: "#173a36"
  secondary-text: "#48655f"
  border: "#90aaa4"
  panel-border: "#c9d9d4"
  separator: "#d5e1dc"
  focus: "#087f70"
  placeholder: "#617770"
  selection: "#b5e6da"
  error: "#9b252b"
  error-background: "#fff2f1"
typography:
  headline:
    fontFamily: "Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(28px, 5vw, 34px)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Segoe UI, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
  label:
    fontSize: "14px"
    fontWeight: 600
  result:
    fontSize: "36px"
    fontWeight: 650
rounded:
  control: "8px"
  brand: "10px"
  panel: "16px"
spacing:
  small: "8px"
  medium: "12px"
  field-gap: "20px"
  group: "24px"
  section: "28px"
  panel: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    width: "100%"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
  panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
    padding: "32px"
---

# Design System: Divisor de cuenta

## Overview

Migración de un formulario Flutter Material a una pantalla web. Conserva el teal y la secuencia de monto, personas, propina y redondeo. Esta documentación describe la implementación observada; no establece una identidad nueva.

## Colors

El teal identifica la acción principal y el pago por persona. La superficie blanca se separa del fondo claro mediante un borde fino. El texto secundario mantiene un matiz verde. El error utiliza texto rojo sobre fondo claro rojizo.

## Typography

Segoe UI con alternativas del sistema. El título tiene mayor peso y escala; etiquetas y textos de ayuda son más pequeños. El pago y los campos numéricos utilizan cifras tabulares. El título equilibra sus líneas.

## Layout

Contenedor centrado de ancho máximo 600px, con padding de 32px 24px 24px. El panel tiene padding de 32px. Personas y propina comparten dos columnas iguales, separadas por 20px. A 420px o menos, el contenedor usa 20px 16px, el panel 24px 20px y las columnas se separan 14px. El documento establece ancho mínimo de 280px. El resultado admite salto de línea y cifras largas.

## Elevation & Depth

Composición plana, sin sombras. Bordes y superficies distinguen el formulario y la respuesta.

## Shapes

Controles y alerta con esquinas suaves; panel con radio mayor. La marca es un SVG geométrico de una línea y dos círculos blancos sobre teal, dentro de un cuadrado redondeado de 36px.

## Components

Los campos y el selector tienen altura mínima de 48px; el botón, 52px. El foco visible es un contorno de 3px separado 3px. El botón oscurece su fondo al pasar el cursor y al pulsarlo. No se implementan animaciones ni estados de carga.

La respuesta se separa del formulario mediante una línea superior. Sus estados son vacío, pago y error. El error sustituye el pago anterior y se anuncia mediante una alerta; la región completa anuncia actualizaciones. Todas las entradas tienen etiqueta asociada y el formulario admite envío por teclado.

## Do's and Don'ts

- Do conservar el teal heredado y las etiquetas explícitas.
- Do mantener el resultado legible y el foco de teclado visible.
- Don't mostrar el pago anterior junto a un error de validación.
- Don't ampliar esta migración con login, historial o nuevas pantallas.
