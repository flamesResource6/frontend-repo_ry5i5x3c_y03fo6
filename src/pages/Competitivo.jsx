import Section from '../components/Section'

export default function Competitivo() {
  return (
    <main className="bg-black text-white">
      <div className="pt-24" />
      <Section title="Modo Competitivo">
        <div className="grid lg:grid-cols-3 gap-6">
          <article className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">Reglas Básicas</h3>
            <ul className="mt-2 list-disc pl-5 text-white/80 space-y-1">
              <li>Partidas al mejor de 3 rondas.</li>
              <li>Límite de tiempo por turno: 60 segundos.</li>
              <li>Penalizaciones por conducta antideportiva.</li>
            </ul>
          </article>
          <article className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">Rankings</h3>
            <p className="mt-2 text-white/80">Sistema ELO con divisiones: Bronce, Plata, Oro, Platino y Élite.</p>
          </article>
          <article className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">Torneos</h3>
            <p className="mt-2 text-white/80">Eventos mensuales con llaves de eliminación simple y premios cosméticos.</p>
          </article>
        </div>
      </Section>
    </main>
  )
}
