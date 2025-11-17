import Hero from '../components/Hero'
import Section from '../components/Section'

export default function Inicio() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <div id="contenido">
        <Section title="Bienvenido a El Lobo">
          <p>
            El Lobo es un juego de cartas sociales donde la deducción, la estrategia y la comunicación son clave. Cada partida
            te coloca en un rol único con habilidades especiales. ¿Podrás liderar a tu aldea hacia la victoria o sembrar el caos
            desde las sombras?
          </p>
          <ul>
            <li>Partidas rápidas de 10–20 minutos</li>
            <li>Roles con habilidades únicas</li>
            <li>Modo casual y competitivo</li>
            <li>Actualizaciones y eventos periódicos</li>
          </ul>
        </Section>
      </div>
    </main>
  )
}
