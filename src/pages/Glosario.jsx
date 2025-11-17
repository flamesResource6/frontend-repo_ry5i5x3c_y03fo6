import Section from '../components/Section'

const terms = [
  { term: 'Aldea', def: 'Conjunto de jugadores cuyo objetivo es descubrir y eliminar a los lobos.' },
  { term: 'Lobo', def: 'Bando oculto que intenta eliminar a la aldea sin ser descubierto.' },
  { term: 'Voto', def: 'Mecánica para decidir expulsiones durante la fase de día.' },
  { term: 'Habilidad', def: 'Acción especial asociada a ciertos roles o cartas.' },
  { term: 'Noche', def: 'Fase donde los roles secretos actúan de forma oculta.' },
]

export default function Glosario() {
  return (
    <main className="bg-black text-white">
      <div className="pt-24" />
      <Section title="Glosario de Términos">
        <dl className="grid sm:grid-cols-2 gap-6">
          {terms.map((t) => (
            <div key={t.term} className="rounded-lg border border-white/10 p-4 bg-white/5">
              <dt className="font-semibold text-white">{t.term}</dt>
              <dd className="text-white/80 mt-1">{t.def}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </main>
  )
}
