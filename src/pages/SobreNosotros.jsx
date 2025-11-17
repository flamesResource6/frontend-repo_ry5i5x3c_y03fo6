import Section from '../components/Section'

export default function SobreNosotros() {
  return (
    <main className="bg-black text-white">
      <div className="pt-24" />
      <Section title="Sobre Nosotros">
        <p>
          Somos un pequeño equipo de diseñadores y desarrolladores apasionados por los juegos sociales. Nuestra visión es
          crear experiencias donde la conversación, la intuición y el ingenio importen más que los reflejos. El Lobo nace de
          años de partidas caseras y pruebas con comunidades que nos ayudaron a refinar cada carta, regla y momento dramático.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500" aria-hidden="true" />
              <h3 className="mt-3 font-semibold">Miembro {i}</h3>
              <p className="text-white/80 text-sm">Diseño, balance y comunidad.</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
