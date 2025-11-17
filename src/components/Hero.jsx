import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow">El Lobo</h1>
            <p className="mt-4 text-white/80 text-lg sm:text-xl">
              Un mundo de estrategia, engaño y alianzas. Aprende a jugar, explora el glosario y descubre los modos competitivos.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contenido" className="inline-flex items-center justify-center rounded-md bg-fuchsia-500 px-5 py-2.5 text-white font-semibold shadow hover:bg-fuchsia-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300">
                Comenzar
              </a>
              <a href="/competitivo" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-2.5 text-white font-semibold hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                Modo Competitivo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
    </section>
  )
}
