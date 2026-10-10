import { useDivisor } from './useDivisor.js'
import './divisor.css'

/** Dibuja el formulario; recibe dependencias abstractas, delega acciones y devuelve JSX. */
export function PantallaDivisor({ dependencias }) {
  const divisor = useDivisor(dependencias)
  return <main className="divisor">
    <header className="cabecera"><span className="marca" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="6" r="1.5" fill="currentColor" /><circle cx="12" cy="18" r="1.5" fill="currentColor" /></svg></span><span>Divisor de cuenta</span></header>
    <section className="panel" aria-labelledby="titulo">
      <div className="introduccion"><h1 id="titulo">Divide la cuenta</h1><p>Incluye la propina y elige cómo redondear.</p></div>
      <form onSubmit={divisor.enviar} noValidate>
        <label htmlFor="monto">Monto total</label>
        <input id="monto" name="monto" type="text" inputMode="decimal" placeholder="0.00" autoComplete="off"
          value={divisor.campos.monto} onChange={e => divisor.cambiarCampo('monto', e.target.value)} />
        <div className="fila">
          <div><label htmlFor="personas">Personas</label>
            <input id="personas" name="personas" type="text" inputMode="numeric" autoComplete="off"
              value={divisor.campos.personas} onChange={e => divisor.cambiarCampo('personas', e.target.value)} /></div>
          <div><label htmlFor="propina">Propina (%)</label>
            <input id="propina" name="propina" type="text" inputMode="decimal" autoComplete="off"
              value={divisor.campos.propina} onChange={e => divisor.cambiarCampo('propina', e.target.value)} /></div>
        </div>
        <label htmlFor="modo">Redondeo</label>
        <select id="modo" value={divisor.modo} onChange={e => divisor.setModo(e.target.value)}>
          {divisor.opciones.map(opcion => <option key={opcion.id} value={opcion.id}>{opcion.etiqueta}</option>)}
        </select>
        <button type="submit">Calcular</button>
      </form>
      <div className="respuesta" aria-live="polite" aria-atomic="true">
        {divisor.error ? <p role="alert" className="error">{divisor.error}</p>
          : divisor.pago !== null ? <div className="resultado"><span>Pago por persona</span><output data-testid="pago">{divisor.pago}</output></div>
          : <p className="vacio">El pago por persona aparecerá aquí.</p>}
      </div>
    </section>
    <footer>Una cuenta, un reparto sencillo.</footer>
  </main>
}
