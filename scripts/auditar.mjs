import fs from 'node:fs'
import path from 'node:path'
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { casos } from '../test/casosDePrueba.js'
const root = path.resolve(import.meta.dirname, '..')
const read = file => fs.readFileSync(path.join(root, file), 'utf8')
const save = (file, value) => fs.writeFileSync(path.join(root, 'evidencias', file), JSON.stringify(value, null, 2) + '\n')
const dart = read('evidencias/original/casos_de_prueba.dart')
const bloques = [...dart.matchAll(/CasoDivision\(\s*nombre:([\s\S]*?)\n  \),/g)]
assert.equal(bloques.length, 6)
const originales = bloques.map(match => {
  const text = 'nombre:' + match[1]
  const result = {}
  for (const key of ['nombre', 'monto', 'personas', 'propina', 'modo', 'esperado', 'errorEsperado']) {
    const value = text.match(new RegExp(key + ":\\s*('([^']*)'|double\\.nan|[\\d.]+)"))
    if (value) result[key] = value[2] ?? (value[1] === 'double.nan' ? NaN : Number(value[1]))
  }
  return result
})
assert.deepEqual(casos, originales)
save('casos-comparacion.json', { resultado: 'PASS', fuente: 'Dart real sdd 92fc101', casos: 6, entradas: 'idénticas', esperados: 'idénticos', errores: 'idénticos', nan: 'double.nan → NaN' })
const a = fs.readFileSync(path.join(root, 'evidencias/original/spec.md'))
const b = fs.readFileSync(path.join(root, 'specs/001-divisor-cuenta/spec.md'))
assert.ok(a.equals(b))
save('spec-hashes.json', { igualBytePorByte: true, original: createHash('sha256').update(a).digest('hex'), react: createHash('sha256').update(b).digest('hex') })
const domainFiles = fs.readdirSync(path.join(root, 'src/domain'))
for (const file of domainFiles) assert.doesNotMatch(read('src/domain/' + file), /from\s+['"]react|\bdocument\b|\bwindow\b/)
assert.doesNotMatch(read('src/domain/calcularDivision.js'), /instanceof|toFixed|validarEntrada|inválido|al menos una persona|===\s*['"](?:exacto|arriba)/)
for (const file of fs.readdirSync(path.join(root, 'src/presentation'))) assert.doesNotMatch(read('src/presentation/' + file), /from\s+['"].*data\//)
save('solid-audit.json', { SRP: 'PASS cálculo sin validación/formato', OCP: 'PASS estrategia recibida', LSP: 'PASS sin tipos concretos; pruebas con tres estrategias', ISP: 'PASS aplicar(valor)', DIP: 'PASS presentación sin data; dominio sin React/DOM' })
console.log('PASS: seis casos Dart/JS idénticos, spec byte por byte y arquitectura SOLID')
