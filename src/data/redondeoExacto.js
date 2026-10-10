/** @type {import('../domain/estrategiaRedondeo.js').EstrategiaRedondeo} */
export const redondeoExacto = Object.freeze({ aplicar: valor => Math.round(valor * 100) / 100 })
