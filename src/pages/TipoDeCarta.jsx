import Section from '../components/Section'

const cartas = [
  {
    nombre: 'Líder de Aldea',
    desc: 'Puede convocar una votación extra por partida. Ideal para dirigir discusiones.',
    estrategia: 'Úsalo para desatascar empates o presionar a sospechosos clave.'
  },
  {
    nombre: 'Lobo Sigiloso',
    desc: 'Una vez por noche puede evitar ser detectado por habilidades de rastreo.',
    estrategia: 'Coordina con otros lobos para atacar sin levantar sospechas.'
  },
  {
    nombre: 'Vidente',
    desc: 'Cada noche puede revelar la alineación de un jugador.',
    estrategia: 'Comparte información con cuidado para no exponerte.'
  },
]

export default function TipoDeCarta() {
  return (
    <main className="bg-black text-white">
      <div className="pt-24" />
      <Section title="Tipos de Carta">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartas.map((carta) => (
            <article key={carta.nombre} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-white">{carta.nombre}</h3>
              <p className="text-white/80 mt-2">{carta.desc}</p>
              <p className="text-fuchsia-300 mt-3 text-sm"><span className="font-semibold">Estrategia:</span> {carta.estrategia}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  )
}
