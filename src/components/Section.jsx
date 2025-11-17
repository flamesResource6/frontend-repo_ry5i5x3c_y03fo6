export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
        <div className="mt-6 space-y-4 leading-relaxed text-white/90">
          {children}
        </div>
      </div>
    </section>
  )
}
