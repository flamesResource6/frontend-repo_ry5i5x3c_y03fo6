export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} El Lobo. Todos los derechos reservados.</p>
        <p>
          Hecho con ♥ por el equipo de El Lobo. Activos 3D por Spline.
        </p>
      </div>
    </footer>
  )
}
