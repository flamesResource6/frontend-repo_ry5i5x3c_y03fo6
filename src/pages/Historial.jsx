import Section from '../components/Section'

const hitos = [
  { fecha: '2023 Q4', detalle: 'Concepto inicial y prototipos de roles.' },
  { fecha: '2024 Q1', detalle: 'Playtests cerrados con la comunidad.' },
  { fecha: '2024 Q2', detalle: 'Lanzamiento de la alfa con 20 cartas.' },
  { fecha: '2024 Q3', detalle: 'Sistema de rankings y emparejamiento.' },
  { fecha: '2025 Q1', detalle: 'Temporada 1 competitiva y torneos oficiales.' },
]

export default function Historial() {
  return (
    <main className="bg-black text-white">
      <div className="pt-24" />
      <Section title="Historial y Actualizaciones">
        <ol className="relative border-l border-white/10 ml-4 pl-6 space-y-6">
          {hitos.map((h) => (
            <li key={h.fecha} className="hover:bg-white/5 rounded-lg p-4 -ml-4 transition-colors">
              <div className="text-fuchsia-300 font-semibold">{h.fecha}</div>
              <div className="text-white/80">{h.detalle}</div>
            </li>
          ))}
        </ol>
      </Section>
    </main>
  )
}
